import{a as S,S as P,i as n}from"./assets/vendor-C2ySes1p.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const R="https://pixabay.com/api/",q="55067612-eb9022102def9b95fd4a63101",E=15;async function f(e,o){return(await S.get(R,{params:{key:q,q:e,page:o,per_page:E,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),$=new P(".gallery a",{captionsData:"alt",captionDelay:250});function B(e){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
      <div class="info">
        <p class="info-item">
          <span class="info-label">Likes</span>
          <span class="info-value">${e.likes}</span>
        </p>
        <p class="info-item">
          <span class="info-label">Views</span>
          <span class="info-value">${e.views}</span>
        </p>
        <p class="info-item">
          <span class="info-label">Comments</span>
          <span class="info-value">${e.comments}</span>
        </p>
        <p class="info-item">
          <span class="info-label">Downloads</span>
          <span class="info-value">${e.downloads}</span>
        </p>
      </div>
    </li>
  `}function y(e){const o=e.map(B).join("");p.insertAdjacentHTML("beforeend",o),$.refresh()}function M(){p.innerHTML=""}function g(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}function b(){h.classList.remove("is-hidden")}function l(){h.classList.add("is-hidden")}const w=document.querySelector(".form"),A=document.querySelector(".load-more"),v=15;let u="",a=1,i=0;w.addEventListener("submit",O);A.addEventListener("click",_);async function O(e){e.preventDefault();const o=e.currentTarget.elements["search-text"].value.trim();if(!o){n.warning({message:"Please fill in the search field!",position:"topRight"});return}u=o,a=1,i=0,M(),l(),g();try{const r=await f(u,a);if(i=r.totalHits,r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits),a*v>=i?(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{L(),w.reset()}}async function _(){a+=1,l(),g();try{const e=await f(u,a);y(e.hits),x(),a*v>=i?(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{L()}}function x(){const e=document.querySelector(".gallery-item");if(!e)return;const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
