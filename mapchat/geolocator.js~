function init(){
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
			info.window.setContent(marker.title);
			info.window.open(map, marker);
		});
}
