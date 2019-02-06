
if ( $('body').hasClass('page16') ){
	
	// ########################
	// INITIALIZE JQUERY COVER
	// ########################
		
		$(document).ready(function() {
			$(".myBackgroundImage").cover();
		});

		$(".updatecover").on("click",function() {
			$(".myBackgroundImage").cover("update"); 
		});
	// END

	// MENU NAVIGATION AND ANIMATIONS
	var $prevWindow = 1;
	$(".pgnr").on("click",function() {
		var $currWindow = $(this).attr('data-window');
		var $dataBurger = $('#window' + $currWindow ).attr('data-burger');
		var $dataLogo = $('#window' + $currWindow ).attr('data-logo');

		var $dataNav = $('#window' + $currWindow ).attr('data-nav');
		var $dataBg = $('#window' + $currWindow ).attr('data-bg');

		if ( $('body').hasClass('sounds-enable') ){ sound(); }

		if( $dataBurger == "dark"){
			$('.burgerbar').removeClass('white');
		}else{
			$('.burgerbar').addClass('white');
		}

		$('.sidetransition ul').stop().animate({opacity:0},200);
		setTimeout(function() {
			$('.sidetransition').animate(
				{	width: '100%' },
				{ 
				  duration: 500, 
				  easing: 'easeInOutExpo'
				}
			);
		}, 300);

		setTimeout(function() {
			$('.sidetransition').css({'right':'auto','left':'0px'});
			$('img.preloader').removeClass('none'); //start preloader
		}, 800);

		//Preloader
		setTimeout(function() {
		}, 2000);

		setTimeout(function() {
			if ( $('body').hasClass('sounds-enable') ){ sound(); }
			$('img.preloader').addClass('none'); //end preloader
			$('.sidetransition').animate(
				{	width: '0' },
				{ 
				  duration: 500, 
				  easing: 'easeInOutExpo'
				}
			);

			$('#window' + $prevWindow ).removeClass('active').addClass('none');
			$('#window' + $currWindow ).removeClass('none').addClass('active');
			$prevWindow = $currWindow ;

			$(".closemenu2").css({'opacity':'0','display':'none'});	
		}, 2000);

		setTimeout(function() {
			$('.addscale').removeClass('active');

				//YOU CAN TRIGGER THINGS HERE BEFORE THE TRANSITION ENDS
				

				//Make data-nav fixed
				if($dataNav == 'fixed'){
					// $('.fixedtop').addClass('bgwhite');
					$('.fixedtop').insertAfter('.createlightbox');
				}else{
					$('.fixedtop').insertBefore('#window1');
					// $('.fixedtop').removeClass('bgwhite');
				}
				
				//Refreshes revolution slider
				// $(window).trigger("resize");

			//Change logo if needed
			if( $dataLogo == "dark"){
				$('.logo2 a img').removeClass('white');
			}else{
				$('.logo2 a img').addClass('white');
			}				
			//Triger cover for gallery
			$(".myBackgroundImage").cover("update"); 
			
			//Trigger Google maps for this page
			if ( $currWindow == 5 ){
				//load Google maps
				getGeocode();
			}

			if ( $currWindow == 4 ){
				$('body').removeClass('owhidden');
			}else{
				$('body').removeClass('owhidden').addClass('owhidden');
			}
		}, 2200);

	});

	$(".openmenu").on("click",function() {

		if( $('#window4').hasClass('active') ){
			$('#window4').addClass('owhidden');
		}
		$('.addscale').addClass('active');

		$('.sidetransition').css({'display':'block','width':'0px'});
		$('.sidetransition').css({'left':'auto','right':'0px'});
		$('.sidetransition').animate(
			{	width: '50%' },
			{ 
			  duration: 1000, 
			  easing: 'easeOutExpo'
			}
		);
		
		setTimeout(function() {
			$('.sidetransition ul').stop().animate({'opacity':'1'},200);
		}, 500);

		$(".closemenu2").css({'display':'block'});
		$(".closemenu2").stop().animate({'opacity':0.5});

		//Allign the menu for small and big screens
	    // if($iW >= 768){
	    // 	$('body').stop().animate({'margin-left':-200+'px'});
	    // }
	});
	$(".closemenu2").on("click",function() {

		if( $('#window4').hasClass('active') ){
			$('#window4').removeClass('owhidden');
		}

		$(".closemenu2").stop().animate({'opacity':0});
		$('.addscale').removeClass('active');
		$('.sidetransition ul').stop().animate({'opacity':'0'},200);
		$('.sidetransition').animate(
			{	width: '0' },
			{ 
			  duration: 1000, 
			  easing: 'easeOutExpo'
			}
		);

		setTimeout(function() {	
			$(".closemenu2").css({'display':'none'});
			$('.sidetransition').css({'display':'none'});
		},1000);	
	});
	//END OF MENU ANIMATIONS

	//Make grid height 100%
	function gridHeight(){
		var $iH = $(window).innerHeight();
		var $gridHeight = $iH/3;
		$('.grid-height').css({'height': $gridHeight + 'px'});
	}
	gridHeight();
	$(window).resize(function(){
		gridHeight();
	});

	// Lightbox
	$(".lpopup2").on("click",function() {
	    var $bg = $(this).find('img').attr('src');

	    $('.createlightbox').css({'display':'block'});
	    $('.createlightbox').animate({'opacity':1});

	    //Create Lightbox
	    $('.l-image').append("<img src="+ $bg +" class='valign max-wh-90'/>");
	});

	$fav = 1;
	$(".effecttrigger").on("click",function() {
		if($fav == 1){
			$('.square-flip').addClass('active');
			$fav = 0;
		}else{
			$('.square-flip').removeClass('active');
			$fav = 1;
		}
	});
}
