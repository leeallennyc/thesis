(function(e){function t(t){for(var r,i,o=t[0],l=t[1],s=t[2],d=0,b=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"32d3":function(e,t,n){"use strict";n("cf3e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("99af"),{class:"points"});function c(e,t,n,c,i,o){var l=Object(r["g"])("LabeledPoint"),s=Object(r["g"])("XAxis"),u=Object(r["g"])("YAxis");return Object(r["e"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",null,[Object(r["d"])("select",{onChange:t[1]||(t[1]=function(){return o.setXVar&&o.setXVar.apply(o,arguments)})},[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["f"])(i.variables,(function(e){return Object(r["e"])(),Object(r["c"])("option",{key:e,label:e,selected:e===i.xVar,value:e},null,8,["label","selected","value"])})),128))],32),Object(r["d"])("select",{onChange:t[2]||(t[2]=function(){return o.setYVar&&o.setYVar.apply(o,arguments)})},[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["f"])(i.variables,(function(e){return Object(r["e"])(),Object(r["c"])("option",{key:e,label:e,selected:e===i.yVar,value:e},null,8,["label","selected","value"])})),128))],32)]),(Object(r["e"])(),Object(r["c"])("svg",{height:i.height,width:i.width},[Object(r["d"])("g",a,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["f"])(i.points,(function(e){return Object(r["e"])(),Object(r["c"])(l,{key:e.key,x:o.xScale(e[i.xVar]),y:o.yScale(e[i.yVar]),text:"(".concat(e[i.xVar],", ").concat(e[i.yVar],")"),r:5,onHover:function(){return o.setHovered(e.species)},resetHover:function(){return o.setHovered("")},fill:o.getFill(e.species)},null,8,["x","y","text","onHover","resetHover","fill"])})),128))]),Object(r["d"])(s,{xScale:o.xScale,yTranslate:i.height-i.margin},null,8,["xScale","yTranslate"]),Object(r["d"])(u,{yScale:o.yScale,xTranslate:i.margin},null,8,["yScale","xTranslate"])],8,["height","width"]))],64)}n("4de4"),n("4160"),n("a630"),n("c975"),n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0");var i=n("5530"),o=n("5698"),l=(n("cb29"),Object(r["i"])("data-v-17c86dda")),s=l((function(e,t,n,a,c,i){return Object(r["e"])(),Object(r["c"])("g",{class:"labeled-point",transform:"translate(".concat(n.x,", ").concat(n.y,")"),onMouseenter:t[1]||(t[1]=function(){return n.onHover&&n.onHover.apply(n,arguments)}),onMouseleave:t[2]||(t[2]=function(){return n.resetHover&&n.resetHover.apply(n,arguments)})},[Object(r["d"])("circle",{r:n.r,fill:n.fill},null,8,["r","fill"]),Object(r["d"])("text",null,Object(r["h"])(n.text),1)],40,["transform"])})),u=(n("a9e3"),{name:"LabeledPoint",props:{x:Number,y:Number,r:Number,fill:String,text:String,onHover:Function,resetHover:Function}});n("32d3");u.render=s,u.__scopeId="data-v-17c86dda";var d=u,b=Object(r["i"])("data-v-5a58c721"),f=b((function(e,t,n,a,c,i){return Object(r["e"])(),Object(r["c"])("g",{class:"axis x-axis",transform:"translate(0, ".concat(n.yTranslate,")")},null,8,["transform"])})),p={name:"XAxis",props:{xScale:Function,yTranslate:Number},updated:function(){Object(o["f"])(".x-axis").call(Object(o["a"])(this.xScale).ticks(10))}};p.render=f,p.__scopeId="data-v-5a58c721";var v=p,h=Object(r["i"])("data-v-30d4a182"),O=h((function(e,t,n,a,c,i){return Object(r["e"])(),Object(r["c"])("g",{class:"axis y-axis",transform:"translate(".concat(n.xTranslate,", 0)")},null,8,["transform"])})),j={name:"YAxis",props:{yScale:Function,xTranslate:Number},updated:function(){Object(o["f"])(".y-axis").call(Object(o["b"])(this.yScale).ticks(10))}};j.render=O,j.__scopeId="data-v-30d4a182";var y=j,x=["#ff8800","#dd44dd","#00dd88"],g={name:"App",created:function(){var e=this;Object(o["c"])("https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv").then((function(t){var n=t.columns.filter((function(e){return"species"!==e}));e.points=t.map((function(e,t){var r=Object(i["a"])(Object(i["a"])({},e),{},{key:"".concat(e.species,"-").concat(t)});return n.forEach((function(t){return r[t]=+e[t]})),r})),e.species=Array.from(new Set(t.map((function(e){return e.species})))),e.variables=n}))},components:{LabeledPoint:d,XAxis:v,YAxis:y},computed:{xScale:function(){var e=this;return Object(o["e"])().domain([0,Object(o["d"])(this.points,(function(t){return t[e.xVar]}))]).range([this.margin,this.width-this.margin])},yScale:function(){var e=this;return Object(o["e"])().domain([0,Object(o["d"])(this.points,(function(t){return t[e.yVar]}))]).range([this.height-this.margin,this.margin])}},data:function(){return{points:[],xVar:"sepal_length",yVar:"petal_width",margin:30,width:300,height:200,species:[],hovered:"",variables:[]}},methods:{setHovered:function(e){this.hovered=e},getFill:function(e){if(e===this.hovered){var t=this.species.indexOf(e);return x[t]}return"black"},setXVar:function(e){this.xVar=e.target.value},setYVar:function(e){this.yVar=e.target.value}}};g.render=c;var m=g;Object(r["b"])(m).mount("#app")},cf3e:function(e,t,n){}});
//# sourceMappingURL=app.4dea5571.js.map