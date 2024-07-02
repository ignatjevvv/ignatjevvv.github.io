var T=Object.defineProperty;var x=(t,e,o)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var L=(t,e,o)=>x(t,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const p={USD:"$",EUR:"€",UAH:"₴",BTC:"B"};class q{constructor(e,o){this.dropdownClass=e,this.buttonMenu=o}showDropdownMenu(){const e=document.querySelectorAll(`.${this.buttonMenu}`);if(e.length===0){console.warn("No dropdown buttons found");return}e.forEach(o=>{o.addEventListener("click",()=>{const n=o.closest(`.${this.dropdownClass}`);n?n.className.includes("show-dropdown")?n.classList.remove("show-dropdown"):(this.closeActiveDropdownMenu(e),n.classList.add("show-dropdown")):console.warn("No dropdown container found")})}),this.closeDropdowmMenu()}closeDropdowmMenu(){document.querySelectorAll(".goal__dropdown-name").forEach(o=>{o.addEventListener("click",()=>{o.closest(`.${this.dropdownClass}`).classList.toggle("show-dropdown")})})}closeActiveDropdownMenu(e){e.forEach(o=>{o.closest(`.${this.dropdownClass}`).classList.remove("show-dropdown")})}}const Z=new q("goal__dropdown","goal__dropdown-button"),N=document.getElementById("number-goals"),R=document.getElementById("remaining-target"),D=document.getElementById("complete-goals"),G=t=>{const e=t.length,o=t.filter(n=>n.compleateStatus).length;N.innerText=e,D.innerHTML=o,R.innerHTML=e-o},l=JSON.parse(localStorage.getItem("data"))||[],m=t=>{localStorage.setItem("data",JSON.stringify(t))},r=document.querySelectorAll(".dialog__data"),H=document.getElementById("form-dialog"),$=()=>{_.getActiveItemRadio()?O():F()},F=()=>{const t=`
    <div class="error">
        <div class="error__container">
            <div class="error__text"><p>Select the currency</p></div>
        </div>
    </div>
    `,e=r[0].querySelector(".dialog__input").value,o=r[2].querySelector(".dialog__input").value,n=document.querySelector(".error");e&&o&&!n&&(r[3].style.cssText="padding-bottom: 3rem;",r[3].insertAdjacentHTML("afterbegin",t))},O=()=>{const t=document.querySelector(".dialog__data .error");t&&(r[3].style.cssText="",t.remove())},y=document.getElementById("dialog-amount"),W=document.getElementById("dialog-initial"),V=()=>{if(y.value)return W.value>y.value?(alert("Initial value is bigger!"),!1):!0},P=()=>H.reportValidity()&&V()?!0:($(),!1);class J{constructor(e,o){L(this,"radioIsSelect",!1);this.radiosCurrencyBtn=document.querySelectorAll(e),this.currencyTypeRadio=document.querySelectorAll(`.${o}`)}addClassActiveForRadio(){this.radiosCurrencyBtn.forEach(e=>{e.addEventListener("click",o=>{$(),this.removeClassActiveRadio(),o.target.parentNode.classList.add("active")})})}getActiveItemRadio(){for(let e of this.radiosCurrencyBtn)if(e.checked)return e.value;return this.radioIsSelect}removeClassActiveRadio(){this.currencyTypeRadio.forEach(e=>{e.classList.remove("active")})}}const _=new J('input[type="radio"]',"dialog__currency-option"),U=document.getElementById("form-dialog"),j=document.getElementById("history-list"),K=document.getElementById("history"),w=document.getElementById("close-button"),f=document.getElementById("button"),u=()=>{document.getElementById("form-dialog").reset(),_.removeClassActiveRadio(),document.querySelector(".dialog__title").innerText="New goal",f.innerText="Create goal",w.innerText="Discard",w.style.cssText="",j.innerHTML="",U.classList.remove("hide"),f.classList.remove("hide"),K.classList.add("hide")},Y=t=>{console.log(t);const e=l.findIndex(o=>o.id===t);l.splice(e,1),m(l),v("goal-list",l,p)},E=t=>{t.closest(".goal__task").querySelector(".goal__dialog").classList.toggle("hide"),u()};let A={};const z=t=>{A=t},Q=document.getElementById("button"),X=document.getElementById("dialog-name"),tt=document.getElementById("dialog-amount"),et=document.getElementById("dialog-initial"),ot=document.querySelectorAll('input[type="radio"]'),I=document.getElementById("dialog"),nt=t=>{u(),console.log("+++ GOAL DATA",l);const e=l.findIndex(n=>n.id===t);let o=l[e];z(l[e]),X.value=o.name,tt.value=o.amount,et.value=o.accumulation,console.log("+++"),console.log(o),ot.forEach(n=>{n.value===o.currency&&n.parentNode.classList.add("active")}),I.querySelector(".dialog__title").innerText="Edit goal",Q.innerText="Save goal",I.showModal()};function k(t){t.percentPointToFinish=Math.floor(t.accumulation/t.amount*100).toFixed(2)}const st=t=>{t.accumulation>=t.amount&&(t.compleateStatus=!0,console.log("Goal Item Complete 🥳"))},at=document.getElementById("button"),b=document.getElementById("close-button"),lt=document.getElementById("form-dialog"),M=document.getElementById("dialog"),it=document.getElementById("history"),B=document.getElementById("history-list");let C={};const dt=(t,e,o)=>{e.history.push({amount:t,date:new Date().toLocaleString(),operation:o})},ct=t=>{const e=l.findIndex(o=>o.id===t);C=l[e],lt.classList.add("hide"),it.classList.remove("hide"),M.querySelector(".dialog__title").innerText="History",B.innerHTML="",C.history.forEach(o=>{B.innerHTML+=`
                      <tr>
                    <td>
                      <div class="dialog__history-date">
                        <span class="dialog__history-month"
                          >${o.date.split(",")[0]}</span
                        >
                        <span class="dialog__history-time"
                          >${o.date.split(",")[1]}</span
                        >
                      </div>
                    </td>
                    <td>
                      <div class="dialog__history-amount">
                        <span class="dialog__history-month"
                          >${o.amount}</span
                        >
                      </div>
                    </td>
                    <td>
                      <div class="dialog__history-operation">
                        <span class="dialog__history-icon">
                          ${o.operation}
                        </span>
                      </div>
                    </td>
                  </tr>
    `}),b.innerText="Close",b.style.cssText="width: 100%;",at.classList.add("hide"),M.showModal()},S=(t,e)=>{const o=l.find(a=>{if(a.id===t)return a});let n="+";const s=document.getElementById(t).getElementsByTagName("input")[0].value;if(+s!=0){if(e==="withdraw-btn"){if(o.accumulation<s){alert("Withdrawals add to your savings limit!");return}n="-",o.accumulation-=+s}else o.accumulation+=+s;m(l),dt(s,o,n),st(o),k(o),v("goal-list",l,p),m(l),console.log(l)}},v=(t,e,o)=>{const n=document.getElementById(t);G(e),n.innerHTML="",e.forEach(({id:s,name:a,amount:i,currency:d,accumulation:g,percentPointToFinish:h,compleateStatus:c})=>{n.innerHTML+=`
        <div class="goal__task ${c?"complete":"no-complete"}" id="${s}">
        <div class="goal__dropdown" id="dropdown-content">
          <button class="goal__dropdown-button">
            <div class="goal__dropdown-dot"></div>
            <div class="goal__dropdown-dot"></div>
            <div class="goal__dropdown-dot"></div>
          </button>
  
          <ul class="goal__dropdown-menu">
            <li class="goal__dropdown-item">
              <i class="ri-pencil-line goal__dropdown-icon"></i>
              <span class="goal__dropdown-name" data-action="edit"
                >Edit</span
              >
            </li>
  
            <li class="goal__dropdown-item">
              <i class="ri-list-view goal__dropdown-icon"></i>
              <span class="goal__dropdown-name" data-action="history"
                >History</span
              >
            </li>
  
            <li class="goal__dropdown-item">
              <i class="ri-delete-bin-line goal__dropdown-icon"></i>
              <span class="goal__dropdown-name" data-action="remove" 
                >Remove</span
              >
            </li>
          </ul>
        </div>
  
        <div class="goal__inform">
          <div class="goal__progress" id="goal-progressbar">
          ${c?`<svg width="118" height="89" viewBox="0 0 118 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_522_18" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M112.633 4.70497C106.37 -1.50932 96.2562 -1.47042 90.0419 4.79184L44.2006 50.9871L26.0999 32.8865C20.1292 26.9158 10.4487 26.9158 4.47803 32.8865C-1.49268 38.8572 -1.49268 48.5376 4.47803 54.5083L33.5334 83.5637C33.8497 83.88 34.1765 84.1796 34.5125 84.4624C40.803 90.1683 50.5325 89.963 56.5748 83.874L112.72 27.2958C118.934 21.0335 118.895 10.9192 112.633 4.70497Z"/>
                </mask>
                <path d="M90.0419 4.79184L91.4616 6.20061L91.4616 6.20061L90.0419 4.79184ZM112.633 4.70497L111.224 6.12461L111.224 6.12461L112.633 4.70497ZM44.2006 50.9871L42.7864 52.4014L44.206 53.821L45.6202 52.3959L44.2006 50.9871ZM26.0999 32.8865L27.5141 31.4722L27.5141 31.4722L26.0999 32.8865ZM4.47803 32.8865L5.89225 34.3007L5.89225 34.3007L4.47803 32.8865ZM4.47803 54.5083L5.89225 53.0941L5.89225 53.0941L4.47803 54.5083ZM33.5334 83.5637L34.9476 82.1495L34.9476 82.1495L33.5334 83.5637ZM34.5125 84.4624L35.8562 82.981L35.8287 82.9561L35.8003 82.9322L34.5125 84.4624ZM56.5748 83.874L55.1552 82.4653L55.1552 82.4653L56.5748 83.874ZM112.72 27.2958L111.3 25.887L111.3 25.887L112.72 27.2958ZM91.4616 6.20061C96.8978 0.72239 105.746 0.688364 111.224 6.12461L114.041 3.28532C106.995 -3.707 95.6146 -3.66323 88.6223 3.38308L91.4616 6.20061ZM45.6202 52.3959L91.4616 6.20061L88.6223 3.38308L42.7809 49.5784L45.6202 52.3959ZM24.6857 34.3007L42.7864 52.4014L45.6148 49.5729L27.5141 31.4722L24.6857 34.3007ZM5.89225 34.3007C11.0819 29.111 19.496 29.111 24.6857 34.3007L27.5141 31.4722C20.7623 24.7205 9.81558 24.7205 3.06382 31.4722L5.89225 34.3007ZM5.89225 53.0941C0.702584 47.9044 0.702585 39.4903 5.89225 34.3007L3.06382 31.4722C-3.68794 38.224 -3.68794 49.1708 3.06382 55.9225L5.89225 53.0941ZM34.9476 82.1495L5.89225 53.0941L3.06382 55.9225L32.1192 84.9779L34.9476 82.1495ZM35.8003 82.9322C35.508 82.6861 35.2234 82.4253 34.9476 82.1495L32.1192 84.9779C32.476 85.3347 32.845 85.673 33.2247 85.9926L35.8003 82.9322ZM55.1552 82.4653C49.8697 87.7915 41.358 87.9715 35.8562 82.981L33.1688 85.9437C40.248 92.3651 51.1952 92.1345 57.9944 85.2828L55.1552 82.4653ZM111.3 25.887L55.1552 82.4653L57.9944 85.2828L114.139 28.7045L111.3 25.887ZM111.224 6.12461C116.702 11.5609 116.736 20.4088 111.3 25.887L114.139 28.7045C121.132 21.6582 121.088 10.2776 114.041 3.28532L111.224 6.12461Z" fill="#E3FF73" mask="url(#path-1-inside-1_522_18)"/>
                </svg>`:Math.floor(h)+'<span class="goal__percent">%</span>'}
          </div>
          <div class="hiden">
            <div class="goal__data ${c?"complete":"no-complete"}">
              <div class="goal__calculate ${c?"hide":"show"}">
                <input
                  class="goal__amount"
                  type="number"
                  id="amount"
                  placeholder="0"
                  value="0"
                />
                <div class="goal__button">
                  <button
                    data-action="withdraw-btn"
                    class="button__minus"
                  >
                    -
                  </button>
                  <button
                    data-action="deposit-btn"
                    class="button__plus"
                  >
                    +
                  </button>
                </div>
              </div>
  
              <div class="goal__wrap ${c?"complete":"no-complete"}"">
                <div class="svg-container">
<svg width="240" height="146" viewBox="0 0 240 146" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1.71609e-06 74L111 74C116.523 74 121 78.4772 121 84L121 107.382L121 146" stroke="#0C0C0C" stroke-width="2"/>
<path d="M240 74L129 74C123.477 74 119 69.5229 119 64L119 37V0" stroke="#0C0C0C" stroke-width="2"/>
</svg>

                </div>
                <div class="goal__statistic">
                  <div class="goal__statistic-item">
                    <span class="goal__statistic-amount">${g}${o[d]}</span>
                    <label class="goal__statistic-name">Collected</label>
                  </div>
                  <div class="goal__statistic-item">
                    <span class="goal__statistic-amount">${i-g}${o[d]}</span>
                    <label class="goal__statistic-name">Remaining</label>
                  </div>
                  <div class="goal__statistic-item">
                    <span class="goal__statistic-amount">${i}${o[d]}</span>
                    <label class="goal__statistic-name">Goal</label>
                  </div>
                  <div class="goal__statistic-item">
                    <span class="goal__statistic-amount">${h}%</span>
                    <label class="goal__statistic-name">Progress</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="goal__title">${a}</div>
  
        <div class="goal__dialog hide">
          <p class="goal__dialog-message">
            Do you really wont to remove your progress ?
          </p>
          <div class="goal__dialog-buttons">
            <button class="btn" data-action="remove-goal">
              Remove
            </button>
            <button class="btn" data-action="discard-change">
              Discard
            </button>
          </div>
        </div>
      </div>
    `}),Z.showDropdownMenu(),rt()};function rt(){document.querySelectorAll('[data-action="remove"]').forEach(t=>{t.addEventListener("click",e=>{E(e.target.closest(".goal__task"))})}),document.querySelectorAll('[data-action="remove-goal"]').forEach(t=>{t.addEventListener("click",e=>{Y(e.target.closest(".goal__task").id)})}),document.querySelectorAll('[data-action="edit"]').forEach(t=>{t.addEventListener("click",e=>{nt(e.target.closest(".goal__task").id)})}),document.querySelectorAll('[data-action="history"]').forEach(t=>{t.addEventListener("click",e=>{ct(e.target.closest(".goal__task").id)})}),document.querySelectorAll('[data-action="discard-change"]').forEach(t=>{t.addEventListener("click",e=>{E(e.target.closest(".goal__task"))})}),document.querySelectorAll('[data-action="withdraw-btn"]').forEach(t=>{t.addEventListener("click",e=>{S(e.target.closest(".goal__task").id,e.target.dataset.action)})}),document.querySelectorAll('[data-action="deposit-btn"]').forEach(t=>{t.addEventListener("click",e=>{S(e.target.closest(".goal__task").id,e.target.dataset.action)})})}const ut=document.getElementById("dialog-name"),gt=document.getElementById("dialog-amount"),mt=document.getElementById("dialog-initial"),pt=document.getElementById("button"),_t=document.getElementById("dialog");document.getElementById("form-dialog");pt.addEventListener("click",t=>{t.preventDefault(),P()&&(_t.close(),vt(l,A,ut,gt,mt))});const vt=(t,e,o,n,s)=>{const a=t.findIndex(g=>g.id===e.id);console.log("Data arr index "+a);let i=JSON.parse(JSON.stringify(e.history||[]));const d={id:`${o.value.toLowerCase().split(" ").join("-")}-${+new Date}`,name:o.value,amount:n.value,currency:_.getActiveItemRadio(),accumulation:+s.value,compleateStatus:!1,history:i};a===-1?t.unshift(d):t[a]=d,k(d),m(t),v("goal-list",t,p),u()},ht=t=>{const e=document.getElementById("new-goal-item"),o=document.getElementById("close-button"),n=document.getElementById(`${t}`);e.addEventListener("click",()=>{u(),n.showModal()}),o.addEventListener("click",()=>{u(),n.close()})};function Lt(){const t=document.querySelector(".statistic__container");window.addEventListener("scroll",()=>{window.scrollY>45?t.classList.add("scroll"):t.classList.remove("scroll"),document.querySelectorAll(".goal__task").forEach(o=>{o.getBoundingClientRect().top<100?o.classList.add("opacity-card"):o.classList.remove("opacity-card")})})}document.addEventListener("DOMContentLoaded",()=>{Lt(),v("goal-list",l,p),ht("dialog"),_.addClassActiveForRadio()});
//# sourceMappingURL=script-DSVGpQ-j.js.map
