(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),o=a.n(r),i=(a(15),a(2)),c=a(3),s=a(5),d=a(4),m=(a(6),a(7),a(9),a(1)),p=a.n(m),u=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.googleInit=setTimeout((function(){"undefined"!==typeof window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),200)}},{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2479554011935821","data-ad-format":"auto","data-full-width-responsive":"true"}))}}]),a}(l.a.Component),y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(){var t=document.getElementById("jk"),a=t.selectedIndex,n=t.options[a].value+"";if(n.startsWith("EEE://")||n.startsWith("eee://")){e.stop3rdPlayer(),e.stopSelfPlayer();var l=document.getElementById("url").value;"undefined"!==l&&l&&/[^\s]/.test(l)?e.queryVideoParseResult(l,(function(){var e=document.getElementById("jk");e.selectedIndex=e.options.length-1})):console.log("fuck u !!!")}else e.okPlay()},e.playchinese=function(t){e.stopPlayAtion(),e.showLoadingProgress(!1),e.stop3rdPlayer(),e.stopPlayAtion(),p()("#videowrapper").show(),p()("#my-player").show(),p()("#player").hide(),window.playAction("https://vod.bunediy.com/20210215/V28W5ti9/index.m3u8"),p()("#my-player").css("height","96%"),p()("videowrap").css("height","96%")},e}return Object(c.a)(a,[{key:"showLoadingProgress",value:function(e){e?p()("#parsecontrol").show():p()("#parsecontrol").hide()}},{key:"getQueryString",value:function(e,t){var a=e.indexOf(t+"=");if(-1===a)return null;var n=e.substring(a+t.length+1);return""===n?null:n}},{key:"stopPlayAtion",value:function(){void 0!==window.dp&&(window.dp.pause(),window.dp.destroy(),window.dp=void 0)}},{key:"okPlay",value:function(){this.stopSelfPlayer();var e=document.getElementById("url").value,t=document.getElementById("jk"),a=document.getElementById("jk").selectedIndex,n=t.options[a].value;document.getElementById("player").src=n+e}},{key:"parseURLString",value:function(e){if(-1!==e.indexOf("qq.com")){var t=decodeURIComponent(e);return-1!==t.indexOf("mreferrer=")?this.getQueryString(t,"mreferrer"):e}return e}},{key:"queryVideoParseResult",value:function(e,t){var a=this;this.showLoadingProgress(!0);var n=performance.now(),l={url:e};p.a.ajax({type:"POST",url:"/bilib",contentType:"application/json",dataType:"json",data:JSON.stringify(l)}).done((function(l){a.showLoadingProgress(!1);var r=performance.now();document.getElementById("jk").selectedIndex=0,-1!==e.indexOf("bilibili.com")&&(document.getElementById("jk").selectedIndex=4),-1!==e.indexOf("iqiyi.com")&&(document.getElementById("jk").selectedIndex=1),t&&t(),1===l.success&&200===l.code?(p()("#player").hide(),p()("#videowrapper").css("display","flex"),p()("#videowrapper").css("display","-webkit-flex"),p()("#videowrapper").css("justify-content","center"),p()("#videowrapper").show(),window.playAction(l.url)):a.okPlay(),console.log("Took",(r-n).toFixed(4),"milliseconds to generate:")})).fail((function(t){a.showLoadingProgress(!1),document.getElementById("jk").selectedIndex=0,-1!==e.indexOf("bilibili.com")&&(document.getElementById("jk").selectedIndex=4,-1!==e.indexOf("/bangumi/play/")&&(document.getElementById("jk").selectedIndex=6)),-1!==e.indexOf("iqiyi.com")&&(document.getElementById("jk").selectedIndex=1),a.okPlay()}))}},{key:"stop3rdPlayer",value:function(){var e=document.getElementById("player");e&&(e.src="")}},{key:"stopSelfPlayer",value:function(){this.stopPlayAtion(),this.showLoadingProgress(!1),p()("#player").is("visible")||p()("#player").show(),p()("#videowrapper").hide()}},{key:"componentDidMount",value:function(){var e=this.getQueryString(window.location.href,"zwx");if(null===e||0===e.length)return document.getElementById("jk").selectedIndex=0,void this.okPlay();var t=this.parseURLString(e);document.getElementById("url").value=t,document.getElementById("jk").selectedIndex=0,null!==t?(-1!==t.indexOf("bilibili.com")&&(document.getElementById("jk").selectedIndex=4,-1!==t.indexOf("/bangumi/play/")&&(document.getElementById("jk").selectedIndex=6)),-1!==t.indexOf("iqiyi.com")&&(document.getElementById("jk").selectedIndex=1),this.queryVideoParseResult(t)):(document.getElementById("jk").selectedIndex=0,this.okPlay())}},{key:"render",value:function(){return l.a.createElement("div",{className:"container zoom"},l.a.createElement(u,null),l.a.createElement("div",{className:"container text-center",style:{padding:"5px 0px 10px 0px"}},l.a.createElement("button",{type:"button",className:"btn link-button",onClick:this.playchinese,style:{color:"rgb(16, 241, 230)",background:"#1a1c1d",fontSize:"16px",textDecoration:"underline"}},"\u5510\u63a23 ")," \xa0\xa0\xa0\xa0",l.a.createElement("span",{style:{color:"rgb(16, 241, 230)",fontSize:"16px",whiteSpace:"normal nowrap"}},l.a.createElement("a",{style:{color:"rgb(16, 241, 230)",textDecoration:'underline"'},href:"//chinese-elements.com/static/app-arm64-release.apk"},"Android APK \xa0(",l.a.createElement("b",{style:{color:"rgb(16, 241, 230)",textDecoration:"underline"}},"02/03\u66f4\u65b0"),")"))," \xa0\xa0\u82e5\u89e3\u6790\u4e0d\u5230\uff0c\u8bf7\u624b\u5de5\u5207\u6362\u7ebf\u8def\u3002"),l.a.createElement("div",{className:"container zoom"},l.a.createElement("div",{id:"jxa",className:"jxl"},l.a.createElement("div",{id:"videowrapper",className:"videowrap zoom"},l.a.createElement("div",{id:"parsecontrol",className:"shadow zoom"},l.a.createElement("p",null,"\u6b63\u5728\u89e3\u6790........")),l.a.createElement("div",{id:"my-player",className:"zoom"})),l.a.createElement("iframe",{src:"",id:"player",width:"100%",height:"100%",title:"fucku",className:"videoeara zoom",color:"#C8DFEA",allowtransparency:"true",scrolling:"no",allowFullScreen:"True",frameBorder:"0"})),l.a.createElement("div",{className:"container zoom"},l.a.createElement("div",{className:"input-group mb-3",style:{paddingTop:"10px"}},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"\u5207\u6362\u7ebf\u8def:")),l.a.createElement("select",{className:"form-control input-lg",id:"jk"},l.a.createElement("option",{value:"https://z1.m1907.cn/?jx="},"\u9ed8\u8ba4\u7ebf\u8def(\u817e\u8baf \u7231\u5947\u827a \u4f18\u9177 \u4e50\u89c6 \u8292\u679c \u641c\u72d0)"),l.a.createElement("option",{value:"https://vip.fxw.la/m3u8/index.php?url="},"\u7231\u5947\u827a \u4f18\u9177(\u7b2c\u4e00\u6e90)"),l.a.createElement("option",{value:"https://www.ckplayer.vip/jiexi/?url="},"\u7231\u5947\u827a \u4f18\u9177(\u7b2c\u4e8c\u6e90)"),l.a.createElement("option",{value:"https://okjx.cc/?url="},"B\u7ad9(\u7b2c\u4e00\u6e90)"),l.a.createElement("option",{value:"https://www.ckplayer.vip/jiexi/?url="},"B\u7ad9(\u7b2c\u4e8c\u6e90)"),l.a.createElement("option",{value:"https://vip.bljiex.com/?v="},"\u5168\u7ad9"),l.a.createElement("option",{value:"https://www.h8jx.com/jiexi.php?url="},"B \u7ad9\u5c0f\u65b0"),l.a.createElement("option",{value:"EEE://"},"\u672c\u7ad9\u5185\u7f6e\u89e3\u6790^_^"))),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"\u64ad\u653e\u5730\u5740:")),l.a.createElement("input",{className:"form-control",type:"search",placeholder:"\u7535\u8111\u4f7f\u7528Ctrl+V\u7c98\u8d34\u7f51\u5740-\u624b\u673a\u76f4\u63a5\u957f\u6309\u7c98\u8d34\u7f51\u5740",id:"url","aria-label":"url",autoComplete:"off","aria-describedby":"basic-addon1"})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("button",{id:"bf",type:"button",className:"btn btn-success btn-lg btn-block",onClick:this.handleClick},"Go-\u70b9\u51fb\u5f00\u59cb\u89e3\u6790")))),l.a.createElement(u,null))}}]),a}(l.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid zoom"},l.a.createElement("div",{className:"container-fluid zoom"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"\u89c6\u9891\u89e3\u6790"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-light",href:"/"},"\u65f6  \u5149",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-light",href:"/static/ch.html"},"\u7535\u89c6\u9891\u9053")),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("button",{type:"button",className:"btn link-button nav-link dropdown-toggle text-light border-0",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"\u89c6\u9891\u7f51\u7ad9"),l.a.createElement("div",{className:"dropdown-menu bg-dark","aria-labelledby":"navbarDropdownMenuLink"},l.a.createElement("a",{className:"dropdown-item text-warning",target:"_",href:"https://v.qq.com/"},"\u817e\u8baf\u89c6\u9891"),l.a.createElement("a",{className:"dropdown-item text-warning",target:"_",href:"https://www.iqiyi.com/"},"\u7231\u5947\u827a"),l.a.createElement("a",{className:"dropdown-item text-warning",target:"_",href:"https://www.youku.com/"},"\u4f18\u9177"),l.a.createElement("a",{className:"dropdown-item text-warning",target:"_",href:"https://www.le.com/"},"LeTv"),l.a.createElement("a",{className:"dropdown-item text-warning",target:"_",href:"https://www.mgtv.com/"},"\u8292\u679c"),l.a.createElement("a",{className:"dropdown-item text-warning",target:"_",href:"https://www.tudou.com/"},"\u571f\u8c46"),l.a.createElement("a",{className:"dropdown-item text-warning",target:"_",href:"https://tv.sohu.com/"},"\u641c\u72d0TV"),l.a.createElement("a",{className:"dropdown-item text-warning",target:"_",href:"https://www.pptv.com/"},"PPTV")))))),l.a.createElement(y,null)))}}]),a}(l.a.Component);var v=function(){return l.a.createElement(g,null)};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.1d4f5403.chunk.js.map