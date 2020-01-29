(this["webpackJsonpexchange-rates"]=this["webpackJsonpexchange-rates"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),o=(a(14),a(1)),l=a(4),i=a(5),u=a(7),h=a(6),d=a(8),m=(a(15),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=Object(o.a)({},a.state).exchange,n=e.target,r=n.name,c=n.value;t[r]=c,a.setState({exchange:t})},a.handleCurrencyChange=function(e){var t=e.target,n=t.name,r=t.value;if("base"===n)a.setState({isLoading:!0}),fetch("https://api.exchangeratesapi.io/latest?base=".concat(r)).then((function(e){return e.json()})).catch((function(e){console.error(e),a.setState({fetchError:!0})})).then((function(e){a.setState({isLoading:!1,rates:e,date:e.date,exchange:{base:1,selected:e.rates[r]},currencies:{base:r,selected:"USD"}})}));else{var c=Object(o.a)({},a.state).currencies,s=Object(o.a)({},a.state).exchange;c[n]=r,s.selected=a.state.rates.rates[r],a.setState({currencies:c,exchange:s})}},a.state={isLoading:!0,fetchError:!1,rates:null,currencies:{base:"EUR",selected:"USD"},exchange:{base:1,selected:null}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).catch((function(t){console.error(t),e.setState({fetchError:!0})})).then((function(t){e.setState({isLoading:!1,rates:t,date:t.date,exchange:{base:1,selected:t.rates.USD}})}))}},{key:"screen",value:function(){var e=this.state.exchange,t=e.base,a=e.selected;return r.a.createElement("div",{className:"app-container"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"Exchange rates"),r.a.createElement("div",{className:"app-exchange"},r.a.createElement("div",{className:"input from"},r.a.createElement("input",{type:"number",name:"base",value:t,onChange:this.handleChange}),r.a.createElement("select",{name:"base",onChange:this.handleCurrencyChange,value:this.state.currencies.base},r.a.createElement("option",{value:"AUD"},"AUD"),r.a.createElement("option",{value:"CAD"},"CAD"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"EUR"},"EUR"))),r.a.createElement("div",{className:"input to"},r.a.createElement("input",{disabled:!0,type:"number",name:"selected",value:(t*a).toFixed(2)}),r.a.createElement("select",{name:"selected",onChange:this.handleCurrencyChange,value:this.state.currencies.selected},r.a.createElement("option",{value:"AUD"},"AUD"),r.a.createElement("option",{value:"CAD"},"CAD"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"EUR"},"EUR"))))))}},{key:"loading",value:function(){return r.a.createElement("div",{className:"app-load"},"Fetching rates datas")}},{key:"error",value:function(){return r.a.createElement("div",{className:"app-error"},r.a.createElement("h1",null,"FETCH ERROR"),r.a.createElement("p",null,"Take a look at the console.log error..."))}},{key:"render",value:function(){var e=this.state.isLoading,t=this.state.fetchError;return r.a.createElement("div",{className:"app"},t&&this.error(),e&&this.loading(),e||this.screen())}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.81e12cdd.chunk.js.map