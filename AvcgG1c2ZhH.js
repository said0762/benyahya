;/*FB_PKG_DELIM*/

__d("AbstractFBEmoji.react",["cx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.children,c=a.size,d=a.src;a=a.title;c={height:c,width:c,fontSize:c,backgroundImage:"url('"+d+"')"};return j.jsx("span",{className:"_5mfr",title:a,children:j.jsx("span",{style:c,className:"_6qdm",children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BadgeHelper",["cx","fbt","DOM","joinClasses"],(function(a,b,c,d,e,f,g,h){var i={xsmall:"_5dzz",small:"_5dz-",medium:"_5dz_",large:"_5d-0",xlarge:"_5d-1"},j={bot:"_64nf",verified:"_56_f",trending:"_1gop",topcommenter:"_59t2",page_gray_check:"_5n3t",page_gray_check_solid:"_6w81",work:"_5d62",game_blue:"_59c6",work_non_coworker:"_2ad7",work_official_badge:"_8b0y",work_official_badge_gray:"_8b-m",interest_community:"_3qcr",subscription:"_4fvy",inactive_user:"_7xv0",multi_company_group:"_9o_f"};c=h._("Groupe officiel");var k={bot:h._("Bot"),work_non_coworker:h._("Ne fait pas partie de votre entreprise"),work_official_badge:c,work_official_badge_gray:c};function l(a,c){return b("joinClasses")(i[a],j[c],"_5dzy")}function m(a){return k[a]}function a(a,c){a=l(a,c);if(a){c=m(c);return b("DOM").create("span",{className:a},c?b("DOM").create("span",{className:"accessible_elem"},c):null)}}e.exports={getClasses:l,getAlt:m,renderBadge:a,sizes:Object.keys(i),types:Object.keys(j)}}),130);
__d("Badge.react",["BadgeHelper","react"],(function(a,b,c,d,e,f,g){var h,i=h||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){var a=d("BadgeHelper").getAlt(this.props.type);a=a?i.jsx("span",{className:"accessible_elem",children:a}):null;return i.jsx("span",{className:d("BadgeHelper").getClasses(this.props.size,this.props.type),children:a})};return b}(i.Component);a.defaultProps={size:"xsmall",type:"verified"};g["default"]=a}),98);
__d("ReactFragment",["fbjs/lib/emptyFunction","fbjs/lib/invariant","fbjs/lib/warning","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103,j=".",k=":";c=!1;var l=typeof Symbol==="function"&&(typeof Symbol==="function"?Symbol.iterator:"@@iterator"),m="@@iterator";function n(a){a=a&&(l&&a[l]||a[m]);if(typeof a==="function")return a}function o(a){var b=/[=:]/g,c={"=":"=0",":":"=2"};a=(""+a).replace(b,function(a){return c[a]});return"$"+a}function p(a,b){return a&&typeof a==="object"&&a.key!=null?o(a.key):b.toString(36)}function q(a,c,d,e){var f=typeof a;(f==="undefined"||f==="boolean")&&(a=null);if(a===null||f==="string"||f==="number"||f==="object"&&a.$$typeof===i){d(e,a,c===""?j+p(a,0):c);return 1}var g,h,l=0;c=c===""?j:c+k;if(Array.isArray(a))for(var m=0;m<a.length;m++)g=a[m],h=c+p(g,m),l+=q(g,h,d,e);else{m=n(a);if(m){m=m.call(a);var o,r=0;while(!(o=m.next()).done)g=o.value,h=c+p(g,r++),l+=q(g,h,d,e)}else if(f==="object"){o="";h=""+a;b("fbjs/lib/invariant")(0,4786,h==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":h,o)}}return l}function r(a,b,c){return a==null?0:q(a,"",b,c)}var s=/\/+/g;function t(a){return(""+a).replace(s,"$&/")}function u(a,b){return h.cloneElement(a,{key:b},a.props!==void 0?a.props.children:void 0)}var v=10,w=x,x=function(a){var b=this;if(b.instancePool.length){var c=b.instancePool.pop();b.call(c,a);return c}else return new b(a)};d=function(a,b){a=a;a.instancePool=[];a.getPooled=b||w;a.poolSize||(a.poolSize=v);a.release=y;return a};var y=function(a){var c=this;a instanceof c||b("fbjs/lib/invariant")(0,4787);a.destructor();c.instancePool.length<c.poolSize&&c.instancePool.push(a)};f=function(a,b,c,d){var e=this;if(e.instancePool.length){var f=e.instancePool.pop();e.call(f,a,b,c,d);return f}else return new e(a,b,c,d)};function z(a,b,c,d){this.result=a,this.keyPrefix=b,this.func=c,this.context=d,this.count=0}z.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0};d(z,f);function A(a,c,d){var e=a.result,f=a.keyPrefix,g=a.func,i=a.context;g=g.call(i,c,a.count++);Array.isArray(g)?B(g,e,d,b("fbjs/lib/emptyFunction").thatReturnsArgument):g!=null&&(h.isValidElement(g)&&(g=u(g,f+(g.key&&(!c||c.key!==g.key)?t(g.key)+"/":"")+d)),e.push(g))}function B(a,b,c,d,e){var f="";c!=null&&(f=t(c)+"/");c=z.getPooled(b,f,d,e);r(a,A,c);z.release(c)}c=/^\d+$/;d=!1;function a(a){if(typeof a!=="object"||!a||Array.isArray(a)){b("fbjs/lib/warning")(!1,"ReactFragment.create only accepts a single object. Got: %s",a);return a}if(h.isValidElement(a)){b("fbjs/lib/warning")(!1,"ReactFragment.create does not accept a ReactElement without a wrapper object.");return a}a.nodeType!==1||b("fbjs/lib/invariant")(0,4788);var c=[];for(var d in a)B(a[d],c,d,b("fbjs/lib/emptyFunction").thatReturnsArgument);return c}f={create:a};e.exports=f}),null);
__d("BaseTextWithDecoration.react",["ReactFragment","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function j(a,b,c,d){var e=a[b];if(!e){d.push(c);return}e(c,function(a){d.push(a)},function(c){j(a,b+1,c,d)})}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){var a=this.props,b=a.decorators;a=a.text;var c=[],e={};j(b,0,a,c);c.forEach(function(a,b){e["i"+b]=a});return i.jsx("span",{children:d("ReactFragment").create(e)})};return b}(i.Component);g["default"]=a}),98);
__d("Text.react",[],(function(a,b,c,d,e,f){"use strict";a="span";f["default"]=a}),66);
__d("BaseTextWithEntities.react",["Text.react","UnicodeUtils","cr:7674","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||d("react");function k(a,b){return a.offset-b.offset||b.length-a.length}function l(a){return[].concat(a.ranges,a.aggregatedRanges,a.imageRanges,a.metaRanges,a.inlineStyleRanges,a.textDelightRanges,a.colorRanges).filter(Boolean).sort(k)}function m(a,c){a=a.split(/(\r\n|[\r\n])/);var d=[];for(var e=0;e<a.length;e++){var f=a[e];f&&d.push(j.jsx(j.Fragment,{children:e%2===1?j.jsx(b("cr:7674"),{}):c(f)},"text"+e))}return d}m.displayName=m.name+" [from "+f.id+"]";function a(a){var b=0,e=null,f=a.text,g=l(a);for(var h=0;h<g.length;h++){var k=g[h];if(k.offset<b)continue;e=e||[];k.offset>b&&e.push(j.jsx(j.Fragment,{children:m((i||(i=d("UnicodeUtils"))).substring(f,b,k.offset),a.textRenderer)},"text"+h));e.push(j.jsx(j.Fragment,{children:a.rangeRenderer((i||(i=d("UnicodeUtils"))).substr(f,k.offset,k.length),k)},"range"+h));b=k.offset+k.length}return j.jsxs(c("Text.react"),{className:a.className,style:a.style,children:[e,f.length>b?m((i||(i=d("UnicodeUtils"))).substr(f,b),a.textRenderer):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ChatQuietLinks",["DOM","DataStore","Event","Parent","UserAgent_DEPRECATED","getOrCreateDOMID"],(function(a,b,c,d,e,f){var g={};a={silenceLinks:function(a){h(a,this.removeEmptyHrefs.bind(this))},nukeLinks:function(a){h(a,this.removeAllHrefs.bind(this))},removeEmptyHrefs:function(a){i(a,function(a){return!a||a==="#"})},removeAllHrefs:function(a){i(a)}};function h(a,c){if(!a)return;var d=!!b("UserAgent_DEPRECATED").chrome(),e=!!b("UserAgent_DEPRECATED").chrome()||b("UserAgent_DEPRECATED").ie()>=9||b("UserAgent_DEPRECATED").firefox()>=4;if(g[b("getOrCreateDOMID")(a)])return;g[b("getOrCreateDOMID")(a)]=!0;if(!e)return;if(!d){c&&c(a);return}b("Event").listen(a,"mouseover",function(a){a=b("Parent").byTag(a.getTarget(),"a");if(a){var c=a.getAttribute("href");j(c)&&(b("DataStore").set(a,"stashedHref",a.getAttribute("href")),a.removeAttribute("href"))}});b("Event").listen(a,"mouseout",function(a){a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").remove(a,"stashedHref");j(c)&&a.setAttribute("href",c)});b("Event").listen(a,"mousedown",function(a){if(!a.isDefaultRequested())return!0;a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").get(a,"stashedHref");j(c)&&a.setAttribute("href",c)})}function i(a,c){a=b("DOM").scry(a,"a");c&&(a=a.filter(function(a){return c(a.getAttribute("href"))}));a.forEach(function(a){a.removeAttribute("href"),a.tabIndex||a.setAttribute("tabindex",0)})}function j(a){return a&&a!=="#"}e.exports=a}),null);
__d("Dock",["csx","ArbiterMixin","BlueBar","CSS","ChatQuietLinks","DOM","DataStore","Event","Parent","Scroll","Style","Toggler","Vector","emptyFunction","isKeyActivation","shield"],(function(a,b,c,d,e,f,g){function c(){}Object.assign(c,b("ArbiterMixin"),{MIN_HEIGHT:140,INITIAL_FLYOUT_HEIGHT_OFFSET:10,init:function(a){var c=this;this.init=b("emptyFunction");this.rootEl=a;this.calculateViewportDimensions();b("ChatQuietLinks").removeEmptyHrefs(this.rootEl);b("Event").listen(a,"click",this._onClick.bind(this));var d=a.querySelector(".fbNubButton");d&&b("Event").listen(d,"keypress",this._onKeyPress.bind(this));b("Event").listen(window,"resize",this._onWindowResize.bind(this));b("Toggler").subscribe(["show","hide"],function(d,e){e=e.getActive();if(!b("DOM").contains(a,e))return;if(b("CSS").hasClass(e,"fbNub"))c.notifyNub(e,d),d==="show"&&c._resizeNubFlyout(e);else{e=b("Parent").byClass(e,"fbNubFlyout");e&&b("CSS").conditionClass(e,"menuOpened",d==="show")}});this.inform("init",{},"persistent")},calculateViewportDimensions:function(){return this.viewportDimensions=b("Vector").getViewportDimensions()},getFlyoutHeightOffset:function(){if(this.flyoutHeightOffset)return this.flyoutHeightOffset;this.flyoutHeightOffset=this.INITIAL_FLYOUT_HEIGHT_OFFSET+b("Vector").getElementDimensions(this.rootEl).y;var a=b("BlueBar").getBar();if(a){var c=b("Style").isFixed(a)?"viewport":"document";this.flyoutHeightOffset+=b("Vector").getElementPosition(a,c).y+b("Vector").getElementDimensions(a).y}return this.flyoutHeightOffset},toggle:function(a){var c=this._findFlyout(a);if(!c)return;this.subscribe("init",function(){b("Toggler").toggle(a)})},show:function(a){this.subscribe("init",function(){b("Toggler").show(a)})},showNub:function(a){b("CSS").show(a)},hide:function(a){this.subscribe("init",function(){var c=b("Toggler").getInstance(a);b("DOM").contains(a,c.getActive())&&c.hide()})},hideNub:function(a){b("CSS").hide(a),this.hide(a)},setUseMaxHeight:function(a,c){b("CSS").conditionClass(a,"maxHeight",c!==!1),this._resizeNubFlyout(a)},_resizeNubFlyout:function(a){var c=this,d=this._findFlyout(a);if(!d||b("CSS").hasClass(a,"placeholder")||!(b("CSS").hasClass(a,"openToggler")||b("CSS").hasClass(a,"opened")))return;var e=b("DOM").find(d,"div.fbNubFlyoutOuter"),f=b("DOM").find(e,"div.fbNubFlyoutInner"),g=b("DOM").find(f,"div.fbNubFlyoutBody"),h=b("CSS").hasClass(a,"canBeCompactTab"),i=b("Scroll").getTop(g),j=g.offsetHeight;b("Style").set(g,"height","auto");var k=b("Vector").getElementDimensions(d),l=b("Vector").getElementDimensions(g),m=this.getMaxFlyoutHeight(a);b("Style").set(d,"max-height",m+"px");b("Style").set(e,"max-height",m+"px");k=b("Vector").getElementDimensions(d);e=b("Vector").getElementDimensions(f);m=e.y-l.y;f=k.y-m;e=parseInt(g.style.height||g.clientHeight,10);e=f!==e;k.y>m&&e&&!h&&b("Style").set(g,"height",f+"px");b("CSS").removeClass(d,"swapDirection");var n=b("Vector").getElementPosition(d).x;b("CSS").conditionClass(d,"swapDirection",function(){if(n<0)return!0;return!k||!c.viewportDimensions?!1:n+k.x>c.viewportDimensions.x}());e&&i+j>=l.y?b("Scroll").setTop(g,g.scrollHeight):b("Scroll").setTop(g,i);this.notifyNub(a,"resize")},getMaxFlyoutHeight:function(a){a=this._findFlyout(a);var c=b("Vector").getElementPosition(a,"viewport");a=b("Vector").getElementDimensions(a);if(!this.viewportDimensions||!c)return 0;c=Math.max(this.MIN_HEIGHT,this.viewportDimensions.y-this.getFlyoutHeightOffset())-(this.viewportDimensions.y-c.y-a.y);return Math.max(c,0)},resizeAllFlyouts:function(){var a=this._getAllNubs(),b=a.length;while(b--)this._resizeNubFlyout(a[b])},_getAllNubs:function(){if(!this.rootEl)return[];var a=b("DOM").scry(this.rootEl,"div._50-v.openToggler:not(._s0f)");return a.concat(b("DOM").scry(this.rootEl,"div._50-v.opened:not(._s0f)"))},_onKeyPress:function(a){var c=a.getTarget();c=b("Parent").byClass(c,"fbNub");b("isKeyActivation")(a)&&c&&this.toggle(c)},_onClick:function(a){a=a.getTarget();var c=b("Parent").byClass(a,"fbNub");if(c){b("Parent").byClass(a,"adsNubFlyoutCloseButton")&&this.hide(c);if(b("Parent").byClass(a,"fbNubFlyoutTitlebar")){var d=b("Parent").byTag(a,"a");a=a.nodeName=="INPUT"&&a.getAttribute("type")=="submit";if(!d&&!a){this.hide(c);return!1}}this.notifyNub(c,"click")}},_onWindowResize:function(a){this.calculateViewportDimensions(),this.resizeAllFlyouts()},_findFlyout:function(a){return b("CSS").hasClass(a,"fbNubFlyout")?a:b("DOM").scry(a,"div.fbNubFlyout")[0]||null},registerNubController:function(a,c){b("DataStore").set(a,"dock:nub:controller",c),c.subscribe("nub/button/content-changed",b("shield")(this.inform,this,"resize",a)),c.subscribe("nub/flyout/content-changed",b("shield")(this._resizeNubFlyout,this,a))},unregisterNubController:function(a){b("DataStore").remove(a,"dock:nub:controller")},notifyNub:function(a,c,d){a=b("DataStore").get(a,"dock:nub:controller");a&&a.inform(c,d)}});e.exports=a.Dock||c}),null);
__d("XWorkUserSettingsUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/user_settings/",{})}),null);
__d("DockNubs",["AsyncRequest","CSS","CurrentUser","WorkUserSettings","XWorkUserSettingsUpdateController"],(function(a,b,c,d,e,f,g){var h="hidden_elem",i=c("WorkUserSettings").hideDock,j=null,k=[];function a(a){j=a,l(p)}function b(){return!i}function l(a){k.push(a);a(i);return{unsubscribe:function(){m(a)}}}function m(a){k=k.filter(function(b){return b!==a})}function n(){k.forEach(function(a){return a(i)})}function e(){if(!j)return;i=!i;o(i);n()}function o(a){if(!c("CurrentUser").isWorkUser())return;var b=c("XWorkUserSettingsUpdateController").getURIBuilder().getURI();new(c("AsyncRequest"))(b).setMethod("POST").setData({hide_dock:a}).send()}function p(){if(!j)return;i?d("CSS").addClass(j,h):d("CSS").removeClass(j,h)}g.init=a;g.isVisible=b;g.registerSubscriber=l;g._unregisterSubscriber=m;g._updateSubscribers=n;g.toggleVisibility=e;g._saveVisibilityPreferences=o;g._updateCssClasses=p}),98);
__d("FBEmoji.react",["cx","AbstractFBEmoji.react","FBEmojiResource","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.codepoints;a=a.size;var d=b.join("");b=c("FBEmojiResource").fromCodepoints(b);b=b!=null?b.getImageURL(a):null;return b==null?j.jsx("span",{className:"_4ay8"+(a===16?" _3kkw":"")+(a===18?" _366d":"")+(a===20?" _366e":"")+(a===24?" _48cb":"")+(a===28?" _5-0n":"")+(a===30?" _5-0o":"")+(a===32?" _5-0p":"")+(a===36?" _2oah":"")+(a===56?" _4352":"")+(a===112?" _435o":""),children:d}):j.jsx(c("AbstractFBEmoji.react"),{size:a,src:b,children:d})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FBEmoticon.react",["fbt","AbstractFBEmoji.react","EmoticonsList","FBEmojiResource","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.emoticon,e=a.name;a=a.size;var f=d("EmoticonsList").emoji[e];if(!f)return j.jsx("span",{children:b});f=new(c("FBEmojiResource"))(f);f=f.getImageURL(a);if(f==null)return j.jsx("span",{children:b});e=h._("\u00e9motic\u00f4ne {emoticonName}",[h._param("emoticonName",e)]);return j.jsx(c("AbstractFBEmoji.react"),{size:a,src:f,title:e,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("KeyboardShortcutToken",["KeyEventController"],(function(a,b,c,d,e,f,g){a=function(){function a(a,b,c){this.$1=!0,this.key=a,this.handler=b,this.filter=c.filter,this.persistOnTransition=c.persistOnTransition,this.shortcutInfo=c.shortcutInfo,this.register()}var b=a.prototype;b.register=function(){var a=this;if(!this.$1)return;this.token=c("KeyEventController").registerKey(this.key,this.handler,this.filter,!1,function(){return a.persistOnTransition})};b.remove=function(){this.token.remove(),this.$1=!1};b.unregister=function(){this.token.remove()};b.isActive=function(){return this.$1};b.getKey=function(){return this.key};b.getShortcutInfo=function(){return this.shortcutInfo};return a}();g["default"]=a}),98);
__d("translateKey",["fbt","invariant"],(function(a,b,c,d,e,f,g,h,i){var j={alt:h._("alt"),enter:h._("entrer"),"delete":h._("suppr"),forward_delete:h._("touche Supprimer"),caps_lock:h._("touche Majuscules"),shift:h._("Maj"),opt:h._("opt"),ctrl:h._("ctrl"),cmd:h._("cmd"),esc:h._("\u00e9chap"),tab:h._("tab"),up:h._("haut"),down:h._("bas"),right:h._("droite"),left:h._("gauche"),page_up:h._("page haut"),page_down:h._("page bas"),home:h._("accueil"),end:h._("fin")};function a(a){if(Object.prototype.hasOwnProperty.call(j,a))return j[a];a.length===1||i(0,2507);return a}g["default"]=a}),226);
__d("KeyboardShortcuts",["csx","cx","fbt","Arbiter","BasicFBNux","CSS","Dock","KeyEventController","KeyboardShortcutToken","Layer","ModalLayer","NavigationMessage","PageTransitions","Run","emptyFunction","translateKey"],(function(a,b,c,d,e,f,g,h,i,j){var k={_arbiter:null,_hasTriggeredShortcut:!1,_flyoutNub:null,_nubNux:null,_nubNuxID:null,_tokenLayers:[],showInfo:c("emptyFunction"),register:function(a,b,d){var e=d?d:{};d=function(a,c){b.call(k,a,c),e.allowDefault||a.prevent(),k._hasTriggeredShortcut||k._handleFirstShortcutTriggered()};var f=e.baseFilters||[c("KeyEventController").defaultFilter],g=function(a,b){for(var c=f,d=Array.isArray(c),g=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(d){if(g>=c.length)break;h=c[g++]}else{g=c.next();if(g.done)break;h=g.value}h=h;if(!h(a,b))return!1}return!e.filter||e.filter(a,b)};a=new(c("KeyboardShortcutToken"))(a,d,{filter:g,persistOnTransition:e.persistOnTransition,shortcutInfo:e.shortcutInfo});k._tokenLayers.length||k._tokenLayers.push([]);k._tokenLayers[k._tokenLayers.length-1].push(a);k.inform("token_added");return a},init:function(){k._cleanup=k._cleanup.bind(k),d("Run").onLeave(k._cleanup),c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN,k._cleanup),c("Layer").subscribe("show",function(a,b){b.hasBehavior(c("ModalLayer"))&&k.pushLayer()}),c("Layer").subscribe("hide",function(a,b){b.hasBehavior(c("ModalLayer"))&&k.popLayer()}),k.register("SLASH",function(){var a=k._getFlyoutNub();a&&c("Dock").toggle(a)},{filter:function(a,b){return a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[c("translateKey")("?")],description:j._("Afficher cette bo\u00eete de dialogue d\u2019aide")}})},_cleanup:function(){var a=[];k._tokenLayers.forEach(function(b){var c=[];b.forEach(function(a){a.isActive()&&c.push(a)});c.length&&a.push(c)});k._tokenLayers=a;k.inform("cleanup");c("PageTransitions").registerCompletionCallback(function(){d("Run").onLeave(k._cleanup),c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN,k._cleanup)})},pushLayer:function(){var a=k._getTopLayer();a&&a.forEach(function(a){a.unregister()});k._tokenLayers.push([])},popLayer:function(){if(k._tokenLayers.length===0)return;var a=k._tokenLayers.pop();a.forEach(function(a){a.remove()});a=k._getTopLayer();a&&a.forEach(function(a){a.register()})},_getTopLayer:function(){return!k._tokenLayers.length?null:k._tokenLayers[k._tokenLayers.length-1]},_getBaseLayer:function(){return!k._tokenLayers.length?null:k._tokenLayers[0]},getShortcutInfos:function(){var a=[],b=k._getBaseLayer();b&&b.forEach(function(b){var c=b.getShortcutInfo();b.isActive()&&c!=null&&a.push(c)});return a},_getArbiterInstance:function(){k._arbiter||(k._arbiter=new(c("Arbiter"))());return k._arbiter},inform:function(a,b,c){return k._getArbiterInstance().inform(a,b,c)},subscribe:function(a,b,c){return k._getArbiterInstance().subscribe(a,b,c)},unsubscribe:function(a){k._getArbiterInstance().unsubscribe(a)},_handleFirstShortcutTriggered:function(){k._hasTriggeredShortcut=!0;var a=k._getFlyoutNub();a&&(d("CSS").removeClass(a,"_ur5"),k._nubNux&&k._nubNuxID&&(k._nubNux.show(),d("BasicFBNux").onView(k._nubNuxID),k._nubNux.subscribe("hide",d("BasicFBNux").onDismiss.bind(k,k._nubNuxID))))},_getFlyoutNub:function(){k._flyoutNub||(k._flyoutNub=document.querySelector("#pagelet_dock ._rz3"));return k._flyoutNub},showShortcutFlyout:function(){k._hasTriggeredShortcut||k._handleFirstShortcutTriggered();var a=k._getFlyoutNub();a&&c("Dock").show(a)},hasFlyoutToShow:function(){return k._getFlyoutNub()!=null&&k.getShortcutInfos().length>0},initNUXEvent:function(a,b){k._nubNux=a,k._nubNuxID=b}};k.init();a=k;g["default"]=a}),226);
__d("KeyboardShortcutFlyout.react",["cx","fbt","Bootloader","KeyboardShortcuts","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.state={shortcutInfos:c("KeyboardShortcuts").getShortcutInfos()},d.$3=function(a,b){return k.jsxs("tr",{className:"_3-12",children:[k.jsx("th",{className:"_2pin _52ju",children:a.displayKeys.map(function(b,a){return k.jsx("span",{className:"_3-28 _2e42 _653d _52jv",children:b},a)})}),k.jsx("td",{className:"_2pin _2pii",children:a.description})]},"shortcut_info_"+b)},b)||babelHelpers.assertThisInitialized(d)}var d=b.prototype;d.render=function(){return k.jsx("div",{className:"_yqu _2ph_ _2pim",children:k.jsx("table",{className:"_67br",children:k.jsx("tbody",{children:this.$2()})})})};d.componentDidMount=function(){var a=this;this.$1=c("KeyboardShortcuts").subscribe(["cleanup","token_added"],function(){a.setState({shortcutInfos:c("KeyboardShortcuts").getShortcutInfos()})});c("Bootloader").loadModules(["KeyEventTypedLogger"],function(a){new a().setAction("key_shortcut_flyout_shown").log()},"KeyboardShortcutFlyout.react")};d.componentWillUnmount=function(){c("KeyboardShortcuts").unsubscribe(this.$1)};d.$2=function(){return this.state.shortcutInfos.length?this.state.shortcutInfos.map(this.$3):i._("Aucun raccourci sur cette Page")};return b}(k.PureComponent);g["default"]=a}),226);
__d("Newline.react",[],(function(a,b,c,d,e,f){"use strict";a="br";f["default"]=a}),66);
__d("NubController",["csx","ArbiterMixin","Dock"],(function(a,b,c,d,e,f,g){function a(){}Object.assign(a.prototype,b("ArbiterMixin"),{init:function(a){this.el=a;this.nubButton=a.querySelector(".fbNubButton");this.closeButton=a.querySelector("._2dv8");b("Dock").registerNubController(a,this);this.closeButton&&this.closeButton.addEventListener("click",this.hide.bind(this));return this},buttonContentChanged:function(){this.inform("nub/button/content-changed")},flyoutContentChanged:function(){this.inform("nub/flyout/content-changed")},hide:function(){b("Dock").hide(this.el)},show:function(){b("Dock").show(this.el)}});e.exports=a}),null);
__d("ReactNub",["csx","DOM","Focus","NubController","Parent","ReactDOM_DEPRECATED","getActiveElement","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,e){var f;f=a.call(this)||this;f.$ReactNub$p_4=function(){d("ReactDOM_DEPRECATED").unmountComponentAtNode_DEPRECATED(f.$ReactNub$p_1),d("Focus").set(f.$ReactNub$p_3),f.$ReactNub$p_3!==c("getActiveElement")()&&d("Focus").set(f.nubButton)};f.$ReactNub$p_5=function(){f.$ReactNub$p_3=c("getActiveElement")();var a=f.$ReactNub$p_2;d("ReactDOM_DEPRECATED").render_DEPRECATED(j.jsx(a,{onContentChanged:f.flyoutContentChanged.bind(babelHelpers.assertThisInitialized(f))}),f.$ReactNub$p_1);d("Focus").set(f.closeButton)};f.$ReactNub$p_1=b;f.$ReactNub$p_2=e;e=d("Parent").bySelector(b,"._50-v");a.prototype.init.call(babelHelpers.assertThisInitialized(f),e);c("DOM").empty(b);f.subscribe("hide",f.$ReactNub$p_4);f.subscribe("show",f.$ReactNub$p_5);return f}return b}(c("NubController"));g["default"]=a}),98);
__d("iterateEmoji",["EmojiRenderer"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c){var e=0,f=d("EmojiRenderer").parse(a);f.forEach(function(d){var f=d.offset;f>e&&c(a.substr(e,f-e));b(d.emoji);e=f+d.length});c(a.substr(e,a.length-e))}g["default"]=a}),98);
__d("iterateEmoticons",["EmoticonsList"],(function(a,b,c,d,e,f,g){function a(a,b,c){var e,f,g;a=a;while(a){f=d("EmoticonsList").regexp.exec(a);if(f)e=f.index+f[1].length,g=a.substr(0,e),f=f[2],e=a.substr(e+f.length),c(g),b(f,d("EmoticonsList").emotes[f]),a=e;else break}c(a)}g["default"]=a}),98);
__d("TextWithEmoticons.react",["BaseTextWithDecoration.react","FBEmoji.react","FBEmoticon.react","iterateEmoji","iterateEmoticons","memoizeWithArgs","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function j(a,b){return i.jsx(c("FBEmoji.react"),{codepoints:a,size:b})}j.displayName=j.name+" [from "+f.id+"]";function k(a,b,d){return i.jsx(c("FBEmoticon.react"),{emoticon:a,name:b,size:d})}k.displayName=k.name+" [from "+f.id+"]";function l(a){return function(b,d,e){c("iterateEmoji")(b,function(b){return d(j(b,a))},e)}}function m(a){return function(b,d,e){c("iterateEmoticons")(b,function(b,c){return d(k(b,c,a))},e)}}var n=c("memoizeWithArgs")(function(a,b,c){if(a&&b)return[l(c),m(c)];else if(b)return[m(c)];else return[l(c)]},function(a,b,c){return a.toString()+"_"+b.toString()+"_"+c});a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.shouldComponentUpdate=function(a){return a.text!==this.props.text||a.size!==this.props.size};d.render=function(){var a=this.props,b=a.text;a=babelHelpers.objectWithoutPropertiesLoose(a,["text"]);if(typeof b==="string")return this.props.isWhitespace?i.jsx("span",{className:"whitespace",children:b}):i.jsx(c("BaseTextWithDecoration.react"),babelHelpers["extends"]({},a,{text:b,decorators:[].concat(n(this.props.renderEmoji,this.props.renderEmoticons,this.props.size),this.props.decorators)}));else return i.jsx("span",{children:b})};return b}(i.Component);a.defaultProps={renderEmoji:!0,renderEmoticons:!0,size:16,decorators:[]};g["default"]=a}),98);
__d("TextWithEntities.react",["BaseTextWithEntities.react","Link.react","TextWithEmoticons.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function j(a){return a.replace(/<3\b|&hearts;/g,"\u2665")}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){if(d.props.renderEmoticons||d.props.renderEmoji){var b=a.trim();return i.jsx(c("TextWithEmoticons.react"),{isWhitespace:b.length===0,text:a,renderEmoticons:d.props.renderEmoticons,renderEmoji:d.props.renderEmoji,size:d.props.showEmojisStandalone?32:16})}else return j(a)},d.$2=function(a,b){if(d.props.interpolator)return d.props.interpolator(a,b);else if(b.entity&&b.entity.url!==void 0&&b.entity.url!==null)return i.jsx(c("Link.react"),{href:b.entity,children:a});else if(b.entity&&b.entity.url===void 0)return i.jsx(c("Link.react"),{href:b.entity,children:a});else return a},b)||babelHelpers.assertThisInitialized(d)}var d=b.prototype;d.render=function(){return i.jsx(c("BaseTextWithEntities.react"),babelHelpers["extends"]({},this.props,{textRenderer:this.$1,rangeRenderer:this.$2,ranges:this.props.ranges,imageRanges:this.props.imageRanges,aggregatedRanges:this.props.aggregatedRanges,metaRanges:this.props.metaRanges,textDelightRanges:this.props.textDelightRanges,text:this.props.text}))};return b}(i.Component);g["default"]=a}),98);