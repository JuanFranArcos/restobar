'use strict'

//Scroll
window.addEventListener('scroll', (e)=>{
    e.preventDefault();
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Menu 
function toggleMenu(){
    const menuToggle  = document.querySelector('.menuToggle');
    const navigation  = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
document.querySelector('.menuToggle').addEventListener('click', toggleMenu);


  /*** SLIDER PRINCIPAL ***/
  window.onload = function () {
    // const prevBtn = document.getElementById("prev");
    // const nextBtn = document.getElementById("next");

    // prevBtn.addEventListener("click", function () {
    //   prevSlide();
    // });
    // nextBtn.addEventListener("click", function () {
    //   nextSlide();
    // });
    $(".preloader").fadeOut();
    document.querySelector('body').classList.remove('hidden');
    setInterval(nextSlide, 5000);
  };
  let slideNumber = 0;
  const prevSlide = () => {
    const slides = document.getElementsByClassName("slides");
    const slider = document.getElementById("slider");
    const currentSlide = slider.getElementsByClassName("current");
    currentSlide[0].classList.remove("current");
    if (slideNumber == 0) {
      slideNumber = slides.length - 1;
    } else {
      slideNumber = slideNumber - 1;
    }
    slides[slideNumber].classList.add("current");
  };
  const nextSlide = () => {
    const slides = document.getElementsByClassName("slides");
    const slider = document.getElementById("slider");
    const currentSlide = slider.getElementsByClassName("current");
    currentSlide[0].classList.remove("current");
    if (slideNumber == slides.length - 1) {
      slideNumber = 0;
    } else {
      slideNumber = slideNumber + 1;
    }
    slides[slideNumber].classList.add("current");
  };


  var img = document.querySelector('.img');
    img.onmousemove = function(e){
        var x = - e.clientX/50;
          var  y =  - e.clientY/50; 
        img.style.backgroundPositionY = y + 'px';
        img.style.backgroundPositionX = x + 'px';
    }


const reservations = document.getElementById('reservation');
const btnClose = document.getElementById('btnClose');
const map = document.getElementById('map');
const contactInfo = document.getElementById('contact__info');

reservations.addEventListener('click', (e)=>{
  e.preventDefault();
  if(screen.width < 700 ){
    map.style.transform = "translate3d(-100%,0,0)";
    contactInfo.style.transform = "translate3d(0,0,0)";
    contactInfo.style.width = "100vw";
    $("body").addClass("hidden");
  }else{
    map.style.transform = "translate3d(0,0,0)";
    contactInfo.style.transform = "translate3d(0,0,0)";
    $("body").addClass("hidden");
  }
});

btnClose.addEventListener('click', (e)=>{
  e.preventDefault();
  map.style.transform = "translate3d(-100%,0,0)";
  contactInfo.style.transform = "translate3d(100%,0,0)";
  $("body").removeClass("hidden");
})

