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

// Check If Random Background Local Storage Is Not Empty
if(backgroundLocalItem !== null) {
    
    if (backgroundLocalItem === 'true') {

        backgroundOption = true;

    }else {
        backgroundOption = false;
    }
    // Remove Active Class All Span
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active");
    });
    // Add Active Class 
    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}

// Click On Taggle The Interval
document.querySelector(".toggle-settings .fa-cog").onclick = function () {
    //Toggle Class Fa-spin for rotation on self
    this.classList.toggle("fa-spin");
    //Togggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
}
// Swith Random Background Color
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
// Loop On All Span
randomBackEl.forEach(span => {
    // Click On Every Span
    span.addEventListener("click", (e) => {

        handleActive(e);

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImg();
            localStorage.setItem("background_option", true);
        }else {
            backgroundOption = false;
            
            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);


        }
    });
});
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
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Get Array Of Images
let imgsArray = ["p1.png", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"];

// Function To Randomize Imags
function randomizeImg() {

    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // Change Background Images Url
            landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
        }, 3000);
    }
}
randomizeImg();

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

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        
        // Create Overlay Element
        let Overlay = document.createElement("div");

        // Add Class To Overlay
        Overlay.className = 'popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(Overlay);

        // Create The Popup
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';
        
        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement("h3");

            //Create Text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To Heading
            imgHeading.appendChild(imgText);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);

        }

        // Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup To Body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Pupop Box
        popupBox.appendChild(closeButton);

    });

});

// Close Popup
document.addEventListener('click', function (e) {

    if (e.target.className == 'close-button') {

        //Remove Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }

});

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

// Reset Button
document.querySelector(".reset-options").onclick = function () {

    // When there is data in it
    localStorage.removeItem("bullets_option"); 
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");

    //localStorage.clear();

    //Reload Window
    window.location.reload();

}

// Toggle Menu
let ToggleBtn = document.querySelector(".toggle-menu");

let tlinks = document.querySelector(".links");

ToggleBtn.onclick = function (e) {

    // Stop Propaction
    e.stopPropagation();

    //Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");
    
    //Toggle Class "open" On Links
    tlinks.classList.toggle("open");

};

// click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== ToggleBtn && e.target !== tlinks){

        // Check If menu Of Open
        if (tlinks.classList.contains("open")) {

            ToggleBtn.classList.remove("menu-active");

            tlinks.classList.remove("open");
        }

    }

});

// stop Propagation on The Menu
tlinks.onclick = function (e) {

    e.stopPropagation();

};
