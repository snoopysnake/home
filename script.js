window.onload = function setup() {
	setUpBubble('abt', 'about me');
	setUpBubble('port', 'my portfolio');
	setUpBubble('cv', 'my resume');
}

function setUpBubble(id, text) {
	var bubble = document.getElementById('bubb');

	var ele = document.getElementById(id);
	ele.onmouseover = function() {
		var message = document.getElementById('msg');
		message.innerHTML = text;
		bubble.style.display = 'inline';
	}
	ele.onmouseout = function() {
		var message = document.getElementById('msg');
		message.innerHTML = '';
		bubble.style.display = 'none';
	}
}