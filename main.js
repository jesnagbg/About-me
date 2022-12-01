window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    //typeOutAboutMe();
    detectSkillsVisibility();
    detectWorkVisibility();
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

//Help
/**
 * Listens to see if a button gets clicked. If clicked runs the function scrollDown.
 * @param {click} event 
 */
function listenPageButton(event) {
    const button = document.getElementById('scroll-to-skills')
    button.addEventListener('click', scrollDown)
}

//Help
/**
 * Scrolls down to the element 'skills' comes into view.
 * @param {scroll} event 
 */
function scrollDown(event) {
    const skills = document.getElementById('skills')
    skills.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Checks if #skills is inside the viewport (20%). If it is then it is shown and faded in.
 */
function detectSkillsVisibility() {
    const skillsContainer = document.getElementById('skills');
    
    const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            removeHiddenOnSkills();
            console.log('enter mid');
            return;
        }
        console.log('leave mid');
        applyHiddenOnSkills();
    }, {
        root: null,
        threshold: 0.2,
    })

    observer.observe(skillsContainer);
}

/**
 * Applies .hidden and removes .fade-in to #skills
 */
function applyHiddenOnSkills() {
    const skillsContainer = document.getElementById('skills');
    
    skillsContainer.classList.add('hidden');
    skillsContainer?.classList.remove('fade-in');
}

/**
 * Removes .hidden and applies .fade-in to #skills
 */
function removeHiddenOnSkills() {
    const skillsContainer = document.getElementById('skills');
    
    skillsContainer?.classList.remove('hidden');
    skillsContainer.classList.add('fade-in');
}

/**
 * Checks if #bottom-page is inside the viewport (10%). If it is then it is shown and faded in.
 */
function detectWorkVisibility() {
    const workSection = document.getElementById('bottom-page');
    const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            removeHiddenOnWork();
            console.log('enter bottom');
            return;
        }
        console.log('leave bottom');
        applyHiddenOnWork();
    }, {
        root: null,
        threshold: 0.1,
    })

    observer.observe(workSection);
}

/**
 * Applies .hidden and removes .fade-in to #bottom-page
 */
function applyHiddenOnWork() {
    const bottomContainer = document.getElementById('bottom-page');

    bottomContainer.classList.add('hidden');
    bottomContainer?.classList.remove('fade-in');
}

/**
 * Removes .hidden and applies .fade-in to #bottom-page
 */
function removeHiddenOnWork() {
    const bottomContainer = document.getElementById('bottom-page');

    bottomContainer?.classList.remove('hidden');
    bottomContainer.classList.add('fade-in');
}