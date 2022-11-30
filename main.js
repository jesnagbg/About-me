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
 * 
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
    const button = document.getElementById('scroll-to-skills');

    //button.addEventListener('click', changeButtonDirection);
    button.onclick = changeButtonDirection;
}

function changeButtonDirection() {  
    const buttonIcon = document.getElementById('button-icon');
    const buttonLink = document.getElementById('scroll-down');
    let buttonHref = buttonLink.getAttribute("href");
    
    if (buttonHref === "#skills") {
        buttonLink.setAttribute('href', '#top-page');
        removeClasses();
        buttonIcon.classList.add('fa-solid', 'fa-angles-down', 'linked-logo');
        console.log("hi")
    } else if (buttonHref === "#top-page") {
        buttonLink.setAttribute('href', '#skills');
        removeClasses();
        buttonIcon.classList.add('fa-solid', 'fa-angles-up', 'linked-logo');
        console.log("no")
    } else {
        buttonLink.setAttribute('href', '#skills');
        removeClasses();
        buttonIcon.classList.add('fa-solid', 'fa-angles-up', 'linked-logo');
        console.log('hej')
    }
}

function removeClasses() {
    const buttonIcon = document.getElementById('button-icon');
    buttonIcon.classList = "";
}



