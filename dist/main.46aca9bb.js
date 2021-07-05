/*! Kast v1.2 Build 12000 - Extraordinary SHOUTcast HTML5 Radio Player for jQuery - Material Design | © Manar Kamel (manarkamel.github.io) */!function(a,b,c,d){function e(d,e){this.opt=a.extend({},g,e);var f=function(){var a=new Audio;return!(!a.canPlayType||!(a.canPlayType("audio/mpeg;").replace(/^no$/,"")||a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")||a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")||a.canPlayType("audio/aac;").replace(/^no$/,"")))};if(!(this.opt.host&&f&&b.DOMParser&&c.implementation.createHTMLDocument))throw a.data(c.body,"plugin_kast",null),Error("Kast couldn't load");e.language&&(this.opt.language=a.extend({},g.language,e.language)),"object"==typeof e.colors&&(this.opt.colors=a.extend({},g.colors,e.colors)),"minimized"!==this.opt.startTemplate||this.opt.statusBar&&this.opt.minimizeMaximize||(this.opt.played=!1);var h=this.opt,i="https:"===c.location.protocol?"https":"http";h.direct&&"https"===i&&(h.protocol=i),this.host=h.protocol+"://"+h.host+":"+h.port+"/",this.hostCORS=[i+"://crossorigin.me/"+this.host,"https://player.cloudrad.io/"+this.host,i+"://kastproxy-us.herokuapp.com/"+this.host,i+"://zet.pluginsandthemes.ro/"+this.host],h.overHTTPS&&"https:"===i&&(this.host=this.hostCORS[0]);var j=h.sid,k=h.directStreamURL||(j>1?this.host+"stream/"+j+"/;":this.host+";");this.audio=c.createElement("audio"),this.audio.src=k+"?_="+Math.random(),this.audio.load(),h.onAudioLoad(this.audio),this.mobile=!1,this.mobileMedium=!1,this.mobileUltra=!1;var l=h.mobileCare,m=l[1]||"599px";l&&b.matchMedia&&b.matchMedia("(max-width: "+m+")").matches&&(this.mobile=!0,h.autoPlay=!1,h.startTemplate="minimized",h.offlineCheck=!1,("medium"===l[0]||"high"===l[0]||"very high"===l[0]||"ultra"===l[0])&&(this.mobileMedium=!0,"all"===h.autoUpdate&&(h.autoUpdate=!0),"dynamic"===h.theme&&(h.theme="light"),"dynamic"===h.colors&&(h.colors=!1)),("high"===l[0]||"very high"===l[0]||"ultra"===l[0])&&(h.artwork=h.played=!1),("very high"===l[0]||"ultra"===l[0])&&(h.autoUpdate=h.minimizeMaximize=!1),"ultra"===l[0]&&(this.mobileUltra=!0,h.statusBar=h.serverInfo=h.currentArtist=h.currentTrack=!1),h.onMobile()),this.init()}function f(a){var b=c.implementation.createHTMLDocument("html");return b.documentElement.innerHTML=a,b}var g={host:"",port:80,protocol:"http",version:2,sid:1,statsPath:"stats",playedPath:"played",directStreamURL:!1,ui:"colored",theme:"light",colors:{primary:"cyan",accent:"yellow"},startTemplate:"maximized",position:"right",container:"body",autoPlay:!1,autoUpdate:!0,artwork:!0,statusBar:!0,minimizeMaximize:!0,muteUnmute:!0,startMuted:!1,serverInfo:!1,played:!0,currentTrack:!0,currentArtist:!0,playedTracks:!0,playedArtists:!0,offlineCheck:!0,language:{offlineText:"Temporarily Offline",playedText:"Played",unknownTrackText:"Unknown Track",unknownArtistText:"Unknown Artist"},mobileCare:!0,irrelevantWords:["feat.","ft.","Feat.","Ft."],overHTTPS:!1,direct:!1,betaProxies:!1,continuous:!0,onReady:function(){},onAudioLoad:function(){},onMobile:function(){},onPlay:function(){},onPause:function(){},onStop:function(){},onMinimize:function(){},onMaximize:function(){},onMute:function(){},onUnmute:function(){},onUpdate:function(){},onUpdateAll:function(){},onOffline:function(){},onOnline:function(){},onCurrentArtwork:function(){},onPlayedArtworks:function(){},onCurrentInfo:function(){},onPlayedInfo:function(){},onDynamicColors:function(){},onDynamicColorsContrast:function(){},onDynamicTheme:function(){}},h=function(a){this.canvas=c.createElement("canvas"),this.context=this.canvas.getContext("2d"),c.body.appendChild(this.canvas),this.width=this.canvas.width=a.width,this.height=this.canvas.height=a.height,this.context.drawImage(a,0,0,this.width,this.height)},i=function(){};if(h.prototype={clear:function(){this.context.clearRect(0,0,this.width,this.height)},update:function(a){this.context.putImageData(a,0,0)},getPixelCount:function(){return this.width*this.height},getImageData:function(){return this.context.getImageData(0,0,this.width,this.height)},removeCanvas:function(){this.canvas.parentNode.removeChild(this.canvas)}},i.prototype.getPalette=function(a,b){for(var c,d,e,f,g,i=new h(a),j=i.getImageData(),k=j.data,m=i.getPixelCount(),n=[],o=0;o<m;o+=10)c=4*o,d=k[c+0],e=k[c+1],f=k[c+2],g=k[c+3],g>=125&&(d>250&&e>250&&f>250||n.push([d,e,f]));var p=l.quantize(n,b),q=p?p.palette():null;return i.removeCanvas(),q},!j)var j={map:function(a,b){var c={};return b?a.map(function(a,d){return c.index=d,b.call(c,a)}):a.slice()},naturalOrder:function(a,b){return a<b?-1:a>b?1:0},sum:function(a,b){var c={};return a.reduce(b?function(a,d,e){return c.index=e,a+b.call(c,d)}:function(a,b){return a+b},0)},max:function(a,b){return Math.max.apply(null,b?j.map(a,b):a)}};var k,l=function(){function a(a,b,c){return(a<<2*k)+(b<<k)+c}function b(a){function b(){c.sort(a),e=!0}var c=[],e=!1;return{push:function(a){c.push(a),e=!1},peek:function(a){return e||b(),a===d&&(a=c.length-1),c[a]},pop:function(){return e||b(),c.pop()},size:function(){return c.length},map:function(a){return c.map(a)},debug:function(){return e||b(),c}}}function c(a,b,c,d,e,f,g){var h=this;h.r1=a,h.r2=b,h.g1=c,h.g2=d,h.b1=e,h.b2=f,h.histo=g}function e(){this.vboxes=new b(function(a,b){return j.naturalOrder(a.vbox.count()*a.vbox.volume(),b.vbox.count()*b.vbox.volume())})}function f(b){var c,d,e,f,g=1<<3*k,h=new Array(g);return b.forEach(function(b){d=b[0]>>l,e=b[1]>>l,f=b[2]>>l,c=a(d,e,f),h[c]=(h[c]||0)+1}),h}function g(a,b){var d,e,f,g=1e6,h=0,i=1e6,j=0,k=1e6,m=0;return a.forEach(function(a){d=a[0]>>l,e=a[1]>>l,f=a[2]>>l,d<g?g=d:d>h&&(h=d),e<i?i=e:e>j&&(j=e),f<k?k=f:f>m&&(m=f)}),new c(g,h,i,j,k,m,b)}function h(b,c){function d(a){var b,d,e,f,g,h=a+"1",j=a+"2",k=0;for(i=c[h];i<=c[j];i++)if(p[i]>o/2){for(e=c.copy(),f=c.copy(),b=i-c[h],d=c[j]-i,g=b<=d?Math.min(c[j]-1,~~(i+d/2)):Math.max(c[h],~~(i-1-b/2));!p[g];)g++;for(k=q[g];!k&&p[g-1];)k=q[--g];return e[j]=g,f[h]=e[j]+1,[e,f]}}if(c.count()){var e=c.r2-c.r1+1,f=c.g2-c.g1+1,g=c.b2-c.b1+1,h=j.max([e,f,g]);if(1==c.count())return[c.copy()];var i,k,l,m,n,o=0,p=[],q=[];if(h==e)for(i=c.r1;i<=c.r2;i++){for(m=0,k=c.g1;k<=c.g2;k++)for(l=c.b1;l<=c.b2;l++)n=a(i,k,l),m+=b[n]||0;o+=m,p[i]=o}else if(h==f)for(i=c.g1;i<=c.g2;i++){for(m=0,k=c.r1;k<=c.r2;k++)for(l=c.b1;l<=c.b2;l++)n=a(k,i,l),m+=b[n]||0;o+=m,p[i]=o}else for(i=c.b1;i<=c.b2;i++){for(m=0,k=c.r1;k<=c.r2;k++)for(l=c.g1;l<=c.g2;l++)n=a(k,l,i),m+=b[n]||0;o+=m,p[i]=o}return p.forEach(function(a,b){q[b]=o-a}),d(h==e?"r":h==f?"g":"b")}}function i(a,c){function d(a,b){for(var c,d=1,e=0;e<m;)if(c=a.pop(),c.count()){var f=h(i,c),g=f[0],j=f[1];if(!g)return;if(a.push(g),j&&(a.push(j),d++),d>=b)return;if(e++>m)return}else a.push(c),e++}if(!a.length||c<2||c>256)return!1;var i=f(a),k=0;i.forEach(function(){k++});var l=g(a,i),o=new b(function(a,b){return j.naturalOrder(a.count(),b.count())});o.push(l),d(o,n*c);for(var p=new b(function(a,b){return j.naturalOrder(a.count()*a.volume(),b.count()*b.volume())});o.size();)p.push(o.pop());d(p,c-p.size());for(var q=new e;p.size();)q.push(p.pop());return q}var k=5,l=8-k,m=1e3,n=.75;return c.prototype={volume:function(a){var b=this;return b._volume&&!a||(b._volume=(b.r2-b.r1+1)*(b.g2-b.g1+1)*(b.b2-b.b1+1)),b._volume},count:function(b){var c=this,d=c.histo;if(!c._count_set||b){var e,f,g,h=0;for(e=c.r1;e<=c.r2;e++)for(f=c.g1;f<=c.g2;f++)for(g=c.b1;g<=c.b2;g++)index=a(e,f,g),h+=d[index]||0;c._count=h,c._count_set=!0}return c._count},copy:function(){var a=this;return new c(a.r1,a.r2,a.g1,a.g2,a.b1,a.b2,a.histo)},avg:function(b){var c=this,d=c.histo;if(!c._avg||b){var e,f,g,h,i,j=0,l=1<<8-k,m=0,n=0,o=0;for(f=c.r1;f<=c.r2;f++)for(g=c.g1;g<=c.g2;g++)for(h=c.b1;h<=c.b2;h++)i=a(f,g,h),e=d[i]||0,j+=e,m+=e*(f+.5)*l,n+=e*(g+.5)*l,o+=e*(h+.5)*l;j?c._avg=[~~(m/j),~~(n/j),~~(o/j)]:c._avg=[~~(l*(c.r1+c.r2+1)/2),~~(l*(c.g1+c.g2+1)/2),~~(l*(c.b1+c.b2+1)/2)]}return c._avg},contains:function(a){var b=this,c=a[0]>>l;return gval=a[1]>>l,bval=a[2]>>l,c>=b.r1&&c<=b.r2&&gval>=b.g1&&gval<=b.g2&&bval>=b.b1&&bval<=b.b2}},e.prototype={push:function(a){this.vboxes.push({vbox:a,color:a.avg()})},palette:function(){return this.vboxes.map(function(a){return a.color})},size:function(){return this.vboxes.size()},map:function(a){for(var b=this.vboxes,c=0;c<b.size();c++)if(b.peek(c).vbox.contains(a))return b.peek(c).color;return this.nearest(a)},nearest:function(a){for(var b,c,e,f=this.vboxes,g=0;g<f.size();g++)c=Math.sqrt(Math.pow(a[0]-f.peek(g).color[0],2)+Math.pow(a[1]-f.peek(g).color[1],2)+Math.pow(a[2]-f.peek(g).color[2],2)),(c<b||b===d)&&(b=c,e=f.peek(g).color);return e},forcebw:function(){var a=this.vboxes;a.sort(function(a,b){return j.naturalOrder(j.sum(a.color),j.sum(b.color))});var b=a[0].color;b[0]<5&&b[1]<5&&b[2]<5&&(a[0].color=[0,0,0]);var c=a.length-1,d=a[c].color;d[0]>251&&d[1]>251&&d[2]>251&&(a[c].color=[255,255,255])}},{quantize:i}}(),m=function(a){if(!a)return null;var b,c,d,e,f=/^rgba?[\s+]?\(\s*(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]))\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,?(?:\s*([\d.]+))?\s*\)?\s*/im,g=a.match(f);return g?(b=parseInt(g[1],10),c=parseInt(g[2],10),d=parseInt(g[3],10),e=(299*b+587*c+114*d)/1e3,e>=146?"dark":"light"):null},n=new i,o=function(a,b,d,e){for(var f,g=b.length,h=c.createDocumentFragment(),i=0;i<g;i++){if(a.direct)f=d[b[i]];else if(d.body){var j=d.body.textContent.split(",");"currentlisteners"===b[i]?f=j[0]:"streamstatus"===b[i]?f=j[1]:"peaklisteners"===b[i]?f=j[2]:"maxlisteners"===b[i]?f=j[3]:"uniquelisteners"===b[i]?f=j[4]:"bitrate"===b[i]?f=j[5]:"songtitle"===b[i]&&(f=j[6])}else f=d.getElementsByTagName(b[i].toUpperCase())[0].textContent;i===g-1?h.appendChild(c.createTextNode(f)):h.appendChild(c.createTextNode(f+" - "))}e.appendChild(h)},p=function(a){var c;c=b.XMLHttpRequest?new XMLHttpRequest:new XDomainRequest;try{if(c.open("GET",a.url,!0),a.arraybuffer){if("string"!=typeof c.responseType)return void(a.error&&a.error());c.responseType="arraybuffer"}c.timeout=a.timeout||3e3}catch(b){return void(a.error&&a.error())}c.onload=function(){if(4===c.readyState)if(200===c.status){var b=a.arraybuffer?c.response:c.responseText;a.load(b,c)}else a.error&&a.error()},a.error&&(c.onerror=a.error),c.ontimeout=c.onerror,setTimeout(function(){c.send()},0),b.kastXHR=c},q=function(a){return a.replace(/(\[.*?\]|\(.*?\))/g,"").replace(/[|&^'`;:$%@"#<>+,]/g,"")},r=c.documentElement.classList;e.prototype={init:function(){var d=this,e=d.opt;e.popup&&(k=b.open("","kast","width="+e.popupWidth+",height="+e.popupHeight+",toolbar=0,menubar=0,location=0,directories=0,status=0,scrollbars=0,resizable=1,left=0,top=0"),c=k.document,c.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Kast</title><link href="'+e.popupCSSLink+'" rel="stylesheet" type="text/css"></head><body></body></html>'),k.onbeforeunload=function(){a.kast("destroy")},e.container="body");var f=c.querySelector(e.container),g=e.colors,h="object"==typeof g?"kast-primary-"+g.primary.replace(" ",""):"",i="object"==typeof g?"kast-accent-"+g.accent.replace(" ",""):"",j="string"==typeof g?"kast-colors-"+g:"",l=d.mobile&&d.mobileUltra?"kast-ultra":"",m=e.statusBar&&e.muteUnmute&&e.minimizeMaximize?"":"kast-not-full-statusbar",n=e.played?" kast-played ":" kast-current ",p="body"!==e.container?"kast-custom-container":"",q=f.offsetWidth<380?"kast-thin-container":"",r="dynamic"===e.theme?"kast-light":"",s="",t="";if(e.statusBar){var u=e.muteUnmute?'<i id="kast-volume" class="kast-mdi kast-mdi-volume-high"></i>':"",v=e.minimizeMaximize?'<i id="kast-minmax" class="kast-mdi kast-mdi-chevron-down"></i>':"";s='<div id="kast-bar"><p class="kast-offline-status">'+e.language.offlineText+'</p><p id="kast-server"></p>'+u+v+"</div>"}e.played&&(t='<div id="kast-bottom" class="kast-clearfix"><p>'+e.language.playedText+'</p><ul id="kast-playedlist" class="kast-clearfix"></ul></div>');var w=e.continuous?"kast-paused kast-continuous ":"kast-stopped ",x="";x+='<div id="kast" class="kast-recss kast-'+e.theme+" kast-"+e.ui+" "+h+" "+i+" "+j+" kast-"+e.startTemplate+" kast-"+e.position+" "+l+" "+m+n+" "+p+" "+r+" "+q+'">',x+='<div id="kast-wrapper">',x+=s,x+='<div id="kast-top" class="kast-default-art">',x+='<div class="kast-album-wrapper"><i class="kast-mdi kast-mdi-album"></i></div>',x+='<div id="kast-top-content" class="kast-top-content">',x+='<div id="kast-nowplaying"><p id="kast-np-title"></p><p id="kast-np-artist"></p></div>',x+='<div id="kast-linear"></div>',x+="</div>",x+='<div id="kast-play" class="'+w+'">',x+='<i class="kast-mdi kast-mdi-play"></i>',x+='<i class="kast-mdi kast-mdi-pause"></i>',x+='<i class="kast-mdi kast-mdi-stop"></i>',x+="</div></div>"+t+"</div></div>",f.insertAdjacentHTML("beforeend",x),e.onReady(),(e.statusBar||e.currentTrack||e.currentArtist)&&this.stats(function(a){var b=e.serverInfo;if(b&&e.statusBar){var f=c.getElementById("kast-server");"string"==typeof b?f.textContent=b:o(e,b,a,f)}d.stats(a)}),e.played&&(Array.isArray&&Array.isArray(e.artwork)?d.played(!1,!0):d.played());var y=e.autoUpdate;return"all"===y?d.autoUpdate("all"):y&&d.autoUpdate(!0),c.getElementById("kast-play").onclick=function(){this.className.indexOf("playing")===-1?d.play(!e.continuous):e.continuous?d.pause():d.stop()},e.statusBar&&(e.muteUnmute&&(c.getElementById("kast-volume").onclick=function(){this.className.indexOf("high")!==-1?d.mute():d.unmute()}),e.minimizeMaximize&&(c.getElementById("kast-minmax").onclick=function(){c.getElementById("kast").className.indexOf("minimized")!==-1?d.maximize():d.minimize()})),e.autoPlay&&d.play(),e.startMuted&&d.mute(),this},play:function(b){var d=c.getElementById("kast"),e=c.getElementById("kast-play");if(r){var f=e.classList;f.remove("kast-paused"),f.remove("kast-stopped"),f.add("kast-playing")}else a(e).removeClass("kast-paused kast-stopped").addClass("kast-playing");var g=this.opt.offlineCheck&&"false"===d.getAttribute("data-offline");return(b||g)&&(this.audio.load(),g&&d.removeAttribute("data-offline")),this.audio.play(),this.opt.onPlay(this.audio),this},pause:function(){var b=c.getElementById("kast-play");if(r){var d=b.classList;d.remove("kast-playing"),d.remove("kast-stopped"),d.add("kast-paused"),d.add("kast-continuous")}else a(b).removeClass("kast-playing kast-stopped").addClass("kast-paused kast-continuous");return this.audio.pause(),this.opt.onPause(this.audio),this},stop:function(){var b=c.getElementById("kast-play");if(r){var d=b.classList;d.remove("kast-playing"),d.remove("kast-paused"),d.remove("kast-continuous"),d.add("kast-stopped")}else a(b).removeClass("kast-playing kast-paused kast-continuous").addClass("kast-stopped");return this.audio.pause(),this.opt.onStop(this.audio),this},mute:function(){return c.getElementById("kast-volume").className="kast-mdi kast-mdi-volume-off",this.audio.muted=!0,this.opt.onMute(this.audio),this},unmute:function(){return c.getElementById("kast-volume").className="kast-mdi kast-mdi-volume-high",this.audio.muted=!1,this.opt.onUnmute(this.audio),this},minimize:function(){var b=c.getElementById("kast");if(r){var d=b.classList;d.remove("kast-maximized"),d.add("kast-minimized")}else a(b).removeClass("kast-maximized").addClass("kast-minimized");return this.opt.onMinimize(),this},maximize:function(){var b=c.getElementById("kast");if(r){var d=b.classList;d.remove("kast-minimized"),d.add("kast-maximized")}else a(b).removeClass("kast-minimized").addClass("kast-maximized");return this.opt.onMaximize(),this},stats:function(d){var e=this,g=e.opt,h=c.getElementById("kast"),i=c.getElementById("kast-np-title"),j=c.getElementById("kast-np-artist"),k=c.getElementById("kast-top"),l=c.getElementById("kast-bar"),o=c.getElementById("kast-top-content"),q=c.getElementById("kast-play"),s=function(d){var f,s,t,u,v=g.language.unknownTrackText,w=g.language.unknownArtistText;try{f=(g.direct?d.songtitle:d.body?d.body.textContent.split(",")[6]:d.getElementsByTagName("SONGTITLE")[0].textContent)||w+" - "+v}catch(a){f=w+" - "+v}var x=f.indexOf("//<![CDATA");if(x>-1&&(f=f.slice(0,x-1)),u=f.split(" - "),s="string"==typeof g.currentTrack?g.currentTrack:u[1]||f||v,t="string"==typeof g.currentArtist?g.currentArtist:u[1]?u[0]:w,g.skipInfo)for(var y=0,z=g.skipInfo.length;y<z;y++)if(g.skipInfo[y].track&&g.skipInfo[y].artist){if(g.skipInfo[y].track===s&&g.skipInfo[y].artist===t)return}else if(g.skipInfo[y].track&&g.skipInfo[y].track===s||g.skipInfo[y].artist&&g.skipInfo[y].artist===t)return;g.currentTrack&&(i.textContent=s),g.currentArtist&&(j.textContent=t),g.artwork&&e.artwork(t,s,function(d){if(d){var e=d[0],f=d[1]||e;k.style.backgroundImage="url("+e+")",k.removeAttribute("class"),g.onCurrentArtwork(e),"dynamic"!==g.theme&&"dynamic"!==g.colors||!b.Blob||p({url:f,arraybuffer:!0,load:function(d,e){b.URL=b.URL||b.webkitURL;var f=c.createElement("img"),i=e.getResponseHeader("content-type"),j=new Uint8Array(d),k=new Blob([j],{type:i});f.src=b.URL.createObjectURL(k),f.onload=function(){var c=n.getPalette(f,5),d="rgb("+c[0]+")",e="rgb("+c[1]+")",i=m(d)||"light",j="kast-primary-"+i,k=m(e)||"dark",p="kast-accent-"+k;if("dynamic"===g.colors){var s=g.continuous?"kast-paused ":"kast-stopped ",t=q.className;t.indexOf("playing")!==-1?q.className="kast-playing "+p:q.className=s+p,g.continuous&&(q.className+=" kast-continuous "),o.className="kast-top-content "+j,g.statusBar&&(l.className=j),q.style.backgroundColor=e,"colored"===g.ui&&(o.style.backgroundColor=d),g.onDynamicColors(d,e),g.onDynamicColorsContrast(i,k)}if("dynamic"===g.theme)if("light"===i){if(r){var u=h.classList;u.remove("kast-dark"),u.add("kast-light")}else a(h).removeClass("kast-dark").addClass("kast-light");g.onDynamicTheme("light")}else{if(r){var u=h.classList;u.remove("kast-light"),u.add("kast-dark")}else a(h).removeClass("kast-light").addClass("kast-dark");g.onDynamicTheme("dark")}b.URL.revokeObjectURL(f.src),f=null}}})}else{if(r){var i=h.classList,j=q.classList;j.remove("kast-accent-light"),j.remove("kast-accent-dark"),"dark"===g.theme?(i.remove("kast-light"),i.add("kast-dark")):(i.remove("kast-dark"),i.add("kast-light"))}else a(q).removeClass("kast-accent-light kast-accent-dark"),"dark"===g.theme?a(h).removeClass("kast-light").addClass("kast-dark"):a(h).removeClass("kast-dark").addClass("kast-light");k.className="kast-default-art",g.statusBar&&l.removeAttribute("class"),q.removeAttribute("style"),k.removeAttribute("style"),o.removeAttribute("style"),o.className="kast-top-content"}}),g.onCurrentInfo(s,t)};if("object"==typeof d)s(d);else{var t=function(b,i){var j=b+g.statsPath+"?sid="+g.sid,k=1===g.version?"#":"?_=";1===g.version&&(j=b+"7.html"),p({url:j+k+Math.random(),timeout:8e3,load:function(a){var b=a.indexOf("<?xml")>-1?(new DOMParser).parseFromString(a,"text/xml"):f(a);"function"==typeof d?d(b):s(b)},error:function(){if(i){var b=h.hasAttribute("data-offline"),d=c.getElementById("kast-np-title");g.offlineCheck&&g.autoUpdate&&!b&&(r?h.classList.add("kast-offline"):a(h).addClass("kast-offline"),h.setAttribute("data-offline","true"),g.onOffline()),d.hasChildNodes()||s("error")}else t(e.hostCORS[g.betaProxies?3:1],!0)}})},u=function(){a.ajax({url:e.host+g.statsPath+"?sid="+g.sid+"&json=1&_="+Math.random(),dataType:"jsonp",timeout:8e3,success:function(a){"function"==typeof d?d(a):s(a)},error:function(){var b=h.hasAttribute("data-offline"),d=c.getElementById("kast-np-title");g.offlineCheck&&g.autoUpdate&&!b&&(r?h.classList.add("kast-offline"):a(h).addClass("kast-offline"),h.setAttribute("data-offline","true"),g.onOffline()),d.hasChildNodes()||s("error")}})};g.direct?u():t(e.hostCORS[g.betaProxies?2:0],!1)}return this},played:function(b,d){var e=this,g=e.opt,h=c.getElementById("kast-playedlist"),i=function(a){for(;h.firstChild;)h.removeChild(h.firstChild);var b,f,i,j=c.createDocumentFragment(),k=g.language.unknownTrackText,l=g.language.unknownArtistText;try{if(g.direct)b=a;else if(a.body){i=a.getElementsByTagName("table");for(var m=0,n=i.length;m<n&&!(i[m].textContent.toLowerCase().indexOf("played @")>-1);m++);b=i[m].getElementsByTagName("tr")}else b=a.getElementsByTagName("SONG");f=b.length}catch(a){f=3}for(var o=function(b,f,h,i){var j,m,n,o;try{n=(g.direct?f[b].title:a.body?f[b].getElementsByTagName("td")[1].textContent:f[b].getElementsByTagName("TITLE")[0].textContent)||l+" - "+k}catch(a){n=l+" - "+k}if(o=n.split(" - "),g.playedTracks&&(j=o[1]||n||k),g.playedArtists&&(m=o[1]?o[0]:l),g.skipInfo)for(var p=0,q=g.skipInfo.length;p<q;p++)if(g.skipInfo[p].track&&g.skipInfo[p].artist){if(g.skipInfo[p].track===j&&g.skipInfo[p].artist===m)return}else if(g.skipInfo[p].track&&g.skipInfo[p].track===j||g.skipInfo[p].artist&&g.skipInfo[p].artist===m)return;var r=c.createElement("li"),s=c.createElement("div"),p=c.createElement("i"),t=c.createElement("div"),u=c.createElement("p"),v=c.createElement("p");s.className="kast-p-art",p.className="kast-mdi kast-mdi-album",t.className="kast-p-info",u.className="kast-p-title",u.textContent=j,v.className="kast-p-artist",v.textContent=m,r.appendChild(s),r.appendChild(t),s.appendChild(p),t.appendChild(u),t.appendChild(v),g.artwork&&!d?e.artwork(m,j,function(a){a?(s.style.backgroundImage="url("+(a[1]||a[0])+")",g.onPlayedArtworks(a[1]||a[0])):s.className="kast-p-art kast-p-default-art"}):s.className="kast-p-art kast-p-default-art",g.onPlayedInfo(j,m),i.appendChild(r)},p=a.body?2:1,q=p;q<f;q++)o(q,b,f,j);h.appendChild(j)},j=function(a,c){var d=a+g.playedPath+"?sid="+g.sid+"&type=xml",k=1===g.version?"#":"&_=";1===g.version&&(d=a+g.playedPath+".html"),p({url:d+k+Math.random(),timeout:8e3,load:function(a){var c=a.indexOf("<?xml")>-1?(new DOMParser).parseFromString(a,"text/xml"):f(a);b?b(c):i(c)},error:function(a){c?h.hasChildNodes()||i("error"):j(e.hostCORS[g.betaProxies?3:1],!0)}})},k=function(){a.ajax({url:e.host+g.playedPath+"?sid="+g.sid+"&type=json",timeout:8e3,dataType:"jsonp",success:function(a){b?b(a):i(a)},error:function(){h.hasChildNodes()||i("error")}})};return g.direct?k():j(e.hostCORS[g.betaProxies?2:0],!1),this},autoUpdate:function(b){var d,e=this,f=e.opt,g=c.getElementById("kast"),h=c.getElementById("kast-server"),i=c.getElementById("kast-play");if(r&&(d=g.classList),!b)return clearInterval(g.getAttribute("data-interval")),void g.removeAttribute("data-interval");var j=function(){e.stats(function(c){var j=i.className.indexOf("playing")!==-1;if(f.offlineCheck){var k=f.direct?c.streamstatus:c.body?c.body.textContent.split(",")[1]:c.getElementsByTagName("STREAMSTATUS")[0].textContent,l=g.hasAttribute("data-offline");c&&1==k?l&&(r?d.remove("kast-offline"):a(g).removeClass("kast-offline"),g.setAttribute("data-offline","false"),f.onOnline()):l||(r?d.add("kast-offline"):a(g).addClass("kast-offline"),g.setAttribute("data-offline","true"),f.onOffline())}if(j&&e.play(),"all"===b){var m=f.serverInfo,n=f.statusBar;"string"!=typeof m&&n&&(h.textContent="",o(f,m,c,h))}var p="string"==typeof f.currentTrack&&"string"==typeof f.currentArtist;if(p&&!f.played)return f.onUpdate(c),void f.onUpdateAll(c);var q=f.direct?c.songtitle:c.body?c.body.textContent.split(",")[6]:c.getElementsByTagName("SONGTITLE")[0].textContent,s=g.getAttribute("data-current");if(!s)return g.setAttribute("data-current",q);if(s!==q){if(p||e.stats(c),f.played){var t=Array.isArray&&Array.isArray(f.artwork);t?e.played(!1,!0):e.played()}g.setAttribute("data-current",q),f.onUpdate(c)}f.onUpdateAll(c)})},k=function(a,b){if(!g.hasAttribute("data-interval")){var c=setInterval(a,b);g.setAttribute("data-interval",c)}},l=8e3;return e.mobile&&(l=e.mobileMedium?16e3:12e3),k(j,f.customCheckerInterval||l),this},artwork:function(a,b,c){var d=this.opt,e=Array.isArray&&Array.isArray(d.defaultArtwork)?d.defaultArtwork:null;if(Array.isArray&&Array.isArray(d.artwork))return c(d.artwork);if(a===d.language.unknownArtistText)return c(e);var f=q(a),g=q(b),h=function(a,b){if(!a)return null;var c,d=0,e=a.length;if(1===e&&(c=a[0]["#text"]),!c){if(d=0,b){for(;d<e;d++)if("extralarge"===a[d].size){c=a[d]["#text"];break}if(!c)for(d=0;d<e;d++)if("large"===a[d].size){c=a[d]["#text"];break}}else for(;d<e;d++)if("medium"===a[d].size){c=a[d]["#text"];break}c=c||a[b?a.length-1:0].src}return c},i=function(a){var b,c,d=null,e=a.track&&a.track.image||a.track&&a.track.album&&a.track.album.image,f=a.artist&&a.artist.image;return e?(b=h(e,!0),c=h(e)):f&&(b=h(f,!0),c=h(f)),b&&c&&(d=[b,c]),d},j=function(a,b,d){var f="98c76261ff17717a4a5b9d59498b9985",g="https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+f+"&artist="+a+"&track="+b+"&format=json",h="https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key="+f+"&artist="+a+"&format=json",k=d?h:g;p({url:k,load:function(f){var g=JSON.parse(f),h=i(g);console.log(g,h),h?c(h):d?c(e):j(a,b,!0)},error:function(){c(e)}})},k=d.irrelevantWords;if(k){for(var l=k.length,m=0;m<l;m++)f=f.replace(k[m],""),g=g.replace(k[m],"");j(f,g)}else j(f,g);return this},destroy:function(){b.kastXHR&&b.kastXHR.abort(),this.autoUpdate(!1),this.audio.pause(),a.data(b,"plugin_kast",null);var d=c.getElementById("kast");return d&&d.parentNode.removeChild(d),k&&k.close(),c=b.document,this}},a.kast=function(c,d){if(a.data(b,"plugin_kast"))"function"==typeof e.prototype[c]&&a.data(b,"plugin_kast")[c](d);else{if("destroy"===c)return;a.data(b,"plugin_kast",new e(this,c))}}}(jQuery,window,document);
