import{d as p,r as w,o as S,a as b,b as f,c as m,e as v,f as e,g as o,w as r,n,h as c,p as k,i as $,_ as g,F as I}from"./index-HH4mXSUO.js";const _=a=>(k("data-v-142884ea"),a=a(),$(),a),y={class:"header"},C={class:"home"},H=_(()=>e("i",{class:"fa fa-home","aria-hidden":"true"}," ",-1)),V={class:"some"},M=_(()=>e("li",{class:"li"},[e("a",{href:"https://github.com/ZephyrsPer",class:"nav-link"},[c("GitHub  "),e("i",{class:"fa fa-share-alt","aria-hidden":"true"})])],-1)),q={class:"li"},B=_(()=>e("i",{class:"fa fa-external-link","aria-hidden":"true"},null,-1)),E=p({__name:"ZeHeader",setup(a){const l=w(!1),h=()=>{l.value=!l.value};S(()=>{document.addEventListener("click",i)}),b(()=>{document.removeEventListener("click",i)});const i=t=>{const d=document.querySelector(".header"),s=document.querySelector(".header .menu"),u=document.querySelector(".header .some");d&&s&&u&&!s.contains(t.target)&&!u.contains(t.target)&&(l.value=!1)};return(t,d)=>{const s=f("router-link");return m(),v("header",y,[e("span",C,[o(s,{to:"/",class:n(["nav-link",{active:t.$route.path==="/"}])},{default:r(()=>[H,c("首页 ")]),_:1},8,["class"]),o(s,{to:"/about",class:n(["nav-link",{active:t.$route.path==="/about"}])},{default:r(()=>[c(" 关于 ")]),_:1},8,["class"]),o(s,{to:"/special",class:n(["nav-link",{active:t.$route.path==="/Some"}])},{default:r(()=>[c(" 特效库 ")]),_:1},8,["class"]),o(s,{to:"/sort",class:n(["nav-link",{active:t.$route.path==="/category"}])},{default:r(()=>[c(" 分类 ")]),_:1},8,["class"]),o(s,{to:"/archive",class:n(["nav-link",{active:t.$route.path==="/archive"}])},{default:r(()=>[c(" 归档 ")]),_:1},8,["class"])]),e("span",{class:"menu",onClick:d[0]||(d[0]=u=>h())},[e("i",{class:n(l.value?"fa fa fa-times fa-lg":"fa fa-bars fa-lg"),"aria-hidden":"true"},null,2)]),e("span",{class:n(["others",{"menu-open":l.value}])},[e("ul",V,[M,e("li",q,[o(s,{to:"/res",class:"nav-link"},{default:r(()=>[c("资源  "),B]),_:1})])])],2)])}}}),N=g(E,[["__scopeId","data-v-142884ea"]]),Z=a=>(k("data-v-8d3d35e5"),a=a(),$(),a),x={class:"contents"},F={class:"header"},L={class:"section"},O=Z(()=>e("footer",{class:"footer"},null,-1)),z=p({__name:"HomeView",setup(a){return(l,h)=>{const i=f("router-view");return m(),v(I,null,[e("div",x,[e("header",F,[o(N)]),e("section",L,[o(i)])]),O],64)}}}),P=g(z,[["__scopeId","data-v-8d3d35e5"]]);export{P as default};
