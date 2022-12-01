window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    //typeOutAboutMe();
    detectVisibility();
}

function addEventListeners() {
    listenCheckbox();
    listenPageButton();
}

/**
 * Listens to see if the checkbox gets changed. If changed runs the function toggleTheme.
 */
function listenCheckbox() {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', toggleTheme);
}

//Help
/**
 * When the user clicks on the checkbox it changes to lightmode/darkmode.
 * @param {MouseEvent} event 
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

//Help
/**
 * Listens to see if a button gets clicked. If clicked runs the function scrollDown.
 * @param {ClickEvent} event 
 */
function listenPageButton(event) {
    const button = document.getElementById('scroll-to-skills')
    button.addEventListener('click', scrollDown)
}

//Help
/**
 * Scrolls down to #skills.
 * @param {Event} event 
 */
function scrollDown(event) {
    const skills = document.getElementById('skills')
    skills.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Checks if an element is inside the viewport (10%). If it is then it is shown and faded in.
 */
function detectVisibility() {
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', entry.isIntersecting);
                //entry.target.classList.toggle('hidden', entry.isIntersecting);
                console.log('enter bottom');
                return;
            }
            entry.target.classList.remove('fade-in', entry.isIntersecting);
            console.log('leave bottom');
        }
    }, {
        threshold: 0.1,
    })

    const workSection = document.getElementById('bottom-page');
    const skillsSection = document.getElementById('skills');
  
    observer.observe(workSection);
    observer.observe(skillsSection);
 
}