function t(t,i,e,o){Object.defineProperty(t,i,{get:e,set:o,enumerable:!0,configurable:!0})}function i(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},n=e.parcelRequire2382;null==n&&((n=function(t){if(t in o)return o[t].exports;if(t in s){var i=s[t];delete s[t];var e={id:t,exports:{}};return o[t]=e,i.call(e.exports,e,e.exports),e.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,i){s[t]=i},e.parcelRequire2382=n),n.register("27Lyk",(function(i,e){var o,s;t(i.exports,"register",(()=>o),(t=>o=t)),t(i.exports,"resolve",(()=>s),(t=>s=t));var n={};o=function(t){for(var i=Object.keys(t),e=0;e<i.length;e++)n[i[e]]=t[i[e]]},s=function(t){var i=n[t];if(null==i)throw new Error("Could not resolve bundle with id "+t);return i}})),n("27Lyk").register(JSON.parse('{"bg8Kk":"index.2e25c6f0.js","aXNjT":"background.8939a860.png","isji5":"ground.c527a7fc.png","dp9nw":"bird.17b47c7c.png","eJ2RD":"pipe.7471d7f9.png"}'));const r=function(t){const i=new Image;return i.src=t,i};class a{static startScreen(){return H.innerText=0,T.classList.remove("live-score"),"<h2>Flappy Bird</h2>\n      <p>Press Enter to Start &#9654;</p>"}static lostScreen(t){return T.classList.add("live-score"),`<h2>Oops! You Lost</h2>\n      <p class="result-point">score : <span>${t}</span></p>\n      <p>Press Enter to coninue playing &#9654;</p>`}}var p;p=new URL(n("27Lyk").resolve("aXNjT"),import.meta.url).toString();class d{constructor({position:t},i){this.position={x:t.x,y:t.y},this.width=i.width,this.height=i.height,this.image=i}draw(t=this.position.x){k.drawImage(this.image,t,this.position.y)}update(){}}class c extends d{constructor({position:t},i){super({position:t},i),this.position={x:t.x,y:t.y}}draw(t=this.position.x){k.drawImage(this.image,t,this.position.y)}update(){}}var l;l=new URL(n("27Lyk").resolve("isji5"),import.meta.url).toString();class h extends d{constructor({position:t},i){super({position:t},i),this.position={x:t.x,y:t.y}}draw(t=this.position.x){k.drawImage(this.image,t,this.position.y)}update(){}}var u;u=new URL(n("27Lyk").resolve("dp9nw"),import.meta.url).toString();class y extends d{#t=.18;constructor({position:t},i){super({position:t},i),this.position={x:t.x-this.width/2,y:t.y-this.height/2},this.velocity={x:0,y:0}}draw(){k.drawImage(this.image,this.position.x,this.position.y)}update(){this.draw(),this.velocity.y+=1*this.#t,this.position.y+=this.velocity.y}collides(t){return this.position.x+0+(this.width-0)>=t.position.x&&this.position.x+0<=t.position.x+S&&this.position.y+0+(this.height-0)>=t.position.y&&this.position.y+0<=t.position.y+L}}var w;w=new URL(n("27Lyk").resolve("eJ2RD"),import.meta.url).toString();class g extends d{#i=-.5;constructor({position:t},e,o=r(i(w))){super({position:t},o),this.position={x:I,y:t.y},this.orientation=e}draw(){this.mirrorImage(this.image,this.position.x,"top"==this.orientation?this.position.y+L:this.position.y,!1,"top"==this.orientation)}update(){this.draw()}mirrorImage(t,i=0,e=0,o=!1,s=!1){k.save(),k.setTransform(o?-1:1,0,0,s?-1:1,i+(o?t.width:0),e+0),k.drawImage(t,0,0),k.restore()}}class m{constructor({position:t}){this.position={x:I+32,y:t.y},this.pipes=[new g({position:{y:this.position.y}},"top"),new g({position:{y:this.position.y+L+v}},"bottom")],this.scored=!1}draw(){this.pipes.forEach((t=>t.update()))}update(){this.draw(),this.position.x-=1*b,this.pipes[0].position.x=this.position.x,this.pipes[1].position.x=this.position.x}}let f=0,x=0;const v=90,b=2,L=288,S=70,E=document.getElementById("canvas"),k=E.getContext("2d"),R=document.querySelector(".flappy-gui-states"),H=document.querySelector(".score-point span"),T=document.querySelector(".score-point"),_=(document.querySelector(".result-point span"),document.getElementById("btn-start")),j=document.getElementById("btn-jump"),I=512;E.width=I,E.height=288;let M,A,F,O,q,U,N,P=!1,B=window.performance.now();function C(){M=new c({position:{x:-1,y:-1}},r(i(p))),A=new h({position:{x:-1,y:272}},r(i(l))),F=new y({position:{x:I/2,y:144}},r(i(u))),O=[],q=0,U=-L-80*Math.random()+20,N=0,R.insertAdjacentHTML("afterbegin",a.startScreen())}C(),function t(){requestAnimationFrame(t);const i=window.performance.now(),e=i-B;if(!(e<16.666666666666668)){if(B=i-e%16.666666666666668,k.fillStyle="white",k.fillRect(0,0,E.width,E.height),f=(f+.9)%413,x=(x+1.8)%I,q++,q>60&&P){let t=Math.max(10-L,Math.min(U+(o=-20,s=20,Math.floor(Math.random()*(s-o+1)+o)),198-L));U=t,O.push(new m({position:{y:t}})),q=0}var o,s;if(P){M.draw(-f);for(let t=O.length-1;t>=0;t--){let i=O[t];i.pipes.forEach((t=>{F.collides(t)&&(audio.lost.play(),R.insertAdjacentHTML("afterbegin",a.lostScreen(N)),P=!1)})),i.scored||i.position.x+S<F.position.x&&(audio.scoring.play(),N+=1,H.innerText=N,i.scored=!0),i.position.x+S<0?O.splice(t,1):i.update()}A.draw(-x),F.position.y+F.height+A.height>288?(audio.lost.play(),P=!1,R.insertAdjacentHTML("afterbegin",a.lostScreen(N))):F.update()}else M.draw(-f),A.draw(-x)}}(),window.addEventListener("keypress",(({key:t})=>{switch(t){case" ":if(!P)return;audio.jump.play(),F.velocity.y=-3.8;break;case"p":break;case"Enter":C(),P=!0,R.innerHTML="",console.log("game restarted")}})),j.addEventListener("click",(()=>{P&&(audio.jump.play(),F.velocity.y=-3.8)})),_.addEventListener("click",(()=>{C(),P=!0,R.innerHTML=""})),window.addEventListener("click",(()=>{P&&(audio.jump.play(),F.velocity.y=-3.8)})),audio.backgroundMusic.play();
//# sourceMappingURL=index.2e25c6f0.js.map
