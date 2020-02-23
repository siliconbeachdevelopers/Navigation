const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks")
    const navLinks = document.querySelectorAll('.navlinks li')
    //TOGGLE NAV
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
    //Animate Links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    });
}

navSlide();











//This is a clean way to call all small functions from here. 
const app = () => {
navSlide();
}