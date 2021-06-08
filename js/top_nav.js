const buttonMenu = document.querySelector('.toggle-menue');
const dropdoun = document.querySelector('.link');
let topNan = document.querySelector('.top_nav'), overLay = document.querySelector('.men');
let menuOpen = false;
buttonMenu.addEventListener('click', () => {
    if(!menuOpen) {
        buttonMenu.classList.add('open');
        topNan.classList.add('open');
        topNan.style.position = 'fixed';
        overLay.style.display = "block";
        menuOpen = true;
    } else {
        buttonMenu.classList.remove('open');
        topNan.classList.remove('open');
        topNan.style.position = 'absolute';
        overLay.style.display = "none";
        menuOpen = false;
    }
});