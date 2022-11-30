window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    //typeOutAboutMe();
}

function addEventListeners() {
    listenCheckbox();
    listenPageButton();
}

function listenCheckbox() {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', toggleTheme);
}

/**
 * When the user clicks on the checkbox it changes to lightmode/darkmode.
 * @param {change} event 
 */
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


function listenPageButton() {
    const button = document.getElementById('scroll-to-skills')
    button.addEventListener('click', scrollDown)
}

function scrollDown(event) {
    const skills = document.getElementById('skills')
    skills.scrollIntoView({ behavior: 'smooth' })
}



