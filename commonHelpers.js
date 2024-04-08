import{S as m,i as h}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",g="43235509-ebd3145eb150405846e36d932";function L(n){const o=new URLSearchParams({key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function b(n){const o=document.querySelector(".gallery");o.innerHTML="";const t=n.map(({webformatURL:r,largeImageURL:i,tags:c,likes:u,views:d,comments:f,downloads:p})=>`<li class="card-item">
    <a href=${i}
      ><img src=${r} alt="${c}" height="200"/>
      <ul class="card-info">
        <li>
          Likes
          <p>${u}</p>
        </li>
        <li>
          Views
          <p>${d}</p>
        </li>
        <li>
          Comments
          <p>${f}</p>
        </li>
        <li>
          Downloads
          <p>${p}</p>
        </li>
      </ul></a
    >
  </li>`).join("");o.insertAdjacentHTML("beforeend",t);const s={captionsData:"alt",captionDelay:250};new m(".gallery a",s).refresh()}const S=document.querySelector(".search-form"),a=document.querySelector(".search-images"),l=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{S.addEventListener("submit",function(n){n.preventDefault();const o=a.value.trim();if(o===""){alert("Please enter a search term!");return}l.style.display="block",L(o).then(t=>{t.hits.length===0&&h.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),b(t.hits)}).catch(t=>{throw console.error("Error fetching images:",t),t}).finally(()=>{l.style.display="none"}),a.value=""})});
//# sourceMappingURL=commonHelpers.js.map
