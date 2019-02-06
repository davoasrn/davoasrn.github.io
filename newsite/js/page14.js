
if( $('#photograph-page').length ) {
 
	//PARALLAX PHOTOGRAPHY PAGE
	var $coverphotography = $('.coverphotography');
	$(window).scroll(function(){
   		 $scrollTop = $(this).scrollTop();//scroll value from top	
	 	 $coverphotography.css({'top': (($scrollTop / 1.5)) + 'px' });
	});

	var $lastScrollTop = $(window).scrollTop();
	var $fixedtop = $('.fixedtop');
	var $executeOnce = 0;
	$(window).scroll(function(event){
	   var $st = $(this).scrollTop();
	   if ($st > $lastScrollTop){
	       // downscroll code
	       if ( $executeOnce == 0) {
	       	$fixedtop.stop().animate({'margin-top':'-100px'},300);
	       	$executeOnce = 1;
	       };
	       
	   } else {
	      // upscroll code
	      if ( $executeOnce == 1) {
	       $fixedtop.stop().animate({'margin-top':'0px'},300);
	       $executeOnce = 0;
	      };
	       
	   }
	   $lastScrollTop = $st;
	});




}

//Makes cover with .lpopup class to POP OUT
$(".lpopup").on("click",function() {
    var $bg = $(this).css('background-image');
    $bg = $bg.replace('url(','').replace(')','');
    // alert($bg);

    $('.createlightbox').css({'display':'block'});
    $('.createlightbox').animate({'opacity':1});

    //Create Lightbox
    $('.l-image').append("<img src="+ $bg +" class='valign max-wh-90'/>");
});

//Close lightbox
$(".createlightbox").on("click",function() {
	$(this).animate({'opacity':0});
	setTimeout(function() {
		$('.createlightbox').css({'display':'none'});
	}, 300);
	
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
