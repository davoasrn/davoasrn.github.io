
// Initialize one page
if ( $('body').hasClass('initialize-onepage') ){
  $(document).ready(function(){
	  $(".main").onepage_scroll({
	    sectionContainer: "section",
	    responsiveFallback: 1024,
	    loop: true
	  });
	});
}
	
// ############################
// ONE PAGE NAVIGATION EFFECTS
//#############################

function initialVar(){
	var $iW = $(window).innerWidth();
	var $iH = $(window).innerHeight();
	var $nIH = $('.nav-section').innerHeight()+1;

	$('.blackscreen').css({'width':$iW +'px','height':$iH +'px'});
	$('.fwcontent').css({'width':$iW +'px','height':$iH - $nIH +'px','margin-top': + $nIH + 'px'});
}
initialVar();

$(window).resize(function(){
	initialVar();
	// removeFWcontent();

	//Center align content
	var $curNavnr = $('.new-nav li').attr('data-nav');
	$('.slide-'+ $curNavnr +'.active').css({
	    	'margin-left': $('.slide-'+ $curNavnr).parent().width() / 2 - $('.slide-'+ $curNavnr).width() / 2 +'px'
	});

	//position hover line
	if ($('.new-nav li').hasClass('active')){
		var pos = $('.new-nav li.active').position();
		var $width = $('.new-nav li.active').outerWidth();
		$(".nnhover").stop().animate({
		    position: "absolute",
		    bottom: pos.top + "px",
		    left: (pos.left + 0) + "px",
		    width: $width
		}).show();
	}
});

var $nVar = 0;
$(".nav-section").on({
    mouseenter: function () {
    	if($nVar == 0){
    		//height of first drop
    		$('.dropp').css({'height':$('.slide-1').height() + 0});
    		$('.new-nav').find('li').removeClass('active');
    		$('.new-nav li').eq(0).addClass('active');
    		//clear all actives
    		$('.dropp').find('div').removeClass('active');
    		//active first
    		$('.slide-1').addClass('active');

    		$(".slide-1.active").stop().animate({
    	    	'margin-left': $(".slide-1").parent().width() / 2 - $(".slide-1").width() / 2 +'px'
    		}, 500);
    		if($('.new-nav li').hasClass('active')){
    			//Make animation
    			$('.blackscreen').css({'display':'block'});
    			$('.blackscreen').stop().animate({'opacity':1});
    			$('.fwcontent').addClass('active');
    			$('.new-nav li').stop().animate({'padding-top': 20 +'px','padding-bottom': 20 +'px'},500);
    			$('.dropp').addClass('active');
    		}
    		$nVar = 1;

    		//Animate squares
    		var $animateSquare = $('.squares').attr('data-squares-animate');
    		if( $animateSquare == 'true'){
    			// $('.squares li').css({'margin-top':'-20px','opacity':'1'});
    			// $('.squares li').eq(0).delay(200).animate({'margin-top':'10px','opacity':'1'},50);
    			// $('.squares li').eq(0).delay(300).animate({'margin-top':'0px','opacity':'1'},100);
    			// $('.squares li').eq(1).delay(300).animate({'margin-top':'10px','opacity':'1'},50);
    			// $('.squares li').eq(1).delay(400).animate({'margin-top':'0px','opacity':'1'},100);
    			// $('.squares li').eq(2).delay(400).animate({'margin-top':'10px','opacity':'1'},50);
    			// $('.squares li').eq(2).delay(500).animate({'margin-top':'0px','opacity':'1'},100);
    			// $('.squares li').eq(3).delay(500).animate({'margin-top':'10px','opacity':'1'},50);
    			// $('.squares li').eq(3).delay(600).animate({'margin-top':'0px','opacity':'1'},100);	
    		}

    		//GET MENU HOVER LINE POSITION ON START
    		var pos = $('.new-nav li').position();
    		var $width = $('.new-nav li').outerWidth();
    		$(".nnhover").stop().animate({
    		    position: "absolute",
    		    bottom: pos.top + "px",
    		    left: (pos.left) + "px",
    		    width: $width
    		}).show();
    	}
    }
});

//GET MENU HOVER LINE POSITION ON START
if ( $('.new-nav').length ){
    var pos = $('.new-nav').position();
    $(".nnhover").stop().animate({
        position: "absolute",
        bottom: pos.top + "px",
        left: (pos.left) + "px",
        width: 220
    }).show();
}

var $prevNavnr = 1;
var $direction = 'top';
$('.new-nav li').on("click",function() {

	$('.new-nav').find('li').removeClass('active');
	$(this).addClass('active');
	$('.dropp').addClass('active');
	
	var $curNavnr = $(this).attr('data-nav');
	
	//Find direction
	if( $prevNavnr < $curNavnr ){
			//Animate left
			$('.dropp').find('.active').animate({'margin-left':-100+'%'},200);
			$direction = 'left';
		}
	else{
		if($prevNavnr == $curNavnr){
		}else{
			//Animate left
			$('.dropp').find('.active').animate({'margin-left':100+'%'},200);
			$direction = 'right';
		}
	}
	$prevNavnr = $curNavnr;
	//End of direction

	//Animate dropp height
	$('.dropp').stop().animate({'height':$('.slide-' + $curNavnr).height() + 0},200);

	setTimeout(function() {
		//delete all actives
		$('.dropp').find('div').removeClass('active');
		//animate new active
		$('.slide-' + $curNavnr).addClass('active');
		
		//position the next content in oposition of direction
		if($direction == 'left'){	$('.slide-'+ $curNavnr +'.active').css({'margin-left':  100 +'%'});	}
		if($direction == 'right'){	$('.slide-'+ $curNavnr +'.active').css({'margin-left': -100 +'%'});	}
		//animate to center
		var $centerPos = $('.slide-'+ $curNavnr +'.active').parent().width() / 2 - $('.slide-'+ $curNavnr +'.active').width() / 2;
		

		//DROP SLIDING ANIMATIONS
		var $dataEffect = $('.dropp').attr('data-effect');
		
		//Bounce effect
		if ($dataEffect == 'bounce'){
			if($direction == 'left'){
				$('.slide-'+ $curNavnr +'.active').animate({'margin-left': $centerPos -50 +'px'}, 200);
				$('.slide-'+ $curNavnr +'.active').animate({'margin-left': $centerPos +30 +'px'}, 200);
			}
			if($direction == 'right'){
				$('.slide-'+ $curNavnr +'.active').animate({'margin-left': $centerPos +50 +'px'}, 200);
				$('.slide-'+ $curNavnr +'.active').animate({'margin-left': $centerPos -30 +'px'}, 200);
			}
			$('.slide-'+ $curNavnr +'.active').animate({'margin-left': $centerPos +'px'}, 200);
		}
		else{
			if($direction == 'left'){
				$('.slide-'+ $curNavnr +'.active').animate({'margin-left': $centerPos +100 +'px'}, 200);
			}
			if($direction == 'right'){
				$('.slide-'+ $curNavnr +'.active').animate({'margin-left': $centerPos -100 +'px'}, 200);
			}
			$('.slide-'+ $curNavnr +'.active').animate({'margin-left': $centerPos +'px'}, 500);
		}
	},200);

	if($('.new-nav li').hasClass('active')){
		//Make BG animation
		$('.blackscreen').css({'display':'block'});
		$('.blackscreen').stop().animate({'opacity':1});
		$('.fwcontent').addClass('active');
		//make nav smaller
		$('.new-nav li').stop().animate({'padding-top': 20 +'px','padding-bottom': 20 +'px'},500);
	}

	//Animate squares
	var $animateSquare = $('.squares').attr('data-squares-animate');
	if( $animateSquare == 'true'){
		
		if($direction == 'right'){
		
			$('.squares li').css({'right':'100px','opacity':'0'});

				$('.squares li').eq(3).delay(0).animate({'right':'-100px','opacity':'1'},100);
				$('.squares li').eq(3).delay(200).animate({'right':'0px','opacity':'1'},200);

				$('.squares li').eq(2).delay(200).animate({'right':'-50px','opacity':'1'},100);
				$('.squares li').eq(2).delay(300).animate({'right':'0px','opacity':'1'},200);

				$('.squares li').eq(1).delay(300).animate({'right':'-25px','opacity':'1'},100);
				$('.squares li').eq(1).delay(400).animate({'right':'0px','opacity':'1'},200);

				$('.squares li').eq(0).delay(400).animate({'right':'-10px','opacity':'1'},100);
				$('.squares li').eq(0).delay(500).animate({'right':'0px','opacity':'1'},200);

		}
		
	}

	//##############################################
	// GET MENU HOVER LINE POSITION
	//##############################################
    // .position() uses position relative to the offset parent, 
    // so it supports position: relative parent elements
    var pos = $(this).position();
    // .outerWidth() takes into account border and padding.
    var $width = $(this).outerWidth();
    
	if($direction == 'left'){		
	    //show the menu directly over the placeholder
	    $(".nnhover").animate({
	        position: "absolute",
	        bottom: pos.top + "px",
	        left: (pos.left + 20) + "px",
	        width: $width
	    }).show();
    }
    if($direction == 'right'){		
    	//show the menu directly over the placeholder
    	$(".nnhover").animate({
    	    position: "absolute",
    	    bottom: pos.top + "px",
    	    left: (pos.left - 20) + "px",
    	    width: $width
    	}).show();
    }
    $(".nnhover").animate({
        position: "absolute",
        bottom: pos.top + "px",
        left: (pos.left) + "px",
        width: $width
    }).show();
    //##############################################
    // END OF HOVER POSITION
    //##############################################
});


	$(".blackscreen").on({
	    mouseenter: function () {
	       //Hide Animation
	       $('.blackscreen').stop().animate({'opacity':0});
	       $('.blackscreen').css({'display':'none'});
	       $('.fwcontent').removeClass('active');
	       //Remove Active
	       $('.new-nav').find('li').removeClass('active');
	       $('.new-nav li').stop().animate({'padding-top': 40 +'px','padding-bottom': 40 +'px'},200);
	       //hide drop
	       $('.dropp').removeClass('active');

	       //reset hover
	       var pos = $('.new-nav').eq(0).position();
	       $(".nnhover").stop().animate({
	           position: "absolute",
	           bottom: pos.top + "px",
	           left: (pos.left) + "px",
	           width: 220
	       }).show();

	       //For first animation on hover
	       $nVar = 0;

	       // sound3(); 
	    }
	});



// ##################################
// END OF ONE PAGE NAVIGATION EFFECTS
//###################################


//BURGERMENU ONE PAGE
$('.op-hb-drop').hide();
var $x = 1;
$(".hide-show-button2").on("click",function() {
	if($x == 1){
		$('.op-hb-drop').slideToggle(300);
		$('.op-hb-drop ul li a').eq(0).animate({'margin-left':'0px'},100);
		$('.op-hb-drop ul li a').eq(1).animate({'margin-left':'0px'},200);
		$('.op-hb-drop ul li a').eq(2).animate({'margin-left':'0px'},300);
		$('.op-hb-drop ul li a').eq(3).animate({'margin-left':'0px'},400);
		$('.op-hb-drop ul li a').eq(4).animate({'margin-left':'0px'},500);
		$x = 0;
	}else{
		$('.op-hb-drop ul li a').eq(0).animate({'margin-left':'200px'},100);
		$('.op-hb-drop ul li a').eq(1).animate({'margin-left':'200px'},200);
		
		
		$('.op-hb-drop ul li a').eq(4).animate({'margin-left':'200px'},500);
		$('.op-hb-drop ul li a').eq(3).animate({'margin-left':'200px'},400);
		$('.op-hb-drop ul li a').eq(2).animate({'margin-left':'200px'},300);
		setTimeout(function() {
			$('.op-hb-drop').slideToggle(300);
		}, 100);
		$x = 1;
	}
});

//Triger skills for mobile resolution
if ( $('.new-nav').length ){
	if ( $(window).innerWidth() < 998 ){
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
}
