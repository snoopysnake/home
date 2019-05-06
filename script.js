const menu = document.getElementById('menu');
const hamburger = document.getElementById('menuToggle');
const checkbox = document.querySelector('#menuToggle input');

document.body.addEventListener('click', function(e) {
	console.log(e.target.parentNode);
	if (e.target.parentNode != menu && e.target.parentNode != hamburger) {
		if (checkbox.checked) {
			checkbox.click();
		}
	}
}, true);
