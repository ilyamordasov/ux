(this.webpackJsonpsignup=this.webpackJsonpsignup||[]).push([[0],{47:function(e,t,a){e.exports=a(87)},52:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(40),o=a.n(r),c=(a(52),a(10)),s=a(5),i=a(11),m=a(12),u=a(19),p=a(14),d=a(13),E=(a(20),a(90)),g=a(91),h=a(88),f=a(89),b=a(43),v=a(41),y={emailAddress:{presence:{allowEmpty:!1,message:"^\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 email"},email:{message:"^\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 email"}}},C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).email=l.a.createRef(),n.state={email:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleSubmit",value:function(e){var t=Object(v.validate)(this.state.data,y);this.setState({errors:JSON.stringify(t.emailAddress[0])}),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement(h.a,{className:"p-3",visible:this.props.visible},l.a.createElement(f.a,{style:{height:200}},l.a.createElement(b.a,null,l.a.createElement("img",{src:"https://factoringplus.ru/images/logo.svg"})),l.a.createElement(b.a,{style:{right:0},ref:this.email},l.a.createElement("label",null,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"formBasicEmail"},l.a.createElement(E.a.Label,null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email"),l.a.createElement(E.a.Control,{type:"email",placeholder:"Enter email",onChange:this.handleChange}),l.a.createElement(E.a.Text,{className:"text-muted",style:{color:"#ff0000"}},this.state.errors)),l.a.createElement(E.a.Group,{controlId:"formBasicPassword"},l.a.createElement(E.a.Label,null,"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement(E.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(E.a.Group,{controlId:"retypeBasicPassword"},l.a.createElement(E.a.Label,null,"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement(E.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(E.a.Group,null,l.a.createElement("input",{type:"checkbox",id:"claims"}),l.a.createElement("label",null,"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441\u043e \u0432\u0441\u0435\u043c\u0438 claims")),l.a.createElement(c.b,{to:"/step1/"+this.state.email},l.a.createElement(g.a,{variant:"primary"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))))}}]),a}(l.a.Component),S=a(45),w=a.n(S),j=function(e){return e.name},O=function(e){return l.a.createElement("span",{style:{backgroundColor:"#fff"}},e.name)},k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChange=function(e,t){var a=t.newValue;n.setState({value:a})},n.renderSuggestionsContainer=function(e){var t=e.containerProps,a=e.children;e.query;return l.a.createElement("div",t,a)},n.renderInputComponent=function(e){return l.a.createElement("div",null,l.a.createElement(E.a.Control,Object.assign({},e,{type:"text",placeholder:n.props.placeholder})))},n.onSuggestionsFetchRequested=function(e){var t=e.value,a=new Headers;a.append("Authorization","Token cd5426b6f89b5b6b0ae66f413304c14f7da18704"),a.append("Content-Type","application/json");var l={method:"POST",headers:a,body:JSON.stringify({query:t}),redirect:"follow"};if(t.length>3){var r=[];fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/"+n.props.method,l).then((function(e){return e.json()})).then((function(e){e.suggestions.map((function(e){r.push({name:e.value,inn:e.data.inn,ogrn:e.data.ogrn})})),n.setState({suggestions:r})})).catch((function(e){return console.log("error",e)}))}},n.onSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.onSuggestionSelected=function(e,t){var a=t.suggestion;n.props.callback&&n.props.callback(a)},n.state={value:"",suggestions:[]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={placeholder:this.props.palceholder,value:t,onChange:this.onChange};return l.a.createElement(w.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:j,renderSuggestion:O,renderInputComponent:this.renderInputComponent,renderSuggestionsContainer:this.renderSuggestionsContainer,onSuggestionSelected:this.onSuggestionSelected,inputProps:n})}}]),a}(l.a.Component),I=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={email:window.location.pathname.split("/")[2]},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{className:"p-3"},l.a.createElement(f.a,{style:{height:200}},l.a.createElement(b.a,null,l.a.createElement("img",{src:"https://factoringplus.ru/images/logo.svg"})),l.a.createElement(b.a,{style:{right:0}},l.a.createElement("label",null,this.state.email))),l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement("div",{style:{display:"flex",width:"100%",height:200,padding:40,backgroundColor:"#f8f8f8",justifyContent:"center",alignItems:"center"}},l.a.createElement("div",{style:{width:550,textAlign:"center"}},"\u041a\u0430\u043a\u0430\u044f-\u0442\u043e \u0443\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0438\u043b\u0438 \u0438\u043d\u0444\u043e\u0433\u0440\u0430\u0444\u0438\u043a\u0430, \u043f\u043e\u0431\u0443\u0434\u0438\u0442\u044c \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 + \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432")),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(c.b,{to:"/step2/"+this.state.email},l.a.createElement(g.a,{variant:"primary"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c?"))))))}}]),a}(l.a.Component),x=a(46),B=a.n(x),G=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setData=function(e){console.log(e.inn),n.setState({inn:e.inn,ogrn:e.ogrn})},n.state={inn:"",ogrn:"",email:window.location.pathname.split("/")[2]},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{className:"p-3"},l.a.createElement(f.a,{style:{height:100}},l.a.createElement(b.a,null,l.a.createElement("img",{src:"https://factoringplus.ru/images/logo.svg"})),l.a.createElement(b.a,{style:{right:0}},l.a.createElement("label",null,this.state.email)),l.a.createElement(b.a,null,l.a.createElement(c.b,{to:"/form0"},l.a.createElement(g.a,{variant:"light"},"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u043f\u043e\u0437\u0436\u0435")))),l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(B.a,{steps:[{title:"Step One"},{title:"Step Two"},{title:"Step Three"},{title:"Step Four"}],activeStep:0}),l.a.createElement("br",null))),l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement("h1",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(b.a,{sm:!0},l.a.createElement(E.a.Group,{controlId:"formBasicEmail"},l.a.createElement(E.a.Label,null,"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),l.a.createElement(k,{placeholder:"\u0418\u041d\u041d \u0438\u043b\u0438 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",callback:this.setData,method:"party"}))),l.a.createElement(b.a,{sm:!0},l.a.createElement(E.a.Group,{controlId:"formBasicEmail"},l.a.createElement(E.a.Label,null,"\u0418\u041d\u041d \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),l.a.createElement(E.a.Control,{type:"text",value:this.state.inn,disabled:!0}))),l.a.createElement(b.a,{sm:!0},l.a.createElement(E.a.Group,{controlId:"formBasicEmail"},l.a.createElement(E.a.Label,null,"\u041e\u0413\u0420\u041d \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),l.a.createElement(E.a.Control,{type:"text",value:this.state.ogrn,disabled:!0})))),l.a.createElement(f.a,null,l.a.createElement(b.a,{sm:!0},l.a.createElement(E.a.Group,{controlId:"formBasicPassword"},l.a.createElement(E.a.Label,null,"\u0424\u0418\u041e"),l.a.createElement(k,{placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",method:"fio"}))),l.a.createElement(b.a,{sm:!0},l.a.createElement(E.a.Group,{controlId:"retypeBasicPassword"},l.a.createElement(E.a.Label,null,"\u0412\u0430\u0448\u0430 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"),l.a.createElement(E.a.Control,{type:"text",placeholder:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440"}))),l.a.createElement(b.a,{sm:!0},l.a.createElement(E.a.Group,{controlId:"retypeBasicPassword"},l.a.createElement(E.a.Label,null,"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),l.a.createElement(E.a.Control,{type:"text",placeholder:"+7 903 000 00 00"}))))))),l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(c.b,{to:"/step3"},l.a.createElement(g.a,{variant:"primary"},"\u0414\u0430\u043b\u0435\u0435"))))))}}]),a}(l.a.Component);function P(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/step2"},l.a.createElement(G,null)),l.a.createElement(s.a,{path:"/step1/:email"},l.a.createElement(I,null)),l.a.createElement(s.a,{path:"/"},l.a.createElement(C,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.498338e0.chunk.js.map