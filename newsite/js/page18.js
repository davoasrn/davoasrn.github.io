if ( $('body').hasClass('page18') ){

	setTimeout(function() {
		$(window).trigger('resize');
	}, 500);

	// #############################
	//  	   !INFORMATION
	// #############################
	// If you add content inside ".fold-content" that uses javascript, then you must initialize it in "responsive_3dfoldscroll.js", 
	// open it and check for "//ADD CUSTOM FUNCTIONS HERE"

	//INITIALIZE 3D FOLD SCROLL
	$( document ).ready(function() {
		window.onload=function(){
			var fold = $.fn.responsive_3dfoldscroll();
		};
	});

	// SET HEIGHT OF WORK GALLERY
	function getFoldHeight(){
			var $getFoldHeight = $('.grid').innerWidth();
			$('.fold-height').css({'height': + $getFoldHeight * 3 + 'px'});
	}

	// SET HEIGHT OF SLIDE
	function getFoldSlide(){
		var $getFoldTop = $('.top-fold').innerHeight();
		var $getFoldGrid = $('.grid').innerWidth();
		var $iH = $(window).innerHeight();
		// alert($iH);
		var $foldH = ($iH - $getFoldTop - $getFoldGrid);
		$('.fold-h').css({'height': $foldH });
	}
	getFoldHeight();
	getFoldSlide();

	$(window).resize(function(){
		getFoldSlide();
		getFoldHeight();
	});

	var $slimMenuFill = $('.slimmenu-fill'),
	    $slimMenuFillLink = $('.slimmenu-left ul li a'),
	    $scrollHome    = $('.scroll-home'),
	    $scrollWork    = $('.scroll-work'),
	    $scrollAbout   = $('.scroll-about'),
	    $scrollJobs    = $('.scroll-jobs'),
	    $scrollPrices  = $('.scroll-prices'),
	    $scrollContact = $('.scroll-contact'),
	    $scrollSocial  = $('.scroll-social');

	$(window).scroll(function(){
		var $getTopScroll = $(window).scrollTop();
		if ( $slimMenuFill.length ) {
			if($getTopScroll == 0  ){
				$slimMenuFillLink.removeClass('active');
				$scrollHome.addClass('active');
				$slimMenuFill.stop().animate({'height':$('.scroll-home').position().top + 78});
			}
			if($getTopScroll <= 1500 && $getTopScroll > 0){
				$slimMenuFillLink.removeClass('active');
				$scrollWork.addClass('active');
				$slimMenuFill.stop().animate({'height':$('.scroll-work').position().top + 36 + 72});
			}
			if($getTopScroll <= 6000 && $getTopScroll > 5500){
				$slimMenuFillLink.removeClass('active');
				 $scrollAbout.addClass('active');
				$slimMenuFill.stop().animate({'height':$('.scroll-about').position().top + 36 + 72});
			}
			if($getTopScroll <= 7500 && $getTopScroll > 6000){
				$slimMenuFillLink.removeClass('active');
				$scrollJobs.addClass('active');
				$slimMenuFill.stop().animate({'height':$('.scroll-jobs').position().top + 36 + 72});
			}
			if($getTopScroll <= 9000 && $getTopScroll > 7500){
				$slimMenuFillLink.removeClass('active');
				$scrollPrices.addClass('active');
				$slimMenuFill.stop().animate({'height':$('.scroll-prices').position().top + 36 + 72});
			}	
			if($getTopScroll <= 10500 && $getTopScroll > 9000){
				$slimMenuFillLink.removeClass('active');
				$scrollContact.addClass('active');
				$slimMenuFill.stop().animate({'height':$('.scroll-contact').position().top + 36 + 72});
			}	
			if($getTopScroll <= 12000 && $getTopScroll > 10500){
				$slimMenuFillLink.removeClass('active');
				$scrollSocial.addClass('active');
				$slimMenuFill.stop().animate({'height':$('.scroll-social').position().top + 36 + 72});
			}	
		};
	});

	//Scrolling points
	$("a.scroll-home").on("click",function(event) {	
			$('body,html').animate(
				{	scrollTop: 0 },
				{ 
				  duration: 1000, 
				  easing: 'easeInOutExpo'
				}
			);
	});
	$("a.scroll-work").on("click",function(event) {		
			$('body,html').animate(
				{	scrollTop: 1500 },
				{ 
				  duration: 1000, 
				  easing: 'easeInOutExpo'
				}
			);
	});
	$("a.scroll-about").on("click",function(event) {		
			$('body,html').animate(
				{	scrollTop: 6000 },
				{ 
				  duration: 1000, 
				  easing: 'easeInOutExpo'
				}
			);
	});
	$("a.scroll-jobs").on("click",function(event) {	
			$('body,html').animate(
				{	scrollTop: 7500 },
				{ 
				  duration: 1000, 
				  easing: 'easeInOutExpo'
				}
			);
	});
	$("a.scroll-prices").on("click",function(event) {	
			$('body,html').animate(
				{	scrollTop: 9000 },
				{ 
				  duration: 1000, 
				  easing: 'easeInOutExpo'
				}
			);
	});
	$("a.scroll-contact").on("click",function(event) {	
			$('body,html').animate(
				{	scrollTop: 10500 },
				{ 
				  duration: 1000, 
				  easing: 'easeInOutExpo'
				}
			);
	});
	$("a.scroll-social").on("click",function(event) {	
			$('body,html').animate(
				{	scrollTop: 12000 },
				{ 
				  duration: 1000, 
				  easing: 'easeInOutExpo'
				}
			);
	});
}
