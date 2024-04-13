import{S as v,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const E="https://pixabay.com/api/",T="43235509-ebd3145eb150405846e36d932";async function m(o){const r=new URLSearchParams({key:T,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:15}),t=await fetch(`${E}?${r}`);if(!t.ok)throw new Error(t.statusText);return await t.json()}function u(o){const r=document.querySelector(".gallery");r.innerHTML="";const t=o.map(({webformatURL:s,largeImageURL:n,tags:f,likes:g,views:w,comments:b,downloads:L})=>`<li class="card-item">
    <a href=${n}
      ><img src=${s} alt="${f}" height="200"/>
      <ul class="card-info">
        <li>
          Likes
          <p>${g}</p>
        </li>
        <li>
          Views
          <p>${w}</p>
        </li>
        <li>
          Comments
          <p>${b}</p>
        </li>
        <li>
          Downloads
          <p>${L}</p>
        </li>
      </ul></a
    >
  </li>`).join("");r.insertAdjacentHTML("beforeend",t);const l={captionsData:"alt",captionDelay:250};new v(".gallery a",l).refresh()}const S=document.querySelector(".search-form"),y=document.querySelector(".search-images"),p=document.querySelector(".loader"),a=document.querySelector(".load-more-button");let i=1,h="",d=[];document.addEventListener("DOMContentLoaded",()=>{a.style.display="none"});S.addEventListener("submit",async function(o){o.preventDefault();const r=y.value.trim();if(r===""){c.error({message:"Please enter a search term!",position:"topRight"});return}p.style.display="block",i=1;try{const t=await m(r,i);t.hits.length===0?(u([]),a.style.display="none",c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):(u(t.hits),a.style.display="block",h=r,d=t.hits,i=1)}catch(t){console.error("Error fetching images:",t),c.error({title:"Error!",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{p.style.display="none"}y.value=""});a.addEventListener("click",async()=>{try{p.style.display="block";const o=await m(h,++i);if(o.hits.length===0)a.style.display="none",c.info({message:"You've reached the end of search results.",position:"topRight"});else{d=[...d,...o.hits],u(d);const t=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(o){console.log(o)}finally{p.style.display="none"}});window.addEventListener("scroll",()=>{const o=document.getElementById("scrollToTopBtn");window.scrollY>300?o.style.display="block":o.style.display="none"});document.getElementById("scrollToTopBtn").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
