(()=>{var t={676:()=>{const t=document.querySelector(".header__burger"),e=document.querySelector(".header__menu");function i(n){[t,e].forEach((t=>t.classList.toggle("active")));const r=document.querySelector(".menu-overlay");r?s(r):function(){const t=document.createElement("div");t.classList.add("menu-overlay"),document.body.append(t),t.animate([{opacity:0},{opacity:1}],{duration:300}),t.onclick=i,document.body.classList.add("blocked")}()}function s(t){t.animate([{opacity:1},{opacity:0}],{duration:300}).onfinish=()=>{t.remove(),document.body.classList.remove("blocked")}}function n(){let t,n=0;e.ontouchstart=e=>t=e.touches[0].pageX,e.ontouchmove=i=>{n=t-i.touches[0].pageX,n<0&&(e.style.right=n+"px")},e.ontouchend=()=>{e.style.right=0,n<-70&&(s(document.querySelector(".menu-overlay")),i())},e.style.transition="0.3s",e.querySelectorAll(".devider > ul").forEach((t=>t.removeAttribute("style")))}t.addEventListener("click",i);const r=window.matchMedia("(min-width: 769px)");r.addEventListener("change",(function(t){t.matches?(e.ontouchstart=null,e.ontouchmove=null,e.ontouchend=null,e.removeAttribute("style"),e.querySelectorAll(".devider > ul").forEach((t=>t.style.transition="0.6s"))):n()})),r.matches||n(),e.onclick=t=>{const e=t.target;"A"===e.tagName&&"#"===e.getAttribute("href")&&t.preventDefault()}}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,i),r.exports}(()=>{"use strict";i(676);class t{constructor(t){this.slider=t,this.wrapper=t.children[0],this.slides=Array.from(this.wrapper.children),this.currentIndex=0,this.maxIndex=this.slides.length-1,this.currentSlide=this.slides[this.currentIndex],this.timeout=null,this.duration=5e3;const e=document.createElement("ul");e.classList.add("nav");for(let t=0;t<=this.maxIndex;t++){let i=document.createElement("li");i.dataset.index=t,this.currentIndex===t&&i.classList.add("active"),e.append(i)}this.slider.append(e),e.onclick=t=>{if("LI"===t.target.tagName){if(t.target.classList.contains("active"))return;e.querySelector(".active").classList.remove("active"),t.target.classList.add("active"),this.setSlide(t.target.dataset.index)}},this.wrapper.onmouseover=()=>clearTimeout(this.timeout),this.wrapper.onmouseleave=()=>this.autoplay(),this.setHeight=this.setHeight.bind(this),this.setSlide=this.setSlide.bind(this),this.prev=this.prev.bind(this),this.next=this.next.bind(this),this.setActiveLink=this.setActiveLink.bind(this)}setHeight(){let t=this.currentSlide.children[0],e=window.getComputedStyle(t).height;this.wrapper.style.height=e}setSlide(t){clearTimeout(this.timeout),this.setActiveLink(t);let e=this.slides[t];e.style.zIndex=1,this.wrapper.append(e),this.currentSlide.animate([{opacity:1},{opacity:0}],{duration:300}).onfinish=()=>{this.currentSlide.remove(),this.currentIndex=t,this.currentSlide=this.slides[this.currentIndex],this.currentSlide.style.zIndex=2,this.autoplay()}}next(){this.currentIndex<this.maxIndex?this.setSlide(+this.currentIndex+1):this.setSlide(0)}prev(){this.currentIndex>0?this.setSlide(this.currentIndex-1):this.setSlide(this.maxIndex)}setActiveLink(t){this.slider.querySelector(".active").classList.remove("active"),this.slider.querySelector(".nav").children[t].classList.add("active")}autoplay(){this.timeout=setTimeout(this.next,this.duration)}init(){setTimeout(this.setHeight,0),this.wrapper.innerHTML="",this.wrapper.append(this.currentSlide),this.currentSlide.style.zIndex=2,window.addEventListener("resize",this.setHeight);const t=document.createElement("div");t.classList.add("prev"),t.onclick=this.prev,this.slider.append(t);const e=document.createElement("div");e.classList.add("next"),e.onclick=this.next,this.slider.append(e),this.autoplay()}}const e=document.querySelector(".slider");e&&new t(e).init();const s=[[1,1,1,1,1,1,1,1,1,1],[1,0,0,1,0,0,0,0,0,1],[1,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,1,0,0,0,1],[1,0,0,0,0,1,0,0,0,1],[1,0,0,0,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]];console.table(s),function(t){let[e,i]=function(){for(let e=0;e<t[0].length;e++)if(0===t[0][e])return[0,e];for(let e=0;e<t[t.length-1].length;e++)if(0===t[t.length-1][e])return[t.length-1,e];for(let e=0;e<t.length-1;e++)if(0===t[e][0])return[e,0];for(let e=0;e<t.length-1;e++)if(0===t[e][t[e].length-1])return[e,t[e].length-1]}(),s=null;0===e&&(s="down"),e===t.length-1&&(s="up"),0==i&&(s="right"),i===t[0].length-1&&(s="left")}(s);let n=new String("123456789");console.log(n)})()})();