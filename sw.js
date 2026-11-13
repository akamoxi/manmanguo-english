const CACHE='slow-english-v3-audio';
const APP_FILES=['./','./index.html','./style.css','./app.js?v=audio-1','./data.js','./materials.js','./materials-ui.js','./pronunciations.js','./pronunciation-player.js','./icon.svg','./icon-192.png','./icon-512.png','./manifest.webmanifest','./materials/core.xlsx','./materials/new.xlsx','./materials/affixes.doc','./materials/phrases.pdf',...[1,2,3,4,5,6].map(i=>'./materials/affixes-'+i+'.png')];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_FILES)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('slow-english-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// Safari requests byte ranges for media. Cache a complete MP3, then serve ranges
// from it so a word already played online remains available offline.
async function pronunciationResponse(request){
 const cache=await caches.open(CACHE);
 let response=await cache.match(request.url);
 if(!response){
  response=await fetch(new Request(request.url,{credentials:'same-origin'}));
  if(!response.ok)return response;
  if(response.status===200){try{await cache.put(request.url,response.clone());}catch{}}
 }
 const range=request.headers.get('range');
 if(!range)return response;
 const match=/^bytes=(\d*)-(\d*)$/.exec(range);
 if(!match||(!match[1]&&!match[2]))return response;
 const bytes=await response.arrayBuffer(),size=bytes.byteLength;
 const start=match[1]?Number(match[1]):Math.max(0,size-Number(match[2]));
 const end=match[1]&&match[2]?Math.min(Number(match[2]),size-1):size-1;
 if(start>=size||start>end)return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+size}});
 const headers=new Headers(response.headers);
 headers.delete('Content-Encoding');
 headers.set('Content-Type','audio/mpeg');headers.set('Accept-Ranges','bytes');
 headers.set('Content-Range',`bytes ${start}-${end}/${size}`);headers.set('Content-Length',String(end-start+1));
 return new Response(bytes.slice(start,end+1),{status:206,headers});
}
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
 if(new URL(e.request.url).pathname.endsWith('.mp3')){e.respondWith(pronunciationResponse(e.request).catch(()=>Response.error()));return;}
 e.respondWith(fetch(e.request).then(r=>{
  if(r.ok&&r.status===200&&r.type==='basic')e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,r.clone())).catch(()=>{}));
  return r;
 }).catch(()=>caches.match(e.request).then(r=>r||(e.request.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
