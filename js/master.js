// chick If There's Local Storage color OPtion
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main--color', mainColors);
    // Remove Active Class From All Color List Item
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");
        // Add Active Class On Element With Data-color === Local Storage ITem
        if(element.dataset.color === mainColors){
            // Add Active Class
            element.classList.add("active");
        }
    });

}

// Random Background Opation
let backgroundOption = true;
// Varible To Control The Background Interval
let backgroundInterval;

// Check If The Local Storage Random Background Item 
let backgroundLocalItem = localStorage.getItem("background_option");


// Click On Taggle The Interval
document.querySelector(".toggle-settings .fa-cog").onclick = function () {
    //Toggle Class Fa-spin for rotation on self
    this.classList.toggle("fa-spin");
    //Togggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
}


// Swith Colors 
const colorsLi = document.querySelectorAll(".color-list li");
// Loop On All List Items
colorsLi.forEach(li => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {
        // Set Color On Root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);

    });
});

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    
    // Skills Outer Height 
    let skillsOuterHeight = ourSkills.offsetHeight;
    
    // Window Height
    let windowHeight = this.innerHeight;

    // Windo ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });

    }

};


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomeWhere(element) {
    element.forEach(ele => {

        ele.addEventListener("click", (e) => {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
    
            });
    
        });
    
    });
}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

// Handel Active State
function handleActive (ev) {
    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        
        element.classList.remove("active");

    });

    // Add Active Class On Self
    ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocalItem === 'block') {

        bulletContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }

}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if(span.dataset.display === 'show') {

            bulletContainer.style.display = "block";

            localStorage.setItem("bullets_option", 'block');

        }else{

            bulletContainer.style.display = "none";

            localStorage.setItem("bullets_option", 'none');

        }
        handleActive(e);

    });

});

// Toggle Menu
let ToggleBtn = document.querySelector(".toggle-menu");

let tlinks = document.querySelector(".links");

var typed = new Typed('.animate', {
    strings: [
        "Web Developer",
        "Freelancer",
        "Web Designer"
    ],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true
});
