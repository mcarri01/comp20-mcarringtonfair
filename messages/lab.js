function parse(){
	var data = new XMLHttpRequest;
	data.onreadystatechange = function(){
		if (data.readyState == 4 && data.status == 200){
			var message = JSON.parse(data.responseText);
			console.log(message[1]['id']);
			console.log(message[1]['content']);
			send(message);
			
			}
		}	
	data.open("GET", "data.json", true);
	data.send();
}
function send(message){
	var mes = document.getElementById('messages');
	mes.innerHTML = message[1]['id'];
	mes.innerHTML = message[1]['content'];
	mes.innerHTML = message[1]['username'];
	
	
}

