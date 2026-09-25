export class PlatformManager{
constructor(){this.sdk=null;this.enabled=false;this.loading=false}
shouldLoad(){return location.hostname.endsWith('crazygames.com')||new URLSearchParams(location.search).get('useLocalSdk')==='true'}
async init(){if(!this.shouldLoad())return false;if(window.CrazyGames?.SDK){return this.activate()}return new Promise(resolve=>{const s=document.createElement('script');s.src='https://sdk.crazygames.com/crazygames-sdk-v3.js';s.async=true;s.onload=async()=>{try{await window.CrazyGames.SDK.init();resolve(this.activate())}catch(e){console.warn('[CounterForce] CrazyGames SDK unavailable',e);resolve(false)}};s.onerror=()=>{console.warn('[CounterForce] CrazyGames SDK failed to load');resolve(false)};document.head.appendChild(s)})}
activate(){const sdk=window.CrazyGames?.SDK;if(!sdk)return false;if(sdk.environment==='disabled')return false;this.sdk=sdk;this.enabled=true;return true}
safe(fn){if(!this.enabled||!this.sdk)return;try{const r=fn(this.sdk);if(r?.catch)r.catch(()=>{})}catch{}}
loadingStart(){this.safe(s=>s.game?.loadingStart?.())}
loadingStop(){this.safe(s=>s.game?.loadingStop?.())}
gameplayStart(){this.safe(s=>s.game?.gameplayStart?.())}
gameplayStop(){this.safe(s=>s.game?.gameplayStop?.())}
}