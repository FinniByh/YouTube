!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="dist/",t(t.s=5)}([function(e,n,t){var i=t(1);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(i,o);i.locals&&(e.exports=i.locals)},function(e,n,t){(n=e.exports=t(2)(!1)).push([e.i,"@import url(https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css);",""]),n.push([e.i,"\n#buttonList {\n  margin: 30px auto 0 auto;\n  display: none;\n  justify-content: center;\n}\n\n#leftButton {\n  height: 40px;\n  width: 40px;\n  border:1px solid white;\n  border-radius: 50%;\n  background-color: inherit;\n  outline: none;\n  margin-right: 20px;\n  color: white;\n  font-size: 14pt;\n}\n\n#leftButton:hover{\n  background-color: green;\n}\n\n#outerPages {\n  overflow: hidden;\n}\n\n#pages {\n  background-color: inherit;\n  display: flex;\n  width: 250px;\n  position: relative;\n  left: 0px;\n}\n\n#pageNumber {\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  border: 1px solid white;\n  border-radius: 50%;\n  background-color: red;\n  margin-right: 10px;\n  color: white;\n  font-size: 12pt;\n  outline: none;\n}\n\n\n#rightButton {\n  height: 40px;\n  width: 40px;\n  border:1px solid white;\n  border-radius: 50%;\n  background-color: inherit;\n  outline: none;\n  margin-left: 20px;\n  color: white;\n  font-size: 14pt;\n}\n\n#rightButton:hover {\n  background-color: green;\n}\n\n#video {\n  background-color: white;\n  border: 2px solid white;\n  border-radius: 5px;\n  overflow: hidden;\n  font-weight: bold;\n  width: 20vw;\n  min-width: 20vw;\n  margin-left: 2.25vw;\n  margin-right: 2.5vw;\n}\n\n#titleText {\n  width: 100%;\n  position: absolute;\n  margin-top: 40px;\n  background-color: rgba(0,128,0,0.75);\n  text-justify: center;\n}\n\n#viewTitle {\n  width:100%;\n  text-align: center;\n  position: relative;\n  height: 150px;\n  overflow: hidden;\n}\n\n#channel {\n  margin-top: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n\n#channelText {\n  font-family: sans-serif;\n  font-size: 12pt;\n  margin: 10px auto;\n}\n\n#channelPicture {\n  font-size: 20pt;\n  margin-left: 25px;\n  margin-top: 5px;\n  width: 30px;\n  height: 45px;\n}\n\n#date {\n  margin-top: 5px;\n  display: flex;\n}\n\n#dateText {\n  font-family: sans-serif;\n  font-size: 12pt;\n  margin: 10px auto;\n}\n\n#datePicture {\n  font-size: 20pt;\n  margin-left: 20px;\n  width: 30px;\n  height: 45px;\n}\n\n#views {\n  margin-top: 5px;\n  display: flex;\n}\n\n#viewsText {\n  font-family: sans-serif;\n  font-size: 12pt;\n  margin: 10px auto;\n}\n\n#viewsPicture {\n  font-size: 20pt;\n  margin-left: 20px;\n  width: 30px;\n  height: 45px;\n}\n\n#description {\n  margin-top: 10px;\n  font-weight: normal;\n}\n\nbody {\n  background-color: #343d46;\n  margin: 0;\n}\n\n#searchBar {\n  width: 60%;\n  height: 40px;\n  background-color:white;\n  border: 1px solid white;\n  border-radius: 3px;\n  margin: 0 auto;\n  overflow: hidden;\n  display: flex;\n}\n\n#button {\n  font-size: 16pt;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 5%;\n  height: 40px;\n  border: none;\n  padding: 0;\n  background-color: white;\n  outline: none;\n}\n\n#searchField {\n  width: 89%;\n  height: 20px;\n  border: none;\n  top: 10px;\n  font-size: 14pt;\n  margin: auto 0;\n  outline: none;\n}\n\n#mainBar {\n  position: relative;\n  margin-top: 75px;\n  overflow: hidden;\n  height: 450px;\n}\n\n#innerMainBar {\n  display: flex;\n  justify-content: flex-start;\n  position: absolute;\n  user-select: none;\n  transition: left 1s; \n  -o-transition: left 1s; \n  -moz-transition: left 1s; \n  -webkit-transition: left 1s; \n}\n\n@media screen and (max-width: 1199px) {\n  #video {\n    width: 28.2vw;\n    min-width: 28.2vw;\n    margin-left: 1.9vw;\n    margin-right: 2.9vw;\n  }\n}\n\n@media screen and (max-width: 899px) {\n  #video {\n    width: 45vw;\n    min-width: 45vw;\n    margin-left: 1.5vw;\n    margin-right: 3vw;\n  }\n}\n\n@media screen and (max-width: 599px) {\n  #video {\n    width: 50vw;\n    min-width: 50vw;\n    margin-left: 25vw;\n    margin-right: 25vw;\n  }\n}",""])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),r=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[t].concat(r).concat([o]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var i={},o=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),r=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var i=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}n[e]=i}return n[e]}}(),a=null,d=0,c=[],l=t(4);function s(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(g(o.parts[a],n))}else{var d=[];for(a=0;a<o.parts.length;a++)d.push(g(o.parts[a],n));i[o.id]={id:o.id,refs:1,parts:d}}}}function u(e,n){for(var t=[],i={},o=0;o<e.length;o++){var r=e[o],a=n.base?r[0]+n.base:r[0],d={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(d):t.push(i[a]={id:a,parts:[d]})}return t}function p(e,n){var t=r(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=c[c.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),c.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=r(e.insertAt.before,t);t.insertBefore(n,o)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=c.indexOf(e);n>=0&&c.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return t.nc}();i&&(e.attrs.nonce=i)}return h(n,e.attrs),p(e,n),n}function h(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,i,o,r;if(n.transform&&e.css){if(!(r="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=r}if(n.singleton){var c=d++;t=a||(a=m(n)),i=y.bind(null,t,c,!1),o=y.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),p(e,n),n}(n),i=function(e,n,t){var i=t.css,o=t.sourceMap,r=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||r)&&(i=l(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),d=e.href;e.href=URL.createObjectURL(a),d&&URL.revokeObjectURL(d)}.bind(null,t,n),o=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),i=function(e,n){var t=n.css,i=n.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){f(t)});return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=u(e,n);return s(t,n),function(e){for(var o=[],r=0;r<t.length;r++){var a=t[r];(d=i[a.id]).refs--,o.push(d)}e&&s(u(e,n),n);for(r=0;r<o.length;r++){var d;if(0===(d=o[r]).refs){for(var c=0;c<d.parts.length;c++)d.parts[c]();delete i[d.id]}}}};var v=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function y(e,n,t,i){var o=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(n,o);else{var r=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,i=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){"use strict";t.r(n);var i=function(e){var n=document.getElementById("innerMainBar"),t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div");i.id="viewTitle",t.id="video",o.id="channel",r.id="date",a.id="views";var c=document.createElement("div");c.id="titleText",c.innerHTML='<a href="https://www.youtube.com/watch?v='.concat(e.id,'" style="color:white">').concat(e.title,"</a>"),i.appendChild(c);var l=document.createElement("div");l.innerHTML='<i class="fa fa-male"></i>';var s=document.createElement("span");l.id="channelPicture",s.id="channelText",s.textContent=e.channels,o.appendChild(l),o.appendChild(s);var u=document.createElement("div");u.innerHTML='<i class="fa fa-calendar"></i>';var p=document.createElement("span");u.id="datePicture",p.id="dateText",p.textContent=e.date,r.appendChild(u),r.appendChild(p);var f=document.createElement("div");f.innerHTML='<i class="fa fa-eye"></i>';var m=document.createElement("span");f.id="viewsPicture",m.id="viewsText",m.textContent=e.views,a.appendChild(f),a.appendChild(m),d.id="description",d.textContent=e.description,i.style.backgroundImage="url(".concat(e.pictureUrl,")"),n.appendChild(t),t.appendChild(i),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(d)};var o=function(e,n){var t,o=[],r=0,a=0,d=0;return t=0===n?"https://www.googleapis.com/youtube/v3/search?part=snippet&q=".concat(e,"&type=video&maxResults=15&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U&"):"https://www.googleapis.com/youtube/v3/search?part=snippet&q=".concat(e,"&type=video&maxResults=15&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U&pageToken=").concat(n),fetch(t).then(function(e){return e.json()}).then(function(e){return e.items.forEach(function(e){o[r]={title:e.snippet.title,channels:e.snippet.channelTitle,description:e.snippet.description,date:e.snippet.publishedAt.substring(0,10),pictureUrl:e.snippet.thumbnails.medium.url,id:e.id.videoId},fetch("https://www.googleapis.com/youtube/v3/videos?part=statistics&id=".concat(o[d].id,"&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U")).then(function(e){return e.json()}).then(function(e){var n=e.items[0];o[a].views=n.statistics.viewCount,i(o[a]),a+=1}),r+=1,d+=1}),e.nextPageToken})};var r,a,d,c,l=function(){var e=document.createElement("div"),n=document.createElement("input"),t=document.createElement("button"),i=document.createElement("div"),o=document.createElement("div");n.id="searchField",t.id="button",e.id="searchBar",i.id="mainBar",o.id="innerMainBar",t.innerHTML='<i class="fa fa-search"></i>',document.body.appendChild(e),e.appendChild(t),e.appendChild(n),document.body.appendChild(i),i.appendChild(o);var r=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div");r.classList.add("buttons"),r.id="buttonList",d.id="pages",a.id="outerPages";var c=document.createElement("button");c.id="leftButton";var l=document.createElement("button");l.id="rightButton",document.body.appendChild(r),r.appendChild(c),r.appendChild(a),a.appendChild(d),r.appendChild(l),c.innerHTML='<i class="fa fa-arrow-left"></i>',l.innerHTML='<i class="fa fa-arrow-right"></i>'},s=(t(0),0),u=0,p=0,f=0;function m(){if(a!==document.getElementById("searchField").value){if(void 0!==a)for(;document.getElementById("pages").firstChild;)document.getElementById("pages").removeChild(document.getElementById("pages").firstChild);for(;document.getElementById("innerMainBar").firstChild;)document.getElementById("innerMainBar").removeChild(document.getElementById("innerMainBar").firstChild);a=document.getElementById("searchField").value,s=0,u=0,p=0,document.getElementById("innerMainBar").style.left="0",""!==a&&o(a,0).then(function(e){r=e})}else o(a,r).then(function(e){r=e})}function h(){if(document.getElementById("pages").childNodes[s-1].style.backgroundColor="red",(s+=1)===u+1){var e=document.getElementById("pages"),n=document.createElement("button");n.id="pageNumber",n.classList.add(s),e.appendChild(n),n.textContent=s,u+=1,document.documentElement.clientWidth>=1200&&u%3==0&&m(),document.documentElement.clientWidth>=900&&document.documentElement.clientWidth<1200&&u%5==0&&m(),document.documentElement.clientWidth>=600&&document.documentElement.clientWidth<900&&u%7==0&&m(),document.documentElement.clientWidth<600&&u%15==0&&m()}p-=document.documentElement.clientWidth,document.getElementById("innerMainBar").style.left="".concat(p,"px"),document.getElementById("pages").childNodes[s-1].style.backgroundColor="green",s>5&&(f-=50,document.getElementById("pages").style.left="".concat(f,"px"))}function g(){1!==s&&(document.getElementById("pages").childNodes[s-1].style.backgroundColor="red",s-=1,p+=document.documentElement.clientWidth,document.getElementById("innerMainBar").style.left="".concat(p,"px"),document.getElementById("pages").childNodes[s-1].style.backgroundColor="green",s>4&&(f+=50,document.getElementById("pages").style.left="".concat(f,"px")))}l(),document.addEventListener("keydown",function(e){if(13===e.keyCode&&a!==document.getElementById("searchField").value){m(),document.getElementById("buttonList").style.display="flex";var n=document.getElementById("pages"),t=document.createElement("button");t.id="pageNumber",n.appendChild(t),u+=1,s+=1,t.classList.add(s),t.textContent=s}}),document.getElementById("button").addEventListener("click",function(){m();for(var e=0;e<list.length-1;e+=1)buildVideoInfo(list[e]);document.getElementById("buttonList").style.display="flex";var n=document.getElementById("pages"),t=document.createElement("button");t.id="pageNumber",n.appendChild(t),u+=1,s+=1,t.classList.add(s),t.textContent=s});var v=document.getElementById("leftButton"),y=document.getElementById("rightButton");v.addEventListener("click",function(){g()}),y.addEventListener("click",function(){h()});var b=document.getElementById("innerMainBar");b.addEventListener("mousedown",function(e){d=e.screenX}),b.addEventListener("mouseup",function(e){c=e.screenX}),b.addEventListener("click",function(){d<c&&c-d>50?g():d>c&&d-c>50&&h()}),document.getElementById("pages").addEventListener("click",function(e){var n=document.elementFromPoint(e.clientX,e.clientY);if("pages"!==n.id){var t=n.classList.value;p+=(s-t)*document.documentElement.clientWidth,t>=5?(f=-50*(t-5),document.getElementById("pages").style.left="".concat(f,"px")):(f=0,document.getElementById("pages").style.left="".concat(f,"px")),document.getElementById("pages").childNodes[s-1].style.backgroundColor="red",s=+t,document.getElementById("innerMainBar").style.left="".concat(p,"px"),document.getElementById("pages").childNodes[s-1].style.backgroundColor="green"}})}]);