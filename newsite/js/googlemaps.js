// #####################
// INITIALIZE GOOGLE MAPS
// #####################
	if ( $('body').hasClass('loadmap') ){
		//<![CDATA[
		var geocoder = new google.maps.Geocoder();
		var address = "London Cherry Wood"; //Add your address here, all on one line.
		var latitude;
		var longitude;
		// var color = "#333"; //Set your tint color. Needs to be a hex value.

		function getGeocode() {
			geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
		    		latitude = results[0].geometry.location.lat();
					longitude = results[0].geometry.location.lng(); 
					initGoogleMap();   
		    	} 
			});
		}

		function initGoogleMap() {
			var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#32bbf3"},{"lightness":17}]}]
			
			var options = {
				mapTypeControlOptions: {
					mapTypeIds: ['Styled']
				},
				center: new google.maps.LatLng(latitude, longitude),
				zoom: 14,
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: true,
				zoomControl: true,
				disableDefaultUI: true,	
				mapTypeId: 'Styled'
			};
			var div = document.getElementById('googleMap');
			var map = new google.maps.Map(div, options);
			marker = new google.maps.Marker({
			    map:map,
			    draggable:false,
			    animation: google.maps.Animation.DROP,
			    position: new google.maps.LatLng(latitude,longitude)
			});
			var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
			map.mapTypes.set('Styled', styledMapType);
			
			var infowindow = new google.maps.InfoWindow({
			      content: "<div class='iwContent'>"+address+"</div>"
			});
			google.maps.event.addListener(marker, 'click', function() {
			    infowindow.open(map,marker);
			  });
			
			
			bounds = new google.maps.LatLngBounds(
			  new google.maps.LatLng(-84.999999, -179.999999), 
			  new google.maps.LatLng(84.999999, 179.999999));

			rect = new google.maps.Rectangle({
			    bounds: bounds,
			    // fillColor: color,
			    fillOpacity: 0.0,
			    strokeWeight: 0,
			    map: map
			});
		}
		// google.maps.event.addDomListener(window, 'load', getGeocode);
		//]]>
		
		//This must be loaded after google maps
			getGeocode();
		}
//END