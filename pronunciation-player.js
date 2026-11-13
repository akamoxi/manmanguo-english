'use strict';
// Audio.play() is called synchronously from the tap handler, including on iOS.
const pronunciationPlayer=(()=>{
 let audio=null,utterance=null,timer=null,sequence=0,lastText='',voices=[];
 const synth=()=>window.speechSynthesis;
 function loadVoices(){try{voices=synth()?.getVoices()||[];}catch{voices=[];}}
 loadVoices();
 try{synth()?.addEventListener?.('voiceschanged',loadVoices);}catch{}
 function stop(){
  sequence++;clearTimeout(timer);timer=null;
  if(audio){audio.onplaying=audio.onended=audio.onerror=null;try{audio.pause();audio.removeAttribute('src');audio.load();}catch{}audio=null;}
  try{const s=synth();if(s&&(s.speaking||s.pending||s.paused))s.cancel();}catch{}
  utterance=null;
 }
 function help(text,src){
  clearTimeout(timer);timer=null;
  const offline=navigator.onLine===false;
  openModal('发音暂未播放',offline?'这条发音尚未缓存。联网播放一次后，可在本设备离线重听。':'请先确认手机媒体音量已打开，也可以点下面播放器的播放键再试一次。',
   (src?`<audio controls preload="none" src="${esc(src)}" aria-label="${esc(text)}的发音" style="width:100%;margin:16px 0"></audio>`:'')+
   btn('重试发音','retry-pronunciation','','full')+btn('关闭','close-modal','','secondary full'));
 }
 function native(text,src,id){
  if(id!==sequence)return;
  clearTimeout(timer);
  const s=synth(),Utterance=window.SpeechSynthesisUtterance;
  if(!s||typeof s.speak!=='function'||!Utterance){help(text,src);return;}
  loadVoices();
  const english=voices.filter(v=>/^en(?:[-_]|$)/i.test(v.lang));
  const voice=english.find(v=>v.localService&&/^en-US$/i.test(v.lang))||english.find(v=>v.localService)||english[0];
  if(voices.length&&!voice){help(text,src);return;}
  try{
   const u=new Utterance(text);utterance=u;
   u.lang=voice?.lang||'en-US';if(voice)u.voice=voice;
   u.volume=1;u.rate=.8;u.pitch=1;
   u.onstart=()=>{if(id===sequence){clearTimeout(timer);toast('正在朗读：'+text);}};
   u.onend=()=>{if(id===sequence){clearTimeout(timer);utterance=null;}};
   u.onerror=()=>{if(id===sequence){utterance=null;help(text,src);}};
   // Keep a reference until end/error; recover a paused synthesis engine.
   if(s.paused)s.resume();
   timer=setTimeout(()=>{if(id===sequence){try{s.cancel();}catch{}help(text,src);}},7000);
   s.speak(u);
  }catch{if(id===sequence)help(text,src);}
 }
 function play(raw){
  const text=String(raw||'').trim();
  if(!text){toast('这条内容没有可朗读的英文。');return;}
  stop();lastText=text;
  const id=sequence;
  const src=typeof PRONUNCIATION_AUDIO==='undefined'?null:PRONUNCIATION_AUDIO[text];
  toast('正在加载发音…');
  if(!src||typeof window.Audio!=='function'){native(text,src,id);return;}
  let failed=false;
  const fallback=()=>{
   if(id!==sequence||failed)return;failed=true;clearTimeout(timer);
   if(audio){audio.onplaying=audio.onended=audio.onerror=null;try{audio.pause();}catch{}}
   native(text,src,id);
  };
  try{
   const player=new window.Audio();audio=player;
   player.preload='auto';player.volume=1;player.muted=false;player.src=src;
   player.onplaying=()=>{if(id===sequence&&!failed){clearTimeout(timer);toast('正在朗读：'+text);}};
   player.onended=()=>{if(id===sequence&&!failed){clearTimeout(timer);audio=null;}};
   player.onerror=fallback;
   timer=setTimeout(fallback,10000);
   // Do not await fetch(), voiceschanged, or a timer before this call.
   const result=player.play();
   if(result&&typeof result.catch==='function')result.catch(fallback);
  }catch{fallback();}
 }
 document.addEventListener('click',e=>{if(e.target.closest('[data-action="retry-pronunciation"]')){closeModal();play(lastText);}});
 window.addEventListener('hashchange',stop);
 window.addEventListener('pagehide',stop);
 return {play,stop};
})();
