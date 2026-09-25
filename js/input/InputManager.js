export class InputManager{
constructor(dom,settings){this.dom=dom;this.settings=settings;this.keys=new Set();this.mouse={dx:0,dy:0,down:false,right:false};this.pointerLocked=false;window.addEventListener('keydown',e=>{this.keys.add(e.code);if(['Space','Tab'].includes(e.code))e.preventDefault()});window.addEventListener('keyup',e=>this.keys.delete(e.code));dom.addEventListener('mousemove',e=>{if(this.pointerLocked){this.mouse.dx+=e.movementX;this.mouse.dy+=e.movementY}});dom.addEventListener('mousedown',e=>{if(e.button===0)this.mouse.down=true;if(e.button===2)this.mouse.right=true});window.addEventListener('mouseup',e=>{if(e.button===0)this.mouse.down=false;if(e.button===2)this.mouse.right=false});window.addEventListener('contextmenu',e=>e.preventDefault());document.addEventListener('pointerlockchange',()=>this.pointerLocked=document.pointerLockElement===this.dom)}
is(code){return this.keys.has(code)}
action(name){const bind=this.settings?.data?.binds?.[name];if(bind==='Mouse0')return this.mouse.down;if(bind==='Mouse2')return this.mouse.right;return !!bind&&this.keys.has(bind)}
consumeMouse(){const m={...this.mouse};this.mouse.dx=0;this.mouse.dy=0;return m}
requestLock(){this.dom.requestPointerLock?.()}
release(){if(document.pointerLockElement)document.exitPointerLock()}
setBind(name,code){if(this.settings?.data?.binds){this.settings.data.binds[name]=code;this.settings.save()}}
}