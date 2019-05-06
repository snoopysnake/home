const blankScreen = new Image();
const screenMessage = new Image();

blankScreen.onload = function() {
	// flicker(1000,0);
	setTimeout(function() {
		document.body.style.backgroundImage = 'url("background-message-1.png")';
		screenMessage.onload = function() {
			setTimeout(function() {
				document.body.style.backgroundImage = 'url("background-message-2.png")';
			},750);
		};
		screenMessage.src = 'background-message-2.png';
	}, 1000);
};
blankScreen.src = 'background-message-1.png';

function flicker(seconds, itr) {
	if (seconds <= 200) {
		seconds = 200;
	}
	if (itr >= 11) {
		return;
	}
	if (itr % 2 == 0) {
		document.body.style.backgroundImage = 'url("background-message-1.png")';
	}
	else {
    	document.body.style.backgroundImage = 'url("background.png")';
	}
	setTimeout(function() {flicker(Math.floor(seconds - 150), itr+1)}, Math.floor(seconds - 150));
}