
$('.tm-content').hide();
var $tm = 0
$('.tm-close').addClass('none');
$('#tm-fullscreen').css({'opacity':'0','display':'none'});
$('a.tm-open').click(function(){
	$('.tm-prev').css({'width': 160 +'px','height': 507 +'px'});
    $('.tm-open').addClass('none');
    $('.tm-close').removeClass('none');	 
	$('.tm-content').fadeToggle(300);

	$('#back-top a').stop().animate({'width': 160 +'px'}, 200);
	$('#back-top span').stop().animate({'width': 160 +'px'}, 200);
	$('a.tm-open').stop().animate({'width': 160 +'px'}, 100);
	$('a.tm-close').stop().animate({'width': 160 +'px'}, 100);
	$tm = 1;
	if($('.activate-tmprev').length){
		$('.activate-tmprev').addClass('active');
	}
	$('#tm-fullscreen').css({'display':'block'});
	$('#tm-fullscreen').stop().animate({'opacity':'0.7'});

});

$('a.tm-close').click(function(){
    $('.tm-close').addClass('none');
    $('.tm-open').removeClass('none');
	$('.tm-content').fadeToggle(300);
	$('.tm-prev').css({'width': 50 +'px','height': 50 +'px'});

	$('#back-top a').stop().animate({'width': 50 +'px'}, 200);
	$('#back-top span').stop().animate({'width': 50 +'px'}, 200);
	$('a.tm-open').stop().animate({'width': 50 +'px'}, 100);
	$('a.tm-close').stop().animate({'width': 50 +'px'}, 100);
	$tm = 0;
	
	if($('.activate-tmprev').length){
		$('.activate-tmprev').removeClass('active');
	}
	$('#tm-fullscreen').stop().animate({'opacity':'0'});
	setTimeout(function() {
		$('#tm-fullscreen').css({'display':'none'});
	}, 200);

});

$(window).scroll(function () {
	if ($(this).scrollTop() > 700) {
		$('.tm-prev').stop().animate({'margin-bottom':'53px'},100);
	} else {
		$('.tm-prev').stop().animate({'margin-bottom':'0px'},100)
	}
});

$('.activate-tmprev').click(function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('a.tm-close').click();
	}else{
		$(this).addClass('active');
		$('a.tm-open').click();
	}
});

$('.deactivate-tmprev').click(function(){
	$('.deactivate-tmprev').addClass('activate-tmprev').removeClass('deactivate-tmprev');
	$('a.tm-close').click();
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
