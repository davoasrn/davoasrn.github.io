
// #############
// PAGE PRELOAD
// #############
	$(window).load(function() {
	  // $(window).scrollTop(0);
	  $('#status').fadeOut();
	  $('#preloader').delay(350).fadeOut('slow');

	  // Play sound after pageload for Onepage
	  // and for medium and large screens only
	  if( $('.sounds-enable').length ){
	 	 startSong();
	  }
	  //Load stroke animations after pageload
	  if( $('.init-stroke').length ){
	  	initStroke();
	  }
	});
//END

// ##############
// THEME PREVIEWS
// ##############
	var $tm = 0,
	    $tmContent = $('.tm-content'),
	    $tmClose = $('.tm-close'),
	    $tmFullScreen = $('#tm-fullscreen'),
	    $tmprev = $('.tm-prev'),
	    $activetmprev = $('.activate-tmprev');



	$tmContent.hide();
	$tmClose.addClass('none');
	$tmFullScreen.css({'opacity':'0','display':'none'});

	$('a.tm-open').on("click", function(){
		$tmprev.css({'width': 160 +'px','height': 507 +'px'});
	    $('.tm-open').addClass('none');
	    $tmClose.removeClass('none');	 
		$tmContent.fadeToggle(300);

		$('#back-top a').stop().animate({'width': 160 +'px'}, 200);
		$('#back-top span').stop().animate({'width': 160 +'px'}, 200);
		$('a.tm-open').stop().animate({'width': 160 +'px'}, 100);
		$('a.tm-close').stop().animate({'width': 160 +'px'}, 100);
		$tm = 1;
		if($activetmprev.length){
			$activetmprev.addClass('active');
		}
		$tmFullScreen.css({'display':'block'});
		$tmFullScreen.stop().animate({'opacity':'0.7'});
		return false;
	});

	$('a.tm-close').on("click", function(){
	    $tmClose.addClass('none');
	    $('.tm-open').removeClass('none');
		$tmContent.fadeToggle(300);
		$tmprev.css({'width': 50 +'px','height': 50 +'px'});

		$('#back-top a').stop().animate({'width': 50 +'px'}, 200);
		$('#back-top span').stop().animate({'width': 50 +'px'}, 200);
		$('a.tm-open').stop().animate({'width': 50 +'px'}, 100);
		$('a.tm-close').stop().animate({'width': 50 +'px'}, 100);
		$tm = 0;
		
		if($activetmprev.length){
			$activetmprev.removeClass('active');
		}
		$tmFullScreen.stop().animate({'opacity':'0'});
		setTimeout(function() {
			$tmFullScreen.css({'display':'none'});
		}, 200);
		return false;
	});

	
	var scrTop = $(window);
	var triggerOnce = true;
	$(window).scroll(function () {
		
		if ( scrTop.scrollTop() > 700) {
			if (triggerOnce == true ){
				$tmprev.stop().animate({'margin-bottom':'53px'},200);
				triggerOnce = false;
			}
		} else {
			if (triggerOnce == false ){
				$tmprev.stop().animate({'margin-bottom':'0px'},200)
				triggerOnce = true;
			}
		}
	});

	$('.activate-tmprev').on("click", function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('a.tm-close').click();
		}else{
			$(this).addClass('active');
			$('a.tm-open').click();
		}
		return false;
	});

	$('.deactivate-tmprev').on("click", function(){
		$('.deactivate-tmprev').addClass('activate-tmprev').removeClass('deactivate-tmprev');
		$('a.tm-close').click();
		return false;
	});

	//SHOWS THEME PREVIEW
	function ShowPicture(id,Source) {
	if (Source=="1"){
	if (document.layers) document.layers[''+id+''].visibility = "show"
	else if (document.all) document.all[''+id+''].style.visibility = "visible"
	else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "visible"
	}
	else
	if (Source=="0"){
	if (document.layers) document.layers[''+id+''].visibility = "hide"
	else if (document.all) document.all[''+id+''].style.visibility = "hidden"
	else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "hidden"
	}
	}
//

// #####################
// SMART RESIZER PLUGIN
// #####################
	(function($,sr){
	  // debouncing function from John Hann
	  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	  var debounce = function (func, threshold, execAsap) {
	      var timeout;

	      return function debounced () {
	          var obj = this, args = arguments;
	          function delayed () {
	              if (!execAsap)
	                  func.apply(obj, args);
	              timeout = null;
	          };

	          if (timeout)
	              clearTimeout(timeout);
	          else if (execAsap)
	              func.apply(obj, args);

	          timeout = setTimeout(delayed, threshold || 100);
	      };
	  }
	  // smartresize 
	  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	})(jQuery,'smartresize');
//END - Smart resizer plugin

// ################################
// LIGHTCASE - IMAGE POPUP PREVIEW 
// ################################
	jQuery(document).ready(function($) {
		$('a[data-rel^=lightcase]').lightcase();
	});
//END

// ########################
// INITIALIZE REV SLIDER'S
// ########################
		//Initialize Rev Slider Full Screen - With changing menu colors 
		var revapi;
		jQuery(document).ready(function() {
	   	   var theslider = jQuery('.tp-banner');
		   revapi = theslider.revolution(
			{	
				dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite
				delay:15000,
				startwidth:1170,
				startheight:500,

				touchenabled:"on",
				onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,				
				hideThumbs:200,

				fullWidth:"off",
				fullScreen:"on",
				fullScreenAlignForce:"on",
				fullScreenOffsetContainer: "#navoffset, #navoffset2", //There is a function for these 2 IDs so if you want to change the name or add more IDs be sure to make the proper changes also to the function navOffset()

				navigationType:"bullet", 				// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
														// "preview1",

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				stopLoop:"off",
				stopAtSlide:1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:0,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic				
				shuffle:"off",

				spinner:"none",

			
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,
										
				parallax:"mouse",
				parallaxBgFreeze:"off",
				parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
										
				keyboardNavigation:"on",
			});

			//Listen slide nr. and changes the menu and logo color depending on the slider colors
			revapi.bind("revolution.slide.onchange",function (e,data) {
				jQuery('#callbackinfo').html('Last Event: Slide Changed to '+data.slideIndex).addClass("changecolor");
				setTimeout(function() {
					jQuery('#callbackinfo').removeClass("changecolor");
				},500);

				// var color = revapi  data.slideIndex
				var currentSlide = theslider.find('li').eq(data.slideIndex-1);
				var currSlideColor = currentSlide.attr('data-color');

				var $iW = $(window).innerWidth();
				
				var $logo = $('.logo a img');
				var $logoDark = $('div.logo img.dark');
				var $navi = $('.navigation');

				//if screensize is bigger than 975 make logo/menu dark
				if($iW >= 975){
					//when slider changes get menu color
					if(typeof currSlideColor != 'undefined'){
						$navi.removeClass('white dark').addClass(currSlideColor);

						//If the navigation is small then the navigation is always black
						//If is not small then it gets the color from te slider
						if( $navi.hasClass('navbg') ){
							$logo.removeClass('white dark').addClass('dark');

							//If navigation is darkchealkk make logo white
							if( $navi.hasClass('darkchealk') ){
								$logoDark.addClass('white').removeClass('dark');
							}
	
						}else{
							$logo.removeClass('white dark').addClass(currSlideColor);
						}
					} 
					else {
						$navi.removeClass('white dark').addClass('white');
						$logo.removeClass('white dark').addClass('white');
					}
				}
				else{
					//if screensize is smaller than 975 make logo/menu black
					$navi.removeClass('white dark').addClass('dark');
					$logo.removeClass('white dark').addClass('dark');				
				}

				//Ads logo color when you scroll up depending on the background color, 
				//because it changes to black when the menu minimizes.

				$(window).scroll(function(){
					var $iW = $(window).innerWidth();
					if($iW >= 975){
						if($(window).scrollTop() == 0  ){
							if(typeof currSlideColor != 'undefined'){
								$logo.removeClass('white dark').addClass(currSlideColor);
								$navi.removeClass('white dark').addClass(currSlideColor);
							} 
							else {
								$logo.removeClass('white dark').addClass('white');
								$navi.removeClass('white dark').addClass('dark');
							}
						}
					}
					else{
						if($(window).scrollTop() == 0  ){
							$navi.removeClass('white dark').addClass('dark');
							$logo.removeClass('white dark').addClass('dark');
						}
						
						$navi.removeClass('white dark').addClass('dark');
						$logo.removeClass('white dark').addClass('dark');				
					}					
				});

				//Adds dark logo when width is small and white or dark if bigger
				$(window).resize(function(){
					var $iW = $(window).innerWidth();
					if($iW <= 975){			
						$navi.removeClass('white dark').addClass('dark');
						$logo.removeClass('white dark').addClass('dark');
					}
					else{
						//when slider changes get menu color
						if(typeof currSlideColor != 'undefined'){
							$navi.removeClass('white dark').addClass(currSlideColor);

							if($(window).scrollTop() < 800  ){
								$logo.removeClass('white dark').addClass(currSlideColor);
							}else{
								$logo.removeClass('white dark').addClass('dark');

								//If navigation is darkchealkk make logo white
								if( $navi.hasClass('darkchealk') ){
									$logoDark.addClass('white').removeClass('dark');
								}

							}
							
						} 
						else {
							$navi.removeClass('white dark').addClass('white');
						}
					}			
				});
			});
		});

		//Initialize Rev Slider Full Screen - With changing menu colors and fixed height
		var revapi;
		jQuery(document).ready(function() {
	   	   var theslider = jQuery('.tp-banner-innerpage');
		   revapi = theslider.revolution(
			{	
				dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite
				delay:15000,
				startwidth:1170,
				startheight:700,

				touchenabled:"on",
				onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,				
				hideThumbs:200,

				fullWidth:"off",
				fullScreen:"off",
				fullScreenAlignForce:"on",
				fullScreenOffsetContainer: "#navoffset, #navoffset2", //There is a function for these 2 IDs so if you want to change the name or add more IDs be sure to make the proper changes also to the function navOffset()

				navigationType:"bullet", 				// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
														// "preview1",

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				stopLoop:"off",
				stopAtSlide:1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:0,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic				
				shuffle:"off",

				spinner:"none",

			
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,
										
				parallax:"mouse",
				parallaxBgFreeze:"off",
				parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
										
				keyboardNavigation:"on",
			});

			//Listen slide nr. and changes the menu and logo color depending on the slider colors
			revapi.bind("revolution.slide.onchange",function (e,data) {
				jQuery('#callbackinfo').html('Last Event: Slide Changed to '+data.slideIndex).addClass("changecolor");
				setTimeout(function() {
					jQuery('#callbackinfo').removeClass("changecolor");
				},500);

				// var color = revapi  data.slideIndex
				var currentSlide = theslider.find('li').eq(data.slideIndex-1);
				var currSlideColor = currentSlide.attr('data-color');

				var $iW = $(window).innerWidth();
				
				var $logo = $('.logo a img');
				var $logoDark = $('div.logo img.dark');
				var $navi = $('.navigation');
				
				//if screensize is bigger than 975 make logo/menu dark
				if($iW >= 975){
					//when slider changes get menu color
					if(typeof currSlideColor != 'undefined'){
						$navi.removeClass('white dark').addClass(currSlideColor);

						//If the navigation is small then the navigation is always black
						//If is not small then it gets the color from te slider
						if( $navi.hasClass('navbg') ){
							$logo.removeClass('white dark').addClass('dark');

							//If navigation is darkchealkk make logo white
							if( $navi.hasClass('darkchealk') ){
								$logoDark.addClass('white').removeClass('dark');
							}
			
						}else{
							$logo.removeClass('white dark').addClass(currSlideColor);
						}
					} 
					else {
						$navi.removeClass('white dark').addClass('white');
						$logo.removeClass('white dark').addClass('white');
					}
				}
				else{
					//if screensize is smaller than 975 make logo/menu black
					$navi.removeClass('white dark').addClass('dark');
					$logo.removeClass('white dark').addClass('dark');				
				}

				//Ads logo color when you scroll up depending on the background color, 
				//because it changes to black when the menu minimizes.

				$(window).scroll(function(){
					var $iW = $(window).innerWidth();
					if($iW >= 975){
						if($(window).scrollTop() == 0  ){
							if(typeof currSlideColor != 'undefined'){
								$logo.removeClass('white dark').addClass(currSlideColor);
								$navi.removeClass('white dark').addClass(currSlideColor);
							} 
							else {
								$logo.removeClass('white dark').addClass('white');
								$navi.removeClass('white dark').addClass('dark');
							}
						}
					}
					else{
						if($(window).scrollTop() == 0  ){
							$navi.removeClass('white dark').addClass('dark');
							$logo.removeClass('white dark').addClass('dark');
						}
						
						$navi.removeClass('white dark').addClass('dark');
						$logo.removeClass('white dark').addClass('dark');				
					}					
				});


				//Adds dark logo when width is small and white or dark if bigger
				$(window).resize(function(){
					var $iW = $(window).innerWidth();
					if($iW <= 975){			
						$navi.removeClass('white dark').addClass('dark');
						$logo.removeClass('white dark').addClass('dark');
					}
					else{
						//when slider changes get menu color
						if(typeof currSlideColor != 'undefined'){
							$navi.removeClass('white dark').addClass(currSlideColor);

							if($(window).scrollTop() < 800  ){
								$logo.removeClass('white dark').addClass(currSlideColor);
							}else{
								$logo.removeClass('white dark').addClass('dark');

								//If navigation is darkchealkk make logo white
								if( $navi.hasClass('darkchealk') ){
									$logoDark.addClass('white').removeClass('dark');
								}

							}
							
						} 
						else {
							$navi.removeClass('white dark').addClass('white');
						}
					}			
				});
			});
		});
		
		//Initialize Rev Slider Static
		var revapi;
		jQuery(document).ready(function() {

		   var theslider = jQuery('.tp-banner2');
		   revapi = theslider.revolution(
			{
				dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite
				delay:15000,
				startwidth:1170,
				startheight:500,

				touchenabled:"on",
				onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,				
				hideThumbs:200,

				fullWidth:"off",
				fullScreen:"off",
				fullScreenAlignForce:"on",
				fullScreenOffsetContainer: "",

				navigationType:"bullet", 				// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
														// "preview1",

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				stopLoop:"off",
				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic				
				shuffle:"off",

				spinner:"none",

			
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,
										
				parallax:"mouse",
				parallaxBgFreeze:"off",
				parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
										
				keyboardNavigation:"on",
			});
		});

		//Initialize Rev Slider Static Full Screen
		var revapi;
		jQuery(document).ready(function() {

		   var theslider = jQuery('.tp-banner-fullscreen');
		   revapi = theslider.revolution(
			{
				dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite
				delay:15000,
				startwidth:1170,
				startheight:500,

				touchenabled:"on",
				onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,				
				hideThumbs:200,

				fullWidth:"off",
				fullScreen:"on",
				fullScreenAlignForce:"on",
				fullScreenOffsetContainer: "#navoffset, #navoffset2",

				navigationType:"bullet", 				// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
														// "preview1",

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				stopLoop:"off",
				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic				
				shuffle:"off",

				spinner:"none",

			
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,
										
				parallax:"mouse",
				parallaxBgFreeze:"off",
				parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
										
				keyboardNavigation:"on",
			});
		});

		//Initialize Rev Slider custom height
		var revapi;
		jQuery(document).ready(function() {

		   var theslider = jQuery('.tp-banner-fixed');
		   revapi = theslider.revolution(
			{
				dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite
				delay:15000,
				startwidth:300,
				startheight:700,

				touchenabled:"on",
				onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,				
				hideThumbs:200,

				fullWidth:"off",
				fullScreen:"off",
				fullScreenAlignForce:"off",

				navigationType:"bullet", 				// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
														// "preview1",

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				stopLoop:"off",
				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic				
				shuffle:"off",

				spinner:"none",

			
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,
										
				parallax:"mouse",
				parallaxBgFreeze:"off",
				parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
										
				keyboardNavigation:"on",
			});
		});
// END

// #########################
// USEFUL GENERAL FUNCITONS
// #########################

	// GET WINDOW INNER HEIGHT
	function getInnerHeight(){
		var $ih = $(window).innerHeight();	
		$('.window-height').css({'height': $ih});
		$('.min-window-height').css({'min-height': $ih});
	}

	getInnerHeight();
	$(window).resize(function(){
		getInnerHeight();
	});

	//initialize tooltips
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});


	//Remove revolution slider's arrows 
	if ( $('body').hasClass('removearrows') ){
		setTimeout(function() {
			$('.tp-leftarrow').css({'display':'none'});
			$('.tp-rightarrow').css({'display':'none'});
			$('.tp-bullets').css({'display':'none'});
		}, 1000);
	}

	//Remove revolution slider's bullets 
	if ( $('body').hasClass('removebullets') ){
		setTimeout(function() {
			$('.tp-bullets').remove();
		}, 1000);
	}

	//Fixed SideMenu Script
	var $makethisfixed = $('#make-this-fixed');
	if ($makethisfixed.length){
		function fixedMenu(){
			var $iW = $(window).innerWidth();
			var $getScH = $('#sidecontent').innerHeight();
			var $getMTF = $makethisfixed.innerWidth();
			$makethisfixed.css({'width':$getMTF});

			if ($iW < 972){
				$makethisfixed.parent().css({'height': '','width':'' });
				$makethisfixed.parent().insertBefore('#sidecontent');
			}else{
				$makethisfixed.parent().css({'height': $getScH -20 + 'px' });
				if ($('.rightmenu').length){
					$makethisfixed.parent().insertAfter('#sidecontent');
				}
				if ($('.leftmenu').length){
					$makethisfixed.parent().insertBefore('#sidecontent');
				}
			}

			//If page is refreshed psition the menu
			setTimeout(function() {
				var $getMTF = $makethisfixed.innerWidth();
				var $MenuOffset = $('#footer').offset().top - (  100 + $getMTFh + 70) ;
				if($(window).scrollTop() > 240  && $(window).scrollTop() < $MenuOffset ){
					$makethisfixed.css({'position':'fixed','top':'80px'});

				}else if( $(window).scrollTop() < 240 ){
					$makethisfixed.css({'position':'','top':'','bottom':''});
				}
			}, 500);
		}
		fixedMenu();

		var $getMTFh = $makethisfixed.innerHeight();
		$(window).scroll(function(){
			var $iW = $(window).innerWidth();
			var $getMTF = $makethisfixed.innerWidth();
			
			// alert($getMTFh);
			if ($iW > 972){
				var $MenuOffset = $('#footer').offset().top - (  100 + $getMTFh + 70) ;
				if($(window).scrollTop() > 240  && $(window).scrollTop() < $MenuOffset ){
					$makethisfixed.css({'position':'fixed','top':'80px'});

				}else if( $(window).scrollTop() < 240 ){
					$makethisfixed.css({'position':'','top':'','bottom':''});

				}else if ( $(window).scrollTop() > $MenuOffset){
					$makethisfixed.css({'position':'absolute','top':'','bottom':'10px'});
				}
			}else{
				$makethisfixed.css({'position':'','top':'','bottom':''});
			}
		});
		$(window).resize(function(){
			setTimeout(function() {
				var $getMTF = $makethisfixed.parent().innerWidth();
				$makethisfixed.css({'width':$getMTF});
			}, 100);
			fixedMenu();
			
		});
	}

	//Style input browse button plugin
	(function(c){var b=function(d,e){this.options=e;this.$elementFilestyle=[];this.$element=c(d)};b.prototype={clear:function(){this.$element.val("");this.$elementFilestyle.find(":text").val("");this.$elementFilestyle.find(".badge").remove()},destroy:function(){this.$element.removeAttr("style").removeData("filestyle").val("");this.$elementFilestyle.remove()},disabled:function(d){if(d===true){if(!this.options.disabled){this.$element.attr("disabled","true");this.$elementFilestyle.find("label").attr("disabled","true");this.options.disabled=true}}else{if(d===false){if(this.options.disabled){this.$element.removeAttr("disabled");this.$elementFilestyle.find("label").removeAttr("disabled");this.options.disabled=false}}else{return this.options.disabled}}},buttonBefore:function(d){if(d===true){if(!this.options.buttonBefore){this.options.buttonBefore=true;if(this.options.input){this.$elementFilestyle.remove();this.constructor();this.pushNameFiles()}}}else{if(d===false){if(this.options.buttonBefore){this.options.buttonBefore=false;if(this.options.input){this.$elementFilestyle.remove();this.constructor();this.pushNameFiles()}}}else{return this.options.buttonBefore}}},icon:function(d){if(d===true){if(!this.options.icon){this.options.icon=true;this.$elementFilestyle.find("label").prepend(this.htmlIcon())}}else{if(d===false){if(this.options.icon){this.options.icon=false;this.$elementFilestyle.find(".glyphicon").remove()}}else{return this.options.icon}}},input:function(e){if(e===true){if(!this.options.input){this.options.input=true;if(this.options.buttonBefore){this.$elementFilestyle.append(this.htmlInput())}else{this.$elementFilestyle.prepend(this.htmlInput())}this.$elementFilestyle.find(".badge").remove();this.pushNameFiles();this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn")}}else{if(e===false){if(this.options.input){this.options.input=false;this.$elementFilestyle.find(":text").remove();var d=this.pushNameFiles();if(d.length>0&&this.options.badge){this.$elementFilestyle.find("label").append(' <span class="badge">'+d.length+"</span>")}this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")}}else{return this.options.input}}},size:function(d){if(d!==undefined){var f=this.$elementFilestyle.find("label"),e=this.$elementFilestyle.find("input");f.removeClass("btn-lg btn-sm");e.removeClass("input-lg input-sm");if(d!="nr"){f.addClass("btn-"+d);e.addClass("input-"+d)}}else{return this.options.size}},buttonText:function(d){if(d!==undefined){this.options.buttonText=d;this.$elementFilestyle.find("label span").html(this.options.buttonText)}else{return this.options.buttonText}},buttonName:function(d){if(d!==undefined){this.options.buttonName=d;this.$elementFilestyle.find("label").attr({"class":"btn "+this.options.buttonName})}else{return this.options.buttonName}},iconName:function(d){if(d!==undefined){this.$elementFilestyle.find(".glyphicon").attr({"class":".glyphicon "+this.options.iconName})}else{return this.options.iconName}},htmlIcon:function(){if(this.options.icon){return'<span class="glyphicon '+this.options.iconName+'"></span> '}else{return""}},htmlInput:function(){if(this.options.input){return'<input type="text" class="form-control formlarge3" disabled> '}else{return""}},pushNameFiles:function(){var d="",f=[];if(this.$element[0].files===undefined){f[0]={name:this.$element[0]&&this.$element[0].value}}else{f=this.$element[0].files}for(var e=0;e<f.length;e++){d+=f[e].name.split("\\").pop()+", "}if(d!==""){this.$elementFilestyle.find(":text").val(d.replace(/\, $/g,""))}else{this.$elementFilestyle.find(":text").val("")}return f},constructor:function(){var h=this,f="",g=h.$element.attr("id"),d=[],i="",e;if(g===""||!g){g="filestyle-"+c(".bootstrap-filestyle").length;h.$element.attr({id:g})}i='<span class="group-span-filestyle '+(h.options.input?"input-group-btn":"")+'"><label for="'+g+'" class="btn '+h.options.buttonName+" "+(h.options.size=="nr"?"":"btn-"+h.options.size)+'" '+(h.options.disabled?'disabled="true"':"")+">"+h.htmlIcon()+h.options.buttonText+"</label></span>";f=h.options.buttonBefore?i+h.htmlInput():h.htmlInput()+i;h.$elementFilestyle=c('<div class="bootstrap-filestyle input-group">'+f+"</div>");h.$elementFilestyle.find(".group-span-filestyle").attr("tabindex","0").keypress(function(j){if(j.keyCode===13||j.charCode===32){h.$elementFilestyle.find("label").click();return false}});h.$element.css({position:"absolute",clip:"rect(0px 0px 0px 0px)"}).attr("tabindex","-1").after(h.$elementFilestyle);if(h.options.disabled){h.$element.attr("disabled","true")}h.$element.change(function(){var j=h.pushNameFiles();if(h.options.input==false&&h.options.badge){if(h.$elementFilestyle.find(".badge").length==0){h.$elementFilestyle.find("label").append(' <span class="badge">'+j.length+"</span>")}else{if(j.length==0){h.$elementFilestyle.find(".badge").remove()}else{h.$elementFilestyle.find(".badge").html(j.length)}}}else{h.$elementFilestyle.find(".badge").remove()}});if(window.navigator.userAgent.search(/firefox/i)>-1){h.$elementFilestyle.find("label").click(function(){h.$element.click();return false})}}};var a=c.fn.filestyle;c.fn.filestyle=function(e,d){var f="",g=this.each(function(){if(c(this).attr("type")==="file"){var j=c(this),h=j.data("filestyle"),i=c.extend({},c.fn.filestyle.defaults,e,typeof e==="object"&&e);if(!h){j.data("filestyle",(h=new b(this,i)));h.constructor()}if(typeof e==="string"){f=h[e](d)}}});if(typeof f!==undefined){return f}else{return g}};c.fn.filestyle.defaults={buttonText:"Choose file",iconName:"glyphicon-folder-open",buttonName:"btnmaincolor",size:"nr",input:true,badge:true,icon:true,buttonBefore:false,disabled:false};c.fn.filestyle.noConflict=function(){c.fn.filestyle=a;return this};c(function(){c(".filestyle").each(function(){var e=c(this),d={input:e.attr("data-input")==="false"?false:true,icon:e.attr("data-icon")==="false"?false:true,buttonBefore:e.attr("data-buttonBefore")==="true"?true:false,disabled:e.attr("data-disabled")==="true"?true:false,size:e.attr("data-size"),buttonText:e.attr("data-buttonText"),buttonName:e.attr("data-buttonName"),iconName:e.attr("data-iconName"),badge:e.attr("data-badge")==="false"?false:true};e.filestyle(d)})})})(window.jQuery);

	//SHOP PAGES
	$(document).ready(function(){
	  // Lift card and show stats on Mouseover

	  $(".product-card").on({
	      mouseenter: function () {
	          $(this).addClass('animate');
	          $(this).find('div.carouselNext, div.carouselPrev').addClass('visible');   
	      },
	      mouseleave: function () {
	          $(this).removeClass('animate');     
	          $(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
	      }
	  });
	  
	  // Flip card to the back side
	  $('.view_details').on("click",function() {  
		    $(this).parent().next('.product-back').find('div.carouselNext, div.carouselPrev').removeClass('visible');
		    $(this).parent().parent().parent().find('.product-card').addClass('flip-10');//?
		    var that = this;
		    setTimeout(function(){
		      $(that).parent().parent().parent().find('.product-card').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
		        $(that).parent().parent().find('.product-front, .product-front div.shadow').hide();      
		      });
		    }, 50);
		    
		    setTimeout(function(){
		     $(that).parent().parent().find('.product-card').removeClass('flip90').addClass('flip190');
		      $(that).parent().parent().find('.product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
		      
		      setTimeout(function(){        
		        $(that).parent().parent().parent().find('.product-card').removeClass('flip190').addClass('flip180').find('div.shadow').hide();            
		        setTimeout(function(){
		          $(that).parent().parent().parent().find('.product-card').css('transition', '100ms ease-out');     
		           $(that).parent().parent().find('.product-back').find('.cx, .cy').addClass('s1');
		          setTimeout(function(){$(that).parent().parent().find('.product-back').find('.cx, .cy').addClass('s2');}, 100);
		          setTimeout(function(){$(that).parent().parent().find('.product-back').find('.cx, .cy').addClass('s3');}, 200);       
		          $(that).parent().parent().find('.product-back').find('div.carouselNext, div.carouselPrev').addClass('visible');        
		        }, 100);
		      }, 100);      
		    }, 150);      
	  });     
	  
	  // Flip card back to the front side
	  $('.flip-back').on("click",function() {  
	    
		    $(this).parent().parent().parent().find('.product-card').removeClass('flip180').addClass('flip190');
		    var that = this;
		    setTimeout(function(){
		      $(that).parent().parent().parent().find('.product-card').removeClass('flip190').addClass('flip90');
		  
		      $(that).parent().parent().find('.product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
		        $(that).parent().parent().find('.product-back, .product-back div.shadow').hide();
		        $(that).parent().parent().find('.product-front, .product-front div.shadow').show();
		      });
		    }, 50);
		    
		    setTimeout(function(){
		      $(that).parent().parent().parent().find('.product-card').removeClass('flip90').addClass('flip-10');
		      $(that).parent().parent().find('.product-front div.shadow').show().fadeTo( 100 , 0);
		      setTimeout(function(){            
		        $(that).parent().parent().find('.product-front div.shadow').hide();
		        $(that).parent().parent().parent().find('.product-card').removeClass('flip-10').css('transition', '100ms ease-out');    
		        $(that).parent().find('.product-back').find('.cx, .cy').removeClass('s1 s2 s3');      
		      }, 100);      
		    }, 150);      
	  }); 

	  //Count carusel
	  var $countCarousel = $('div.carousel').length;

	  //For each dropdown move it to sidemenu
	  for (i = 0; i < $countCarousel; i++) { 
	  	  
	  	  //Add unique id to carousel
	  	  $('.carousel').eq([i]).addClass('id'+ [i+1]);

	  	  //Added by DaJy
	  	  var getWcarousel = $('.carousel').parent().innerWidth();
	  	  $('.carousel img').css({'width': getWcarousel +'px'});
	  	  $('.carousel li').css({'width': getWcarousel +'px'});
	  	  //end

		  /* ----  Image Gallery Carousel   ---- */
		  var carousel = $('.carousel ul');
		  var carouselSlideWidth = getWcarousel;
		  var carouselWidth = 0;  
		  var isAnimating = false;
		  
		  // building the width of the casousel
		  $('.carousel.id'+[i+1]+' li').each(function(){
		    carouselWidth += carouselSlideWidth;
		  });
		  $(carousel).css('width', carouselWidth);

		  // Load Next Image
		  $('div.carouselNext').on('click', function(){

		    var currentLeft = Math.abs(parseInt($(this).parent().parent().parent().find(carousel).css("left")));
		    var newLeft = currentLeft + carouselSlideWidth;
		    if(newLeft == carouselWidth || isAnimating === true){return;}
		    $(this).parent().parent().parent().find('.carousel ul').css({'left': "-" + newLeft + "px",
		                 "transition": "300ms ease-out"
		               });
		    isAnimating = true;
		    setTimeout(function(){isAnimating = false;}, 300);      
		  });
		  
		  // Load Previous Image
		  $('div.carouselPrev').on('click', function(){

		    var currentLeft = Math.abs(parseInt($(this).parent().parent().parent().find(carousel).css("left")));
		    var newLeft = currentLeft - carouselSlideWidth;
		    if(newLeft < 0  || isAnimating === true){return;}
		    $(this).parent().parent().parent().find('.carousel ul').css({'left': "-" + newLeft + "px",
		                 "transition": "300ms ease-out"
		               });
		      isAnimating = true;
		    setTimeout(function(){isAnimating = false;}, 300);      
		  });
 	  }
	});
	//END OF SHOP PAGES

	//plugin bootstrap minus and plus
	//http://jsfiddle.net/laelitenetwork/puJ6G/
	$('.btn-number').on("click",function(e) {
	    e.preventDefault();
	    
	    fieldName = $(this).attr('data-field');
	    type      = $(this).attr('data-type');
	    var input = $("input[name='"+fieldName+"']");
	    var currentVal = parseInt(input.val());
	    if (!isNaN(currentVal)) {
	        if(type == 'minus') {
	            
	            if(currentVal > input.attr('min')) {
	                input.val(currentVal - 1).change();
	            } 
	            if(parseInt(input.val()) == input.attr('min')) {
	                $(this).attr('disabled', true);
	            }

	        } else if(type == 'plus') {

	            if(currentVal < input.attr('max')) {
	                input.val(currentVal + 1).change();
	            }
	            if(parseInt(input.val()) == input.attr('max')) {
	                $(this).attr('disabled', true);
	            }

	        }
	    } else {
	        input.val(0);
	    }
	});
	$('.input-number').focusin(function(){
	   $(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {
	    
	    minValue =  parseInt($(this).attr('min'));
	    maxValue =  parseInt($(this).attr('max'));
	    valueCurrent = parseInt($(this).val());
	    
	    name = $(this).attr('name');
	    if(valueCurrent >= minValue) {
	        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
	    } else {
	        alert('Sorry, the minimum value was reached');
	        $(this).val($(this).data('oldValue'));
	    }
	    if(valueCurrent <= maxValue) {
	        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
	    } else {
	        alert('Sorry, the maximum value was reached');
	        $(this).val($(this).data('oldValue'));
	    }
	});
	$(".input-number").keydown(function (e) {
	        // Allow: backspace, delete, tab, escape, enter and .
	        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
	             // Allow: Ctrl+A
	            (e.keyCode == 65 && e.ctrlKey === true) || 
	             // Allow: home, end, left, right
	            (e.keyCode >= 35 && e.keyCode <= 39)) {
	                 // let it happen, don't do anything
	                 return;
	        }
	        // Ensure that it is a number and stop the keypress
	        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	            e.preventDefault();
	        }
	});

	//Get window sizes
	var $iw = $(window).innerWidth();
	var $ih = $(window).innerHeight();	

	//Rearange dropdown col4fix
	if ( $iw > 750 ){
		$(".findcol4").addClass('col4fix');
		$(".findcol3").addClass('col3fix');
		$(".findcol2").addClass('col2fix');
	}
	else{
		$(".findcol4").removeClass('col4fix');
		$(".findcol3").removeClass('col3fix');
		$(".findcol2").removeClass('col2fix');
	}
	$(window).resize(function(){
		var $iw = $(window).innerWidth();
		var $ih = $(window).innerHeight();	
		if ( $iw > 750 ){
			$(".findcol4").addClass('col4fix');
			$(".findcol3").addClass('col3fix');
			$(".findcol2").addClass('col2fix');
		}
		else{
			$(".findcol4").removeClass('col4fix');
			$(".findcol3").removeClass('col3fix');
			$(".findcol2").removeClass('col2fix');
		}		
	});

	//INITIALIZE PAGE 8 STROKE ANIMATION
	function initStroke(){
		if ( $('body').hasClass('init-stroke') ){
		    // ANIMATE BORDER LINES
			setTimeout(function() {
				$('.leftline').stop().animate({'width':'100%'},400);
			}, 2000);
			setTimeout(function() {
				$('.topline').stop().animate({'height':'100%'},300);
			}, 2400);
			setTimeout(function() {
				$('.rightline').stop().animate({'width':'100%'},400);
			}, 2700);
			setTimeout(function() {
				$('.bottomline').stop().animate({'height':'100%'},300);
			}, 3100);
		}
	}

	// FOOTER APEARSS BEHIND CONTENT EFFECT
	if ( $('body').hasClass('init-fixedfooter') ){
	    
		$('.footer').css({'opacity':'0'});
		function showFooter(){
			var $FooterBottomOffset = $('.footer').innerHeight();
			var $iW = $(window).innerWidth();
			$('.footer').addClass('fixed');
			$('.footer-bottom-offset').css({'margin-bottom': + $FooterBottomOffset + 'px' })
			setTimeout(function() {
				$('.footer').animate({'opacity':'1'});
			}, 1000);
			if($iW < 992){
				$('.footer').removeClass('fixed');
				$('.footer-bottom-offset').css({'margin-bottom': + 0 + 'px' })
			}
		}
		showFooter();
		$(window).smartresize(function(){
			showFooter();
		});
	}
// END

// ####################
// Initialize mixITup
// ####################
	if( $('#mixItUp').length ){
		$(function(){
		    $('#mixItUp').mixItUp({
	    		animation: {
	    			duration: 400,
	    			effects: 'fade translateZ(-360px) stagger(34ms)',
	    			easing: 'ease'
	    		}
		    });  
		});
	}
// END

// ######################################
// jQuery Zoom (for shop's product page)
// ######################################
	
	if( $('.zoomthumbs').length ){
		$(document).ready(function(){
			$('#ex1').zoom();
			$('#ex2').zoom({ on:'grab' });
			$('#ex3').zoom({ on:'click' });			 
			$('#ex4').zoom({ on:'toggle' });


			$('ul.zoomthumbs li img').on("click",function() {
				$getZoomUrl = $(this).attr('src');
				$(this).parent().parent().parent().parent().find('.zoom img').attr('src', $getZoomUrl);

				setTimeout(function() {
					$('#ex1 img.zoomImg').css({'width':'auto','height':'auto'});
				}, 100);
			});
		});
	}
// END

// ####################
// CAROUSEL INITIALIZE
// ####################
	$(window).load(function() {
		
		/*	CarouFredSel: a circular, responsive jQuery carousel.
			Configuration created by the "Configuration Robot"
			at caroufredsel.dev7studios.com
		*/
		// Carousel Devices
		if( $("#foo3").length ){
			$("#foo3").carouFredSel({

				responsive: true,
				auto: true,
				direction: "left",			
				width: '100%',
				//height: 150,
				items: {
					width: 230,
					height: "variable",
					visible: {
						min: 1,
						max: 1
					}
				},
				scroll: {
					//easing: "elastic", // swing, linear, quadratic, cubic, elastic
					fx : "scroll", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
					duration: 1000,
					items:1						
				},
				prev: {
					button: "#prev3",
					key: "left"
				},
				next: {
					button: "#next3",
					key: "right"
				},
				// auto: {
				// 	progress: ".timer3"
				// },
				pagination: ".pager3",	
				swipe: true,
				//mousewheel: true
			});
		}
		
		// Carousel Partners Logos
		if( $("#foo4").length ){
			$("#foo4").carouFredSel({
				responsive: true,
				auto: true,
				width: '100%',
				//height: 150,
				items: {
					width: 230,
					height: "variable",
					visible: {
						min: 1,
						max: 6
					}
				},
				scroll: {
					easing: "elastic", // swing, linear, quadratic, cubic, elastic
					//fx : "fade", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
					duration: 1000,
					items:1						
				},
				prev: {
					button: "#prev4",
					key: "left"
				},
				next: {
					button: "#next4",
					key: "right"
				},
				// auto: {
				// 	progress: ".timer4"
				// },
				pagination: ".pager4",	
				swipe: true,
				//mousewheel: true
			});
		}

		// Carousel portfolio with x amout of items
		if( $("#foo5.max2").length ){
			$("#foo5.max2").carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				//height: 150,
				items: {
					width: 230,
					height: "variable",
					visible: {
						min: 1,
						max: 2
					}
				},
				scroll: {
					easing: "swing", // swing, linear, quadratic, cubic, elastic
					//fx : "fade", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
					duration: 1000,
					items:1						
				},
				prev: {
					button: "#prev5",
					key: "left"
				},
				next: {
					button: "#next5",
					key: "right"
				},
				//auto: {
				//	progress: ".timer5"
				//},
				pagination: ".pager5",	
				swipe: true,
				//mousewheel: true
			});	
		}

		// Carousel portfolio with x amout of items
		if( $("#foo5.max3").length ){
			$("#foo5.max3").carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				//height: 150,
				items: {
					width: 230,
					height: "variable",
					visible: {
						min: 1,
						max: 3
					}
				},
				scroll: {
					easing: "swing", // swing, linear, quadratic, cubic, elastic
					//fx : "fade", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
					duration: 1000,
					items:1						
				},
				prev: {
					button: "#prev5",
					key: "left"
				},
				next: {
					button: "#next5",
					key: "right"
				},
				//auto: {
				//	progress: ".timer5"
				//},
				pagination: ".pager5",	
				swipe: true,
				//mousewheel: true
			});	
		}

		if( $("#foo5.max4").length ){
			$("#foo5.max4").carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				//height: 150,
				items: {
					width: 230,
					height: "variable",
					visible: {
						min: 1,
						max: 4
					}
				},
				scroll: {
					easing: "swing", // swing, linear, quadratic, cubic, elastic
					//fx : "fade", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
					duration: 1000,
					items:1						
				},
				prev: {
					button: "#prev5",
					key: "left"
				},
				next: {
					button: "#next5",
					key: "right"
				},
				//auto: {
				//	progress: ".timer5"
				//},
				pagination: ".pager5",	
				swipe: true,
				//mousewheel: true
			});	
		}

		if( $("#foo5.max5").length ){
			$("#foo5.max5").carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				//height: 150,
				items: {
					width: 230,
					height: "variable",
					visible: {
						min: 1,
						max: 5
					}
				},
				scroll: {
					easing: "swing", // swing, linear, quadratic, cubic, elastic
					//fx : "fade", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
					duration: 1000,
					items:1						
				},
				prev: {
					button: "#prev5",
					key: "left"
				},
				next: {
					button: "#next5",
					key: "right"
				},
				//auto: {
				//	progress: ".timer5"
				//},
				pagination: ".pager5",	
				swipe: true,
				//mousewheel: true
			});
		}	

		if( $("#foo5.max6").length ){
			$("#foo5.max6").carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				//height: 150,
				items: {
					width: 230,
					height: "variable",
					visible: {
						min: 1,
						max: 6
					}
				},
				scroll: {
					easing: "swing", // swing, linear, quadratic, cubic, elastic
					//fx : "fade", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
					duration: 1000,
					items:1						
				},
				prev: {
					button: "#prev5",
					key: "left"
				},
				next: {
					button: "#next5",
					key: "right"
				},
				//auto: {
				//	progress: ".timer5"
				//},
				pagination: ".pager5",	
				swipe: true,
				//mousewheel: true
			});
		}

		// Testimonials
		if( $("#testimonials").length ){
			$("#testimonials").carouFredSel({
				responsive: true,
				auto: true,
				width: '100%',
				//height: 150,
				items: {
					width: 230,
					height: "variable",
					visible: {
						min: 1,
						max: 1
					}
				},
				scroll: {
					easing: "linear", // swing, linear, quadratic, cubic, elastic
					fx : "fade", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
					duration: 1000,
					items:1						
				},
				prev: {
					button: "#test-prev",
					key: "left"
				},
				next: {
					button: "#test-next",
					key: "right"
				},
				// auto: {
				// 	progress: ".test-timer"
				// },
				pagination: ".test-pager",	
				swipe: true,
				//mousewheel: true
			});
		}
	});
// END

// ###################################
// NAVIGATION DROPDOWN + Mobile fixes
// ###################################
	// Set dropdown colors by adding class to body
	if ( $('body').hasClass('dark-menu') ){
		$('.mainmenu').removeClass('dark-menu','white-menu').addClass('dark-menu');
	}else if( $('body').hasClass('white-menu') ){
		$('.mainmenu').removeClass('dark-menu','white-menu').addClass('white-menu');
	}
	//end

	//Check the value of dropdown color and remember it
	var $dropColor = '';
	if ( $('.mainmenu').hasClass('dark-menu') ){
		$dropColor = "dark-menu";
	}
	else{
		$dropColor = "white-menu";
	}
	//Navigation Dropdown Effect only if screensize > 750px
	function remHover(){
		var $iw = $(window).innerWidth();
		var $ih = $(window).innerHeight();

		var $navbarDropdown = $('.navbar .dropdown');	
		var $mainmenu = $('.mainmenu');	

		if ( $iw > 750 ){
			$navbarDropdown.unbind();

			$navbarDropdown.on({
			    mouseenter: function () {
			        $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(300);
			    },
			    mouseleave: function () {
			        $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(300);
			    }
			});

			$mainmenu.removeClass('white-menu dark-menu').addClass($dropColor);
			
			
			// this makes the menu mobile if you add nav2
			if($('.navbar-nav2').length){
				$navbarDropdown.unbind();
				$navbarDropdown.on("click",function() {
				    $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(0);
				});
				$mainmenu.removeClass('white-menu dark-menu').addClass('white-menu');
			}
		}
		else{
			$navbarDropdown.unbind();
			$navbarDropdown.on("click",function() {
			    $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(0);
			});
			$mainmenu.removeClass('white-menu dark-menu').addClass('white-menu');

		}
	}
	remHover();
	
	$(window).resize(function(){
		remHover();
		//if left open remove than close dropdowns on resize
		$('li.dropdown').removeClass('open');
		$('.dropdown-menu').css({'display':'none'});
	});

	$('a.opendots').on("click",function() {
		 $('div.shopsearch').removeClass('in');
		 $('div.shopsearch').slideToggle();

	});
// END

// #####################################
// NAVIGATION ANIMATION + Hidenav class
// #####################################
	$(document).ready(function(){
		$init = 1;
		$initt = 1;
		$exonce = 0;
		$(window).scroll(function(){

			//Retrieve window dimensions
			var $iw = $(window).innerWidth();
			var $ih = $(window).innerHeight();			
			
			var $logoWhite = $('div.logo img.white');
			var $logoDark = $('div.logo img.dark');
			var $navi = $('.navigation');

			//Animate nav when scrolling function
			function navAnimation(){
				//If window scroll top is bigger than 800 we animate the navigation to be always on top
				if($(window).scrollTop() > 800  ){
					if( $init == 1 ){

						$navi.css({'position': 'fixed','margin-top': -160 +'px'});
						$navi.stop().animate({'margin-top': 0 +'px' }, 500);
						$init = 0;
					}
					else{
						if( $initt == 1 ){
							//Adds the white background
							$navi.addClass('navbg');



							//Adds dark logo
							$logoWhite.addClass('dark').removeClass('white');

							//If navigation is darkchealkk make logo white
							if( $navi.hasClass('darkchealk') ){
								$logoDark.addClass('white').removeClass('dark');
							}
							$initt = 0;

						}

					}
				}
				
				//If window scroll top is NOT bigger than 800
				else {
					//This hides the small fixed nav and executes only once
					if( $init == 0 ){

						$navi.stop().animate({'margin-top': -160 +'px'}, 500);

						$init = 1;
						$initt = 1;
						$exonce = 1;

						//Adds white logo
						$logoDark.addClass('white').removeClass('dark');

						//Remove the background
						setTimeout(function() {
							$navi.removeClass('navbg');
						}, 100);
						// $(window).trigger('resize');
					}

				}

				if( $(window).scrollTop() < 160 ){
					if( $exonce == 1 ){
						$navi.stop();
						//Here we check the nav margintop depending on the screen
						if( $iw < 970  ){
							$navi.css({'position': 'absolute','margin-top': 0 +'px'});
						}
						if( $iw > 970 ){
							$navi.css({'position': 'absolute','margin-top': 60 +'px'});
						}
						$exonce = 0;
					}
				}
			}

			
			//if navigation has data-nav attribute "noanim" then do not animate
			var $getDataNavVar = $navi.attr('data-nav');
			if($getDataNavVar != "noanim"){
				navAnimation();
			}

		});
		

		//In case you refresh the page at a random scrolltop,
		//this positions the navigation where it should.
		function refreshNavPos(){
			setTimeout(function() {
				if($(window).scrollTop() > 800  ){
					$init = 0;
					if( $init == 1 ){
						$('.navigation').css({'position': 'fixed','margin-top': -160 +'px' });
						$('.navigation').stop().animate({'margin-top': 0 +'px'}, 500);
						$init = 0;
					}
					else{
						$('.navigation').css({'position': 'fixed'});
						$('.navigation').stop().animate({'margin-top': 0 +'px'}, 500);

						//Adds the white background
						$('.navigation').addClass('navbg');
						
					}
				}
			}, 10);
		}
		//Apply refreshNavPos on all pages except the ones with burger icon menu
		if($(".navbar-nav2").length == 0){
			refreshNavPos();
		}

		//if navigation has data-pos attribute "static" then change navigation position to static
		var $getDataPosVar  = $('.navigation').attr('data-pos');
		if($getDataPosVar == "static"){
			$('.navigation').css({'position':'static'});
		}

		//////////////////////////////////////////////////////////////////
		// Hides the navigation effect (for pages with full screen slider)
		//////////////////////////////////////////////////////////////////
		//Only for desktops | to enable add class "hidenav" to your <body>

		//If  device is NOT touchscreen do this.
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) != true ) {

			//Enable/disable AUTO-HIDE-NAVIGATION function. ( Add/remove class "hidenav" to your <body> )
			if( $('body').hasClass('hidenav')){

				$init2 = 1;
				var $navi = $('.navigation');
				$navi.css({'opacity': 0 });
				
				$(window).scroll(function(){
					//If we start scrolling we show the navigation
					if($(window).scrollTop() > 800 && $init2 == 1 ){
						$navi.css({'opacity': 1 });
						$init2 = 0;
					}
					if($(window).scrollTop() < 800  && $init2 == 0 ){
						//If Scrolltop <  800 we hide the navigation opacity
						$navi.css({'opacity': 0 });
						$init2 = 1;
					}
				});

				//HIDE/SHOW Navigation on hover
				$( ".tp-banner-container" )
					.mouseenter(function() {
						if ( $(window).scrollTop() < 150 ) {
							$('.navigation').stop().animate({'opacity': 0 }, 300);
						}
					})
					.mouseleave(function() {
						if ( $(window).scrollTop() < 150 ) {
							$('.navigation').stop().animate({'opacity': 0 }, 700);
						};
				});	
				//Navigation hover always visible
				$( ".navigation" )
					.mouseenter(function() {
						$('.navigation').stop().animate({'opacity': 1 }, 300);
						clearTimeout(timeout);
					})
					.mouseleave(function() {
						if($(window).scrollTop() < 800){
							$('.navigation').stop().animate({'opacity': 0 }, 700);	
						};
				});	
				
				//Navigation shows up when i move the mouse over the slider
				var timeout = null;
				$( ".tp-banner-container" ).on('mousemove', function() {
				    clearTimeout(timeout);
				    $('.navigation').stop().animate({'opacity': 1 }, 300);	
				   
				   	
				    timeout = setTimeout(function() {
				    	if($(window).scrollTop() < 800){
					    	$('.navigation').stop().animate({'opacity': 0 }, 300);	
					    }
					}, 2000);
					

				});

			}
		}
		//////////////////////////////////////////////////////////////

		
		// Calculate slider top padding 
		// witch is equal with the height of the navigation menu
		var $iw = $(window).innerWidth();
		var $navih = $('.navigation').innerHeight();
		if( $iw < 970  ){
			$('.slider').css({'padding-top': $navih +'px'});
		}
		
		// ReCalculate on device toggle click
		var $fixbr = 0;	
		$('.navbar-toggle').on("click",function() {
			setTimeout(function (){
				var $iw = $(window).innerWidth();
				var $navih = $('.navigation').innerHeight();
				if( $iw < 970  ){
					$('.slider').stop().animate({'padding-top': $navih +'px'});
				}
			}, 400);
			
			//FixBR
			if ( $fixbr != 1 ) {
				$('.fixbr').removeClass('none');
				$fixbr = 1;	
			}
			else{
				$('.fixbr').addClass('none');
				$fixbr = 0;	
			}
		});
	
		if( $iw < 970  ){
			$('div.logo img.white').addClass('dark').removeClass('white');

			//If navigation is darkchealk make logo white
			if( $('.navigation').hasClass('darkchealk') ){
				$('div.logo img').removeClass('white dark').addClass('white');
			}
		}
		
		if( $iw > 970  ){
			$('div.logo img.dark').addClass('white').removeClass('dark');
		}

		// On window resize calculate the height and make animations
		$(window).resize(function(){
		
			var $iw = $(window).innerWidth();
			var $ih = $(window).innerHeight();	
			
			var $gscTop = $(window).scrollTop();

			var $navih = $('.navigation').innerHeight();
			
			if( $iw < 970  ){
				$('.navigation').stop().animate({'position': 'fixed','margin-top': 0 +'px'});
				$('.slider').stop().animate({'padding-top': $navih +'px'});
			}
			
			if( $iw > 970  ){
				if( $gscTop < $ih){
					$('.navigation').stop().animate({'position': 'fixed','margin-top': 60 +'px'});
				}
				$('.slider').stop().animate({'padding-top': 0 +'px'});
			}
		});
	});
// END

// #######
// SEARCH
// #######
	$(document).ready(function(){
		
		var $iw = $(window).innerWidth();
		var $ih = $(window).innerHeight();	

		/*Open search*/
		$('.srclick').on("click",function() {
			$('.fwsearch').css({'display':'block'});
			$('.fwsearch').animate({'opacity':1},500);
			setTimeout(function (){
				$('body').css({'overflow':'hidden'});
			}, 500);
			
		});

		
		/*Close search*/
		$('.closesearch').on("click",function() {
			$('.fwsearch').animate({'opacity':0});
			$('body').css({'overflow':'visible'});			
			setTimeout(function (){
				$('.fwsearch').css({'display':'none'});
			}, 500);

		});
		
		$('.csearch').css({'margin-top': $ih/2-86 +"px"});
		

		
		//Keypress ESC cancel search
		$(document).keyup(function(e) {
		    if(e.which == 27) {
		        
				/*Close search*/		
				$('.fwsearch').animate({'opacity':0});
				$('body').css({'overflow':'visible'});			
				setTimeout(function (){
					$('.fwsearch').css({'display':'none'});
				}, 500);
				
		    }
		});
		

		//Check if the cart is empty
		$('.close').on("click",function() {
			
			$('.itmhide').addClass('none');

			setTimeout(function (){
				
				if ( $('ul.cart li:visible').length <= 1 ) {
					$('.noitems').removeClass('none');
					$('.total').addClass('none');		
					
					$('li.basket a span.active').removeClass('active');
					
					$('li.basket a span').text(function(i, oldText) {
						return oldText === '1' ? '0' : oldText;
					});
			
				}
				else{
					//alert('false');
				}
			}, 10);
			
		});
	});	
// END

// #####################################
// PORTFOLIO SQUARES GALLERY FULL WIDTH
// #####################################
	$(document).ready(function($){

		function setHeight() {
			//Get the width of list
			var $Hpgal = $('ul.pgal li').innerWidth();
			//Set the height of list
			$('ul.pgal li').css({'height': $Hpgal });
		}
		setHeight();

		$(window).resize(function(){
			setHeight();
		});
	});
// END

// ############
// BACK TO TOP
// ############
	// fade in #back-top
	$(function () {
		// Back to top
		$("#back-top").hide();
		var $backToTop = $('#back-top');
		var triggerOnce = true;
		$(window).scroll(function (){
			if ($(this).scrollTop() > 700) {
				if ( triggerOnce == true ) {
					$backToTop.fadeIn();
					triggerOnce = false;
				}
			} else {
				if ( triggerOnce == false ) {
					$backToTop.fadeOut();
					triggerOnce = true;
				}
			}
		});

		// Back to top 2
		$("#back-top2").hide();
		var $backToTop2 = $('#back-top2');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 700) {
				$backToTop2.fadeIn();
			} else {
				$backToTop2.fadeOut();
			}
		});

		$('#back-top2 a').on("click",function() {
			$('body,html').animate(
				{	scrollTop: 0 },
				{ 
				  duration: 2000, 
				  easing: 'easeInOutExpo'
				}
			);
			return false;
		});

		// scroll body to 0px on click
		$('#gotop-round a').on("click",function() {
			$('body,html').animate(
				{	scrollTop: 0 },
				{ 
				  duration: 2000, 
				  easing: 'easeInOutExpo'
				}
			);
			return false;
		});

		// scroll body to 0px on click
		$('#back-top a').on("click",function() {
			$('body,html').animate(
				{	scrollTop: 0 },
				{ 
				  duration: 2000, 
				  easing: 'easeInOutExpo'
				}
			);
			return false;
		});

		// scroll body to 0px on click
		$('#goto a').on("click",function() {
			$('body,html').animate({
				scrollTop: 600
			}, 500);
			return false;
		});

		$(".scroll").on("click",function(event) {
			event.preventDefault();
			$('html,body').animate(
				{	scrollTop: $(this.hash).offset().top - 80 },
				{ 
				  duration: 1000, 
				  easing: 'easeInOutExpo'
				}
			);
			return false;
		});
	});
// END

// ###########################
// TEAM MOUSE OVER ANIMATIONS
// ###########################
	//TRIGGER SKILLS
	$(document).ready(function() {

		$ani = 1; // animate only once

		function skillAnimation(){
			$('.pbar1 , .pbar2 ,.pbar3 , .pbar4').css({'width':0 +'px','padding':"9px 0px"});
			setTimeout(function() {	
				$('.pbar1').stop().animate({'width':90 +'%'  ,'padding':"9px 10px"}, 1000);
			},0);
			setTimeout(function() {	
				$('.pbar2').stop().animate({'width':100 +'%' ,'padding':"9px 10px"}, 1000);
			},200);
			setTimeout(function() {	
				$('.pbar3').stop().animate({'width':85 +'%'  ,'padding':"9px 10px"}, 1000);
			},400);
			setTimeout(function() {	
				$('.pbar4').stop().animate({'width':95 +'%'  ,'padding':"9px 10px"}, 1000);
			},600);
		}

		var $cacheSkill = $('.enableanimation');
		$(window).scroll(function(){

			var $iw = $(window).innerWidth();
			var $ih = $(window).innerHeight();	
			
			//Trigger this only if content exists
			if( $cacheSkill.length ) {
				var $scrollTop = $(window).scrollTop(); //distance scrolled
		 		var $elementOffset = $cacheSkill.offset(); //distance from element to top of page
		 		var $elementOffsetTop = $elementOffset.top; //distance from element to top of page

		 		var $distance = ( $elementOffsetTop - $scrollTop ); //distance from element to top of browser
				
				if( $distance < $ih && $ani == 1 ){ //when element is seen then animate
					skillAnimation();
					$ani = 0;
				}
			}
		});
	});
	//TEAM MOUSE OVER EFFECT
	$(document).ready(function(){
		$teamWidth = $('img.dajy').innerWidth();
		$teamHeight = $('img.dajy').innerWidth();
		
		$('.teamover').css({'width': $teamWidth +'px','height': $teamHeight +'px','top': 0 +'px','opacity':0});
		
		$( ".teampicture" )
			.mouseenter(function() {
				$(this).find('.teamover').stop().animate({'top': 0 +'px','opacity':0.15}, 500);
				$(this).find('p').stop().animate({'bottom': 0 +'px'}, 500);

			})
			.mouseleave(function() {
				$(this).find('.teamover').stop().animate({'top': 0 +'px','opacity':0}, 500);
				$(this).find('p').stop().animate({'bottom': -50 +'px'}, 500);
			});	

			$(window).smartresize(function(){
				$teamWidth = $('img.dajy').innerWidth();
				$teamHeight = $('img.dajy').innerWidth();
				$('.teamover').css({'width': $teamWidth +'px','height': $teamHeight +'px','top': 0 +'px','opacity':0});
			});
	});
	//PORTFOLIO OVER ANIMATIONS
	$(window).load(function() {
		$pfoverWidth = $('img.wdhover').width();
		$pfoverHeight = $('img.wdhover').height();
		$captionHeight = $('.caption').innerHeight();
		$( ".pfover" ).css({'height': $pfoverHeight +'px','overlfow':'hidden'});

		$('.circlebig2').css({'left': $pfoverWidth/2-17 +'px','top': $pfoverHeight/2-17 +'px','width':34+'px','height':34+'px','padding':7+'px','opacity':0});
		$('img.wdhover').css({'opacity': 1 });
		$('div.caption').css({'bottom': - $captionHeight  });

		$( ".pfover" )
			.mouseenter(function() {
				$(this).find('.circlebig2').stop().animate({'left': $pfoverWidth/2-34 +'px','top': $pfoverHeight/2-34 +'px','width':68+'px','height':68+'px','padding':23+'px','opacity':0.8}, 1);
				$(this).find('img.wdhover').stop().animate({'opacity': 1 }, 1);
				$(this).find('div.caption').stop().animate({'bottom': 0 }, 300);
			})
			.mouseleave(function() {
				$(this).find('.circlebig2').stop().animate({'left': $pfoverWidth/2-17 +'px','top': $pfoverHeight/2-17 +'px','width':34+'px','height':34+'px','padding':7+'px','opacity':0}, 1);
				$(this).find('img.wdhover').stop().animate({'opacity': 1}, 1);
				$(this).find('div.caption').stop().animate({'bottom': - $captionHeight }, 300);		
			});	
	});
	$(window).resize(function(){
		setTimeout(function() {
			$pfoverWidth = $('img.wdhover').innerWidth();
			$pfoverHeight = $('img.wdhover').innerHeight();
			$captionHeight = $('.caption').innerHeight();
			$( ".pfover" ).css({'height': $pfoverHeight +'px','overlfow':'hidden'});
			$( ".caroufredsel_wrapper" ).css({'height': $pfoverHeight +'px'});

			$( ".pfover" ).css({'height': $pfoverHeight +'px','overlfow':'hidden'})
			$('div.caption').css({'bottom': - $captionHeight }, 300);
			$('.circlebig2').css({'left': $pfoverWidth/2-17 +'px','top': $pfoverHeight/2-17 +'px','width':34+'px','height':34+'px','padding':7+'px','opacity':0});
		}, 100);
	});

// #####################
// INITIALIZE PYE CHART
// #####################
	$(document).ready(function() {
		//TRIGGER PIE CHART ANIMATION ON X POSITION FROM TOP
		//get bgx width
		var bgx = $('.bgx').innerWidth();
		
		var $cachePieCHart = $('#sectionfacts-c');
		$(window).scroll(function(){
			
			//Trigger this only if content exists
			if( $cachePieCHart.length ) {
				
				var $position = $cachePieCHart.offset();
				var $positionTop = $position.top;
				var $ih = $(window).innerHeight();
				
				if( $(window).scrollTop() > Math.round($positionTop) - $ih  + 100 ){
					
					//When the button that has "pieanimation" class is pressed, this function is initialized and the animation starts.
					//$(".pieanimation").click(function() {
						$('.chart').easyPieChart({
							animate: 2000,
							barColor:   "#fff",
							trackColor: "#ccc",
							scaleColor: false,
							lineCap: "square",
							lineWidth: 15,								
							size:bgx
						});
					//});	

				}
			}

		});
	});
//END

// #####################
// INITIALIZE COUNTDOWN
// #####################
	if( $('#defaultCountdown').length ){
		$(function () {
			var austDay = new Date();
			austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
			$('#defaultCountdown').countdown({until: austDay});
			$('#year').text(austDay.getFullYear());
		});
		//Read more Documentation here 
		//http://keith-wood.name/countdown.html
	}
//END

// ########################
// ANIMATIONS - Newsletter
// ########################
	function animateNewsletter(){
		$('.newsletter-ani').css({'display':'block'});
		setTimeout(function() {
			$('.circle-obj').show("scale",{}, 1000);
		}, 500);
		setTimeout(function() {
			$('.circle-obj2').stop().animate({'margin-top':'25%','opacity':'1'});
		}, 700);
		setTimeout(function() {
			$('.circle-obj3').stop().animate({'opacity':'1'});
		}, 900);
	}
	$(".newsletterbtn").on("click",function() {		
		animateNewsletter();	
	});
	$(".newscomingsoonbtn").on("click",function() {		
		animateNewsletter();	
	});
	$(".newsletter-ani").on("click",function() {
		$('.newsletter-ani').fadeToggle(200);
		$('.circle-obj').fadeToggle(200);

		setTimeout(function() {
			$('.circle-obj2').css({'margin-top':'','opacity':''});
			$('.circle-obj3').css({'opacity':''});
		}, 200);
	});
//END - animations - newsletter

// #####################
// BURGERMENU ANIMATION
// #####################

//If page has burgeicon than do animations
	if( $('.navbar-nav2').length == 1 ){

		var $navbarNav = $('.navbar-nav2');
		var $closeMenu = $(".closemenu");
		var $mainMenu = $('.mainmenu');

		var $brgOpen = 0;
		function burgerMenu(){
			var $iH = $(window).innerHeight();
			var $iW = $(window).innerWidth();

			var $menucolor = "#12171d"; // default menu color #12171d

			if( $('body').hasClass('whitemenu') ){
				var $menucolor = "#fff"; 
			}
			if( $('body').hasClass('darkmenu') ){
				var $menucolor = "#111"; 
			}

			$('.navigation').css({'background':'transparent'});
			$mainMenu.css({'border':'0'});

			// var $brgOpen = 0; // menu is closed
			$(".hide-show-button").on("click",function() {

				$navbarNav.removeClass('hide');
				$closeMenu.css({'display':'block'});
				$closeMenu.stop().animate({'opacity':0.5});

				//Allign the menu for small and big screens
			    if($iW >= 768){
			    	$mainMenu.css({'width': $iW/2 +'px','height': $iH +'px','background':$menucolor,'position':'fixed','right': -100 +'%','top': 0 +'px','box-shadow': '0 0 100px rgba(0,0,0,0.3)'});
			    	$mainMenu.stop().animate({'width': $iW/2 +'px','height': $iH +'px','background':$menucolor,'position':'fixed','right': 0 +'%','top': 0 +'px'});
			    	$('body').stop().animate({'margin-left':-200+'px'});

			    	//Align Navigation
				    var $navBurger = $navbarNav.height();
				    $navbarNav.css({'margin-top':$iH/2-$navBurger/2 +'px','margin-left':'40%'});

			    }else{
			    	$mainMenu.css({'width': $iW-50 +'px','height': $iH +'px','background':$menucolor,'position':'fixed','right': -100 +'%','top': 0 +'px','box-shadow': '0 0 100px rgba(0,0,0,0.3)'});
			    	$mainMenu.stop().animate({'width': $iW-50 +'px','height': $iH +'px','background':$menucolor,'position':'fixed','right': 0 +'%','top': 0 +'px'});
			    	//Align Navigation
				    var $navBurger = $navbarNav.height();
				    $navbarNav.css({'margin-top':$iH/2-$navBurger/2 +'px','margin-left':'15%'});
			    }
			    //this var prevents animation of the mainmenu if you didn't pressed the burger icon 
			    $brgOpen = 1; // menu is open
			});

			$closeMenu.on("click",function() {
			    $mainMenu.stop().animate({'width': -$iW +'px','background':$menucolor,'position':'fixed','right': -100 +'%','top': 0 +'px','box-shadow': ''}, 500);
				$closeMenu.stop().animate({'opacity':0});
				$('body').stop().animate({'margin-left':0+'px'});
				setTimeout(function() {	
					$mainMenu.removeClass('in');
					$mainMenu.css({'width':'','height':'','background':'','position':'','right': '','top': ''});
					$("ul.nav li a").css({'font-size':''});	
					$closeMenu.css({'display':'none'});	
					$navbarNav.addClass('hide');
				},500);	
				$brgOpen = 0;// menu is closed
			});
		}
		burgerMenu();
		$(window).smartresize(function(){
			var $iH = $(window).innerHeight();
			var $iW = $(window).innerWidth();
			
			burgerMenu();

			if( $brgOpen == 1 ) {
				if($iW >= 768){
					var $navBurger = $navbarNav.height();
					$navbarNav.css({'margin-top':$iH/2-$navBurger/2 +'px','margin-left':'40%'});
					$mainMenu.css({'width': $iW/2 +'px','height': $iH +'px'});
				}else{
					var $navBurger = $navbarNav.height();
					$navbarNav.css({'margin-top':$iH/2-$navBurger/2 +'px','margin-left':'15%'});
					$mainMenu.css({'width': $iW-50 +'px','height': $iH +'px'});
				}
			}
		});
	}
//END - Burgermenu animation

// ###################################
// REMOVE NAVOFFSET ON MOBILE DEVICES
// ###################################
	function navOffset(){
		var $iH = $(window).innerHeight();
		var $iW = $(window).innerWidth();
		var $navOffset = $('#navoffset');

		//If navoffset ID exists
		if( $navOffset.length || $(".offsetFalse").length ){
			$navOffset.addClass('offsetTrue');
			
			if($iW <= 991){
				$navOffset.removeClass('offsetTrue').addClass('offsetFalse');
				$navOffset.removeAttr('id');
			}else{
				$('.offsetFalse').removeClass('offsetFalse').addClass('offsetTrue');
				$('.offsetTrue').attr('id','navoffset');
			}
		}
	}
	function navOffset2(){
		var $iH = $(window).innerHeight();
		var $iW = $(window).innerWidth();
		var $navOffsetTwo = $('#navoffset2');

		//If navoffset ID exists
		if( $navOffsetTwo.length || $(".offset2False").length ){
			$navOffsetTwo.addClass('offset2True');
			
			if($iW <= 991){
				$navOffsetTwo.removeClass('offset2True').addClass('offset2False');
				$navOffsetTwo.removeAttr('id');
			}else{
				$('.offset2False').removeClass('offset2False').addClass('offset2True');
				$('.offset2True').attr('id','navoffset2');
			}
		}
	}
	navOffset();
	navOffset2();
	$(window).resize(function(){
		navOffset();
		navOffset2();
	});
//END - Remove navoffset on mobile devices
