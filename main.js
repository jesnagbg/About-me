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
    });
}




//var image = document.getElementsByClassName("image2");
//image.src = "image1.jpg"