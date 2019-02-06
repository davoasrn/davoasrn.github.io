(function ($) {
	'use strict';

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	$(window).on('load', function () {
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */
	$('.play-icon i').click(function () {
		var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
		$(this).replaceWith(video);
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var portfolio_item = $('.portfolio-items-wrapper');
	if (portfolio_item.length) {
		var mixer = mixitup(portfolio_item);
	}

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	//Init the slider
	$('.testimonial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	/* ========================================================================= */
	/*	Clients Slider Carousel
	/* =========================================================================  */

	//Init the slider
	$('.clients-logo-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1
	});




	/* ========================================================================= */
	/*	Company Slider Carousel
	/* =========================================================================  */
	$('.company-gallery').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1
	});


	/* ========================================================================= */
	/*	Awars Counter Js
	/* =========================================================================  */
	$('.counter').each(function () {
		var $this = $(this),
			countTo = $this.attr('data-count');

		$({
			countNum: $this.text()
		}).animate({
				countNum: countTo
			},

			{

				duration: 1500,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					//alert('finished');
				}

			});



	});

	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */

	$('#contact-form').validate({
		rules: {
			name: {
				required: true,
				minlength: 4
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: false
			},
			message: {
				required: true
			}
		},
		messages: {
			user_name: {
				required: 'Come on, you have a name don\'t you? ',
				minlength: 'Your name must consist of at least 2 characters'
			},
			email: {
				required: 'Please put your email address'
			},
			message: {
				required: 'Put some messages here?',
				minlength: 'Your name must consist of at least 2 characters'
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: 'POST',
				data: $(form).serialize(),
				url: 'sendmail.php',
				success: function () {
					$('#contact-form #success').fadeIn();
				},
				error: function () {
					$('#contact-form #error').fadeIn();
				}
			});
		}
	});





	function initialize() {
		var map;

		var nottingham = new google.maps.LatLng(51.507351, -0.127758);

		var style = [{
			'stylers': [{
				'hue': '#ff61a6'
			}, {
				'visibility': 'on'
			}, {
				'invert_lightness': true
			}, {
				'saturation': 40
			}, {
				'lightness': 10
			}]
		}];

		var mapOptions = {
			// SET THE CENTER
			center: nottingham,

			// SET THE MAP STYLE & ZOOM LEVEL
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoom: 17,

			// SET THE BACKGROUND COLOUR
			backgroundColor: '#000',

			// REMOVE ALL THE CONTROLS EXCEPT ZOOM
			panControl: false,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE
			}

		};
		map = new google.maps.Map(document.getElementById('map'), mapOptions);

		// SET THE MAP TYPE
		var mapType = new google.maps.StyledMapType(style, {
			name: 'Grayscale'
		});
		map.mapTypes.set('grey', mapType);
		map.setMapTypeId('grey');

		//CREATE A CUSTOM PIN ICON
		var marker_image = 'images/marker.png';
		var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(25, 33));

		marker = new google.maps.Marker({
			position: nottingham,
			map: map,
			icon: pinIcon,
			title: 'navigator'
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);