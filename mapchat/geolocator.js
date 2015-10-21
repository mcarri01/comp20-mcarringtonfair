function init(){
	var Lat = 0;
	var Lng = 0;
	var me = new google.maps.LatLng(Lat, Lng);
	var settings = {zoom:10, center: me, mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var infowindow = new google.maps.InfoWindow();
	var map_background = new google.maps.Map(document.getElementById("map"), myOptions);
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude; 
		});
		var me = new google.maps.LatLng(latitude, longitude);
		me.panTo(me);
		var marker = new google.maps.Marker({position: me, title: "Wow does this work?"});
		marker.setMap(me);
		google.maps.event.addListener(marker, 'click', function(){
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
		});
	}
	else {
		alert("Geolocation is not supported by your web browser. Sorry!");
	}
}
