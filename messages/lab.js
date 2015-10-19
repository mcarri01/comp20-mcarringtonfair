function parse(){
	var data = new XMLHttpRequest;
	data.onreadystatechange = function(){
		if (data.readyState == 4 && data.status == 200){
			var message = JSON.parse(data.responseText);
			console.log(messages);
			send(messages);
			
			}
		}	
	data.open("GET", "data.json", true);
	data.send();
}
function send(messages){
	var mes = document.getElementById('messages');
	mes.innerHTML = messages
	
}

