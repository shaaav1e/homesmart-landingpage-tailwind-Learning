(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l=document.getElementById("menu"),i=document.getElementById("menubar"),r=document.getElementById("icon");l.addEventListener("click",()=>{i.classList.toggle("hidden"),i.classList.toggle("flex"),i.classList.contains("hidden")?(r.classList.remove("ri-close-large-line"),r.classList.add("ri-menu-3-line")):(r.classList.remove("ri-menu-3-line"),r.classList.add("ri-close-large-line"))});
