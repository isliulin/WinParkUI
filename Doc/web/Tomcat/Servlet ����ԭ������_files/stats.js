/*!
 * $Id: stats.js,v 1.135 2012/12/09 14:39:50 janetka Exp $
 * Copyright (c) 2009 IBM Corporation
 * Owner: Corporate Webmaster (NUS_N_NIWWW)
 */
var NTPT_NOINITIALTAG=true;var NTPT_IMGSRC="//pt200204.unica.com/ntpagetag.gif";var NTPT_FLDS=new Object();NTPT_FLDS.lc=true;NTPT_FLDS.rf=true;NTPT_FLDS.rs=true;NTPT_FLDS.cd=true;NTPT_FLDS.ln=true;NTPT_FLDS.tz=true;NTPT_FLDS.jv=true;NTPT_FLDS.ck=true;var NTPT_MAXTAGWAIT=1;var NTPT_HTTPSIMGSRC="//pt200204.unica.com/ntpagetag.gif";var NTPT_GLBLREFTOP=false;
var NTPT_SET_IDCOOKIE=true;var NTPT_IDCOOKIE_NAME="UnicaNIODID";var NTPT_IDCOOKIE_DOMAIN=".ibm.com";var NTPT_DOWNLOADTYPES="bqy,doc,dot,exe,flv,jpg,mov,mp3,pdf,pps,ppt,rss,sh,swf,tar,txt,wmv,xls,xml,zip,avi,eps,gif,lwp,mas,mp4,pot,prz,rtf,wav,wma,123,odt,ott,sxw,stw,docx,odp,otp,sxi,sti,pptx,ods,ots,sxc,stc,xlsx";var NTPT_DOMAINLIST=".ibm.com,.lotus.com,.lotuslive.com,.cognos.com,.webdialogs.com,.jazz.net,.servicemanagementcenter.com";var NTPT_GLBLEXTRA="";var NTPT_GLBLCOOKIES=["IBMISP","iwm1p"];
function OOOO000(d,e,b,f){var a="";a=d+"\x3d"+escape(e)+"\x3b";if(f){a+="\x20\x64\x6f\x6d\x61\x69\x6e\x3d"+f+"\x3b"}if(b>(7525+435-7960)){var c=new Date();c.setTime(c.getTime()+(b*(2470+2102-3572)));a+="\x20\x65\x78\x70\x69\x72\x65\x73\x3d"+c.toGMTString()+"\x3b"}a+="\x20\x70\x61\x74\x68\x3d\x2f";document.cookie=a}function OOOO00(b){var c=b+"\x3d";if(document.cookie.length>(5679+0-5679)){var d;d=document.cookie.indexOf(c);if(d!=-(262+5772-6033)){var a;d+=c.length;a=document.cookie.indexOf("\x3b",d);
if(a==-(4764+4910-9673)){a=document.cookie.length}return unescape(document.cookie.substring(d,a))}else{return null}}}function O00000O(b){var a="";for(OO00O in b){if((typeof(b[OO00O])=="\x73\x74\x72\x69\x6e\x67")&&(b[OO00O]!="")){if(a!=""){a+="\x3b"}a+=OO00O+"\x3d"+b[OO00O]}}return a}var O00OOO=["\x41","\x42","\x43","\x44","\x45","\x46","\x47","\x48","\x49","\x4a","\x4b","\x4c","\x4d","\x4e","\x4f","\x50","\x51","\x52","\x53","\x54","\x55","\x56","\x57","\x58","\x59","\x5a","\x61","\x62","\x63","\x64","\x65","\x66","\x67","\x68","\x69","\x6a","\x6b","\x6c","\x6d","\x6e","\x6f","\x70","\x71","\x72","\x73","\x74","\x75","\x76","\x77","\x78","\x79","\x7a","\x30","\x31","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x39"];
function OOOOOO0(a){if(a<(65+9084-9087)){return O00OOO[a]}else{return(OOOOOO0(Math.floor(a/(4451+644-5033)))+O00OOO[a%(7260+1570-8768)])}}function O0O000O(){var b="";var a=new Date();for(OOO0O0O=(5040+769-5809);OOO0O0O<(623+3070-3682);OOO0O0O++){b+=O00OOO[Math.round(Math.random()*(2914+1003-3856))]}return(b+"\x2d"+OOOOOO0(a.getTime()))}function OO0OO(O0O0000,OOO0O00){return(eval("\x74\x79\x70\x65\x6f\x66\x20"+O0O0000+"\x20\x21\x3d\x20\x22\x75\x6e\x64\x65\x66\x69\x6e\x65\x64\x22")?eval(O0O0000):OOO0O00)
}function OO0O000(b,a){return(b+(((b=="")||((a=="")||(a.substring((7625+2039-9664),(5186+4474-9659))=="\x26")))?"":"\x26")+a)}function O000O00(){var a=new Date();return(a.getTime()+"\x2e"+Math.floor(Math.random()*(3801+1573-4374)))}function O00OO(b,a){OOO00[b]=a.toString()}function O0OO0O0(a){OOO00[a]=""}function OOO0000(a){var b="",c,d;OO00OO(OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x45\x58\x54\x52\x41",""));if(!LnkLck){OO00OO(OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x45\x58\x54\x52\x41",""))}OO00OO(a);
for(c in OOO00){d=OOO00[c];if(typeof(d)=="\x73\x74\x72\x69\x6e\x67"){if(d&&(d!="")){b=OO0O000(b,(c+"\x3d"+(self.encodeURIComponent?encodeURIComponent(d):escape(d))))}}}return b}function O000000(){var a;OOOOO0.OOO00=new Array();for(a in OOO00){OOOOO0.OOO00[a]=OOO00[a]}}function OOO00OO(){var a;OOO00=new Array();for(a in OOOOO0.OOO00){OOO00[a]=OOOOO0.OOO00[a]}}function OO0O0OO(b,d,c){if(OOOO0[b]!=null){var a=new Function(d);OOOO0[b].onload=a;OOOO0[b].onerror=a;OOOO0[b].onabort=a}setTimeout(d,(c*(1523+3206-3729)))
}function O0O00O0(a,b){if(a==""){return}O0000=((O0000+(4882+1405-6286))%OOOO0.length);if(OOOO0[O0000]==null){OOOO0[O0000]=new Image((4101+4276-8376),(4616+715-5330))}OOOO0[O0000].src=a+"\x3f"+b}function OOOOO0O(b){var a;var c;if((O00O00O!="")&&(document.location.protocol=="\x68\x74\x74\x70\x73\x3a")){a=O00O00O}else{a=O0000OO}c=OOO0000(b);O0O00O0(a,c);OOO00OO()}function OO00OO(b){var c;var d;if(!b){return}b=b.toString();if(b==""){return}c=b.split("\x26");for(d=(220+1230-1450);d<c.length;d++){var a=c[d].split("\x3d");
if(a.length==(2109+4370-6477)){O00OO(a[(4672+5137-9809)],(self.decodeURIComponent?decodeURIComponent(a[(2685+3816-6500)]):unescape(a[(3471+2979-6449)])))}}}function O0O0OO(a){O00OO("\x65\x74\x73",O000O00());OOOOO0O(a);return true}function O00OO0O(e,a,c){var b;if(!e||!e.href){return true}if(LnkLck){return false}LnkLck=e;if(OO000.lc){O00OO("\x6c\x63",e.href)}if(OO000.rf){if(!O0OO000||!top||!top.document){O00OO("\x72\x66",document.location)}}O0O0OO(a);if(c){b=c}else{b=NTPT_MAXTAGWAIT}if(b>(1625+6874-8499)){var d;
if(e.click){e.tmpclck=e.onclick;e.onclick=null;d="\x69\x66\x20\x28\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x29\x20\x7b\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x63\x6c\x69\x63\x6b\x28\x29\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x6f\x6e\x63\x6c\x69\x63\x6b\x20\x3d\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x74\x6d\x70\x63\x6c\x63\x6b\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d"}else{d="\x69\x66\x20\x28\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x29\x20\x7b\x20\x77\x69\x6e\x64\x6f\x77\x2e\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x20\x3d\x20\x22"+e.href+"\x22\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d"
}OO0O0OO(O0000,d,b);return false}LnkLck=null;return true}function O000OO0(c,a,d){var b;if(!c||!c.submit){return true}if(FrmLck){return false}FrmLck=c;O0O0OO(a);if(d){b=d}else{b=NTPT_MAXTAGWAIT}if(b>(5271+4406-9677)){c.tmpsbmt=c.onsubmit;c.onsubmit=null;OO0O0OO(O0000,"\x69\x66\x20\x28\x20\x46\x72\x6d\x4c\x63\x6b\x20\x29\x20\x7b\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x73\x75\x62\x6d\x69\x74\x28\x29\x3b\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x6f\x6e\x73\x75\x62\x6d\x69\x74\x20\x3d\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x74\x6d\x70\x73\x62\x6d\x74\x3b\x20\x46\x72\x6d\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d",b);
return false}FrmLck=null;return true}var O0000OO=NTPT_IMGSRC;var OO000=NTPT_FLDS;var O00OO0=OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x43\x4f\x4f\x4b\x49\x45\x53",null);var OOOO0O=OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x43\x4f\x4f\x4b\x49\x45\x53",null);var OOO00O0=OO0OO("\x4e\x54\x50\x54\x5f\x53\x45\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45",false);var OO0OO0=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x4e\x41\x4d\x45","\x53\x61\x6e\x65\x49\x44");var OO00O00=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x44\x4f\x4d\x41\x49\x4e",null);
var OO0OOOO=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x45\x58\x50\x49\x52\x45",155520000);var O00O00O=OO0OO("\x4e\x54\x50\x54\x5f\x48\x54\x54\x50\x53\x49\x4d\x47\x53\x52\x43","");var O0OO000=OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x52\x45\x46\x54\x4f\x50",OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x52\x45\x46\x54\x4f\x50",false));var OO00000=OO0OO("\x4e\x54\x50\x54\x5f\x4e\x4f\x49\x4e\x49\x54\x49\x41\x4c\x54\x41\x47",false);var ntptAddPair=O00OO;var ntptDropPair=O0OO0O0;var ntptEventTag=O0O0OO;
var ntptLinkTag=O00OO0O;var ntptSubmitTag=O000OO0;var OOO00=new Array();var OOOOO0=new Object();var OOOO0=Array((791+3540-4321));var O0000;for(O0000=(5508+3590-9098);O0000<OOOO0.length;O0000++){OOOO0[O0000]=null}var LnkLck=null;var FrmLck=null;O00OO("\x6a\x73","\x31");O00OO("\x74\x73",O000O00());if(OO000.lc){O00OO("\x6c\x63",document.location)}if(OO000.rf){var OOO0OO;if(O0OO000&&top&&top.document){OOO0OO=top.document.referrer}else{OOO0OO=document.referrer}O00OO("\x72\x66",OOO0OO)}if(self.screen){if(OO000.rs){O00OO("\x72\x73",self.screen.width+"\x78"+self.screen.height)
}if(OO000.cd){O00OO("\x63\x64",self.screen.colorDepth)}}if(OO000.ln){var OOO0O;if(navigator.language){OOO0O=navigator.language}else{if(navigator.userLanguage){OOO0O=navigator.userLanguage}else{OOO0O=""}}if(OOO0O.length>(1122+2203-3323)){OOO0O=OOO0O.substring((3653+3555-7208),(390+8395-8783))}OOO0O=OOO0O.toLowerCase();O00OO("\x6c\x6e",OOO0O)}if(OO000.tz){var OO0O0;var O0O00O=new Date();var O0O00=O0O00O.getTimezoneOffset();var O0OO00;OO0O0="\x47\x4d\x54";if(O0O00!=(4628+4348-8976)){if(O0O00>(1907+6772-8679)){OO0O0+="\x20\x2d"
}else{OO0O0+="\x20\x2b"}O0O00=Math.abs(O0O00);O0OO00=Math.floor(O0O00/(2168+3391-5499));O0O00-=O0OO00*(3131+4046-7117);if(O0OO00<(5094+969-6053)){OO0O0+="\x30"}OO0O0+=O0OO00+"\x3a";if(O0O00<(2977+208-3175)){OO0O0+="\x30"}OO0O0+=O0O00}O00OO("\x74\x7a",OO0O0)}if(OO000.jv){var O0000O;if(navigator.javaEnabled()){O0000O="\x31"}else{O0000O="\x30"}O00OO("\x6a\x76",O0000O)}var O0OO0=new Array();var O00O0OO=false;if(OO000.ck){var O0O0O0;var O00O0,O0OOO0;if(O00OO0){for(O0O0O0=(2170+7306-9476);O0O0O0<O00OO0.length;
O0O0O0++){O0OO0[O00OO0[O0O0O0]]=""}}if(OOOO0O){for(O0O0O0=(6954+931-7885);O0O0O0<OOOO0O.length;O0O0O0++){O0OO0[OOOO0O[O0O0O0]]=""}}for(OO00O in O0OO0){O00O0=OOOO00(OO00O);if(O00O0){O0OO0[OO00O]=O00O0}}if(OOO00O0){O00O0=OOOO00(OO0OO0);if(O00O0){O0OO0[OO0OO0]=O00O0;O00O0OO=true}}O0OOO0=O00000O(O0OO0);if(O0OOO0!=""){O00OO("\x63\x6b",O0OOO0)}}O000000();if(!OO00000){OOOOO0O("")}if(OOO00O0&&!O00O0OO){var O00O0=OOOO00(OO0OO0);if(!O00O0){O00O0=O0O000O();OOOO000(OO0OO0,O00O0,OO0OOOO,OO00O00);if(OO000.ck&&OOOO00(OO0OO0)){O0OO0[OO0OO0]=O00O0;
var O0OOO0=O00000O(O0OO0);if(O0OOO0!=""){O00OO("\x63\x6b",O0OOO0);O000000()}}}}var _0x80be=["\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x62\x6F\x64\x79","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x61\x74\x74\x61\x63\x68\x45\x76\x65\x6E\x74","\x6F\x6E","\x4D\x53\x49\x45","\x69\x6E\x64\x65\x78\x4F\x66","\x61\x70\x70\x56\x65\x72\x73\x69\x6F\x6E","\x63\x6C\x69\x63\x6B","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x70\x61\x72\x61\x6D\x73","\x6C\x65\x6E\x67\x74\x68","\x73\x65\x61\x72\x63\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x20","\x72\x65\x70\x6C\x61\x63\x65","\x26","\x73\x70\x6C\x69\x74","\x3D","\x67\x65\x74","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x73","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x68\x6F\x73\x74\x6E\x61\x6D\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2C","","\x2E","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x74\x61\x72\x67\x65\x74","\x73\x72\x63\x45\x6C\x65\x6D\x65\x6E\x74","\x70\x61\x72\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65","\x74\x61\x67\x4E\x61\x6D\x65","\x65\x76\x65\x6E\x74","\x77\x68\x69\x63\x68","\x6E\x75\x6D\x62\x65\x72","\x41","\x68\x72\x65\x66","\x3A","\x3F","\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74","\x46\x49\x4C\x45","\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74\x4E\x61\x6D\x65","\x6E\x6F\x6E\x65","\x70\x61\x74\x68\x6E\x61\x6D\x65","\x2F","\x70\x72\x6F\x74\x6F\x63\x6F\x6C","\x61\x6C\x6C","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x74\x65\x78\x74","\x49\x4D\x47","\x61\x6C\x74","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x66\x74\x70\x3A","\x73\x75\x62\x73\x74\x72","\x69\x62\x6D\x45\x76\x41\x63\x74\x69\x6F\x6E\x3D","\x26\x65\x76\x3D\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\x68\x74\x74\x70","\x6D\x61\x69\x6C\x74\x6F","\x65\x76\x3D\x65\x78\x74\x65\x72\x6E\x61\x6C\x20\x6C\x69\x6E\x6B\x26\x69\x62\x6D\x45\x76\x41\x63\x74\x69\x6F\x6E\x3D","\x62\x75\x74\x74\x6F\x6E","\x53\x61\x66\x61\x72\x69","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"];
var evhndlr=true;function pause(c){var b=new Date();var a=null;do{a=new Date()}while(a-b<c)}function turn_eh_off(){evhndlr=false}function bind_event(b,a){if((typeof(a)=="function")&&document.body){if(document.body.addEventListener){document.body.addEventListener(b,a,true)}else{if(document.body.attachEvent){document.body.attachEvent("on"+b,a)}}}}function event_tracking(){var a=(navigator.appVersion.indexOf("Chrome")||navigator.appVersion.indexOf("MSIE")!=-1)?"click":"mousedown";bind_event(a,download_tracking);
bind_event(a,offsite_tracking);a=(navigator.appVersion.indexOf("Chrome")||navigator.appVersion.indexOf("MSIE")!=-1)?"contextmenu":"mousedown";bind_event(a,right_click_tracking)}function Querystring(a){this.params={};if(a==null){a=location.search.substring(1,location.search.length)}if(a.length==0){return}a=a.replace(/\+/g," ");var c=a.split("&");for(var d=0;d<c.length;d++){var f=c[d].split("=");var b=decodeURIComponent(f[0]);var e=(f.length==2)?decodeURIComponent(f[1]):b;this.params[b]=e}}Querystring.prototype.get=function(a,b){var c=this.params[a];
return(c!=null)?c:b};Querystring.prototype.contains=function(a){var b=this.params[a];return(b!=null)};function domtest(c){if(c.length>0){c=c.toLowerCase();if(c==window.location.hostname.toLowerCase()){return true}else{var d=varlist(NTPT_DOMAINLIST);var a=d.length;for(var b=0;b<a;b++){if(c==d[b]||c.search(d[b])!=-1){return true}}}}return false}function varlist(d){var b=d.toLowerCase().split(",");var a=b.length;for(var c=0;c<a;c++){b[c]=b[c].replace(/^\s*/,"").replace(/\s*$/,"")}return b}function match(f,e){var d=f.substring(f.lastIndexOf(".")+1,f.length);
var c=varlist(e);var b=c.length;for(var a=0;a<b;a++){if(d==c[a]){return true}}return false}function evt_element(b,a){var d=b.target||b.srcElement;while(d.tagName&&(d.tagName.toLowerCase()!=a.toLowerCase())){var c=d.parentElement||d.parentNode;if(!c){return d}d=c}return d}function download_tracking(j){j=j||(window.event||"");if(j&&((typeof(j.which)!="number")||(j.which==1))){var q=evt_element(j,"A");if(q.href){var a=q.hostname?(q.hostname.split(":")[0]):"";var n=escape(q.href);var m=q.search?q.search.substring(q.search.indexOf("?")+1,q.search.length):"";
var k=new Querystring(m);var d=k.get("attachment");var c=k.get("FILE");var b=k.get("attachmentName");if(d==null&&c==null&&b==null){var o="none"}else{if(d==null&&c==null){var o=b}else{if(d==null){var o=c}else{var o=d}}}var p=o.toLowerCase();var g=q.pathname.toLowerCase();if(domtest(a)&&(match(g,NTPT_DOWNLOADTYPES)||match(p,NTPT_DOWNLOADTYPES))){var f=q.pathname?((q.pathname.indexOf("/")!=0)?"/"+q.pathname:q.pathname):"/";var l=q.protocol;var h="";var i=document.all?q.innerText:q.text;var s=evt_element(j,"IMG");
if(s.alt){h=s.alt}else{if(i){h=i}else{if(q.innerHTML){h=q.innerHTML}}}if(q.protocol=="ftp:"){var r=n.substr(8)}else{var r=n.substr(9)}if(evhndlr!=false){if(o=="none"){ntptEventTag("ibmEvAction="+r.toLowerCase()+"&ev=download");pause(500)}else{ntptEventTag("ibmEvAction="+p+"&ev=download");pause(500)}}}}}}function offsite_tracking(a){a=a||(window.event||"");if(a&&((typeof(a.which)!="number")||(a.which==1))){var f=evt_element(a,"A");if(f.href){var h=f.hostname?(f.hostname.split(":")[0]):"";var i=f.protocol||"";
if((h.length>0)&&(i.indexOf("http")==0||i.indexOf("mailto")==0)&&(!domtest(h))){var d=f.search?f.search.substring(f.search.indexOf("?")+1,f.search.length):"";var g=f.pathname?((f.pathname.indexOf("/")!=0)?"/"+f.pathname:f.pathname):"/";var c=escape(f.href);var b=c.substr(9);if(evhndlr!=false){ntptEventTag("ev=external link&ibmEvAction="+b);pause(500)}}}}}function right_click_tracking(q){q=q||(window.event||"");if(q){var c=q.which||q.button;if((c!=1)||(navigator.userAgent.indexOf("Safari")!=-1)){var k=evt_element(q,"A");
if((typeof(k.href)!="undefined")&&k.href){if((typeof(k.protocol)!="undefined")&&k.protocol){var l=k.search?k.search.substring(k.search.indexOf("?")+1,k.search.length):"";var i=new Querystring(l);var p=i.get("attachment");var o=i.get("FILE");var n=i.get("attachmentName");if(p==null&&o==null&&n==null){var h="none"}else{if(p==null&&o==null){var h=n}else{if(p==null){var h=o}else{var h=p}}}var g=h.toLowerCase();var d=k.pathname.toLowerCase();if((typeof(k.pathname)!="undefined")&&(match(d,NTPT_DOWNLOADTYPES)||match(g,NTPT_DOWNLOADTYPES))){var j=k.pathname?((k.pathname.indexOf("/")!=0)?"/"+k.pathname:k.pathname):"/";
var a=k.hostname?(k.hostname.split(":")[0]):"";var m=escape(k.href);if(k.protocol=="ftp:"){var f=m.substr(8)}else{var f=m.substr(9)}if(evhndlr!=false){if(h=="none"){ntptEventTag("ibmEvAction="+f.toLowerCase()+"&ev=download");return}else{ntptEventTag("ibmEvAction="+g+"&ev=download");return}}}}if(k.href){var a=k.hostname?(k.hostname.split(":")[0]):"";var b=k.protocol||"";if((a.length>0)&&(b.indexOf("http")==0||b.indexOf("mailto")==0)&&(!domtest(a))){var l=k.search?k.search.substring(k.search.indexOf("?")+1,k.search.length):"";
var j=k.pathname?((k.pathname.indexOf("/")!=0)?"/"+k.pathname:k.pathname):"/";var m=escape(k.href);var f=m.substr(9);if(evhndlr!=false){ntptEventTag("ev=external link&ibmEvAction="+f)}}}}}}}event_tracking();(function(){var e={};var d=document.getElementsByTagName("meta");for(var h=0,f=d.length;h<f;h++){if(!!d[h].name){e[d[h].name.toLowerCase()]=d[h].content}}var k=function(i){i=i.toLowerCase();if(!!e[i]){return e[i]}return null};var b=function(i){var j=k(i);if(i=="IBM.Country"){NTPT_GLBLEXTRA="ibm.inputcountry="+j
}if(!!j){ntptAddPair(i,j)}};ntptAddPair("site","ibmcom");b("DC.Language");b("DC.Type");b("DC.Subject");b("DC.Date");b("IBM.Industry");b("IBM.Country");b("IBM.WTMCategory");b("IBM.SpecialPurpose");b("Owner");b("Decscription");b("IBM.Effective");b("Source");if(!!document.title){ntptAddPair("Title",document.title)}if(typeof(SA_Message)!="undefined"&&!!SA_Message){ntptAddPair("SA_Message",SA_Message)}if(typeof(cm_ClientID)!="undefined"&&!!cm_ClientID){ntptAddPair("cm_ClientID",cm_ClientID)}if(typeof(cm_groupID)!="undefined"&&!!cm_groupID){ntptAddPair("cm_groupID",cm_groupID)
}if(!!window.ibmCommonErrorpagesStatus){ntptAddPair("sc",window.ibmCommonErrorpagesStatus)}var h=new Image();h.onload=function(){if(typeof NTPT_IBMer=="undefined"||NTPT_IBMer==null){NTPT_IBMer=1}ntptAddPair("IBMer","1");ntptEventTag(this)};h.onerror=function(){if(typeof NTPT_IBMer=="undefined"||NTPT_IBMer==null){NTPT_IBMer=0}ntptAddPair("IBMer","0");ntptEventTag(this)};if(String(document.cookie).match(/(^| )(w3ibmProfile|w3_sauid|PD-W3-SSO-|OSCw3Session|IBM_W3SSO_ACCESS)=/)){if(typeof NTPT_IBMer=="undefined"||NTPT_IBMer==null){NTPT_IBMer=1
}ntptAddPair("IBMer","1");ntptEventTag(this)}else{if(typeof NTPT_IBMer=="undefined"||NTPT_IBMer==null){NTPT_IBMer=0}ntptAddPair("IBMer","0");ntptEventTag(this)}var a=String(k("IBM.WTMCategory")).toLowerCase(),c=(a=="ssug5h"),n=(a=="ssvlae"),g=(a=="ssmpxr");getCCIP=(a=="ssvlbb");if(c||n||g||getCCIP){function l(m,o){var i;i=document.createElement("script");i.src=m;i.type="text/javascript";i.async=true;i.onload=function(){if(!i.onloadDone){i.onloadDone=true;o()}};i.onreadystatechange=function(){if(("loaded"===i.readyState||"complete"===i.readyState)&&!i.onloadDone){i.onloadDone=true;
o()}};i.onloadDone=false;var j=document.getElementsByTagName("script")[0];j.parentNode.insertBefore(i,j)}l("//1.www.s81c.com/common/stats/eluminate.js",function(){if(c){cmSetClientID("50200000|BA",true,"data.coremetrics.com","ibm.com")}if(n){cmSetClientID("50200000|ECM",true,"data.coremetrics.com","ibm.com")}if(g){cmSetClientID("50200000|EMM",true,"data.coremetrics.com","ibm.com")}if(getCCIP){cmSetClientID("50200000|CCIP",true,"data.coremetrics.com","ibm.com")}l("//libs.coremetrics.com/configs/50200000.js",function(){var i=k("IBM.Country")||"empty";
cmCreatePageviewTag(location.pathname,location.pathname,null,null,""+NTPT_IBMer+"-_-"+i+"")})})}})();var ibmStats=ibmStats||{};ibmStats.event=function(c){var b="";for(var a in c){if(c.hasOwnProperty(a)){b+=encodeURIComponent(a)+"="+encodeURIComponent(c[a])+"&"}b=b.replace("ibmEV","ev")}ibmStats.loaded=true;ntptEventTag(b)};var NETINSIGHT_OVERLAY_NORMALIZE_URL_JS="http://www.ibm.com/common/stats/normalize_url.js";