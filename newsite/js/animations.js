//Returns false if Browser is not IE
function $detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
} 

//If Browser is not IE
if( $detectIE() == false){

	if( $('body').hasClass('enableanimations') ){

		/*! WOW - v0.1.9 - 2014-05-10
		* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),b=this.WeakMap||(b=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),this.WOW=function(){function d(a){null==a&&(a={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new b}return d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},d.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},d.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},d.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},d.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},d.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},d.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),d.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},d.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},d.prototype.vendors=["moz","webkit"],d.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},d.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},d.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},d.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},d.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},d.prototype.scrollHandler=function(){return this.scrolled=!0},d.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},d.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},d.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},d.prototype.util=function(){return this._util||(this._util=new a)},d.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},d}()}).call(this);
		// ####################################
		// INITIALIZE WOW.JS REVEAL ANIMATIONS
		// ####################################
			new WOW().init();
		//END

		//scrollreveal
		!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.scrollReveal=e()}(this,function(){return window.scrollReveal=function(t){"use strict";function e(e){this.docElem=t.document.documentElement,this.options=this.extend(this.defaults,e),this.styleBank=[],1==this.options.init&&this.init()}return e.prototype={defaults:{after:"0s",enter:"bottom",move:"24px",over:"0.66s",easing:"ease-in-out",viewportFactor:.33,reset:!1,init:!0},init:function(){this.scrolled=!1;var e=this;this.elems=Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")),this.elems.forEach(function(t){e.styleBank[t]||(e.styleBank[t]=t.getAttribute("style")),e.update(t)});var i=function(){e.scrolled||(e.scrolled=!0,setTimeout(function(){e._scrollPage()},60))},o=function(){function t(){e._scrollPage(),e.resizeTimeout=null}e.resizeTimeout&&clearTimeout(e.resizeTimeout),e.resizeTimeout=setTimeout(t,200)};t.addEventListener("scroll",i,!1),t.addEventListener("resize",o,!1)},_scrollPage:function(){var t=this;this.elems.forEach(function(e){t.update(e)}),this.scrolled=!1},parseLanguage:function(t){function e(t){var e=[],i=["from","the","and","then","but","with"];return t.forEach(function(t){i.indexOf(t)>-1||e.push(t)}),e}var i=t.getAttribute("data-scroll-reveal").split(/[, ]+/),o={};return i=e(i),i.forEach(function(t,e){switch(t){case"enter":return void(o.enter=i[e+1]);case"after":return void(o.after=i[e+1]);case"wait":return void(o.after=i[e+1]);case"move":return void(o.move=i[e+1]);case"ease":return o.move=i[e+1],void(o.ease="ease");case"ease-in":return o.move=i[e+1],void(o.easing="ease-in");case"ease-in-out":return o.move=i[e+1],void(o.easing="ease-in-out");case"ease-out":return o.move=i[e+1],void(o.easing="ease-out");case"over":return void(o.over=i[e+1]);default:return}}),o},update:function(t){var e=this.genCSS(t),i=this.styleBank[t];return null!=i?i+=";":i="",t.getAttribute("data-scroll-reveal-initialized")||(t.setAttribute("style",i+e.initial),t.setAttribute("data-scroll-reveal-initialized",!0)),this.isElementInViewport(t,this.options.viewportFactor)?t.getAttribute("data-scroll-reveal-complete")?void 0:this.isElementInViewport(t,this.options.viewportFactor)?(t.setAttribute("style",i+e.target+e.transition),void(this.options.reset||setTimeout(function(){""!=i?t.setAttribute("style",i):t.removeAttribute("style"),t.setAttribute("data-scroll-reveal-complete",!0)},e.totalDuration))):void 0:void(this.options.reset&&t.setAttribute("style",i+e.initial+e.reset))},genCSS:function(t){var e,i,o=this.parseLanguage(t);o.enter?(("top"==o.enter||"bottom"==o.enter)&&(e=o.enter,i="y"),("left"==o.enter||"right"==o.enter)&&(e=o.enter,i="x")):(("top"==this.options.enter||"bottom"==this.options.enter)&&(e=this.options.enter,i="y"),("left"==this.options.enter||"right"==this.options.enter)&&(e=this.options.enter,i="x")),("top"==e||"left"==e)&&(o.move=o.move?"-"+o.move:"-"+this.options.move);var r=o.move||this.options.move,n=o.over||this.options.over,s=o.after||this.options.after,a=o.easing||this.options.easing,l="-webkit-transition: all "+n+" "+a+" "+s+";transition: all "+n+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",u="-webkit-transition: all "+n+" "+a+" 0s;transition: all "+n+" "+a+" 0s;-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",c="-webkit-transform: translate"+i+"("+r+");transform: translate"+i+"("+r+");opacity: 0;",f="-webkit-transform: translate"+i+"(0);transform: translate"+i+"(0);opacity: 1;";return{transition:l,initial:c,target:f,reset:u,totalDuration:1e3*(parseFloat(n)+parseFloat(s))}},getViewportH:function(){var e=this.docElem.clientHeight,i=t.innerHeight;return i>e?i:e},getOffset:function(t){var e=0,i=0;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(i+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:i}},isElementInViewport:function(e,i){var o=t.pageYOffset,r=o+this.getViewportH(),n=e.offsetHeight,s=this.getOffset(e).top,a=s+n,i=i||0;return r>=s+n*i&&a>=o},extend:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}},e}(window),scrollReveal});
		// ####################################
		// SCROLL REVEAL ANIMATIONS initialize
		// ####################################
		  (function($) {
			'use strict';
			window.scrollReveal = new scrollReveal({reset: false}); //true IF you want to reset when you scroll back

			// See: http://stackoverflow.com/a/11381730/989439
			var isMobile = (function () {
				var check = false;
				(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
				return check;
			})();

			// This function returns the appropriate CSS-transition end event name
			// to the transitionEnd variable. e.g usage: $(el).on('transitionEnd', func(e));
			var transitionEnd = (function () {
				var t;
				var el = document.createElement('fakeelement');
				var transitions = {
				  'transition':'transitionend',
				  'OTransition':'oTransitionEnd',
				  'MozTransition':'transitionend',
				  'WebkitTransition':'webkitTransitionEnd'
				}

				for(t in transitions){
					if( el.style[t] !== undefined ){
						return transitions[t];
					}
				}
			})();

			// Just for fun, let’s log out the results above.
			console.log("Is the current device mobile? " + isMobile + "\n"
			  + "CSS transitions end-event name: " + transitionEnd);

		  })();
		// END

		//Parallax
		// $(document).ready(function(){$window=$(window),$("[data-type]").each(function(){$(this).data("offsetY",parseInt($(this).attr("data-offsetY"))),$(this).data("Xposition",$(this).attr("data-Xposition")),$(this).data("speed",$(this).attr("data-speed"))}),$('section[data-type="background"]').each(function(){var t=$(this),a=t.offset(),o=a.top;$(window).scroll(function(){if($window.scrollTop()+$window.height()>o&&o+t.height()>$window.scrollTop()){var a=-($window.scrollTop()/t.data("speed"));t.data("offsetY")&&(a+=t.data("offsetY"));var s="50% "+a+"px";t.css({backgroundPosition:s}),$('[data-type="sprite"]',t).each(function(){var t=$(this),a=-($window.scrollTop()/t.data("speed")),o=t.data("Xposition")+" "+(a+t.data("offsetY"))+"px";t.css({backgroundPosition:o})}),$('[data-type="video"]',t).each(function(){var t=$(this),a=-($window.scrollTop()/t.data("speed")),o=a+t.data("offsetY")+"px";t.css({top:o})})}})})});

	}

	// #######################
	// SLIDER PARALLAX EFFECT
	// #######################
		$(document).ready(function($){
		 	var $slideH = $('.tp-banner-container').innerHeight();


		 	var $parallaxOn = $('#parallax-on');
		 	var $prlxOn = $('.prlx-on');
		 	var $prlxOnSlow = $('.prlx-on.slow');

		 	var $sctnFacts = $('#sectionfacts-c');
		 	var $sctnFactsImage = $('.prlx-sectionfacts');

		 	var $wallSection = $('#wallsection');
		 	var $wallSectionImage = $('.prlx-wallsection');

		 	var $woodSection = $('#woodsection');
		 	var $woodSectionImage = $('.prlx-woodsection');

		 	var $sectionAddress = $('#sectionaddress-c');
		 	var $sectionAddressImage = $('.prlx-address');

		 	var $teamParallax = $('#teamparallax-c');
		 	var $teamParallaxImage = $('.prlx-team');

		 	var $woodSectionc = $('#woodsection-c');
		 	var $woodSectioncImage = $('.prlx-woodsection');	

		 	var $sectionLeftbg = $('#sectionleftbg');

			$(window).scroll(function(){
		
		   		 $scrollTop = $(window).scrollTop();//scroll value from top	
			 	 var $iH = $(window).innerHeight();//window height

		   		 //Slider parallax effect
		 		 $parallaxOn.css({'top': (( $scrollTop / 2))  + 'px' });
		 		 
		 		 $prlxOn.css({'margin-top': (($scrollTop / 3)) + 'px' });
		 		 $prlxOnSlow.css({'margin-top': ((-$scrollTop / 9)) + 'px' });


 		  		 //PARALLAX SECTIONFACTS
 		 		 //This triggers only if content exists
 		 		 if( $sctnFacts.length ) {
 		 	 		 //Custom parallax effect index address section
 		  		 	 var $sectionfacts = $sctnFacts.offset();
 		  		 	 var $sectionfactsTop = $sectionfacts.top;//section scroll top
 		 	 		 if ($scrollTop > $sectionfactsTop-$iH){
 		 	 		 	$sctnFactsImage.css({'top': (( ($scrollTop-$sectionfactsTop ) / 2))  + 'px' });
 		 	 		 }
 		 	 	 }

 	 	  		 //WALL SECTION
 	 	 		 if( $wallSection.length ) {
 	 	  		 	 var $swall = $wallSection.offset();
 	 	  		 	 var $swallTop = $swall.top;//section scroll top
 	 	 	 		 if ($scrollTop > $swallTop-$iH){
 	 	 	 		 	$wallSectionImage.css({'top': (( ($scrollTop-$swallTop ) / 2))  + 'px' });
 	 	 	 		 }
 	 	 	 	 }

 	 	  		 //WOOD SECTION
 	 	 		 if( $woodSection.length ) {
 	 	  		 	 var $swood = $woodSection.offset();
 	 	  		 	 var $swoodTop = $swood.top;//section scroll top
 	 	 	 		 if ($scrollTop > $swoodTop-$iH){
 	 	 	 		 	$woodSectionImage.css({'top': (( ($scrollTop-$swoodTop ) / 2))  + 'px' });
 	 	 	 		 }
 	 	 	 	 }

		 		 //PARALLAX ADDRESS
				 //This triggers only if content exists
				 if( $sectionAddress.length ) {
			 		 //Custom parallax effect index8 address section
		 		 	 var $address = $sectionAddress.offset();
		 		 	 var $addressTop = $address.top;//section scroll top
			 		 if ($scrollTop > $addressTop-$iH){
			 		 	$sectionAddressImage.css({'top': (( ($scrollTop-$addressTop) / 2))  + 'px' });
			 		 }
			 	 }
	 
	 	  		 //PARALLAX TEAM
	 	 		 //This triggers only if content exists
	 	 		 if( $teamParallax.length ) {
	 	 	 		 //Custom parallax effect index7b team section
	 	  		 	 var $team = $teamParallax.offset();
	 	  		 	 var $teamTop = $team.top;//section scroll top
	 	 	 		 if ($scrollTop > $teamTop-$iH){
	 	 	 		 	$teamParallaxImage.css({'top': (( ($scrollTop-$teamTop) / 2))  + 'px' });
	 	 	 		 }
	 	 	 	 }

	 	  		 //PARALLAX WOODSECTION
	 	 		 //This triggers only if content exists
	 	 		 if( $woodSectionc.length ) {
	 	 	 		 //Custom parallax effect index address section
	 	  		 	 var $woodsection = $woodSectionc.offset();
	 	  		 	 var $woodsectionTop = $woodsection.top;//section scroll top
	 	 	 		 if ($scrollTop > $woodsectionTop-$iH){
	 	 	 		 	$woodSectioncImage.css({'top': (( ($scrollTop-$woodsectionTop) / 2))  + 'px' });
	 	 	 		 }
	 	 	 	 }

	 	  		 //PARALLAX LEFTBG PAGE 17
	 	 		 //This triggers only if content exists
	 	 		 if( $sectionLeftbg.length ) {
	 	 		 	 var $iH = $(window).innerHeight();
	 	 		 	 var $iW = $(window).innerWidth();

	 	 	 		 //Custom parallax effect index17 left bg
	 	  		 	 var $leftbg = $('#sectionrightbg').offset();
	 	  		 	 var $leftbgTop = $leftbg.top;//section scroll top
	 	  		 	 var $leftbgimage = $('.prlx-leftbg');

	 	 	 		 if ($scrollTop > $leftbgTop-$iH){
	 	 	 		 	if ( $iW > 992){
	 	 	 		 		//For desktop
	 	 	 		 		$leftbgimage.css({'top': -(( ($scrollTop-$leftbgTop) / 5))  + 'px' });
	 	 	 		 	}else{
	 	 	 		 		//For mobile
	 	 	 		 		$leftbgimage.css({'top': -(( ($scrollTop-$leftbgTop) / 5))-180  + 'px' });
	 	 	 		 	}
	 	 	 		 	
	 	 	 		 }
	 	 	 	 }	
			});
		});
	//END

}



