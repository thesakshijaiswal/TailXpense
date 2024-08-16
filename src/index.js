const navbar = document.querySelector('header');
window.onscroll = () => {
  if(window.scrollY > 100){
    navbar.classList.add('bg-color-primary-dark');
    navbar.classList.add('border-b');
    navbar.classList.add('border-color-gray');
  }else{
    navbar.classList.remove('bg-color-primary-dark');
    navbar.classList.remove('border-b');
    navbar.classList.remove('border-color-gray');
  }
}

//Samll Screen Menu

document.addEventListener('DOMContentLoaded', (event) => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const menuBtn = document.querySelector(".fa-solid");
  const navLink = document.querySelector("#nav-link");

  // Toggle menu visibility when hamburger is clicked
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuBtn.classList.toggle("fa-xmark");
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.add('hidden');
      menuBtn.classList.add("fa-bar");
      menuBtn.classList.remove("fa-xmark");
    }
  });
  document.addEventListener('click', (e) => {
    if (!navLink.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.add('hidden');
      menuBtn.classList.add("fa-bar");
      menuBtn.classList.remove("fa-xmark");
    }
  });
});

//Testimonial
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview() {
    for(userPic of userPics){
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }

    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

//Pricing Toggler
const toggleBtn = document.getElementById("toggleBtn");
const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");

  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");

  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
})
