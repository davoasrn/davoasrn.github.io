
if ( $('body').hasClass('page15') ){

	//Adds padding left/right to body depending on witch side is the menu placed
	var $st1size = $('.rm-stage1').innerWidth();
	if( $('.slim-right-menu').length == true ){
		$('body.pr-offset').css({'padding-right':$st1size +"px"})
	}
	if( $('.slim-left-menu').length == true ){
		$('body.pr-offset').css({'padding-left':$st1size +"px"})
	}


	$(".closemenu3").on("click",function() {

		$(".closemenu3").stop().animate({'opacity':0});

		//reset all
		$('.open-stage1 i').addClass('ti-menu').removeClass('ti-close');//change icon
		$(".rm-stage3").removeClass('active'); //close stage3
		$(".rm-stage2").removeClass('active active2'); //close stage2
		$(".rm-stage2 li a").removeClass('active'); //close stage2 hovers
		stage1 = true; //initialize stage 1
		stage2 = true; //initialize stage 2

		setTimeout(function() {	
			$(".closemenu3").css({'display':'none'});
		},500);	
	});

	var stage1 = true;
	$(".open-stage1").on("click",function() {
		if( stage1 ){
			//Open stage 2
			$(this).addClass('active');
			$('.open-stage1 i').addClass('ti-close').removeClass('ti-menu');//change icon
			$(".rm-stage2").addClass('active');
			stage1 = false;

			$(".closemenu3").css({'display':'block'});
			$(".closemenu3").animate({'opacity':0.5});
		}
		else{
			//Close all stages
			$(this).removeClass('active'); //remove burger hover
			$('.open-stage1 i').addClass('ti-menu').removeClass('ti-close');//change icon
			$(".rm-stage3").removeClass('active'); //close stage3
			$(".rm-stage2").removeClass('active active2'); //close stage2
			$(".rm-stage2 li a").removeClass('active'); //close stage2 hovers
			stage1 = true; //initialize stage 1
			stage2 = true; //initialize stage 2

			$(".closemenu3").animate({'opacity':0});
			setTimeout(function() {	
				$(".closemenu3").css({'display':'none'});
			},500);	
			


		}
	});

	var stage2 = true;
	$(".rm-stage2 li a").on("click",function() {
		if( stage2 ){
			//Open stage 3 (dropdown)
			if( $(this).parent().hasClass('dropdown') ){
				$(".rm-stage3").addClass('active');
				$(".rm-stage2").removeClass('active').addClass('active2');
				$(this).addClass('active');
				stage2 = false;

				//Opening proper dropdown for stage 3
				var $dropname = $(this).parent().attr('data-dropdown-name');
				$('.menu-st3 li.st3').addClass('none');
				$('.menu-st3 li.'+ $dropname).removeClass('none');
				// alert ( $(this).parent().attr('data-dropdown-name') );
			}
		}
		else{
			//Close stage 3 (dropdown)
			if( $(this).hasClass('active') ){
				$(".rm-stage3").removeClass('active');
				$(".rm-stage2").removeClass('active2').addClass('active');
				$('ul.menu-st2 li a').removeClass('active')
				stage2 = true;
			}else{
				//If other dropdown click, close and open again
				if( $(this).parent().hasClass('dropdown') ){

					$(".rm-stage3").removeClass('active');
					$(".rm-stage2").removeClass('active2').addClass('active');
					$('ul.menu-st2 li a').removeClass('active')
					$(this).addClass('active');

					//
					$('.menu-st3 li.st3').addClass('none');
					var $dropname = $(this).parent().attr('data-dropdown-name');

					setTimeout(function() {
						$(".rm-stage3").addClass('active');
						$(".rm-stage2").removeClass('active').addClass('active2');

						//Opening proper dropdown for stage 3
						$('.menu-st3 li.'+ $dropname).removeClass('none');
							
					}, 300);
					
				}
			}
			
		}
	});

}
