
	var data = new XMLHttpRequest;
	data.onreadystatechange = function(){
		if (data.readyState == 4 && data.status == 200){
			parse(data);
		}
	}
	data.open("GET", "data.json", true);
	data.send();
	function parse(data){
		var mes = JSON.parse(data.json);
		var messages = document.getElementById('messages');
		console.log(messages['id']);
	}

