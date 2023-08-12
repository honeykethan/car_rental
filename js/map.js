$(function() {
// Define your locations: HTML content for the info window, latitude, longitude
    var locations = [
		['<h4>Bondi Beach</h4>', 40.7640155, -73.9685173],
		['<h4>Bondi Beach</h4>', 40.7613017, -73.9595319],
		['<h4>Cronulla Beach</h4>', 40.7554531, -73.9454689],
		['<h4>Manly Beach</h4>', 40.7561763, -73.970350],
    ];

    // Setup the different icons and shadows
    var iconURLPrefix = 'img/icon/';

    var icons = [
      iconURLPrefix + 'marker-2.png',
      iconURLPrefix + 'marker-3.png',
      iconURLPrefix + 'marker-4.png',
      iconURLPrefix + 'marker-5.png',
    ]
    var iconsLength = icons.length;

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 10,
      center: new google.maps.LatLng(40.7613017, -73.9704757),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      panControl: false,
      zoomControlOptions: {
         position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    });

    var infowindow = new google.maps.InfoWindow({
      maxWidth: 160
    });

    var markers = new Array();

    var iconCounter = 0;

    // Add the markers and infowindows to the map
    for (var i = 0; i < locations.length; i++) {  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[iconCounter]
      });

      markers.push(marker);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));

      iconCounter++;
      // We only have a limited number of possible icon colors, so we may have to restart the counter
      if(iconCounter >= iconsLength) {
        iconCounter = 0;
      }
    }

    function autoCenter() {
      //  Create a new viewpoint bound
      var bounds = new google.maps.LatLngBounds();
      //  Go through each...
      for (var i = 0; i < markers.length; i++) {  
                bounds.extend(markers[i].position);
      }
      //  Fit these bounds to the map
      map.fitBounds(bounds);
    }
    autoCenter();

});