
if ( $('body').hasClass('page19') ){
	var $iW = $(window).innerWidth();
	function intializeFancyMenu(){
		//********************
		// FANCY MENU
		//********************
		var $getFancyHeight = $( ".fancynav" ).innerHeight();
		var $fancyMenu = false; //check if menu is open
		var $dropTop = 80; //dropdown top start position
		var $dropOffset = 100; //dropdown top start position
		var $dropspeed = 300; //dropdown animation time
		var $dropdelay = 100; //drop delay
		var $switchspeed = 100; //dropdown switch speed
		
		function FancyOpenMenu(){
			var $getDropHeight = $(".fancy-dropdown .active").innerHeight();
			
			// var $dataColor = $(".fancy-dropdown .active").attr('data-color');
			// $('.slidingbg').css({'background': $dataColor },500);

			$('.fancynav').stop().animate({'height':250 + $getDropHeight +'px'})
				$('.slidingbg').stop().animate(
					{'height':250 + $getDropHeight +'px'},
					{ 
					  duration: 500, 
					  easing: 'easeOutExpo'
					}
				);
				$('.fancynav').addClass('dark')

				$fancyMenu = true;
		}

		function FancyCloseMenu(){
			
			if( $(window).scrollTop() >= 140  ){
				$('.fancynav').css({'height':50 + 'px'})
			}else{
				$('.fancynav').css({'height':140 + 'px'})
			}

			function closedrop(){
				//CLOSE DROPDOWN
				$('.slidingbg').stop().animate(
					{'height':0 +'px'},
					{ 
					  duration: 300, 
					  easing: 'easeOutExpo'
					}
				);
				setTimeout(function() {
					if( $(window).scrollTop() >= 140  ){
						//do nothing
					}else{
						$('.fancynav').removeClass('dark');
					}
				}, 100);
				$fancyMenu = false;

				//Reset dropdowns
				$('.fancy-dropdown .dropdown').removeClass('active');
				$('.fancy-dropdown .dropdown').css({'margin-top':$dropTop });
			}
			closedrop();
		}

		$( ".fancynav" )
		.mouseenter(function() {
		})
		.mouseleave(function() {
			FancyCloseMenu();
		});	
		
		$( ".fancynav div.fancy-menu ul li a.closedrop" )
				.mouseenter(function() {
					
					if( $(window).scrollTop() >= 140  ){
						$getFancyHeight = 50;
					}else{
						$getFancyHeight = 140;
					}

					if($fancyMenu == true){

						$('.fancy-dropdown .prev-active').stop().animate({'opacity':0,'margin-top':$dropTop + "px"},$dropspeed);

						setTimeout(function() {
							$('.fancynav').stop().animate({'height':$getFancyHeight + 'px'},200)
						
							//CLOSE DROPDOWN
							$('.slidingbg').stop().animate(
								{'height':0 +'px'},
								{ 
								  duration: 300, 
								  easing: 'easeOutExpo'
								}
							);
							setTimeout(function() {
								if( $(window).scrollTop() >= 140  ){
									//do nothing
								}else{
									$('.fancynav').removeClass('dark');
								}
							}, 100);
							$fancyMenu = false;
						}, $dropspeed);
					}

				});

		var timer;
		$( ".fancynav div.fancy-menu ul li a.hasdrop" )
			.mouseenter(function() {

			if( $(this).hasClass('drop1') ){
				timer = setTimeout(function(){
					$('.fancy-dropdown .prev-active').stop().animate({'opacity':0,'margin-top':$dropTop + "px"},$dropspeed);
					setTimeout(function() {
						$('.fancy-dropdown .prev-active').removeClass('active');
						$('.fancy-dropdown .drop1').addClass('active prev-active');
						FancyOpenMenu();
						setTimeout(function() {
							$('.fancy-dropdown .active').stop().animate({'opacity':1,'margin-top':$dropOffset + "px"},$dropspeed);
						}, $switchspeed);
					}, $switchspeed);
				}, $dropdelay);
			}
			else if( $(this).hasClass('drop2') ){
				timer = setTimeout(function(){
					$('.fancy-dropdown .prev-active').stop().animate({'opacity':0,'margin-top':$dropTop + "px"},$dropspeed);
					setTimeout(function() {
						$('.fancy-dropdown .prev-active').removeClass('active');
						$('.fancy-dropdown .drop2').addClass('active prev-active');
						FancyOpenMenu();
						setTimeout(function() {
							$('.fancy-dropdown .active').stop().animate({'opacity':1,'margin-top':$dropOffset + "px"},$dropspeed);
						}, $switchspeed);
					}, $switchspeed);
				}, $dropdelay);
			}
			else if( $(this).hasClass('drop3') ){
				timer = setTimeout(function(){
					$('.fancy-dropdown .prev-active').stop().animate({'opacity':0,'margin-top':$dropTop + "px"},$dropspeed);
					setTimeout(function() {
						$('.fancy-dropdown .prev-active').removeClass('active');
						$('.fancy-dropdown .drop3').addClass('active prev-active');
						FancyOpenMenu();
						setTimeout(function() {
							$('.fancy-dropdown .active').stop().animate({'opacity':1,'margin-top':$dropOffset + "px"},$dropspeed);
						}, $switchspeed);
					}, $switchspeed);
				}, $dropdelay);
			}else{
				$('.fancy-dropdown .prev-active').stop().animate({'opacity':0,'margin-top':$dropTop + "px"},$dropspeed);
				setTimeout(function() {
					$('.fancy-dropdown .prev-active').removeClass('active');
				}, $switchspeed);
			}
		})
		.mouseleave(function() {
			clearTimeout(timer);
		});

		//********************
		// END OF FANCY MENU
		//********************
	}
	if ($iW > 992){
		intializeFancyMenu();
	}else{
		//disable mouse hovers
		$('.fancynav').unbind();
		$('.fancynav div.fancy-menu ul li a.closedrop').unbind();
		$('.fancynav div.fancy-menu ul li a.hasdrop').unbind();
	}
	$(window).resize(function(){
		var $iW = $(window).innerWidth();
		
		if ($iW > 992){
			setTimeout(function() {
				intializeFancyMenu();
			}, 100);
		}else{
			//disable mouse hovers
			$('.fancynav').unbind();
			$('.fancynav div.fancy-menu ul li a.closedrop').unbind();
			$('.fancynav div.fancy-menu ul li a.hasdrop').unbind();
		}
	});

	//*****************************************
	// What hapens with the menu on scroll
	//*****************************************
	
	//BACK TO TOP
	var $iH = $(window).innerHeight();
	var $backtomenu = $('.backtomenu');
	var $triggerOnce = 0;
	
	$backtomenu.addClass('none');
	$(window).scroll(function(event){
		if( $(this).scrollTop() > $iH && $triggerOnce == 0){
			$backtomenu.removeClass('none');
			$backtomenu.css({'opacity':0});
			$backtomenu.stop().animate({'opacity':1});
			$triggerOnce = 1;
		}
		else if( $(this).scrollTop() < $iH && $triggerOnce == 1){
			$backtomenu.stop().animate({'opacity':0});
			setTimeout(function() {
				$backtomenu.addClass('none');
			}, 200); 
			$triggerOnce = 0;
		}
	});
	$('a.slidetotop').on("click",function() {	
		$('body,html').animate(
			{	scrollTop: 0 },
			{ 
			  duration: 2000, 
			  easing: 'easeInOutExpo'
			}
		);
		return false;
	});
	//END OF BACK TO TOP

	//MENU SCROLL EFFECT
	var $triggerVar = 0;
	var lastScrollTop = 0;
	var $fancynav = $('.fancynav');
	var $topSpace = $('.topspace');
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			if($triggerVar == 0){
			    // downscroll code
			    if( $(this).scrollTop() >= 1  && $(this).scrollTop() <= 39){
			    	$fancynav.css({'position':'absolute','top':'40px'});
			    }
			    if( $(this).scrollTop() >= 40  ){
			    	$fancynav.css({'position':'fixed','top':'40px'});
			    	$fancynav.css({'height':'50px'});
			    	$topSpace.css({'margin-top':'10px'});
			    	$fancynav.stop().animate({'background-color':'#fff'});
			    	$fancynav.addClass('dark');
			    	setTimeout(function() {
			    		$triggerVar = 1;
			    	}, 200);
			    }
		    }
		} else {
			if($triggerVar == 1){
			   // upscroll code
				if( $(this).scrollTop() <= 1 ){
					$fancynav.css({'position':'fixed','top':'40px'});
					$triggerVar = 0;
				}
				if( $(this).scrollTop() > 1 && $(this).scrollTop() <= 39  ){
					$fancynav.css({'position':'absolute','top':'40px','height':'140px'});
					$topSpace.css({'margin-top':'50px'});
					$fancynav.stop().animate({'background-color':'transparent'});
					$fancynav.removeClass('dark');
				}
			}
		}
		lastScrollTop = st;
	});
	//END OF MENU SCROLL EFFECT



	//*****************************************
	// SIDEBAR MENUS - SIDE CART & MOBILE MENU
	//*****************************************
	var $mobilemenu = 0;
	var $sidecart = 0;
	var $sideDistance = 320;
	var $easingOpenClose = 'easeOutExpo';
	var $tymeOpenClose = 500;
	var $easingSlides = 'easeInOutExpo';
	var $tymeSlides = 500;
	$('.mobilemenu').css({'width': $sideDistance +'px'});
	$('.sidecart').css({'width': $sideDistance +'px'});

	//Burgermenu click
	function brgmenu(){
		if($mobilemenu == 0){
			$('.mobilemenu').css({'display':'block'});
			$('.fancycontent, .fancynav').stop().animate(
				{'left': -$sideDistance +'px'},
				{ 
				  duration: $tymeOpenClose, 
				  easing: $easingOpenClose
				}
			);
			$('li.brgmenu').css({'display':'none'});
			$('li.clsmenu').css({'display':'inline-block'});
			$mobilemenu = 1;// open mobilemenu
		}

		if($sidecart == 1){
			//open mobilemenu if sidecart is opened
			$('.mobilemenu').css({'right': $sideDistance +'px'});
			$('.sidecart').stop().animate({'right': -$sideDistance +'px'},{ duration: $tymeSlides, easing: $easingSlides});
			$('.mobilemenu').stop().animate({'right': 0 +'px'},{ duration: $tymeSlides, easing: $easingSlides});

			$('li.brgmenu').css({'display':'none'});
			$('li.opencart').css({'display':'inline-block'});
			$sidecart = 0;// close sidecart
			$mobilemenu = 1;// open sidecart
		}
	}
	$("li.brgmenu > a").on("click",function() {
		brgmenu();
	});

	//Shopping bag click
	function opencart(){
		if($sidecart == 0){
			$('.sidecart').css({'display':'block'});
			$('.fancycontent, .fancynav').stop().animate(
				{'left': -$sideDistance +'px'},
				{ 
				  duration: $tymeOpenClose, 
				  easing: $easingOpenClose
				}
			);
			$('li.opencart').css({'display':'none'});
			$('li.clsmenu').css({'display':'inline-block'});
			$sidecart = 1;// open sidecart
		}
		if($mobilemenu == 1){
			//open sidecart if mobilemenu is opened
			$('.sidecart').css({'right': -$sideDistance +'px'});
			$('.mobilemenu').stop().animate({'right': $sideDistance +'px'},{ duration: $tymeSlides, easing: $easingSlides});
			$('.sidecart').stop().animate({'right': 0 +'px'},{ duration: $tymeSlides, easing: $easingSlides});

			$('li.opencart').css({'display':'none'});
			$('li.brgmenu').css({'display':'inline-block'});
			$mobilemenu = 0;// close mobilemenu
			$sidecart = 1;// open sidecart
		}
	}
	$("li.opencart > a").on("click",function() {
		opencart();
	});	

	//Close menu click
	function closeSidebar(){
		var $iW = $(window).innerWidth();
		$('.fancycontent, .fancynav').stop().animate(
			{'left': 0 +'px'},
			{ 
			  duration: $tymeOpenClose, 
			  easing: $easingOpenClose
			}
		);
		$('li.opencart').css({'display':'inline-block'});
		if ($iW < 992){
			$('li.brgmenu').css({'display':'inline-block'});
		}
		$('li.clsmenu').css({'display':'none'});

		setTimeout(function() {
			$('.mobilemenu').css({'display':'none'});
			$('.sidecart').css({'display':'none'});

			$('.mobilemenu').css({'right': 0 +'px'});
			$('.sidecart').css({'right': 0 +'px'});
		}, 500);

		$mobilemenu = 0;
		$sidecart = 0;
	}
	$("li.clsmenu > a").on("click",function() {
		closeSidebar();
	});

	//show burgermenu only on small screens
	$(window).resize(function(){
		var $iW = $(window).innerWidth();
		if ($iW < 992){
			$('li.brgmenu').css({'display':'inline-block'});
		}else{
			$('li.brgmenu').css({'display':'none'});
		}
	});
	//**********************
	// END OF SIDEBAR MENUS 
	//**********************

	// SWIPE EVENTS
	$(window).on("swiperight",function(){
		closeSidebar();
	});  
	$(window).on("swipeleft",function(){
		var $iW = $(window).innerWidth();
		if ($iW < 992){
			brgmenu();  //open mobilemenu
		}else{
			opencart(); //open cart
		}
	});      
	$("body").keydown(function(e) {
	  if(e.keyCode == 37) { // left
	    opencart();
	  }
	  else if(e.keyCode == 39) { // right
	    closeSidebar();
	  }
	});

	//******************************************
	// REWRITE MENU CODE TO FIT MOBILE VERSION
	//******************************************

	//count menu's that have dropdown
	var $numItems = $('.hasdrop').length;

	function moveMenu(){
		$(".slidingbg").hide();
		$(".fancy-menu").appendTo(".mobilemenu");
		$(".fancy-dropdown").appendTo(".mobilemenu");
		
		//For each dropdown move it to sidemenu
		for (i = 0; i < $numItems; i++) { 
		    $('.dropdown.drop' + [i+1] +' > ul').insertAfter('a.hasdrop.drop' + [i+1]);
		}
		$('.collapse').removeClass('in');
	}
	function moveMenuBack(){

		$(".slidingbg").show();
		
		//For each dropdown move it back to menu
		for (i = 0; i < $numItems; i++) { 
		    $('ul.list-drop' + [i+1]).appendTo('.dropdown.drop' + [i+1]);
		}
		$(".fancy-dropdown").insertAfter(".slidingbg");
		$(".fancy-menu").insertAfter(".fancylogo");
		$('.collapse').addClass('in');
		
	}
	if ($iW < 992){
		moveMenu();
	}else{
		moveMenuBack();
	}
	//show burgermenu only on small screens
	$(window).resize(function(){
		var $iW = $(window).innerWidth();

		if ($iW < 992){
			moveMenu();
		}else{
			moveMenuBack();
		}
	});
	//******************************************
	// END OF REWRITE MENU CODE TO FIT MOBILE VERSION
	//******************************************


	//Open/Close search
	var $checkSearch = 0;
	$("a.searchtrigger").on("click",function() {

		if( $checkSearch == 0 ){
			$('.searchbox').stop().animate(
				{'top': 40 + 'px'},
				{ 
				  duration: 500, 
				  easing: 'easeOutExpo'
				}
			);
			$checkSearch = 1;
		}else{
			$('.searchbox').stop().animate(
				{'top': -100 + 'px'},
				{ 
				  duration: 500, 
				  easing: 'easeInExpo'
				}
			);
			$checkSearch = 0;
		}

	});	
	$("a.clssearch").on("click",function() {
		$('.searchbox').stop().animate(
			{'top': -100 + 'px'},
			{ 
			  duration: 500, 
			  easing: 'easeInExpo'
			}
		);
		$checkSearch = 0;
	});	

}
