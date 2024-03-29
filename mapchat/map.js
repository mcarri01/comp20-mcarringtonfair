// global variables and base values
var Lat = 0;
var Lng = 0;
var my_coords = [Lat, Lng];
var me = new google.maps.LatLng(Lat, Lng);
var dataRequest = new XMLHttpRequest();
var people = [];
var prev_info = false;
function init() 
{
	navigator.geolocation.getCurrentPosition(function(position){
		Lat = position.coords.latitude; // updates lat and lng
		Lng = position.coords.longitude;
		my_coords = [Lat, Lng];
		me = new google.maps.LatLng(Lat, Lng);			
		var settings = {
			center: me,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var mapCanvas = new google.maps.Map(document.getElementById('map'), settings); // adds map to map div
		sendData(Lat, Lng, mapCanvas); // sends data to sever and deals with response data
	});
}
function sendData(Lat, Lng, mapCanvas)
{		
	var responseData;
	var myself = "CheriVasquez"; // given username
	var url = "https://secret-about-box.herokuapp.com/sendLocation"; // server
	var data = "login="+ myself +"&lat=" + Lat + "&lng=" + Lng + "&message=Netflix%20and%20chill%20hmu%20;)"; // stringified data to send
	dataRequest.open('POST', url, true);
	dataRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	dataRequest.send(data);
	dataRequest.onreadystatechange = function(){
		// if data was received properly
		if (dataRequest.readyState == 4 && dataRequest.status == 200){
			responseData = JSON.parse(dataRequest.responseText);
			for (var i = 0; i < responseData.length; i++){
				// for each person, stores response data
				var position = new google.maps.LatLng(responseData[i].lat, responseData[i].lng);
				var coords = [responseData[i].lat, responseData[i].lng];
				var d = distance(my_coords, coords);
				// creates object to store data for individuals
				var person = {"login": responseData[i].login, "distance": d + " miles",
				"maplocation":position, "message": responseData[i].message, "time": responseData[i].created_at}
				people.push(person); // stores in array
				renderMap(people, myself, mapCanvas);	
			}
		}
	}
}
function renderMap(people, myself, mapCanvas)
{
	for (var n = 0; n < people.length; n++){
		if (people[n].login == myself){ // if creating a marker for myself
			var j = n; // stores location in list for later use
			marker = new google.maps.Marker({
				position: people[n].maplocation,
				title: people[n].login + " (me)",
				icon: "house.png"
			}); // creates unique purple icon for me
			mapCanvas.panTo(me);
		}
		else { 
			marker = new google.maps.Marker({
				position: people[n].maplocation,
				title: people[n].login
			});
		}
		marker.setMap(mapCanvas);
		var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(marker, 'click', (function(marker, n){
			return function(){
				if (prev_info)
					prev_info.close();
				mapCanvas.setZoom(15); // zoom in on marker when clicked
				mapCanvas.setCenter(marker.getPosition()); // centers
				prev_info = infowindow;
				if (n == j) // if this infowindow is for myself
					infowindow.setContent("<span id='info'>User: </span>" + marker.title
					+ "</br> <span id='info'>Message: </span>" + people[n].message);
				else  // for everyone else

					infowindow.setContent("<span id='info'>User: </span>" + people[n].login 

					infowindow.setContent("<span id='info'>User: </span>" + people[n].login

					+ "</br> <span id='info'>Message: </span>" + people[n].message
					+ "</br> <span id='info'>Distance: </span>" + people[n].distance
					+ "</br> <span id='info'>Time Posted: </span>" + people[n].time);
					infowindow.open(mapCanvas, marker);
			}
		})(marker, n));
	}	
}
	

// Haversine Distance formula - from http://stackoverflow.com/a/30316500

function distance(coords1, coords2) {
  function toRad(x) { // function to convert degrees to radians
    return x * Math.PI / 180;
  }
  var lon1 = coords1[0];
  var lat1 = coords1[1];

  var lon2 = coords2[0];
  var lat2 = coords2[1];

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  d /= 1.60934; // converts returned number in miles
  return d;
}
