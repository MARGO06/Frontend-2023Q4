//burger-menu

const headerLogo = document.querySelector('.header__logo');
const headerIcon = document.querySelector('.header__icon');
const headerNavigation = document.querySelector('.header__navigation');
const headerItems = document.querySelectorAll('.header__item');
const headerLinks = document.querySelectorAll('.header__link');


function showNavigation () {
  if(headerLogo && headerIcon) {
    headerIcon.addEventListener('click',(e)=>{
        document.body.classList.toggle('lock');
        headerLogo.classList.toggle('active');
        headerIcon.classList.toggle('active');
        headerNavigation.classList.toggle ('active');
        console.log('nice')
    })
  }
}

showNavigation()

function closeNavigation () {
   headerItems.forEach(headerItem => {
     headerItem.addEventListener('click',(e) => {
      if(headerIcon.classList.contains('active')) {
        document.body.classList.remove('lock');
        headerLogo.classList.remove('active');
        headerIcon.classList.remove('active');
        headerNavigation.classList.remove ('active');
        console.log('nice3')
      }
     })
   })
}

closeNavigation ()

function smoothScroll () {
  headerLinks.forEach(headerLink => {
    headerLink.addEventListener('click',(e) =>{
        e.preventDefault();
        const id = headerLink.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({
            behavior:'smooth',
        })
    })
})
}

smoothScroll()

//create slider

const coffeeSliders = document.querySelectorAll('.coffee');
const buttonRight = document.querySelector('.choose__right');
const buttonLeft = document.querySelector('.choose__left');

let currentSlide = 0;

coffeeSliders.forEach((slide, index) => slide.style.transform = `translateX(${100*index}%)`);

//next slider
function clickButtonRight () {
  buttonLeft.addEventListener('click',(e) => {
    currentSlide += 1;
    coffeeSliders.forEach((slide, index) => slide.style.transform = `translateX(${100*(index-currentSlide)}%)`);
    console.log('hello')
  })
}

clickButtonRight();