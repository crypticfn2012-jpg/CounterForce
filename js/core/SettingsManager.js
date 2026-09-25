export class SettingsManager{
constructor(){this.key='counterforce.settings.v2';this.defaults={
style:'modern',username:'PLAYER',sensitivity:.0018,zoomSensitivity:1,invertY:false,mouseFilter:false,rawInput:true,autoPickup:'on',autoReload:'on',
master:.8,sfx:.8,music:.45,voice:.8,menuSounds:'on',audioQuality:'high',
fov:84,fps:0,renderScale:100,quality:'high',shadows:'on',effects:'high',hardware:false,
hudScale:100,fpsHud:'on',damage:'on',crossStyle:'classic',bob:true,sway:true,contrast:'normal',classicScale:100,
crossSize:8,crossGap:4,crossThick:2,crossColor:'#c7ffd5',crossDot:true,crossOutline:false,
binds:{forward:'KeyW',back:'KeyS',left:'KeyA',right:'KeyD',sprint:'ShiftLeft',crouch:'KeyC',jump:'Space',fire:'Mouse0',ads:'Mouse2',reload:'KeyR',primary:'Digit1',secondary:'Digit2',knife:'Digit3',use:'KeyF',scoreboard:'Tab'}
};this.data={...this.defaults,...this.read(),binds:{...this.defaults.binds,...(this.read().binds||{})}}}
read(){try{return JSON.parse(localStorage.getItem(this.key)||'{}')}catch{return{}}}
save(){try{localStorage.setItem(this.key,JSON.stringify(this.data))}catch{}}
set(k,v){this.data[k]=v;this.save()}
reset(){this.data=structuredClone(this.defaults);this.save()}
get(k){return this.data[k]}
applyQuality(renderer){const q=this.data.hardware?'low':this.data.quality;renderer.setPixelRatio(Math.min(devicePixelRatio||1,(this.data.renderScale/100)*(q==='low'?1:q==='medium'?1.25:1.65)));renderer.shadowMap.enabled=this.data.shadows==='on'&&q!=='low'}
}