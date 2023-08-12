/*----------------------------------------------------*/
/*  Google map js
/*----------------------------------------------------*/

if ($('#mapBox').length) {
	var $lat = $('#mapBox').data('lat');
	var $lon = $('#mapBox').data('lon');
	var $zoom = $('#mapBox').data('zoom');
	var $marker = $('#mapBox').data('marker');
	var $info = $('#mapBox').data('info');
	var $markerLat = $('#mapBox').data('mlat');
	var $markerLon = $('#mapBox').data('mlon');
	var map = new GMaps({
		el: '#mapBox',
		lat: $lat,
		lng: $lon,
		scrollwheel: false,
		scaleControl: true,
		streetViewControl: false,
		panControl: true,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		zoom: $zoom,
		styles: [
			{
				"featureType": "poi.attraction",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.government",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.medical",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.place_of_worship",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.school",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.sports_complex",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			}
		]
	});

	map.addMarker({
		lat: $markerLat,
		lng: $markerLon,
		icon: $marker,
		infoWindow: {
			content: $info
		}
	})
}



/*----------------------------------------------------*/
/*  Google map js
/*----------------------------------------------------*/

if ($('#mapBox2').length) {
	var $lat = $('#mapBox2').data('lat');
	var $lon = $('#mapBox2').data('lon');
	var $zoom = $('#mapBox2').data('zoom');
	var $marker = $('#mapBox2').data('marker');
	var $info = $('#mapBox2').data('info');
	var $markerLat = $('#mapBox2').data('mlat');
	var $markerLon = $('#mapBox2').data('mlon');
	var map = new GMaps({
		el: '#mapBox2',
		lat: $lat,
		lng: $lon,
		scrollwheel: false,
		scaleControl: true,
		streetViewControl: false,
		panControl: true,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		zoom: $zoom,
		styles: [
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
						}
					]
				},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
						}
					]
				},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
						},
					{
						"lightness": 45
						}
					]
				},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
						}
					]
				},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#46bcec"
						},
					{
						"visibility": "on"
						}
					]
				}
			]
	});

	map.addMarker({
		lat: $markerLat,
		lng: $markerLon,
		icon: $marker,
		infoWindow: {
			content: $info
		}
	})
}



if ($('#mapBox3').length) {
	var $lat = $('#mapBox3').data('lat');
	var $lon = $('#mapBox3').data('lon');
	var $zoom = $('#mapBox3').data('zoom');
	var $marker = $('#mapBox3').data('marker');
	var $info = $('#mapBox3').data('info');
	var $markerLat = $('#mapBox3').data('mlat');
	var $markerLon = $('#mapBox3').data('mlon');
	var map = new GMaps({
		el: '#mapBox3',
		lat: $lat,
		lng: $lon,
		scrollwheel: false,
		scaleControl: true,
		streetViewControl: false,
		panControl: true,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		zoom: $zoom,
		styles: [
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
						}
					]
				},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
						}
					]
				},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
						},
					{
						"lightness": 45
						}
					]
				},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
						}
					]
				},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#46bcec"
						},
					{
						"visibility": "on"
						}
					]
				}
			]
	});

	map.addMarker({
		lat: $markerLat,
		lng: $markerLon,
		icon: $marker,
		infoWindow: {
			content: $info
		}
	})
}


if ($('#mapBox4').length) {
	var $lat = $('#mapBox4').data('lat');
	var $lon = $('#mapBox4').data('lon');
	var $zoom = $('#mapBox4').data('zoom');
	var $marker = $('#mapBox4').data('marker');
	var $info = $('#mapBox4').data('info');
	var $markerLat = $('#mapBox4').data('mlat');
	var $markerLon = $('#mapBox4').data('mlon');
	var map = new GMaps({
		el: '#mapBox4',
		lat: $lat,
		lng: $lon,
		scrollwheel: false,
		scaleControl: true,
		streetViewControl: false,
		panControl: true,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		zoom: $zoom,
		styles: [
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
						}
					]
				},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
						}
					]
				},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
						},
					{
						"lightness": 45
						}
					]
				},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
						}
					]
				},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#46bcec"
						},
					{
						"visibility": "on"
						}
					]
				}
			]
	});

	map.addMarker({
		lat: $markerLat,
		lng: $markerLon,
		icon: $marker,
		infoWindow: {
			content: $info
		}
	})
}

if ($('#mapBox5').length) {
	var $lat = $('#mapBox5').data('lat');
	var $lon = $('#mapBox5').data('lon');
	var $zoom = $('#mapBox5').data('zoom');
	var $marker = $('#mapBox5').data('marker');
	var $info = $('#mapBox5').data('info');
	var $markerLat = $('#mapBox5').data('mlat');
	var $markerLon = $('#mapBox5').data('mlon');
	var map = new GMaps({
		el: '#mapBox5',
		lat: $lat,
		lng: $lon,
		scrollwheel: false,
		scaleControl: true,
		streetViewControl: false,
		panControl: true,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		zoom: $zoom,
		styles: [
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
						}
					]
				},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
						}
					]
				},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
						},
					{
						"lightness": 45
						}
					]
				},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
						}
					]
				},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
						}
					]
				},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#46bcec"
						},
					{
						"visibility": "on"
						}
					]
				}
			]
	});

	map.addMarker({
		lat: $markerLat,
		lng: $markerLon,
		icon: $marker,
		infoWindow: {
			content: $info
		}
	})
}