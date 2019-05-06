const monitor = document.querySelector('.monitor');
const newBackground = new Image();
newBackground.onload = function() {
    monitor.style.backgroundImage = 'url("background.png")';
};
newBackground.src = 'background.png';
