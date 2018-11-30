(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(50),o=a.n(r),c=a(33),i=a(34),s=a(36),m=a(35),p=a(37),d=a(20),f=a(16),u=a(51),E=a.n(u),y=a(9),b=a.n(y),h=a(2),g=a.n(h),S=a(77),x=a.n(S),w=a(53),v=a.n(w),k=a(78),N=a.n(k),z=a(10),I=a.n(z),M=a(21),j=a(12),C=a(52),T=a.n(C),O={colors:["#8c5fc4","#61b8ff","#f7d286","#e86971","#76bb7f","#5bbeca"],skills:[{label:"React",fontSize:6,opacity:8},{label:"jQuery",fontSize:9,opacity:9},{label:"ES6",fontSize:4,opacity:7},{label:"webpack",fontSize:4,opacity:4},{label:"Redux",fontSize:4,opacity:7},{label:"HTML5",fontSize:9,opacity:9},{label:"JSON APIs",fontSize:9,opacity:6},{label:"JavaScript",fontSize:9,opacity:8},{label:"CSS3",fontSize:9,opacity:9},{label:"PHP",fontSize:8,opacity:3},{label:"MySQL",fontSize:8,opacity:4},{label:"WordPress",fontSize:9,opacity:8},{label:"Git",fontSize:8,opacity:8},{label:"GitHub",fontSize:8,opacity:8},{label:"HTML DOM",fontSize:8,opacity:8},{label:"SASS",fontSize:6,opacity:6},{label:"Node.js",fontSize:4,opacity:4},{label:"JSX",fontSize:4,opacity:5},{label:"Redux Saga",fontSize:4,opacity:6},{label:"Immutable",fontSize:4,opacity:5},{label:"CSS JavaScript",fontSize:4,opacity:6},{label:"Bootstrap",fontSize:6,opacity:8},{label:"Material.UI",fontSize:6,opacity:8},{label:"GraphQL",fontSize:1,opacity:4},{label:"Babel",fontSize:4,opacity:6},{label:"Jest",fontSize:4,opacity:6},{label:"Enzyme",fontSize:4,opacity:6},{label:"Chai",fontSize:4,opacity:6}]},R=O;function D(){return O.colors[Math.floor(Math.random()*O.colors.length)]}var J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.seperator,t=this.props.text.split(e||" ");return R?l.a.createElement(n.Fragment,null,t&&t.map(function(t,a){return l.a.createElement("span",{key:a,style:{color:D()}},t,e||" ")})):l.a.createElement("p",null,"loading...")}}]),t}(n.Component),P=a(74),F=a.n(P),H=a(15),L=a(76),W=a.n(L),B=Object(H.createMuiTheme)({palette:{},typography:{useNextVariants:!0},overrides:{MuiTypography:{root:{color:"white",fontFamily:"turkish_another_typewriterRg"},body2:{color:"white",fontFamily:"turkish_another_typewriterRg"}}}});var _=function(e){return function(t){return l.a.createElement(H.MuiThemeProvider,{theme:B},l.a.createElement(W.a,null),l.a.createElement(e,t))}},V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onVisibilitySensorChange=a.onVisibilitySensorChange.bind(Object(d.a)(Object(d.a)(a))),a.state={visible:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onVisibilitySensorChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){var e=this.props.classes,t=R.skills,a=R.colors;return l.a.createElement("div",{className:e.root},l.a.createElement(g.a,{container:!0,spacing:24,style:{maxWidth:"1150px",margin:"0 auto",width:"100%"}},l.a.createElement(g.a,{item:!0,xs:12,sm:12,md:3},l.a.createElement(b.a,{className:e.paperCenter},l.a.createElement(g.a,{container:!0,spacing:24},l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(x.a,{className:e.profileCard},l.a.createElement(v.a,null,l.a.createElement(N.a,{className:e.avatar},l.a.createElement("img",{src:F.a,alt:"veysi y\u0131ld\u0131z",style:{height:"100%"}}))),l.a.createElement(v.a,null,l.a.createElement(I.a,{component:"h3",className:e.name},"veysi y\u0131ld\u0131z"),l.a.createElement(I.a,{component:"p"},"FrontEndDeveloper"),l.a.createElement(M.SocialIcon,{url:"https://www.linkedin.com/in/veysiyildiz/",color:"#ffffff",className:e.socialIcon}),l.a.createElement(M.SocialIcon,{url:"http://instagram.com/veysiy",color:"#ffffff",className:e.socialIcon}),l.a.createElement(M.SocialIcon,{url:"http://twitter.com/veysiyildiz",color:"#ffffff",className:e.socialIcon}),l.a.createElement(M.SocialIcon,{url:"http://facebook.com/biliyem",color:"#ffffff",className:e.socialIcon}))))))),l.a.createElement(g.a,{item:!0,xs:12,sm:12,md:9},l.a.createElement(g.a,{container:!0,spacing:24},l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(b.a,{className:e.paper},l.a.createElement(g.a,{container:!0,spacing:24},l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(I.a,{component:"h1",className:e.title},"about me"),l.a.createElement("p",{className:e.leftMarg},l.a.createElement(J,{text:"Experienced Frontend Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Javascript, User Experience, SEO, PHP, E-commerce, and WordPress. Focused on React, Redux, Webpack and Node",seperator:"."})))))),l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(b.a,{className:e.paper},l.a.createElement(g.a,{container:!0,spacing:24},l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(I.a,{component:"h1",className:e.title},"professional skills"),l.a.createElement(E.a,{partialVisibility:!0,offset:{bottom:80},onChange:this.onVisibilitySensorChange},l.a.createElement(T.a,{className:"tag-cloud",rotate:null,data:t,colorarray:a,style:{fontFamily:"sans-serif",fontSize:30,padding:5,width:"100%",height:"600px"}},Object(C.renderData)(t))))))),l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(b.a,{className:e.paperTimeline},l.a.createElement(g.a,{container:!0,spacing:0},l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(I.a,{component:"h1",className:e.title},"work experience & education"),l.a.createElement(j.Timeline,{lineColor:"#61b8ff"},l.a.createElement(j.TimelineItem,{dateText:"11/2010 \u2013 Now",bodyContainerStyle:{color:"#fff"},dateInnerStyle:{background:"#61b8ff"}},l.a.createElement("h3",{style:{color:"#61b8ff"}},"Overteam, Istanbul"),l.a.createElement("h4",{style:{color:"#61b8ff"}},"Senior Front End Developer"),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Mentored and trained 4 junior front-end developer in 8 years.")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Responsible for all aspects of frontend architecture and development, including business focussed trade-offs around technology, features, quality and test strategy.")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Worked with the team of architects and back-end Developers to gather requirements and enhance the application functionality and add new features.")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Developed the UI, layout and front-end programming for the web applications using HTML, CSS, jQuery and JavaScript that matches requirements.")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Responsible for all client side UI Validation, custom validations and implementing Business logic based on user selection using JQuery UI and ReactJS.")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Involved in developing the responsive web pages for mobile, tablet and desktop using CSS3 Media queries.")),l.a.createElement("span",{className:e.timelineDate})),l.a.createElement(j.TimelineItem,{dateText:"04/2009 \u2013 11/2010",className:"",bodyContainerStyle:{color:"#fff"},dateInnerStyle:{background:"#8c5fc4"}},l.a.createElement("h3",{style:{color:"#8c5fc4"}},"Madebycat, Istanbul"),l.a.createElement("h4",{style:{color:"#8c5fc4"}},"Front End Developer"),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Deciding Information Architecture for clients, building websites.")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Front-end coding and CMS integration of new projects.")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"More HTML email templates."))),l.a.createElement(j.TimelineItem,{dateText:"11/2008 \u2013 04/2009",className:"",bodyContainerStyle:{color:"#fff"},dateInnerStyle:{background:"#f7d286",color:"#333"}},l.a.createElement("h3",{style:{color:"#f7d286"}},"Madebycat, Istanbul"),l.a.createElement("h4",{style:{color:"#f7d286"}},"Interface Coder"),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Maintenance support for live projects")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Created HTML e-mail templates for e-mail marketing.")),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Tested front-end code in multiple browsers to ensure cross-browser compatability.")),l.a.createElement("p",null,"Fixed front-end bugs (",l.a.createElement(J,{text:"HTML, CSS, jQuery"}),")")),l.a.createElement(j.TimelineItem,{dateText:"08/2008 \u2013 11/2008",className:"",bodyContainerStyle:{color:"#fff"},dateInnerStyle:{background:"#76bb7f"}},l.a.createElement("h3",{style:{color:"#76bb7f"}},"Madebycat, Istanbul"),l.a.createElement("h4",{style:{color:"#76bb7f"}},"Junior Interface Coder"),l.a.createElement("p",null,l.a.createElement("span",{style:{color:D()}},"Researched industry trends and websites to provide top quality design.")),l.a.createElement("p",null,"Workflow tools included: ",l.a.createElement(J,{text:"HTML, CSS, Javascript"})," and ",l.a.createElement(J,{text:"SVN"}),".")),l.a.createElement(j.TimelineItem,{dateText:"1999 - 2004",className:"",bodyContainerStyle:{color:"#fff"},dateInnerStyle:{background:"#e86971"}},l.a.createElement("h3",{style:{color:"#e86971"}},"Abant \u0130zzet Baysal University"),l.a.createElement("h4",{style:{color:"#e86971"}},"Physics Bachelor's degree"),l.a.createElement("p",null,"Took ",l.a.createElement("span",{style:{color:D()}},"java")," and ",l.a.createElement("span",{style:{color:D()}},"html")," classes as optional lessons."))))))),l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(b.a,{className:e.paper},l.a.createElement(g.a,{container:!0,spacing:24},l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(I.a,{component:"h1",className:e.title},"projects & developments"),l.a.createElement("p",{className:e.leftMarg},l.a.createElement("a",{href:"https://www.npmjs.com/package/d3-tagcloud-for-react",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"}},l.a.createElement("span",{style:{color:D()}},"d3 tagcloud for react"),l.a.createElement("br",null),l.a.createElement("span",{style:{color:D()}},"Another tag cloud for react with two variable fontSize and opacity, using the wonderful d3-cloud under the hood."))),l.a.createElement("p",{className:e.leftMarg},l.a.createElement("a",{href:"https://www.npmjs.com/package/vertical-timeline-component-for-react",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"}},l.a.createElement("span",{style:{color:D()}},"Vertical Timeline Component For React"),l.a.createElement("br",null),l.a.createElement("span",{style:{color:D()}},"A react component to generate responsive vertical timeline."))),l.a.createElement("p",{className:e.leftMarg},l.a.createElement("a",{href:"https://meyhanedeyiz.biz",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"}},l.a.createElement("span",{style:{color:D()}},"https://meyhanedeyiz.biz"),l.a.createElement("br",null),l.a.createElement(J,{text:"ReactJs, Redux, Redux Saga, Webpack, Node, Es6",seperator:","}))),l.a.createElement("p",{className:e.leftMarg},l.a.createElement("a",{href:"http://www.arcelikas.com",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"}},l.a.createElement("span",{style:{color:D()}},"http://www.arcelikas.com"),l.a.createElement("br",null),l.a.createElement("span",{style:{color:D()}},".Net Project frontend implementation"))),l.a.createElement("p",{className:e.leftMarg},l.a.createElement("a",{href:"http://howtoistanbul.com",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"}},l.a.createElement("span",{style:{color:D()}},"http://howtoistanbul.com"),l.a.createElement("br",null),l.a.createElement(J,{text:"WordPress, PHP Symfony 1.4",seperator:","}))),l.a.createElement("p",{className:e.leftMarg},l.a.createElement("a",{href:"https://www.yenirakiglobal.com",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"}},l.a.createElement("span",{style:{color:D()}},"https://www.yenirakiglobal.com"),l.a.createElement("br",null),l.a.createElement(J,{text:"Fullstack WordPress",seperator:","}))))))),l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(b.a,{className:e.paper},l.a.createElement(g.a,{container:!0,spacing:24},l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(I.a,{component:"h1",className:e.title},"languages"),l.a.createElement("p",{className:e.leftMarg},l.a.createElement(J,{text:"Turkish, Kurdish - Native"})),l.a.createElement("p",{className:e.leftMarg},l.a.createElement(J,{text:"English - Advanced"})))))),l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(b.a,{className:e.paper},l.a.createElement(g.a,{container:!0,spacing:24},l.a.createElement(g.a,{item:!0,xs:12},l.a.createElement(I.a,{component:"h1",className:e.title},"interests"),l.a.createElement("p",{className:e.leftMarg},l.a.createElement(J,{text:"music, photography, video, trips, learning"}))))))))))}}]),t}(l.a.Component),A=_(Object(H.withStyles)(function(e){return{root:{margin:"0",background:"#2a2c2e",minHeight:"100vh"},button:{background:"#40454a",color:"white",marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,"&:hover":{background:"#6a6f75"}},paper:Object(f.a)({background:"#303337",padding:"40px"},e.breakpoints.down("xs"),{padding:"12px"}),paperTimeline:Object(f.a)({background:"#303337",padding:"40px 40px 0 40px"},e.breakpoints.down("xs"),{padding:"12px 12px 0 12px"}),paperCenter:{background:"#303337",textAlign:"center"},profileCard:{background:"#40454a"},avatar:{width:"191px",height:"191px",margin:"24px auto 0"},name:Object(f.a)({fontSize:"31px"},e.breakpoints.down("sm"),{fontSize:"20px"}),title:Object(f.a)({fontSize:"50px",lineHeight:1},e.breakpoints.down("sm"),{fontSize:"32px"}),socialIcon:{marginTop:"12px",width:"40px !important",height:"33px !important","& svg":{borderRadius:"10px !important"}},stepperButton:{marginTop:e.spacing.unit,marginRight:e.spacing.unit},actionsContainer:{marginBottom:2*e.spacing.unit},resetContainer:{padding:3*e.spacing.unit},leftMarg:Object(f.a)({marginLeft:"30px"},e.breakpoints.down("xs"),{marginLeft:"0px"})}})(V));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(205);o.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a.p+"static/media/veysi.2ac02cae.jpg"},79:function(e,t,a){e.exports=a(207)}},[[79,2,1]]]);
//# sourceMappingURL=main.d324f9c5.chunk.js.map