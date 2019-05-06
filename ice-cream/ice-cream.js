var face = document.getElementById('face');
var yes_lever = document.getElementById('yes-lever');
var no_lever = document.getElementById('no-lever');

var no = document.getElementById('no');
no.addEventListener('click', pull_no_lever);
var yes = document.getElementById('yes');
yes.addEventListener('click', pull_yes_lever);

function pull_no_lever() {
	no_lever.setAttribute('transform', 'rotate(-34,110.25041,111.08737)');
	no_lever.classList.add('lever-pulled');
	// opposite
	if (yes_lever.classList.contains('lever-pulled')) {
		yes_lever.removeAttribute('transform');
	}
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'ice-cream/no.xml', true);
	xhr.send();
	xhr.onload = function(e) {
	  face.innerHTML = xhr.responseText;
	}
}

function pull_yes_lever() {
	yes_lever.setAttribute('transform', 'rotate(-34,58.636639,109.82938)');
	yes_lever.classList.add('lever-pulled');
	// opposite
	if (no_lever.classList.contains('lever-pulled')) {
		no_lever.removeAttribute('transform');
	}
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'ice-cream/yes.xml', true);
	xhr.send();
	xhr.onload = function(e) {
	  face.innerHTML = xhr.responseText;
	}
}
