!function(a){"use strict";function t(a,t){return void 0!==a?a:t}function e(a,t){return"true"==a?!0:"false"==a?!1:t}a(document).on("ready",function(){if(a().lightGallery&&a("._js-lightGallery").length>0){var r=a("._js-lightGallery");r.each(function(){var r=a(this),d=t(r.attr("data-mode"),"lg-slide"),o=t(r.attr("data-cssEasing"),"ease"),l=t(r.attr("data-jqEasing"),"linear"),n=parseInt(t(r.attr("data-speed"),600),0),s=t(r.attr("data-height"),"100%"),i=t(r.attr("data-width"),"100%"),u=t(r.attr("data-class"),""),h=t(r.attr("data-startClass"),"lg-start-zoom"),m=parseInt(t(r.attr("data-backdropDuration"),150),0),p=parseInt(t(r.attr("data-hideBarsDelay"),6e3),0),b=e(r.attr("data-useLeft"),!1),c=e(r.attr("data-closable"),!0),g=e(r.attr("data-loop"),!0),T=e(r.attr("data-escKey"),!0),y=e(r.attr("data-keyPress"),!0),f=e(r.attr("data-controls"),!0),I=e(r.attr("data-slideEndAnimation"),!0),w=e(r.attr("data-controlsStartEnd"),!1),C=e(r.attr("data-mousewheel"),!0),S=t(r.attr("data-appendSubHtmlTo"),".lg-sub-html"),A=parseInt(t(r.attr("data-preload"),1),0),M=e(r.attr("data-showAfterLoad"),!0),v=t(r.attr("data-selector"),""),D=t(r.attr("data-nextHTML"),""),x=t(r.attr("data-prevHTML"),""),H=parseInt(t(r.attr("data-index"),0),0),L=t(r.attr("data-iframeMaxWidth"),"100%"),z=e(r.attr("data-download"),!0),E=e(r.attr("data-counter"),!0),P=t(r.attr("data-appendCounterTo"),".lg-toolbar"),W=parseInt(t(r.attr("data-swipeThreshold"),50),0),j=e(r.attr("data-drag"),!0),k=e(r.attr("data-touch"),!0),B=e(r.attr("data-dynamic"),!1),G=e(r.attr("data-thumbnail"),!0),_=e(r.attr("data-animateThumb"),!0),K=t(r.attr("data-currentPagerPosition"),"middle"),V=parseInt(t(r.attr("data-thumbWidth"),100),0),Y=parseInt(t(r.attr("data-thumbContHeight"),100),0),Z=parseInt(t(r.attr("data-thumbMargin"),5),0),q=e(r.attr("data-toogleThumb"),!0),O=e(r.attr("data-enableThumbDrag"),!0),Q=e(r.attr("data-enableThumbSwipe"),!0),F=e(r.attr("data-loadYoutubeThumbnail"),!0),J=parseInt(t(r.attr("data-youtubeThumbSize"),1),0),N=e(r.attr("data-loadVimeoThumbnail"),!0),R=t(r.attr("data-vimeoThumbSize"),"thumbnail_small"),U=e(r.attr("data-loadDailymotionThumbnail"),!0),X=e(r.attr("data-autoplay"),!0),$=parseInt(t(r.attr("data-pause"),5e3),0),aa=e(r.attr("data-progressBar"),!0),ta=e(r.attr("data-fourceAutoplay"),!1),ea=e(r.attr("data-autoplayControls"),!0),ra=t(r.attr("data-appendAutoplayControlsTo"),".lg-toolbar"),da=t(r.attr("data-videoMaxWidth"),"855"),oa=e(r.attr("data-fullScreen"),!0),la=e(r.attr("data-zoom"),!0),na=parseInt(t(r.attr("data-scale"),1),0),sa=parseInt(t(r.attr("data-enableZoomAfter"),50),0),ia=e(r.attr("data-hash"),!1),ua=parseInt(t(r.attr("data-galleryId"),1),0);r.lightGallery({mode:d,cssEasing:o,easing:l,speed:n,height:s,width:i,addClass:u,startClass:h,backdropDuration:m,hideBarsDelay:p,useLeft:b,closable:c,loop:g,escKey:T,keyPress:y,controls:f,slideEndAnimatoin:I,hideControlOnEnd:w,mousewheel:C,appendSubHtmlTo:S,preload:A,showAfterLoad:M,selector:v,nextHTML:D,prevHTML:x,index:H,iframeMaxWidth:L,download:z,counter:E,appendCounterTo:P,swipeThreshold:W,enableDrag:j,enableTouch:k,dynamic:B,thumbnail:G,animateThumb:_,currentPagerPosition:K,thumbWidth:V,thumbContHeight:Y,thumbMargin:Z,toogleThumb:q,enableThumbDrag:O,enableThumbSwipe:Q,loadYoutubeThumbnail:F,youtubeThumbSize:J,loadVimeoThumbnail:N,vimeoThumbSize:R,loadDailymotionThumbnail:U,autoplay:X,pause:$,progressBar:aa,fourceAutoplay:ta,autoplayControls:ea,appendAutoplayControlsTo:ra,videoMaxWidth:da,fullScreen:oa,zoom:la,scale:na,enableZoomAfter:sa,hash:ia,galleryId:ua})})}})}(jQuery);