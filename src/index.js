//Samll Screen Menu

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const navLink = document.querySelector("#nav-link");
const menuBtn = document.querySelector(".fa-solid");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    menuBtn.classList.toggle("fa-xmark");
});