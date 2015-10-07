function init() {
	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');
	
	var background = new Image();
	background.src = 'duckhunt-background.gif';
	background.alt = 'background_image';
	background.addEventListener("load", function(){
	ctx.drawImage(background, 0, 0);
	}, false);
	
	var first_bird = new Image();
	first_bird.src = 'duckhunt_various_sheet.png';
	first_bird.alt = 'first_bird';
	first_bird.addEventListener("load", function(){
	ctx.drawImage(first_bird, 0, 120, 35, 30, 100, 100, 35, 30);
	}, false);
	
	var second_bird = new Image();
	second_bird.src = 'duckhunt_various_sheet.png';
	second_bird.alt = 'second_bird';
	second_bird.addEventListener("load", function(){
	ctx.drawImage(second_bird, 172, 157, 31, 31, 150, 80, 31, 31);
	}, false);	
}
