(function(){"use strict";var n={2959:function(n,t,o){var r=o(9242),e=o(3396);const i={id:"app"},u=(0,e._)("h1",null,"To-Do List",-1);function f(n,t,o,r,f,c){return(0,e.wg)(),(0,e.iD)("div",i,[u,(0,e._)("ul",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.todolist,(n=>((0,e.wg)(),(0,e.iD)("li",{key:n})))),128))])])}var c=o(6265),a=o.n(c);const l={todolist:["More to do"]};var s={name:"App",data(){return l},mounted:function(){this.getList()},methods:{getList:v}};function v(){a().get("/api/lists").then((n=>{l.todolist=n.data.list}))}var d=o(89);const p=(0,d.Z)(s,[["render",f]]);var h=p;(0,r.ri)(h).mount("#app")}},t={};function o(r){var e=t[r];if(void 0!==e)return e.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,o),i.exports}o.m=n,function(){var n=[];o.O=function(t,r,e,i){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],e=n[l][1],i=n[l][2];for(var f=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(o.O).every((function(n){return o.O[n](r[c])}))?r.splice(c--,1):(f=!1,i<u&&(u=i));if(f){n.splice(l--,1);var a=e();void 0!==a&&(t=a)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,e,i]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var r in t)o.o(t,r)&&!o.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};o.O.j=function(t){return 0===n[t]};var t=function(t,r){var e,i,u=r[0],f=r[1],c=r[2],a=0;if(u.some((function(t){return 0!==n[t]}))){for(e in f)o.o(f,e)&&(o.m[e]=f[e]);if(c)var l=c(o)}for(t&&t(r);a<u.length;a++)i=u[a],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(l)},r=self["webpackChunktodo_vue"]=self["webpackChunktodo_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2959)}));r=o.O(r)})();
//# sourceMappingURL=app.4c78b3f0.js.map