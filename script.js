var irl = false;

window.onload = function setup() {
	setUpBubble('abt', 'about me');
	setUpBubble('port', 'my portfolio');
	setUpBubble('cv', 'my resume');
	hoverOver();
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

function hoverOver() {
	var me = document.getElementById('me');
	// me.onmouseover = function() {
	// 	if (!irl) {
	// 		me.src = 'img/meirl.png';
	// 		irl = true;
	// 	}
	// 	else {
	// 		me.src = 'img/me5.png';
	// 		irl = false;
	// 	}
	// }
	// me.onclick = function() {
	// 	if (!irl) {
	// 		me.src = 'img/meirl.png';
	// 		irl = true;
	// 	}
	// 	else {
	// 		me.src = 'img/me5.png';
	// 		irl = false;
	// 	}
	// }
	me.onclick = function() {
		if (!irl) {
			me.src = 'img/meirl.png';
			irl = true;
		}
		else {
			me.src = 'img/me5.png';
			irl = false;
		}
	}
}