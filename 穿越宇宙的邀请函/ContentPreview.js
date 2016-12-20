/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
define(["GlobalUtils","PageInfo"],function(a,b){function c(){var a=document.createElement("div");return a.id="evernotePreviewContainer",a.className="evernotePreviewContainer evernotePreviewUrlContainer",a.style.setProperty("line-height","normal","important"),a}function d(){wa.parentNode||document.documentElement.appendChild(wa);var a=window.getComputedStyle(wa,""),b=parseInt(a.getPropertyValue("width")),c=parseInt(a.getPropertyValue("height"));b&&c&&(wa.style.marginLeft=0-b/2+"px",wa.style.marginTop=0-c/2+"px")}function e(){wa.parentNode&&wa.parentNode.removeChild(wa)}function f(c,d,e,f,g){var h,i,j={"http://localhost/favicon.ico":!0},k=a.createTitleAndLinkPortionOfUrlClipContent(c,d),l=k.content,m=k.textPortion,n=k.link,o=k.url,p=document.createElement("div"),q=document.createElement("img"),r=document.createElement("img"),s=document.createElement("div");if(""!=f.trim()&&(s.textContent=f.length<500?f:f.slice(0,500)+"...",s.style.fontFamily="Helvetica, Arial, sans-serif",s.style.fontSize="12px",s.style.color="#0C0C0C",s.style.display="block",s.style.whiteSpace="normal",s.style.marginTop="15px",s.style.maxHeight="154px",s.style.overflow="hidden",m.appendChild(s)),b.getThumbnail(function(a){if(h=!0,a.src){var b=150;p.style.position="relative",p.style.display="inline-block",p.style.margin="15px 30px 0px 0px",p.style.overflow="hidden",p.style.verticalAlign="top",q.setAttribute("thumbnail",a.src),qa=q,Browser.sendToExtension({name:"cropImage",url:a.src,cropToWidth:b,cropToHeight:b}),q.style.maxWidth="none",q.style.maxHeight="none",q.style.verticalAlign="top",q.style.margin="0",q.style.padding="0",p.appendChild(q),m.parentNode?l.insertBefore(p,m):l.appendChild(p)}i&&g(l)}),e&&!j[e.toLowerCase()])r.onload=function(){i=!0,r.style.display="inline-block",r.style.border="none",r.style.width="16px",r.style.height="16px",r.style.padding="0px",r.style.margin="0px 8px -2px 0px",r.width="16",r.height="16",n.insertBefore(r,o),h&&g(l)},r.onerror=function(){i=!0,h&&g(l)},r.src=e;else if(i=!0,h)return l}function g(a){qa&&(a.datauri?(qa.src=a.datauri,qa.width=a.width,qa.height=a.height,qa.removeAttribute("thumbnail")):(qa.parentNode.parentNode.removeChild(qa.parentNode),qa=null))}function h(){function a(a){wa.innerHTML="",wa.appendChild(a),d()}ia=!1;var c=b.getUrl();i(),ja.gray(),b.getSnippet(function(e){var g=f(b.getTitle(),c,b.getFavIconUrl(),e,a);g&&(wa.innerHTML="",wa.appendChild(g),d())})}function i(){ja.reset(),ja.hide(),ka.reset(),ka.removeVeil(),e(),R(),s(),m(),v()}function j(){ta=null,ua=null,va=null,pa&&pa.parentNode&&(pa.parentNode.removeChild(pa),document.documentElement.classList.remove("clearlyBeforeVisible"))}function k(){na&&na.highlight__deleteAllHighlights()}function l(a){a?(ma.iframe.contentWindow.clearlyHighlight||(ma.iframe.contentWindow.clearlyHighlight={settings:{path:Browser.extension.getURL("clearly/highlight/")},window:ma.iframe.contentWindow,jQuery:window.jQuery},ma.iframe.contentWindow.clearlyHighlight=initClearlyComponent__highlight(ma.iframe.contentWindow.clearlyHighlight),ma.iframe.contentWindow.clearlyHighlight.insertCSS(),ma.iframe.contentWindow.clearlyHighlight.addMouseHandlers()),ma.iframe.contentWindow.clearlyHighlight.enable()):(na||(na={settings:{path:Browser.extension.getURL("clearly/highlight/")},window:window,jQuery:window.jQuery},na=initClearlyComponent__highlight(na),na.insertCSS(),na.addMouseHandlers()),na.enable())}function m(){na&&na.disable(),ma&&ma.iframe.contentWindow.clearlyHighlight&&ma.iframe.contentWindow.clearlyHighlight.disable()}function n(){if(ra){var a;if(void 0!==typeof b&&(a=b.getSelectionFrame()),a){var c={width:a.width,height:a.height,top:a.offsetTop,bottom:a.height+a.offsetTop,left:a.offsetLeft,right:a.width+a.offsetLeft};ja.revealStaticRect(ja.expandRect(c,-9),a,!0),ja.show()}else ja.outlineElement(ra,!0,!0);l()}else log.warn("Couldn't find a preview element. We should switch to 'full page' mode.")}function o(){if(ia=!0,window.focus(),i(),ra){var a=ra.getBoundingClientRect();(!a||a&&0==a.width&&0==a.height)&&(ra=null)}ra?(n(),sa>1&&ja.setPageCount(sa-1)):b.getDefaultArticle(function(a){ra=a,n(),b.getNextPages(function(a,b){sa=Math.max(a.length,b.length),sa>1&&ja.setPageCount(sa-1)})})}function p(){ia=!1,window.focus(),i(),ma?q():r()}function q(){document.body.classList.add("clearlyBeforeVisible"),document.documentElement.classList.add("clearlyBeforeVisible"),ma.iframe.classList.add("evernoteClipperVisible"),l(!0)}function r(){ma={callbacks:{frameCreated:function(){ma.applyUnencodedOptions(ma.defaultThemes.newsprint),ma.loadGoogleFontsRequiredByAppliedOptions(),ma.iframe.addEventListener("webkitTransitionEnd",function(a){"width"===a.propertyName&&(this.classList.contains("evernoteClipperVisible")?(document.body.classList.add("clearlyVisible"),document.documentElement.classList.add("clearlyVisible"),ma.iframe.contentDocument.body.classList.add("clearlyWaiting"),0==ma.pagesCount?b.getDefaultArticle(function(a,c){ma.addNewPage(c,window.location.href),ma.iframe.contentDocument.body.classList.add("clearlyReady"),b.getNextPages(function(a,b){for(var c=ma.pagesCount;c<b.length;c++)ma.addNewPage(b[c],window.location.href)})}):ma.iframe.contentDocument.body.classList.add("clearlyReady")):(document.body.classList.remove("clearlyVisible","clearlyBeforeVisible"),document.documentElement.classList.remove("clearlyVisible","clearlyBeforeVisible")))});var a=ma.iframe.contentDocument.createElement("link");a.rel="stylesheet",a.href=Browser.extension.getURL("clearly/reformat/css/additional.css"),ma.iframe.contentDocument.body.appendChild(a),ma.iframe.contentWindow.loading=ma.iframe.contentDocument.createElement("div"),ma.iframe.contentWindow.loading.id="loading",ma.iframe.contentDocument.body.appendChild(ma.iframe.contentWindow.loading),q()}},settings:{path:Browser.extension.getURL("clearly/reformat/"),pageLabel:function(a){return Browser.i18n.getMessage("page",[a])},onCreateFrameUseThisId:"evernoteClearlyArticle",onCreateFrameDoNotInsertCSS:!0},window:window,jQuery:window.jQuery},ma=initClearlyComponent__reformat(ma),ma.createFrame()}function s(){ma&&ma.iframe&&(ma.iframe.contentDocument.body.classList.remove("clearlyWaiting","clearlyReady"),ma.iframe.classList.remove("evernoteClipperVisible"))}function t(){return ma}function u(){if(ia=!1,window.focus(),i(),pa&&pa.parentNode)pa.classList.remove("evernoteClipperHidden"),document.documentElement.classList.add("clearlyBeforeVisible");else{var a=document.createElement("div");a.classList.add("evernoteLargeLoading"),document.documentElement.appendChild(a),oa?oa.createFrame():"function"==typeof initClearlyComponent__reformat_custom?(oa={callbacks:{frameCreated:function(){pa=oa.iframe,document.documentElement.classList.add("clearlyBeforeVisible"),Browser.sendToExtension({name:"getPersistentValue",key:b.getCustomFormatSiteName(b.isCustomFormat().id)+"UncheckedSections"})}},settings:{path:Browser.extension.getURL("clearly/reformat_custom/"),cssFontsFile:Browser.extension.getURL("content/"+(SAFARI?"safari":"chrome")+"_fonts.css"),onCreateFrameDoNotInsertCSS:!0,onCreateFrameUseThisId:"evernoteClearlyCustom"},window:window,jQuery:jQuery},oa=initClearlyComponent__reformat_custom(oa),oa?oa.createFrame():log.warn("could not initialize clearly custom reformat")):log.warn("could not find clearly custom reformat")}}function v(){pa&&pa.parentNode&&(pa.classList.add("evernoteClipperHidden"),document.documentElement.classList.remove("clearlyBeforeVisible"))}function w(){return oa.getContentToSaveNode()}function x(){return oa.getUncheckedSections()}function y(a){oa&&oa.setUncheckedSections(b.isCustomFormat().id,a)}function z(){for(var a=document.getElementsByClassName("evernoteLargeLoading");a.length;){var b=a[0];b.parentNode.removeChild(b)}}function A(a,b){if(!a)return log.warn("Can't determine if 'null' is interesting (it's probably not)."),!1;if(a===window.document)return!1;if(""==a.textContent.trim()&&0===a.getElementsByTagName("img").length)return!1;var c=a.getBoundingClientRect();if(!c.width||!c.height)return!1;var d=getComputedStyle(a);return"hidden"===d.visibility||"none"===d.display?!1:a.parentNode&&b.parentNode&&(a.parentNode==b||b.parentNode==a)&&B(a,b)?!1:!0}function B(a,b){var c=a.getBoundingClientRect(),d=b.getBoundingClientRect();return c.bottom==d.bottom&&c.height==d.height&&c.left==d.left&&c.right==d.right&&c.top==d.top&&c.width==d.width?!1:a.textContent===b.textContent&&a.getElementsByTagName("img").length===b.getElementsByTagName("img").length?!1:void 0}function C(a){for(var b=0;b<a.children.length;b++){if(B(a.children[b],a))return C(a.children[b]);if(A(a.children[b],a))return a.children[b]}return a}function D(){return ra}function E(a){function c(){var a=wa.querySelector("[thumbnail]");a&&a.parentNode.parentNode.removeChild(a.parentNode);for(var b=new XMLSerializer,c="",d=0;d<wa.children.length;d++)c+=b.serializeToString(wa.children[d]);return c.replace(/\sxmlns=(?:'[^']+'|"[^"]+")/gi,"")}return wa.innerHTML?c():void b.getSnippet(function(d){var e=f(b.getTitle(),b.getUrl(),b.getFavIconUrl(),d,function(b){b&&(wa.innerHTML="",wa.appendChild(b),a(c()))});e&&(wa.innerHTML="",wa.appendChild(e),a(c()))})}function F(){for(var a=ra.parentNode;a;){if(A(a,ra)){a.enNudgeDescendToNode=ra,ra=a;break}a=a.parentNode}}function G(){if(ra.enNudgeDescendToNode){var a=ra.enNudgeDescendToNode;delete ra.enNudgeDescendToNode,ra=a}else ra=C(ra)}function H(){if(ia){var a=ra;F(),a!==ra&&ja.outlineElement(ra,!1,!0,!0)}}function I(){if(ia){var a=ra;G(),a!==ra&&ja.outlineElement(ra,!1,!0,!0)}}function J(){if(ia)for(var a=ra.previousElementSibling;a;){if(A(a,ra)){ra=a,ja.outlineElement(ra,!1,!0,!0);break}a=a.previousElementSibling}}function K(){if(ia)for(var a=ra.nextElementSibling;a;){if(A(a,ra)){ra=a,ja.outlineElement(ra,!1,!0,!0);break}a=a.nextElementSibling}}function L(){ia=!1;var a=4,b=document.body.scrollWidth,c=document.body.scrollHeight,d={bottom:c-a,top:a,left:a,right:b-a,width:b-2*a,height:c-2*a};i(),ja.revealStaticRect(d,document.body),ja.show(),l()}function M(){ia=!1,i()}function N(){var a=document.createElement("div");return a.id="evernoteEmailPreview",a}function O(){i(),ja.reset(),ja.gray(),xa.innerHTML="";var a=document.createElement("div");a.classList.add("evernoteLargeLoading"),xa.appendChild(a),S();var b=document.createElement("div"),c=document.createElement("div");c.className="evernoteEmailHeader evernoteEmailBig",b.appendChild(c);var d=document.createElement("div");d.id="evernoteEmailParticipants",d.className="evernoteEmailHeader evernoteEmailSmall",b.appendChild(d);var e=document.createElement("div");e.className="evernoteEmailDivider evernoteEmailLight evernoteEmailLong",b.appendChild(e);var f=document.createElement("div");f.id="evernoteEmailSelectAllMessages",f.className="evernoteEmailHeader evernoteEmailMedium evernoteEmailSelectedMessage";var g=document.createElement("div");g.className="evernoteEmailCheckbox",g.addEventListener("click",function(){var a=document.querySelectorAll(".evernoteEmail");if(/evernoteEmailSelectedMessage/.test(this.parentNode.className))for(var b=0;b<a.length;b++)Q(a.item(b));else for(var b=0;b<a.length;b++)P(a.item(b))}),f.appendChild(g);var h=document.createElement("span");h.innerText=Browser.i18n.getMessage("selectAllMessages"),f.appendChild(h),b.appendChild(f),la.getThread(function(a,f){if(a){c.innerText=a.subject,d.innerText=Browser.i18n.getMessage("participants")+": "+Object.keys(a.participants).join(", ");for(var h=0;h<a.messages.length;h++){0!=h&&(e=document.createElement("div"),e.className="evernoteEmailDivider evernoteEmailDark evernoteEmailShort",b.appendChild(e));var i=document.createElement("div");i.className="evernoteEmail evernoteEmailSelectedMessage",g=document.createElement("div"),g.className="evernoteEmailCheckbox",g.addEventListener("click",function(){/evernoteEmailSelectedMessage/.test(this.parentNode.className)?Q(this.parentNode):P(this.parentNode)}),i.appendChild(g);var j=document.createElement("div"),k=document.createElement("span");k.className="evernoteEmailHeader evernoteEmailMedium",k.innerText=a.messages[h].author.name,j.appendChild(k);var l=document.createElement("span");l.className="evernoteEmailDimmed evernoteEmailSmall evernoteEmailRight",l.innerText=a.messages[h].date,j.appendChild(l),i.appendChild(j);var m=document.createElement("div");if(m.className="evernoteEmailBody",m.innerHTML=a.messages[h].body,i.appendChild(m),a.messages[h].attachments.length>0){var n=document.createElement("div");n.className="evernoteEmailAttachments";for(var o=0;o<a.messages[h].attachments.length;o++){var p=document.createElement("div"),q=document.createElement("span");q.className="evernoteEmailSmall";var r=document.createElement("span");r.className="evernoteEmailDimmed evernoteEmailSmall evernoteEmailSize",q.textContent=a.messages[h].attachments[o].name,r.textContent="("+a.messages[h].attachments[o].size+")",p.setAttribute("evernote_attachment_url",a.messages[h].attachments[o].url),p.setAttribute("evernote_attachment_name",q.textContent),p.setAttribute("evernote_attachment_mime",a.messages[h].attachments[o].mime),p.appendChild(q),p.appendChild(r),n.appendChild(p)}i.appendChild(n)}b.appendChild(i)}z(),xa.appendChild(b)}else alert(f)})}function P(a){a.className+=" evernoteEmailSelectedMessage";var b=a.children[1].firstElementChild;b.className=b.className.replace(/\s*evernoteEmailDimmed/g,""),document.querySelectorAll(".evernoteEmail").length===document.querySelectorAll(".evernoteEmail.evernoteEmailSelectedMessage").length&&(document.querySelector("#evernoteEmailSelectAllMessages").className+=" evernoteEmailSelectedMessage")}function Q(a){a.className=a.className.replace(/\s*evernoteEmailSelectedMessage/g,"");var b=a.children[1].firstElementChild;b.className+=" evernoteEmailDimmed";var c=document.querySelector("#evernoteEmailSelectAllMessages");c.className=c.className.replace(/\s*evernoteEmailSelectedMessage/g,"")}function R(){xa.parentNode&&xa.parentNode.removeChild(xa)}function S(){xa.parentNode||document.documentElement.appendChild(xa)}function T(){if(xa){for(var a=xa.firstElementChild,b=a.querySelectorAll(".evernoteEmailCheckbox, #evernoteEmailSelectAllMessages, .evernoteEmail:not(.evernoteEmailSelectedMessage)"),c=0;c<b.length;c++)if(b.item(c).parentNode){if(b.item(c).webkitMatchesSelector(".evernoteEmail")){var d=b.item(c).previousElementSibling;d&&/evernoteEmailDivider/.test(d.className)&&/evernoteEmailShort/.test(d.className)||(d=b.item(c).nextElementSibling),d&&d.parentNode&&/evernoteEmailDivider/.test(d.className)&&/evernoteEmailShort/.test(d.className)&&d.parentNode.removeChild(d)}if("evernoteEmailSelectAllMessages"==b.item(c).id){var e=document.createElement("a");e.id="evernoteEmailLinkBack",e.className="evernoteEmailHeader evernoteEmailMedium",e.target="_blank",e.href=document.location.href;var f=document.createElement("div");f.id="evernoteEmailLinkBackArrow",e.appendChild(f);var g=document.createElement("span");g.innerText=Browser.i18n.getMessage("openConvoInGmail"),e.appendChild(g),b.item(c).parentNode.insertBefore(e,b.item(c))}b.item(c).parentNode.removeChild(b.item(c))}var h=a.querySelector(".evernoteEmailDivider.evernoteEmailLong");return h&&(h.className=h.className.replace(/\s*evernoteEmailLong/g," evernoteEmailShort")),a}return null}function U(){for(var a="",b=["#evernoteEmailPreview .evernoteEmailHeader, #evernoteEmailPreview .evernoteEmailDimmed, #evernoteEmailPreview .evernoteEmailAttachments","#evernoteEmailPreview .evernoteEmailHeader","#evernoteEmailPreview .evernoteEmailBig","#evernoteEmailPreview .evernoteEmailMedium","#evernoteEmailPreview .evernoteEmailSmall","#evernoteEmailPreview .evernoteEmailRight","#evernoteEmailPreview .evernoteEmailDimmed","#evernoteEmailPreview .evernoteEmailDivider","#evernoteEmailPreview .evernoteEmailLight","#evernoteEmailPreview .evernoteEmailDark","#evernoteEmailPreview .evernoteEmailLong","#evernoteEmailPreview .evernoteEmailShort","#evernoteEmailParticipants","#evernoteEmailLinkBack","#evernoteEmailLinkBackArrow","#evernoteEmailPreview .evernoteEmail","#evernoteEmailPreview .evernoteEmailBody","#evernoteEmailPreview .evernoteEmailAttachments","#evernoteEmailPreview .evernoteEmailAttachments .evernoteEmailSize"],c=["font-family: Helvetica, Arial, sans-serif !important;","color: #333333 !important; font-weight: bold !important;","font-size: 15px !important;","font-size: 14px !important;","font-size: 12px !important;","float: right !important;","color: #888888 !important;","height: 1px !important;","background-color: #E9E9E9 !important;","background-color: #B3B3B3 !important;","left: -48px !important; position: relative !important; width: -webkit-calc(100% + 96px) !important;","width: 100% !important;","margin: 16px 0 29px 0 !important;","display: block; margin: 22px 0 8px 0 !important; position: relative !important; text-decoration: none !important;","background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAr0lEQVQoU2NkwAKMjY35gcLTzp49G41NHlmMEV2BgYGBNRMT0xJGRkYFoAEY8ujqkRWwGBoa1gI1VwMVMYMUEm2Arq6uEisr62KgrVbINhBlgJGRUQxQ41SgRj5C/sUmzwh0dhzQ2ZPJNgBkKtQLS4EusSDWC8CY+g9SixKIQME6oFgVMYGIzQCw5UAJm////4OiUR5fIOI0AGoIP9CQGefOnYvEFbB4DSAmNmAGAABi7TE0OfL+0wAAAABJRU5ErkJggg==) !important;background-repeat: no-repeat !important; background-size: 16px 11px !important;display: inline-block; height: 11px !important; margin-right: 12px; width: 16px !important;","margin: 24px 0 !important; position: relative !important;","color: #222; font-family: Arial, sans-serif; font-size: 13px; margin-top: 24px !important;","padding: 20px 0 0 40px !important;","margin-left: 10px !important;"],d=0;d<b.length;d++)a+=b[d]+"{"+c[d]+"}";var e=document.createElement("style");e.innerText=a,document.head||(document.head=document.createElement("head")),document.head.appendChild(e)}function V(a,b){var c={top:Math.min(a.top,b.top),bottom:Math.max(a.bottom,b.bottom),left:Math.min(a.left,b.left),right:Math.max(a.right,b.right)};return c.width=c.right-c.left,c.height=c.bottom-c.top,c}function W(a,b){return a||b?a&&b?a.top!=b.top?!1:a.bottom!=b.bottom?!1:a.left!=b.left?!1:a.right!=b.right?!1:a.width!=b.width?!1:a.height!=b.height?!1:!0:!1:!0}function X(a){if(0!==a.endOffset||a.endContainer.nodeType!==Node.ELEMENT_NODE){var b=a.getBoundingClientRect(),c={top:b.top,bottom:b.bottom,left:b.left,right:b.right,width:b.width,height:b.height};return c}var d=null;try{d=a.endContainer.getBoundingClientRect()}catch(e){log.warn("Couldn't get a bounding client rect for our end element, maybe it's a text node.")}for(var f=!1,g=[],h=a.getClientRects(),i=0;i<h.length;i++)W(d,h[i])&&!f?f=!0:g.push(h[i]);if(0==g.length)return a.getBoundingClientRect();if(1==g.length)return g[0];for(var b=g[0],i=1;i<g.length;i++)b=V(b,g[i]);return b}function Y(a){return"rtl"==document.dir?!1:a.bottom<0&&a.top<0?!1:a.left<0&&a.right<0?!1:!0}function Z(a,b){var c=b,d=a.getBoundingClientRect();if(d={bottom:d.bottom+window.scrollY,height:d.height,left:d.left+window.scrollX,right:d.right+window.scrollX,top:d.top+window.scrollY,width:d.width},!Y(d))return c;var e=getComputedStyle(a);if("none"==e.display)return c;if("hidden"==e.overflowX||"hidden"==e.overflowY)return c;if(d.width*d.height>1&&(c=V(d,b)),a.children)for(var f=0;f<a.children.length;f++)c=Z(a.children[f],c);return c}function $(a){if(!a)return{top:0,bottom:0,left:0,right:0,width:0,height:0};var b=a.getBoundingClientRect();return Z(a,{bottom:b.bottom+window.scrollY,height:b.height,left:b.left+window.scrollX,right:b.right+window.scrollX,top:b.top+window.scrollY,width:b.width})}function _(){var a;if(void 0!==typeof b&&!ta){a=b.getSelection(),ta=[],ua=[];for(var c=0;c<a.rangeCount;c++)ta.push(a.getRangeAt(c).cloneRange()),ua.push([ta[c].startOffset,ta[c].endOffset]);va=b.getSelectionFrame()}if(!a){a=window.getSelection(),a.removeAllRanges();for(var d=0;d<ta.length;d++){var e=document.createRange();if((ta[d].startContainer.length||ta[d].startContainer.childNodes.length)<ua[d][0])for(var f=0,c=0;c<ta[d].startContainer.childNodes.length;c++){var g=ta[d].startContainer.childNodes[c],h=0;if(h=g.getAttribute&&g.getAttribute("clearly_highlight_id")?(g.innerText||g.textContent).length:g.length||g.childNodes.length,f+=h,f>=ua[d][0]){e.setStart(g,ua[d][0]-(f-h));break}}else e.setStart(ta[d].startContainer,ua[d][0]);if((ta[d].endContainer.length||ta[d].endContainer.childNodes.length)<ua[d][1])for(var f=0,c=0;c<ta[d].endContainer.childNodes.length;c++){var g=ta[d].endContainer.childNodes[c],h=0;if(h=g.getAttribute&&g.getAttribute("clearly_highlight_id")?(g.innerText||g.textContent).length:g.length||g.childNodes.length,f+=h,f>=ua[d][1]){e.setEnd(g,ua[d][1]-(f-h));break}}else e.setEnd(ta[d].endContainer,ua[d][1]);a.addRange(e)}}return a}function aa(){ia=!1;var a=_();ja.reset();var b=null;va&&(b=va.getBoundingClientRect());var c,d,e;if(a)for(i(),ja.reset(),e=0;e<a.rangeCount;e++)c=a.getRangeAt(e),d=X(c),d.top+=document.body.scrollTop,d.bottom+=document.body.scrollTop,d.left+=document.body.scrollLeft,d.right+=document.body.scrollLeft,b&&(d.left+=b.left,d.right+=b.left,d.top+=b.top,d.bottom+=b.top),ja.revealStaticRect(d,va,!1),ja.show();ja.show()}function ba(a,b){var c=parseFloat(ja.getElement().style.borderTopWidth),d=parseFloat(ja.getElement().style.borderRightWidth),e=parseFloat(ja.getElement().style.borderBottomWidth),f=parseFloat(ja.getElement().style.borderLeftWidth),g=parseFloat(ja.getElement().style.width),h=parseFloat(ja.getElement().style.height);return g-d>a&&a>f&&b>c&&h-e>b?!1:!0}function ca(a){i(),ja.reset(),ja.gray(a)}function da(a){ra=a}function ea(){ca("transparent"),ka.reset(),ka.showVeil(),ka.setColor("rgba(0, 0, 0, 0.27)"),ka.enableCrosshair()}function fa(a){a.key===b.getCustomFormatSiteName(b.isCustomFormat().id)+"UncheckedSections"&&(a.value&&a.value[a.currentUserId]&&y(a.value[a.currentUserId]),b.getCustomFormatReformattedData(function(a){z(),oa.displayDetected(a)}))}function ga(){document.body.style.overflowY="",document.body.style.overflowX="",i()}var ha={},ia=!1,ja=new ContentVeil,ka=new Veil,la=new GmailClipper,ma=null,na=null,oa=null,pa=null;SAFARI&&b.isGmail()&&U();var qa,ra=null,sa=0,ta=null,ua=null,va=null,wa=c(),xa=N();return Browser.addMessageHandlers({clearPreview:i,previewArticle:o,previewClearly:p,previewCustom:u,previewEmail:O,previewFullPage:L,previewPdf:M,previewSelection:aa,previewSkitch:ea,previewUrl:h,receiveCroppedImage:g,receivePersistentValue:fa,receiveScreenshot:ga}),ha.clear=i,ha.clearHighlights=k,ha.getArticleElement=D,ha.getUrlElement=E,ha.getClearlyReformat=t,ha.getCustomElementContent=w,ha.getCustomElementUncheckedSections=x,ha.looksInteresting=A,ha.computeDescendantBoundingBox=$,ha.getEmailElement=T,ha.ensureSelectionIsShown=_,ha.expandPreview=H,ha.contractPreview=I,ha.moveToElementAbove=J,ha.moveToElementBelow=K,ha.isPointOnVeil=ba,ha.reset=j,ha.gray=ca,ha.setElement=da,ha});