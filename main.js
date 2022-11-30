window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    //typeOutAboutMe();
}

function addEventListeners() {
    listenCheckbox();
    changePageButton();
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

function changePageButton() {
    const button = document.getElementById('scroll-to-skills');

    button.addEventListener('click', turnButtonUp);
}

function turnButtonUp() {    
    const buttonLink = document.getElementById('scroll-down');
    let buttonHref = buttonLink.getAttribute("href");

    if (buttonHref === "#skills") {
        buttonLink.setAttribute('href', '#start-page');
        console.log("hi")
    } else {
        buttonLink.setAttribute('href', '#skills');
        console.log("no")
    }
}



