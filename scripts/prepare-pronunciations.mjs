import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const ctx=vm.createContext({});
for(const f of ['data.js','materials.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const words=vm.runInContext('WORDS',ctx);
const texts=[...new Set(words.flatMap(w=>[w.word,w.example]).filter(Boolean).map(t=>t.trim()))];
const index={},jobs=new Map();
for(const text of texts){
 const spoken=text.replace(/[’‘]/g,"'").replace(/\bsb\.?\b/gi,'somebody').replace(/\bsth\.?\b/gi,'something').replace(/\.{2,}|…+/g,' ').replace(/\//g,' or ').replace(/\s+/g,' ').trim();
 const key=createHash('sha256').update(spoken).digest('hex').slice(0,20);
 index[text]='audio/'+key+'.mp3';jobs.set(key,{key,text:spoken});
}
fs.mkdirSync(path.join(root,'audio'),{recursive:true});
fs.writeFileSync(path.join(root,'pronunciations.js'),'/* Locally generated English audio; no external speech service. */\nconst PRONUNCIATION_AUDIO = '+JSON.stringify(index)+';\n');
// Keep work files outside the published repository.
const jobsFile=process.argv[2];
if(!jobsFile)throw Error('Pass an absolute path for the temporary synthesis job file.');
fs.writeFileSync(jobsFile,JSON.stringify([...jobs.values()],null,2));
console.log(JSON.stringify({words:words.length,playableTexts:texts.length,audioFiles:jobs.size}));
