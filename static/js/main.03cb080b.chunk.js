(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{12:function(e,t,n){},22:function(e,t,n){e.exports=n(47)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=n(2),u=n(3),s=n(5),l=n(4),h=(n(27),n(28),n(29),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",null,"RESTy"))}}]),n}(a.Component)),p=(n(30),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",null,"This is my footer"))}}]),n}(a.Component)),m=n(18),d=n(1),f=n.n(d),g=n(6),b=n(7),v=(n(12),n(8)),E=n.n(v);function y(e,t,n,a){return O.apply(this,arguments)}function O(){return(O=Object(g.a)(f.a.mark((function e(t,n,a,r){var o,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=j(a),c="",e.t0=n,e.next="GET"===e.t0?5:"POST"===e.t0?9:"UPDATE"===e.t0?13:"DELETE"===e.t0?17:21;break;case 5:return e.next=7,S(t);case 7:return c=e.sent,e.abrupt("break",22);case 9:return e.next=11,k(t,o);case 11:return c=e.sent,e.abrupt("break",22);case 13:return e.next=15,C(t,o,r);case 15:return c=e.sent,e.abrupt("break",22);case 17:return e.next=19,T(t,r);case 19:return c=e.sent,e.abrupt("break",22);case 21:throw new Error("Invalid Method");case 22:if(!(i=c.headers["content-type"])||-1===i.indexOf("application/json")){e.next=27;break}return e.abrupt("return",c.body);case 27:throw new Error("Invalid Response not a JSON");case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){if(e)try{var t;return console.log(e),t=JSON.parse(e),console.log(t),t}catch(n){throw new Error("Bad Object Params")}}function S(e){return w.apply(this,arguments)}function w(){return(w=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return x.apply(this,arguments)}function x(){return(x=Object(g.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(t).send(n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,n){return P.apply(this,arguments)}function P(){return(P=Object(g.a)(f.a.mark((function e(t,n,a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put(t+"".concat(a)).send(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return L.apply(this,arguments)}function L(){return(L=Object(g.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.delete(t+"".concat(n));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=n(9),N=n(19),D=n.n(N),A=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={url:"",method:"",params:"",id:""},a.onMethodChoice=a.onMethodChoice.bind(Object(b.a)(a)),a.onURLChange=a.onURLChange.bind(Object(b.a)(a)),a.onParamChange=a.onParamChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"onMethodChoice",value:function(e){this.setState({method:e.target.value})}},{key:"onURLChange",value:function(e){this.setState({url:e.target.value})}},{key:"onParamChange",value:function(e){this.setState({params:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.props.toggleLoading(),e.next=4,y(this.state.url,this.state.method,this.state.params,this.state.id);case 4:n=e.sent,this.props.handler(n),this.saveData(this.state.url,this.state.method,this.state.params,this.state.id),this.props.toggleLoading();case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveData",value:function(e,t,n,a){var r=JSON.parse(localStorage.getItem("API History"))||{},o={url:e,method:t,body:n,id:a},c=D()(JSON.stringify(o)),i=Object(m.a)({},c,o);this.props.toggleLoading(),r[c]=i,localStorage.setItem("API History",JSON.stringify(r))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{onChange:this.onMethodChoice},r.a.createElement("input",{type:"radio",value:"GET",name:"method"})," GET",r.a.createElement("input",{type:"radio",value:"POST",name:"method"})," POST",r.a.createElement("input",{type:"radio",value:"UPDATE",name:"method"})," UPDATE",r.a.createElement("input",{type:"radio",value:"DELETE",name:"method"})," DELETE"),r.a.createElement("label",null,"URL:",r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onURLChange})),r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("br",null),this.state.method,r.a.createElement("br",null),r.a.createElement(I.If,{condition:function(){return e.state.method&&/POST|UPDATE/.test(e.state.method)}},r.a.createElement(I.Then,null,r.a.createElement("div",{className:"body"},r.a.createElement("textarea",{value:this.state.value,onChange:this.onParamChange}))),r.a.createElement(I.Else,null,r.a.createElement(I.When,{condition:!0})))))}}]),n}(a.Component),J=(n(45),n(20)),U=n.n(J),R=function(e){return 0!==e.data.length?r.a.createElement("div",{className:"loading-".concat(e.loading," output")},r.a.createElement(U.a,{id:"json-pretty",data:e.data,replacer:function(e,t){return"cccc"===e&&(t+="~~~abc"),"gggg"===e&&(t*=10),t},space:"6"})):r.a.createElement("div",{className:"empty"},"Waiting for input")},H=n(21);n(46);var M=function(e){var t=Object(a.useState)(JSON.parse(localStorage.getItem("API History"))||{}),n=Object(H.a)(t,2),o=n[0],c=n[1];r.a.useEffect((function(){window.addEventListener("storage",(function(){c(JSON.parse(localStorage.getItem("API History"))||{}),console.log(o)}))})),console.log(o);var i=function(){return o.map((function(e,t){return r.a.createElement("li",{key:t},e.name)}))};return r.a.createElement("aside",null,r.a.createElement("div",{className:"title"},"Aside"),r.a.createElement("hr",null),r.a.createElement("ul",{className:"list"},i))},W=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).toggleLoading=function(){a.setState({loading:!a.state.loading})},a.updateHandler=function(e){console.log(e),a.setState({results:e})},a.state={loading:!1,results:[]},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(M,null),r.a.createElement("main",null,r.a.createElement(A,{toggleLoading:this.toggleLoading,handler:this.updateHandler}),r.a.createElement(R,{loading:this.state.loading,data:this.state.results})),r.a.createElement(p,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.03cb080b.chunk.js.map