(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(15),n(1)),s=n(2),i=n(4),u=n(3),m=n(5),p=n(8),f=n.n(p),h=(n(17),n(19),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={customers:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/customers").then(function(e){return e.json()}).then(function(t){return e.setState({customers:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"React + Express = ReactExpress"),r.a.createElement("h2",null,r.a.createElement("a",{href:"/api/customers"},"Fake Data from ExpressAPI")),r.a.createElement("ul",null,this.state.customers.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar,alt:e.firstName,className:"avatar"})),r.a.createElement("div",null,e.firstName," ",e.lastName))})))}}]),t}(a.Component)),d=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"})),r.a.createElement(h,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,n){e.exports=n(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.63fad6d9.chunk.js.map