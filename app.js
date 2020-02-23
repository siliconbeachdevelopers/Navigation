const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks")

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
}

navSlide();

//This is a clean way to call all small functions from here. 
const app = () => {
navSlide();
}