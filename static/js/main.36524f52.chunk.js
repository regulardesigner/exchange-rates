(this["webpackJsonpexchange-rates"]=this["webpackJsonpexchange-rates"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(3),l=t.n(s),c=(t(14),t(1)),i=t(4),o=t(5),u=t(7),m=t(6),h=t(8),g=(t(15),t(16),function(e){var a=e.result,t=e.currency,n=e.title,s=(.1*a).toFixed(2),l=(.15*a).toFixed(2),c=(.2*a).toFixed(2);return r.a.createElement("section",{className:"tips"},r.a.createElement("h2",{style:{textAlign:"center",marginTop:"2em"}},n),r.a.createElement("div",{className:"tips-boxes"},r.a.createElement("div",{className:"tips-boxes-10"},r.a.createElement("span",{className:"emo",role:"img","aria-label":"Neutral face"},"\ud83d\ude10"),s," ",t),r.a.createElement("div",{className:"tips-boxes-15"},r.a.createElement("span",{className:"emo",role:"img","aria-label":"Slightly smiling face"},"\ud83d\ude42"),l," ",t),r.a.createElement("div",{className:"tips-boxes-20"},r.a.createElement("span",{className:"emo",role:"img","aria-label":"Grinning face"},"\ud83d\ude03"),c," ",t)))}),d=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){var a=Object(c.a)({},t.state).exchange,n=e.target,r=n.name,s=n.value;a[r]=s,t.setState({exchange:a})},t.handleLanguageChange=function(e){e.preventDefault();var a=e.target.name;t.setState({language:a,languageDrawer:"close"})},t.handleLanguageDrawer=function(e){e.preventDefault();var a=t.state.languageDrawer;console.log(a),"close"===a?t.setState({languageDrawer:"open"}):t.setState({languageDrawer:"close"})},t.handleCurrencyChange=function(e){var a=e.target,n=a.name,r=a.value;if("base"===n)t.setState({isLoading:!0}),fetch("https://api.exchangeratesapi.io/latest?base=".concat(r)).then((function(e){return e.json()})).catch((function(e){console.error(e),t.setState({fetchError:!0})})).then((function(e){t.setState({isLoading:!1,rates:e,date:e.date,exchange:{base:1,selected:e.rates[r]},currencies:{base:r,selected:r}})}));else{var s=Object(c.a)({},t.state).currencies,l=Object(c.a)({},t.state).exchange;s[n]=r,l.selected=t.state.rates.rates[r],t.setState({currencies:s,exchange:l})}},t.state={isLoading:!0,fetchError:!1,rates:null,currencies:{base:"USD",selected:"EUR"},exchange:{base:1,selected:null},language:"us",languageDrawer:"close",i18n:{available:["us","es","fr"],baseline:{us:"Get instant exchange rate",es:"Tipo de cambio instant\xe1neo",fr:"Taux de change instantan\xe9"},title:{us:"Tips calculator",es:"Calculadora de propinas",fr:"Calcul de pourboires"},update:{us:"Exchange rates updated",es:"Actualizaciones de tasas de cambio",fr:"Mis \xe0 jour du taux de change"}}},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){return e.json()})).catch((function(a){console.error(a),e.setState({fetchError:!0})})).then((function(a){e.setState({isLoading:!1,rates:a,date:a.date,exchange:{base:1,selected:a.rates.EUR}})}))}},{key:"screen",value:function(){var e=this,a=this.state.exchange,t=a.base,n=a.selected,s=this.state.date,l=this.state.i18n,c=this.state.language,i=this.state.languageDrawer,o=this.state.i18n.available;return r.a.createElement("div",{className:"app-container"},r.a.createElement("header",{className:"app-header"},r.a.createElement("ul",{className:"language-selector ".concat(i)},r.a.createElement("li",null,r.a.createElement("a",{href:"#default",className:"language-selector-default",name:"default",onClick:this.handleLanguageDrawer},c)),o.map((function(a,t){return r.a.createElement("li",null,r.a.createElement("a",{id:t,className:"language-selector-"+a,href:"#lang=".concat(a),name:a,onClick:e.handleLanguageChange},a))}))),r.a.createElement("h1",{style:{marginTop:"1.4rem",textAlign:"center",marginBottom:".4em"}},"Exchange rates"),r.a.createElement("h2",{className:"baseline"},l.baseline[c])),r.a.createElement("section",null,r.a.createElement("div",{className:"app-exchange"},r.a.createElement("div",{className:"input from"},r.a.createElement("input",{className:"input-item",type:"number",name:"base",value:t,onChange:this.handleChange}),r.a.createElement("select",{name:"base",onChange:this.handleCurrencyChange,value:this.state.currencies.base},r.a.createElement("option",{value:"AUD"},"AUD"),r.a.createElement("option",{value:"CAD"},"CAD"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"EUR"},"EUR"))),r.a.createElement("div",{className:"input to"},r.a.createElement("input",{disabled:!0,className:"input-item",type:"number",name:"selected",value:(t*n).toFixed(2)}),r.a.createElement("select",{name:"selected",onChange:this.handleCurrencyChange,value:this.state.currencies.selected},r.a.createElement("option",{value:"AUD"},"AUD"),r.a.createElement("option",{value:"CAD"},"CAD"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"EUR"},"EUR"))))),r.a.createElement(g,{result:t,currency:this.state.currencies.base,title:l.title[c]}),r.a.createElement("footer",{style:{fontSize:"1em",textAlign:"center",marginTop:"1.6em",textTransform:"uppercase",fontWeight:"bold",color:"#222525"}},l.update[c],": ",s))}},{key:"loading",value:function(){return r.a.createElement("div",{className:"app-load"},"Fetching rates datas")}},{key:"error",value:function(){return r.a.createElement("div",{className:"app-error"},r.a.createElement("h1",null,"FETCH ERROR"),r.a.createElement("p",null,"Take a look at the console.log error..."))}},{key:"render",value:function(){var e=this.state.isLoading,a=this.state.fetchError;return r.a.createElement("div",{className:"app"},a&&this.error(),e&&this.loading(),e||this.screen())}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.36524f52.chunk.js.map