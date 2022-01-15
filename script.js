const header = document.getElementsByTagName("header")[0];
const homeTitle = document.getElementsByClassName("home-title")[0];
const homeAboutUsBtn = document.getElementsByClassName("home-about-us")[0];
const menuList = document.getElementsByClassName("menu-list")[0];
const completeExamWrapper = document.getElementsByClassName("complete-exam-wrapper")[0];
const goalDescriptionWrapper = document.getElementsByClassName("goal-description-wrapper")[0];
const goalWrapper = document.getElementsByClassName("goal-wrapper")[0];
const contactLocation = document.getElementsByClassName("contact-location")[0]
const contactNumbers = document.getElementsByClassName("contact-numbers")[0]

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});

window.addEventListener("load", () => {
    if(window.visualViewport.width >= 1240) {
        menuList.style.display = "flex";
    }
    if(window.visualViewport.width < 1240) {
        menuList.style.display = "none";
        goalWrapper.classList.remove("slide-left")
        completeExamWrapper.classList.remove("hide");
        goalDescriptionWrapper.classList.remove("hide");
        completeExamWrapper.classList.add("block");
        completeExamWrapper.classList.add("slide-in-bottom");
        goalDescriptionWrapper.classList.add("block");
        goalDescriptionWrapper.classList.add("slide-in-bottom");

        contactLocation.classList.remove("hide");
        contactNumbers.classList.remove("hide");

    }
})

$(document).ready(function(){

    //hamburger Toggle
    $('.humbarger').click(function(event){
        $('.menu-list').slideToggle(200);
    });

    $( window ).resize(function() {
        
        if(window.innerWidth >= 1240) {
            menuList.style.display = "flex";
        }
        if(window.innerWidth < 1240) {
            menuList.style.display = "none";
        }
    });

});


window.addEventListener("scroll", () => {
    let y = window.scrollY;
    let x = window.innerWidth;
    console.log(x)
    if(y >= 50 && x >= 1240) {
        header.classList.add("sticky")
        header.classList.remove("block")
    } else {
        header.classList.add("block")
        header.classList.remove("sticky")
    }

    if(y >= 300 && x >= 1240) {
        goalWrapper.classList.add("slide-left")
        completeExamWrapper.classList.remove("hide");
        goalDescriptionWrapper.classList.remove("hide");
        completeExamWrapper.classList.add("block");
        completeExamWrapper.classList.add("slide-in-bottom");
        goalDescriptionWrapper.classList.add("block");
        goalDescriptionWrapper.classList.add("slide-in-bottom");
    }

    if(y >= 900 && x >= 1240) {
        contactLocation.classList.remove("hide");
        contactLocation.classList.add("slide-in-bottom");
        contactNumbers.classList.remove("hide");
        contactNumbers.classList.add("slide-in-bottom");
    }
})

setTimeout(() => {
    homeTitle.style.display = "block";
}, 500);

setTimeout(() => {
    homeAboutUsBtn.style.display = "block";
}, 2500);