(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0313":function(t,e,n){"use strict";n("1604")},"034f":function(t,e,n){"use strict";n("85ec")},"0e53":function(t,e,n){},"12b7":function(t,e,n){"use strict";n("1e5d")},1604:function(t,e,n){},"1e5d":function(t,e,n){},"228d":function(t,e,n){"use strict";n("9a16")},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="4678"},"4abb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:{name:"Home"}}},[t._v("Hjem")]),t._v(" | "),n("router-link",{attrs:{to:{name:"Login"}}},[t._v("Logg Inn")])],1),n("router-view")],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("p",[t._v("header kommer senere")])])}],i=(n("034f"),n("2877")),o={},c=Object(i["a"])(o,a,r,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HomePage",{attrs:{msg:t.msg}})],1)},f=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v(t._s(t.msg))]),n("router-link",{attrs:{to:{name:"Register"}}},[n("button",{staticClass:"foo bar",attrs:{id:"quizButton"}},[t._v("Start test")])]),n("p",[t._v("Og finn 10 passende aktiviteter nær deg!")]),t._m(0),t._m(1),t._m(2)],1)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"info1"}},[n("h3",[t._v("Hvorfor ta quizen")]),n("div",{staticClass:"text"},[t._v("Her kommer tekst")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"info2"}},[n("h3",[t._v("Visste du at?")]),n("div",{staticClass:"text"},[t._v("Her kommer tekst")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"info3"}},[n("h3",[t._v("Info")]),n("div",{staticClass:"text"},[t._v("Her kommer tekst")])])}],p={name:"HomePage",props:{msg:String}},b=p,g=(n("cb11"),Object(i["a"])(b,v,m,!1,null,"4053ad00",null)),_=g.exports,h={name:"Home",components:{HomePage:_},data:function(){return{msg:"Velkommen"}}},j=h,y=Object(i["a"])(j,d,f,!1,null,null,null),k=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("QuestionPage",{attrs:{title:t.title,information:t.information}}),n("QuestionYesNo",{attrs:{yeNoTite:t.yesNoTitle}})],1)])},C=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quiz"},[n("div",[n("h1",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.information))])]),t._l(t.quizItems,(function(e){return n("div",{key:e.question},[n("div",{attrs:{id:"questions"}},[n("h2",[t._v(t._s(e.question))]),n("p",[t._v(t._s(e.info))]),n("div",{attrs:{id:"inputRadio"}},[n("input",{attrs:{type:"radio",id:e.id+"a",name:e.id,value:"1"}}),n("label",{attrs:{for:e.id+"a"}},[t._v(" Synes det er kjempegøy ")]),t._v(" "),n("br"),n("input",{attrs:{type:"radio",id:e.id+"b",name:e.id,value:"2"}}),n("label",{attrs:{for:e.id+"b"}},[t._v(" Helt greit ")]),n("br"),n("input",{attrs:{type:"radio",id:e.id+"c",name:e.id,value:"3"}}),n("label",{attrs:{for:e.id+"c"}},[t._v(" Liker ikke i det hele tatt ")])])])])})),n("div",[n("button",{staticClass:"restult-btn result-purple",attrs:{id:"resultbtn"},on:{click:t.result}},[t._v(" Gå til resultater ")])])],2)},O=[],x={name:"QuestionPage",props:{title:String,information:String},data:function(){return{quizItems:[{id:"1",question:"Styrkeøvelser",info:"(armhevinger, knebøy, situps, vekter osv)"},{id:"2",question:"Spenst/hurtighet",info:"(hopping, sprint, kasting osv)"},{id:"3",question:"Utholdenhet",info:"(gåturer, jogging, svømme langt, sykkeltur osv)"},{id:"4",question:"Bevegelighet",info:"(tøying, spagat, utstrekking osv)"},{id:"5",question:"Balanse",info:"(gå på bom/line, stå på en fot, bygge store tårn, stå på tærne osv)"}]}},methods:{result:function(){this.$router.push({path:"/quiz/results"})}}},E=x,z=(n("0313"),Object(i["a"])(E,A,O,!1,null,"99e8f99e",null)),$=z.exports,P={name:"Quiz",components:{QuestionPage:$},data:function(){return{title:"Hvordan liker du å trene?",information:"Kartlegging av hvordan du liker å drive med aktiviteter",yesNoTitle:"Nå har vi noen ja/nei spørsmål"}}},L=P,N=Object(i["a"])(L,w,C,!1,null,null,null),S=N.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("AdLogin",{attrs:{loginmsg:"Innlogging (Kun for admin)"}})],1)},B=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h1",[t._v(t._s(t.loginmsg))]),n("form",{staticClass:"logginn-container"},[n("table",[n("tbody",[n("tr",[n("td",[n("label",[t._v(t._s(t.username))])]),t._m(0)]),n("tr",[n("td",[n("label",[t._v(t._s(t.password))])]),t._m(1)])])]),n("button",{staticClass:"logginn-btn logginn-purple",attrs:{id:"loginbtn"},on:{click:t.login}},[t._v(" Logg inn ")])])])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("input",{staticClass:"logginn-input",attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("input",{staticClass:"logginn-input",attrs:{type:"password"}})])}],T={name:"AdLogin",props:{loginmsg:String},methods:{login:function(){this.$router.push({path:"/admenu"})}},data:function(){return{username:"Brukernavn:",password:"Passord:"}}},H=T,F=(n("80b5"),Object(i["a"])(H,M,R,!1,null,"08876bda",null)),I=F.exports,U={name:"Login",components:{AdLogin:I}},V=U,Q=Object(i["a"])(V,q,B,!1,null,null,null),D=Q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admenu"},[n("AdMenu",{attrs:{menumsg:"Meny Admin"}})],1)},G=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admenu"},[n("h1",[t._v(t._s(t.menumsg))]),n("form",{staticClass:"logginn-container"},[n("p",[n("router-link",{attrs:{to:{name:"NewActivity"}}},[t._v("Legg til ny aktivitet")])],1),n("p",[t._v("Endre/slette aktivitet")]),n("p",[n("router-link",{attrs:{to:{name:"Activities"}}},[t._v("Se alle registrerte aktiviteter")])],1),n("p",[t._v("Redigere geografiske områder")]),n("p",[n("router-link",{attrs:{to:{name:"Password"}}},[t._v("Endre passord")])],1)])])},W=[],Y={name:"AdMenu",props:{menumsg:String}},Z=Y,X=(n("b534"),Object(i["a"])(Z,J,W,!1,null,"17b79133",null)),tt=X.exports,et={name:"Menu",components:{AdMenu:tt}},nt=et,st=Object(i["a"])(nt,K,G,!1,null,null,null),at=st.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" "+t._s(t.table_of_results)+" ")]),n("canvas",{attrs:{id:"activity-chart"}}),n("ResultsList",{attrs:{list_of_results:t.list_of_results}})],1)},it=[],ot=n("30ef"),ct=n.n(ot),lt={type:"bar",data:{labels:["Skateboard","Snøbrett","Baneskyting","Fallskjermhopping","Bueskyting","Enduro motorsykkel","Aikido","Amerikansk fotball","Cheerleading","Freesbeegolf"],datasets:[{label:"Aktiviteter",data:[95,95,90,89,86,78,74,74,74,73],backgroundColor:"rgba(115,158,132,.9)",borderColor:"#4d996a",borderWidth:3}]},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}},ut=lt,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"tableActivity"},[t._m(0),n("tbody",t._l(t.activities,(function(e,s){return n("tr",{key:s},[n("td",[t._v(t._s(e.activities_name))]),n("td",[t._v(t._s(e.telephone))]),n("td",[t._v(t._s(e.email))]),n("td",[t._v(t._s(e.activities_comments))])])})),0)])])},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Aktivitet")]),n("th",[t._v("Telefon")]),n("th",[t._v("E-post")]),n("th",[t._v("Kommentar")])])])}],vt=n("d4ec"),mt=n("bee2"),pt=n("bc3a"),bt=n.n(pt),gt=bt.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),_t=function(){function t(){Object(vt["a"])(this,t)}return Object(mt["a"])(t,[{key:"getAll",value:function(){return gt.get("/activities")}},{key:"get",value:function(t){return gt.get("/activities/".concat(t))}},{key:"create",value:function(t){return gt.post("/activities",t)}},{key:"update",value:function(t,e){return gt.put("/activities/".concat(t),e)}},{key:"delete",value:function(t){return gt["delete"]("/activities/".concat(t))}},{key:"deleteAll",value:function(){return gt["delete"]("/activities")}},{key:"findByTitle",value:function(t){return gt.get("/activities?navn=".concat(t))}}]),t}(),ht=new _t,jt={name:"ResultsList",props:{list_of_results:String},data:function(){return{activities:[],activities_name:"",telephone:"",email:"",activities_comments:""}},methods:{retrieveLabels:function(){var t=this;ht.getAll().then((function(e){t.activities=e.data,console.log(e.data)}))["catch"]((function(t){console.log(t)}))},refreshList:function(){this.retrieveLabels()}},mounted:function(){this.retrieveLabels()}},yt=jt,kt=(n("b69e"),Object(i["a"])(yt,dt,ft,!1,null,"fd640800",null)),wt=kt.exports,Ct={name:"Restults",components:{ResultsList:wt},data:function(){return{activityChartData:ut,list_of_results:"Liste over resultatene",table_of_results:"Tabell over resultatene"}},mounted:function(){var t=document.getElementById("activity-chart");new ct.a(t,this.activityChartData)}},At=Ct,Ot=(n("228d"),Object(i["a"])(At,rt,it,!1,null,"60fcb546",null)),xt=Ot.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"activities"},[n("ActivityList",{attrs:{msg:t.msg}})],1)},zt=[],$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"tableActivity"},[t._m(0),n("tbody",t._l(t.activities,(function(e){return n("tr",{key:e.activity},[n("td",[t._v(" "+t._s(e.activity))]),n("td",[t._v(" "+t._s(e.tlf))]),n("td",[t._v(" "+t._s(e.epost))]),n("td",[t._v(" "+t._s(e.associations))])])})),0)])])},Pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Aktivitet")]),n("th",[t._v("Telefon")]),n("th",[t._v("E-post")]),n("th",[t._v("Forbund")])])])}],Lt={name:"ActivityList",data:function(){return{activities:[{activity:"Skateboard",tlf:"454 64 166",epost:"henning@norb.no",associations:"Brettforbundet"},{activity:"Snøbrett",tlf:"922 49 073",epost:"magnus@snowboardforbundet.no",associations:"Brettforbundet"},{activity:"Baneskyting",tlf:"975 92 754",epost:"ofh@dfs.no",associations:"Det frivillige Skyttervesen (ingen tilknytning til NIF)"},{activity:"Fallskjermhopping",tlf:"907 04 646",epost:"janerik.wang@nlf.no",associations:"Luftsportforbundet"},{activity:"Bueskyting",tlf:"",epost:"",associations:"NIF/Norges Bueskytterforbund. Og Norsk Langbuelag (NL)"},{activity:"Enduro motorsykkel",tlf:"415 64 430",epost:"a.sletholt@gmail.com",associations:"NMF"},{activity:"Aikido",tlf:"918 64 797",epost:"idalagosandersen@gmail.com",associations:"Norges Aikidoforbund"},{activity:"Amerikansk fotball",tlf:"472 01 596",epost:"tone.sparby@nif.idrett.no",associations:"Norges amerikanske idretters forbund"},{activity:"Cheerleading",tlf:"986 66 494",epost:"daniela.ohnstad@nif.idrett.no",associations:"Norges amerikanske idretters forbund"},{activity:"Freesbeegolf",tlf:"454 64 166",epost:"tone.sparby@nif.idrett.no",associations:"Norges amerikanske idretters forbund"}],currentActivity:null,currentIndex:-1,navn:""}}},Nt=Lt,St=(n("9a22"),Object(i["a"])(Nt,$t,Pt,!1,null,null,null)),qt=St.exports,Bt={name:"Activities",components:{ActivityList:qt},data:function(){return{msg:"Liste over aktiviteter:"}}},Mt=Bt,Rt=Object(i["a"])(Mt,Et,zt,!1,null,null,null),Tt=Rt.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pass"},[n("ChangePass",{attrs:{changePassMsg:"Endre passord"}})],1)},Ft=[],It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pass"},[n("h1",[t._v(t._s(t.changePassMsg))]),n("form",{staticClass:"newpass-container"},[n("tbody",[n("table",[n("tr",[n("td",[n("label",[t._v(t._s(t.oldPass))])]),t._m(0)]),n("tr",[n("td",[n("label",[t._v(t._s(t.password))])]),n("input",{staticClass:"newpass-input",attrs:{type:"password"}}),n("td")]),n("tr",[n("td",[n("label",[t._v(t._s(t.repeatPass))])]),n("input",{staticClass:"newpass-input",attrs:{type:"password"}}),n("td")])])]),n("button",{staticClass:"changebtn newpass-purple",attrs:{id:"changebtn"},on:{click:t.change}},[t._v(" Endre passord ")])])])},Ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("input",{staticClass:"newpass-input",attrs:{type:"password"}})])}],Vt={name:"ChangePass",props:{changePassMsg:String},methods:{change:function(){window.alert("Passordet ble endret."),this.$router.push({path:"/admenu"})}},data:function(){return{oldPass:"Gammelt passord:",password:"Nytt passord:",repeatPass:"Gjenta det nye passordet:"}}},Qt=Vt,Dt=(n("d90f"),Object(i["a"])(Qt,It,Ut,!1,null,"43aa4f58",null)),Kt=Dt.exports,Gt={name:"Password",components:{ChangePass:Kt}},Jt=Gt,Wt=Object(i["a"])(Jt,Ht,Ft,!1,null,null,null),Yt=Wt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("RegisterUser",{attrs:{register:t.register}}),n("button",{attrs:{id:"nextbtn"},on:{click:t.quizpage}},[t._v(" "+t._s(t.next)+" ")])],1)},Xt=[],te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" "+t._s(t.register)+" ")]),n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.select_area,expression:"select_area"}],staticClass:"form-control",attrs:{required:!0},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.select_area=e.target.multiple?n:n[0]},t.changeLocation]}},[n("option",{attrs:{diabled:""},domProps:{value:t.select_area}},[t._v(t._s(t.select_area))]),t._l(t.area,(function(e){return n("option",{key:e.id,domProps:{value:e.place}},[t._v(" "+t._s(e.place)+" ")])}))],2),n("br"),n("div",{attrs:{id:"spanelement"}},[n("span",[t._v(" Valgt område: "+t._s(t.select_area)+" ")])])]),n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.select_age,expression:"select_age"}],staticClass:"form-control",attrs:{required:!0},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.select_age=e.target.multiple?n:n[0]},t.changeAge]}},[n("option",{attrs:{diabled:""},domProps:{value:t.select_age}},[t._v(t._s(t.select_age))]),t._l(t.age,(function(e){return n("option",{key:e.id,domProps:{value:e.year}},[t._v(" "+t._s(e.year)+" ")])}))],2),n("br"),n("div",{attrs:{id:"spanelement"}},[n("span",[t._v(" Valgt alder: "+t._s(t.select_age)+" ")])])])])},ee=[],ne={name:"RegisterUser",props:{register:String},data:function(){return{area:[{id:1,place:"Vestland"},{id:2,place:"Oslo"}],select_area:"Velg område",age:[{id:1,year:"9-11"},{id:2,year:"12-14"}],select_age:"Velg alder"}}},se=ne,ae=(n("b253"),Object(i["a"])(se,te,ee,!1,null,"c5aad22c",null)),re=ae.exports,ie={name:"Register",register:"En kort registrering",components:{RegisterUser:re},data:function(){return{next:"Start testen!"}},methods:{quizpage:function(){this.$router.push({path:"/quiz"})}}},oe=ie,ce=(n("12b7"),Object(i["a"])(oe,Zt,Xt,!1,null,"1d8353cc",null)),le=ce.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"activities"},[n("CreateNewActivity",{attrs:{msg:t.msg}})],1)},de=[],fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"createNewActivity"},[n("h1",[t._v(t._s(t.msg))]),n("form",{staticClass:"newActivity-container"},[t._m(0),n("h2",[t._v("Kategorier")]),n("table",[n("tbody",[n("tr",t._l(t.features,(function(e,s){return n("th",{key:s},[t._v(" "+t._s(e.features_name))])})),0),n("tr",t._l(t.features,(function(t,e){return n("td",{key:e},[n("input",{attrs:{type:"number",id:t.index}})])})),0)])])])])},ve=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("label",{attrs:{for:"name"}},[t._v("Navn på aktivitet: ")]),n("input",{attrs:{type:"text",id:"name"}})])}],me=function(){function t(){Object(vt["a"])(this,t)}return Object(mt["a"])(t,[{key:"getAll",value:function(){return gt.get("/categories")}},{key:"findOne",value:function(t){return gt.get("/categories/".concat(t))}},{key:"create",value:function(t){return gt.post("/categories",t)}},{key:"update",value:function(t,e){return gt.put("/categories/".concat(t),e)}},{key:"delete",value:function(t){return gt["delete"]("/categories/".concat(t))}},{key:"deleteAll",value:function(){return gt["delete"]("/categories")}},{key:"findByTitle",value:function(t){return gt.get("/categories?navn=".concat(t))}}]),t}(),pe=new me,be=function(){function t(){Object(vt["a"])(this,t)}return Object(mt["a"])(t,[{key:"getAll",value:function(){return gt.get("/features")}},{key:"findOne",value:function(t){return gt.get("/features/".concat(t))}},{key:"create",value:function(t){return gt.post("/features",t)}},{key:"update",value:function(t,e){return gt.put("/features/".concat(t),e)}},{key:"delete",value:function(t){return gt["delete"]("/features/".concat(t))}},{key:"deleteAll",value:function(){return gt["delete"]("/features")}},{key:"findByTitle",value:function(t){return gt.get("/features?navn=".concat(t))}}]),t}(),ge=new be,_e={name:"CreateNewActivity",props:{msg:String},data:function(){return{categories:[],categories_name:"",features:[],feature_name:""}},methods:{retrieveCategory:function(){var t=this;pe.getAll().then((function(e){t.categories=e.data,console.log(e.data)}))["catch"]((function(t){console.log(t)}))},retrieveFeature:function(){var t=this;ge.getAll().then((function(e){t.features=e.data,console.log(e.data)}))["catch"]((function(t){console.log(t)}))},refreshList:function(){this.retrieveFeature(),this.retrieveCategory()}},mounted:function(){this.retrieveCategory(),this.retrieveFeature()}},he=_e,je=(n("9809"),Object(i["a"])(he,fe,ve,!1,null,"1f33fb1a",null)),ye=je.exports,ke={name:"Activities",components:{CreateNewActivity:ye},data:function(){return{msg:"Legg til ny aktivitet"}}},we=ke,Ce=Object(i["a"])(we,ue,de,!1,null,null,null),Ae=Ce.exports;s["a"].use(u["a"]);var Oe=[{path:"/",name:"Home",component:k},{path:"/quiz",name:"Quiz",component:S},{path:"/login",name:"Login",component:D},{path:"/admenu",name:"Menu",component:at},{path:"/quiz/results",name:"Results",component:xt},{path:"/Activities",name:"Activities",component:Tt},{path:"/pass",name:"Password",component:Yt},{path:"/register",name:"Register",component:le},{path:"/newActivity",name:"NewActivity",component:Ae}],xe=new u["a"]({routes:Oe}),Ee=xe,ze=n("2f62");s["a"].use(ze["a"]);var $e=new ze["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("a26b"),n("ea10");s["a"].config.productionTip=!1,new s["a"]({router:Ee,store:$e,render:function(t){return t(l)}}).$mount("#app")},"6cf8":function(t,e,n){},7580:function(t,e,n){},"7d44":function(t,e,n){},"80b5":function(t,e,n){"use strict";n("7d44")},"85ec":function(t,e,n){},9809:function(t,e,n){"use strict";n("b60e")},"9a16":function(t,e,n){},"9a22":function(t,e,n){"use strict";n("cb23")},a26b:function(t,e,n){},a74f:function(t,e,n){},b253:function(t,e,n){"use strict";n("7580")},b534:function(t,e,n){"use strict";n("0e53")},b60e:function(t,e,n){},b69e:function(t,e,n){"use strict";n("4abb")},cb11:function(t,e,n){"use strict";n("a74f")},cb23:function(t,e,n){},d90f:function(t,e,n){"use strict";n("6cf8")},ea10:function(t,e,n){t.exports=n.p+"img/BallImage.36ea61a3.jpeg"}});
//# sourceMappingURL=app.313b0a8c.js.map