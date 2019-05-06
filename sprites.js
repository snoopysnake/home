const sprites = document.querySelectorAll('.sprites > img');
var timeouts = {}; // obj of timeouts
for (var i = 0; i < sprites.length; i++) {
	timeouts[sprites[i].src] = 'fin';
	sprites[i].addEventListener('mouseover', function() {
		var sprite = this;
		sprite.classList.add('sprites-spin');
		if (timeouts[sprite.src] == 'fin') {
			timeouts[sprite.src] = setTimeout(function() {
				sprite.classList.remove('sprites-spin');
				timeouts[sprite.src] = 'fin';
			}, 1010);
		}
	}, true);
}