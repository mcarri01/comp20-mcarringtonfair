function parse(){
	var data = new XMLHttpRequest;
	data.onreadystatechange = function(){
		if (data.readyState == 4 && data.status == 200){
			var message = JSON.parse(data.responseText);
			send(message);
			
			}
		}	
<<<<<<< HEAD
	data.open("GET", "http://messagehub.herokuapp.com/messages.json", true);
=======
	data.open("GET", " http://messagehub.herokuapp.com/messages.json", true);
>>>>>>> 038beb2435790aa886190d29e7cb6f1155ddb04d
	data.send();
}
function send(message){
	var mes = document.getElementById('messages');
	var text = "";
	for (var i = 0; i < message.length; i++){
		text += message[i]['id'] + " " + message[i]['content'] + " "
			+ message[i]['username'] + "<br>";
	}
	mes.innerHTML = text;
}

