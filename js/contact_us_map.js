function initMap() {
        			var verdun = {lat: 33.886, lng: 35.483};
        			var map = new google.maps.Map(document.getElementById('map'), {
          				zoom: 4,
          				center: verdun
        			});
        			var marker = new google.maps.Marker({
          				position: verdun,
          				map: map
        			});
      			}