import{S,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const v="https://pixabay.com/api/",E="43235509-ebd3145eb150405846e36d932";async function m(s){const r=new URLSearchParams({key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:15}),t=await fetch(`${v}?${r}`);if(!t.ok)throw new Error(t.statusText);return await t.json()}function p(s){const r=document.querySelector(".gallery");r.innerHTML="";const t=s.map(({webformatURL:o,largeImageURL:n,tags:f,likes:g,views:b,comments:L,downloads:w})=>`<li class="card-item">
    <a href=${n}
      ><img src=${o} alt="${f}" height="200"/>
      <ul class="card-info">
        <li>
          Likes
          <p>${g}</p>
        </li>
        <li>
          Views
          <p>${b}</p>
        </li>
        <li>
          Comments
          <p>${L}</p>
        </li>
        <li>
          Downloads
          <p>${w}</p>
        </li>
      </ul></a
    >
  </li>`).join("");r.insertAdjacentHTML("beforeend",t);const l={captionsData:"alt",captionDelay:250};new S(".gallery a",l).refresh()}const P=document.querySelector(".search-form"),y=document.querySelector(".search-images"),u=document.querySelector(".loader"),a=document.querySelector(".load-more-button");let i=1,h="",d=[];a.style.display="none";document.addEventListener("DOMContentLoaded",()=>{P.addEventListener("submit",async function(s){s.preventDefault();const r=y.value.trim();if(r===""){c.error({message:"Please enter a search term!",position:"topRight"});return}u.style.display="block",i=1;try{const t=await m(r,i);t.hits.length===0?(p([]),a.style.display="none",c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):(p(t.hits),a.style.display="block",h=r,d=t.hits,i=1)}catch(t){console.error("Error fetching images:",t),c.error({title:"Error!",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{u.style.display="none"}y.value=""})});a.addEventListener("click",async()=>{try{u.style.display="block";const s=await m(h,++i);if(s.hits.length===0)a.style.display="none",c.info({message:"You've reached the end of search results.",position:"topRight"});else{d=[...d,...s.hits],p(d);const t=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(s){console.log(s)}finally{u.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
