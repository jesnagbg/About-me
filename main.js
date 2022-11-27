window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    listenCheckbox();

}

function listenCheckbox() {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', toggleTheme);
}

function toggleTheme(event) {
    const body = document.querySelector('body');
    const profilePic = document.getElementById("profile-pic");

    if (event.target.checked) {
        body?.classList.remove('dark');
        profilePic.src = "assets/drawingme.png";
    } else {
        body.classList.add('dark');
        profilePic.src = "assets/drawingmesleep.png";
    }
}

