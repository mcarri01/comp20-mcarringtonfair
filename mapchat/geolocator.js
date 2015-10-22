function setMap(){
	var Lat = 0;
	var Lng = 0;
	console.log("1");
	//var request = new XMLHttpRequest();
	console.log("2");
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
			Lat = position.coords.latitude;
			Lng = position.coords.longitude; 
			createMap(Lat, Lng);
		});
	}
	else {
		alert("Geolocation is not supported by your web browser. Sorry!")};
}
function createMap(Lat, Lng){
	console.log("3");
	var settings = {zoom:10, center: me, mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var me = new google.maps.LatLng(Lat, Lng);
	console.log(Lat);
	console.log(Lng);
	console.log(me);
	var map_background = new google.maps.Map(document.getElementById("map"), settings);
	console.log(map_background);
	map_background.panTo(me);
	var marker = new google.maps.Marker({
		position: me,
		title: "Wow does this work?"
	});
	marker.setMap(map_background);
	console.log(marker);
	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(marker, 'click', function(){
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
	
}
