const THREE=window.THREE;
import{Game}from'./core/Game.js';import{PlatformManager}from'./core/PlatformManager.js';
const platform=new PlatformManager();
const boot=async()=>{
  if(!THREE)throw new Error('Three.js failed to load');
  await platform.init();platform.loadingStart();
  const game=new Game(THREE);game.platform=platform;window.counterForce=game;
  await game.boot();game.bindUI();
};
boot().catch(error=>{
  console.error('[CounterForce] startup failed',error);platform.loadingStop();
  const root=document.getElementById('menu-screen');
  if(root){root.classList.remove('active');root.innerHTML='<div class="startup-error"><h2>COUNTERFORCE FAILED TO START</h2><p>'+String(error?.message||error)+'</p><small>Open the browser console for the full stack trace.</small><button onclick="location.reload()">RELOAD</button></div>'}
});