import{a as p,S as u,i}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const d="https://pixabay.com/api/",m="55067612-eb9022102def9b95fd4a63101";function g(e){return p.get(d,{params:{key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(e){return`
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
  `}function L(e){const r=e.map(h).join("");c.innerHTML=r,y.refresh()}function b(){c.innerHTML=""}function v(){f.classList.remove("is-hidden")}function w(){f.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",e=>{e.preventDefault();const r=e.currentTarget.elements["search-text"].value.trim();if(!r){i.warning({message:"Please fill in the search field!",position:"topRight"});return}b(),v(),g(r).then(a=>{const n=a.data.hits;if(n.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(n)}).catch(a=>{i.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(a)}).finally(()=>{w(),l.reset()})});
//# sourceMappingURL=index.js.map
