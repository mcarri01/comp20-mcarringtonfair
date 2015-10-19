function parse(){
	var data = new XMLHttpRequest;
	data.open("GET", "data.json", true);
	var mes = JSON.parse(data.json);
	var messages = document.getElementById('messages');
	console.log(messages['id']);
}
