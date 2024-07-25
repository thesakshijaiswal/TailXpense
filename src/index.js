//Samll Screen Menu

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const navLink = document.querySelector("#nav-link");
const menuBtn = document.querySelector(".fa-solid");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    menuBtn.classList.toggle("fa-xmark");
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