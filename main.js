window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    toggleLightMode();

}

function toggleLightMode() {
    const checkbox = document.getElementById('checkbox');
    const body = document.querySelector('body');

    checkbox.addEventListener('change', function() {
        body.classList.toggle('dark');
        displayCorrectImage();
    });
}

function displayCorrectImage() {
    const imgEyesOpen = document.getElementById("profile-pic").src="assets/drawingme.png";
    const imgEyesClosed = document.getElementById("profile-pic").src="assets/drawingmesleep.png";

    if (document.getElementById('checkbox').checked) {
        document.getElementById("profile-pic").src="assets/drawingme.png";
    } else {
        document.getElementById("profile-pic").src="assets/drawingmesleep.png";
    }
}


