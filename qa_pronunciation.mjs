import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
function playerHarness({audio=true,speech=false}={}){
 const timers=new Map(),players=[],utterances=[],messages=[],modals=[],events={};let next=0;
 class Audio{
  constructor(){players.push(this);}
  play(){this.playCalls=(this.playCalls||0)+1;return Promise.resolve();}
  pause(){this.paused=true;}
  removeAttribute(){}load(){}
 }
 const engine={paused:true,getVoices:()=>[{lang:'en-US',localService:true}],addEventListener(){},resume(){this.paused=false;},cancel(){},speak(u){utterances.push(u);}};
 const window={addEventListener:(type,fn)=>events[type]=fn};
 if(audio)window.Audio=Audio;
 if(speech){window.speechSynthesis=engine;window.SpeechSynthesisUtterance=class{constructor(text){this.text=text;}};}
 const ctx=vm.createContext({window,navigator:{onLine:true},document:{addEventListener(){}},setTimeout:(fn,ms)=>{const id=++next;timers.set(id,{fn,ms});return id;},clearTimeout:id=>timers.delete(id),toast:t=>messages.push(t),openModal:(...a)=>modals.push(a),closeModal(){},esc:String,btn:()=>'',PRONUNCIATION_AUDIO:{ability:'audio/ability.mp3',able:'audio/able.mp3'}});
 vm.runInContext(fs.readFileSync(new URL('./pronunciation-player.js',import.meta.url),'utf8'),ctx);
 return {ctx,players,utterances,timers,messages,modals,events,play:t=>vm.runInContext(`pronunciationPlayer.play(${JSON.stringify(t)})`,ctx)};
}
// Media playback starts during the button handler without waiting for voices.
{
 const h=playerHarness();h.play('ability');
 assert.equal(h.players.length,1);assert.equal(h.players[0].playCalls,1);
 assert.equal(h.players[0].src,'audio/ability.mp3');assert.equal(h.players[0].muted,false);
 h.players[0].onplaying();assert.equal(h.timers.size,0);assert.match(h.messages.at(-1),/正在朗读/);
 h.play('able');assert.equal(h.players[0].paused,true);assert.equal(h.players[1].playCalls,1);
 h.events.hashchange();assert.equal(h.players[1].paused,true);
}
// A silent media failure ends in a visible recovery player, not a dead tap.
{
 const h=playerHarness();h.play('ability');h.players[0].onerror();
 assert.equal(h.modals.length,1);assert.match(h.modals[0][2],/<audio controls/);
}
// A native-only browser resumes paused synthesis and retains the utterance.
{
 const h=playerHarness({audio:false,speech:true});h.play('ability');
 assert.equal(h.utterances.length,1);assert.equal(h.utterances[0].lang,'en-US');
 h.utterances[0].onstart();assert.equal(h.timers.size,0);
}
// Superseded errors cannot interrupt a newer word.
{
 const h=playerHarness();h.play('ability');const oldFailure=h.players[0].onerror;
 h.play('able');oldFailure();assert.equal(h.modals.length,0);
}
// Recover when a browser fires neither playing nor error.
{
 const h=playerHarness();h.play('ability');[...h.timers.values()][0].fn();assert.equal(h.modals.length,1);
}
// Wire the app's actual click target to the new player for words and examples.
{
 const h=playerHarness();h.ctx.wById=()=>({word:'ability',example:'A test sentence.'});
 h.ctx.PRONUNCIATION_AUDIO['A test sentence.']='audio/example.mp3';
 const speak=fs.readFileSync(new URL('./app.js',import.meta.url),'utf8').match(/^function speak\(.*$/m)[0];
 vm.runInContext(speak,h.ctx);vm.runInContext("speak('word');speak('word',true)",h.ctx);
 assert.equal(h.players[0].src,'audio/ability.mp3');assert.equal(h.players[1].src,'audio/example.mp3');
}
// Every visible speaker button has an actual, nonempty MP3.
{
 const ctx=vm.createContext({});for(const f of ['data.js','materials.js','pronunciations.js'])vm.runInContext(fs.readFileSync(new URL('./'+f,import.meta.url),'utf8'),ctx);
 const inventory=vm.runInContext('WORDS.flatMap(w=>[w.word,w.example]).filter(Boolean).map(text=>({text,path:PRONUNCIATION_AUDIO[text.trim()]}))',ctx);
 for(const row of inventory){assert.ok(row.path,row.text);assert.ok(fs.statSync(new URL('./'+row.path,import.meta.url)).size>500,row.text);}
 console.log('All '+inventory.length+' word/example buttons have audio.');
}
// Exercise Safari's range path with real Request/Response and a cache.
{
 const saved=new Map();let network=0,offline=false;
 const cache={match:async url=>saved.get(url)?.clone(),put:async(url,r)=>saved.set(url,r.clone())};
 const ctx=vm.createContext({Request,Response,Headers,URL,location:{origin:'https://example.test'},self:{addEventListener(){},skipWaiting(){}},caches:{open:async()=>cache},fetch:async request=>{assert.equal(request.headers.get('range'),null);network++;if(offline)throw Error('offline');return new Response('abcdefghij',{headers:{'content-type':'audio/mpeg'}});}});
 vm.runInContext(fs.readFileSync(new URL('./sw.js',import.meta.url),'utf8'),ctx);
 ctx.request=new Request('https://example.test/app/audio/a.mp3',{headers:{Range:'bytes=0-3'}});
 let r=await vm.runInContext('pronunciationResponse(request)',ctx);assert.equal(r.status,206);assert.equal(await r.text(),'abcd');assert.equal(r.headers.get('content-range'),'bytes 0-3/10');
 offline=true;ctx.request=new Request('https://example.test/app/audio/a.mp3',{headers:{Range:'bytes=-3'}});
 r=await vm.runInContext('pronunciationResponse(request)',ctx);assert.equal(await r.text(),'hij');assert.equal(network,1);
 ctx.request=new Request('https://example.test/app/audio/a.mp3',{headers:{Range:'bytes=99-'}});
 r=await vm.runInContext('pronunciationResponse(request)',ctx);assert.equal(r.status,416);
}
console.log('Passed: tap playback, feedback, native fallback, cancellation, timeout, audio coverage, Safari ranges, offline replay.');
