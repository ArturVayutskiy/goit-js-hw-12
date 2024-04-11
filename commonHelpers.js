import{S,i as a}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const v="https://pixabay.com/api/",E="43235509-ebd3145eb150405846e36d932";async function y(s){const r=new URLSearchParams({key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:u,per_page:15}),t=await fetch(`${v}?${r}`);if(!t.ok)throw new Error(t.statusText);return await t.json()}function m(s){const r=document.querySelector(".gallery");r.innerHTML="";const t=s.map(({webformatURL:o,largeImageURL:i,tags:f,likes:g,views:b,comments:L,downloads:w})=>`<li class="card-item">
    <a href=${i}
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
  </li>`).join("");r.insertAdjacentHTML("beforeend",t);const n={captionsData:"alt",captionDelay:250};new S(".gallery a",n).refresh()}const P=document.querySelector(".search-form"),p=document.querySelector(".search-images"),c=document.querySelector(".loader"),d=document.querySelector(".load-more-button");let u=1,h="",l=[];d.style.display="none";document.addEventListener("DOMContentLoaded",()=>{P.addEventListener("submit",async function(s){s.preventDefault();const r=p.value.trim();if(r===""){a.error({message:"Please enter a search term!",position:"topRight"});return}c.style.display="block";try{const t=await y(r,u);t.hits.length===0?a.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(m(t.hits),d.style.display="block",h=r,l=t.hits,u=1)}catch(t){console.error("Error fetching images:",t),a.error({title:"Error!",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{c.style.display="none"}p.value=""})});d.addEventListener("click",async()=>{try{c.style.display="block";const s=await y(h,++u);if(s.hits.length===0)d.style.display="none",a.info({message:"You've reached the end of search results.",position:"topRight"});else{l=[...l,...s.hits],m(l);const t=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(s){console.log(s)}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
