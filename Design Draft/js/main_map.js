//var mapCenter = {lat:40.753380,lng:-73.986413}
//                marker.setMap(null);
//                
//                function initMap(){
//                  // Map options
//                  var options = {
//                    zoom:15,
//                    center: mapCenter
//                  }
//                  // New map
//                  var map = new google.maps.Map(document.getElementById('map'), options);
//                var marker = new google.maps.Marker(
//                {position: {lat: 40.757201, lng: -73.989968},
//                map:map,
//                icon:'img/Pizza-icon.png',
//                title:'Don Hyder | Rating: 5.0/5.0'});
//                    
//                }
//

var mapCenter = {lat:40.753380,lng:-73.986413}
var garlicNewYorkPizzaBar = {lat: 40.745237, lng: -73.975891};
var famousAmadeusPizza = {lat: 40.749902, lng: -73.994903};

function initMap(){

//       Map options
                  var options = {
                    zoom:15,
                    center: mapCenter
                  }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Listen for click on map
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });

      /*
      // Add marker
      var marker = new google.maps.Marker({
        position:{lat:42.4668,lng:-70.9495},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
      */

      // Array of markers
      var markers = [
        {
          coords:garlicNewYorkPizzaBar,
//          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<span class="map-marker-info"> Garlic NY Pizza Bar | Rating : 4.78/5.00 </span>'
        },
        {
          coords:famousAmadeusPizza,
          content:'Famous Amadeus Pizza | Rating : 4.50/5.00'
        },
        {
          coords:{lat:42.7762,lng:-71.0773}
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }