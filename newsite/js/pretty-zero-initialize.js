// #########
// PRETTIFY
// #########
	!function ($) {
		$(function(){
		  window.prettyPrint && prettyPrint()   
		})
	}(window.jQuery)


    //TOGGLE ON/OFF EXAMPLE CODE
    var $cachePreety = $('pre.prettyprint'); 
	var $numPretty = $cachePreety.length; //Count pre
	$cachePreety.hide();// hide all PRE
	//Activate pre.prettyprint that has 'on' class
	for (i = 0; i < $numPretty; i++) { 
	    if ( $cachePreety.eq(i).hasClass('on') ){
	    	$cachePreety.eq(i).show();
	    	$cachePreety.eq(i).prev('.bs-docs-example').find('.ex-toggle').addClass('active');
	    	$cachePreety.eq(i).prev('.bs-docs-example').find('.ex-toggle').text('hide code');
	    }
	}
	//Toggle code
	$(".ex-toggle").on("click", function(event){
	    event.preventDefault();
	    $(this).parent().next('pre.prettyprint').slideToggle();

	    if( $(this).hasClass('active') ){
	    	$(this).removeClass('active');
	    	$(this).text('show code');
	    }else{
	    	$(this).addClass('active');
	    	$(this).text('hide code');
	    }
	});
	//END OF TOGGLE
// END

// #########################################
// ZEROCLIPBOARD - COPY CODE WITH ONE CLICK
// #########################################
	if( $('.zeroclipboard').length ){
		var client = new ZeroClipboard( $('.clip_button')  );
		// var clientCopy = new ZeroClipboard( $('.clip_button').prev() );
		
		client.on( 'ready', function(event) {
		  // console.log( 'movie is loaded' );
		  client.on( 'copy', function(event) {
		    event.clipboardData.setData('text/plain', $(this).prev().innerText);
		  } );
		  client.on( 'aftercopy', function(event) {
		    console.log('Copied text to clipboard: ' + event.data['text/plain']);
		  } );
		} );

		client.on( 'error', function(event) {
		  // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
		  ZeroClipboard.destroy();
		} );
	}
// END