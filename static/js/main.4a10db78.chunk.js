(this.webpackJsonpwebsume=this.webpackJsonpwebsume||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(9),n=s.n(a),i=(s(16),s(4)),r=s(5),l=s(7),o=s(6),j=s(10),d=s.n(j),h=(s(17),s(1)),b=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsx)("header",{id:"home",children:Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]})})}}]),s}(c.Component),m=b,O=s(11),u=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e={num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[.1,.4],position:"all",color:["random","#ff0000"],cross:"dead",random:15};if(Math.random()>.85&&(e=Object.assign(e,{onParticleUpdate:function(e,t){e.beginPath(),e.rect(t.p.x,t.p.y,2*t.radius,2*t.radius),e.fillStyle=t.color,e.fill(),e.closePath()}})),this.props.data)var t=this.props.data.occupation,s=this.props.data.description,c=this.props.data.address.city,a=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(O.a,{type:"custom",config:e,bg:{top:0,left:0,right:0}}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})}),Object(h.jsx)("div",{className:"banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsx)("h1",{className:"responsive-headline",children:"I'm Parker."}),Object(h.jsxs)("h3",{children:["I'm a ",c," based ",Object(h.jsx)("span",{children:t}),". ",s,"."]}),Object(h.jsx)("hr",{}),Object(h.jsx)("ul",{className:"social",children:a})]})})]})}}]),s}(c.Component),p=u,x=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("ul",{className:"social-links",children:e}),Object(h.jsxs)("ul",{className:"copyright",children:[Object(h.jsx)("li",{children:"\xa9 Copyright 2017 Tim Baker"}),Object(h.jsxs)("li",{children:["Design by ",Object(h.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),f=x,v=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,o=this.props.data.resumedownload;return Object(h.jsx)("section",{id:"about",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:t,alt:"Parker Ryan Profile Pic"})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:s}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[c,Object(h.jsx)("br",{}),a," ",n,", ",i]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:r}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:l})]})]}),Object(h.jsx)("div",{className:"columns download",children:Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:o,className:"button",children:[Object(h.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),s}(c.Component),N=v,g=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.school}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.graduated})]}),Object(h.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.company}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsx)("em",{className:"date",children:e.years})]}),Object(h.jsx)("p",{children:e.description})]},e.company)}));this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:e.level},className:t}),Object(h.jsx)("em",{children:e.name})]},e.name)}))}return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:e})})})]}),Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:t})]})]})}}]),s}(c.Component),w=g,y=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,n=this.props.data.phone,i=(this.props.data.email,this.props.data.contactmessage);return Object(h.jsxs)("section",{id:"contact",children:[Object(h.jsxs)("div",{className:"row section-head",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Get In Touch!"})})}),Object(h.jsx)("div",{className:"ten columns",children:Object(h.jsx)("p",{className:"lead",children:i})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"eight columns",children:[Object(h.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(h.jsxs)("fieldset",{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"submit",children:"Submit"}),Object(h.jsx)("span",{id:"image-loader",children:Object(h.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(h.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(h.jsxs)("div",{id:"message-success",children:[Object(h.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(h.jsx)("br",{})]})]}),Object(h.jsx)("aside",{className:"four columns footer-widgets",children:Object(h.jsxs)("div",{className:"widget widget_contact",children:[Object(h.jsx)("h4",{children:"Address and Phone"}),Object(h.jsxs)("p",{className:"address",children:[e,Object(h.jsx)("br",{}),t," ",Object(h.jsx)("br",{}),s,", ",c," ",a,Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:n})]})]})})]})]})}}]),s}(c.Component),k=y,C=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsx)("div",{className:"item-wrap",children:Object(h.jsxs)("a",{href:e.url,title:e.title,children:[Object(h.jsx)("img",{alt:e.title,src:t}),Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"portfolio-item-meta",children:[Object(h.jsx)("h5",{children:e.title}),Object(h.jsx)("p",{children:e.description})]})}),Object(h.jsx)("div",{className:"link-icon",children:Object(h.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Projects!"}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-halves cf",children:e})]})})})}}]),s}(c.Component),D=C,S=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},c}return Object(r.a)(s,[{key:"getResumeData",value:function(){d.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{data:this.state.resumeData.main}),Object(h.jsx)(p,{data:this.state.resumeData.main}),Object(h.jsx)(N,{data:this.state.resumeData.main}),Object(h.jsx)(w,{data:this.state.resumeData.resume}),Object(h.jsx)(D,{data:this.state.resumeData.portfolio}),Object(h.jsx)(k,{data:this.state.resumeData.main}),Object(h.jsx)(f,{data:this.state.resumeData.main})]})}}]),s}(c.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(h.jsx)(S,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");P?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):E(e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.4a10db78.chunk.js.map