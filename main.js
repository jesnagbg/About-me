window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    typeOutAboutMe();
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

function typeOutAboutMe() {
    let i = O;
    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque saepe vel odio veniam, assumenda!";
    const speed = 50;

    if (i < text.length) {
        document.getElementById('about-me').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeOutAboutMe, speed);
    }
    
}

