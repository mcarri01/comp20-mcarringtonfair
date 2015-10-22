function init(){
	var Lat = 0;
	var Lng = 0;
	var me = new google.maps.LatLng(Lat, Lng);
	var settings = {zoom:10, center: me, mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	console.log("1");
	var request = new XMLHttpRequest();
	console.log("2");
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
			Lat = position.coords.latitude;
			Lng = position.coords.longitude; 
			createMap(Lat, Lng, settings);
		});
	}
	else {
		alert("Geolocation is not supported by your web browser. Sorry!")};
}
function createMap(Lat, Lng, settings){
	console.log("3");
	var me = new google.maps.LatLng(Lat, Lng);
	console.log(Lat);
	console.log(Lng);
	console.log(me);
	var map_background = new google.maps.Map(document.getElementById("map"), settings);
	console.log(map);
	map_background.panTo(me);
	var marker = new google.maps.Marker({
		position: me,
		title: "Wow does this work?"
	});
	marker.setMap(map_background);
	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(marker, 'click', function(){
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
	
}
