(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(10),s=a.n(l),c=(a(18),a(25));a(9);var u=e=>{let{data:t}=e;return r.a.createElement("div",{className:"leaderboard-container"},r.a.createElement("div",{className:"leaderboard"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Points"))),r.a.createElement("tbody",null,t.map(e=>r.a.createElement("tr",{key:e.username},r.a.createElement("td",null,e.rank),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.points)))))),r.a.createElement("div",{className:"image-container"}))};var o=e=>{let{query:t,onQueryChange:a}=e;return r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"text",placeholder:"Search for a username...",value:t,onChange:e=>a(e.target.value)}))};var m=function(){const[e,t]=Object(n.useState)([]),[a,l]=Object(n.useState)("");Object(n.useEffect)(()=>{(async()=>{const e=(await c.a.get("https://sheets.googleapis.com/v4/spreadsheets/1BslvSmrx1l2W_k_CPlWGs8fLspdVS6Evpgz1rFaApsM/values/Sheet1!A:B?key=AIzaSyAAPe6cTZHCF-qO6TBGSmVMkMkvY2T9_MQ")).data.values.slice(1).map(e=>{let[t,a]=e;return{username:t,points:parseInt(a)}});t(e)})()},[]);const s=e.filter(e=>e.username.toLowerCase().includes(a.toLowerCase())).sort((e,t)=>t.points-e.points).map((e,t)=>({...e,rank:t+1}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Puppies Leaderboard"),r.a.createElement(o,{query:a,onQueryChange:l}),r.a.createElement(u,{data:s}))};var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:l,getTTFB:s}=t;a(e),n(e),r(e),l(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null))),i()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.fda4b0c3.chunk.js.map