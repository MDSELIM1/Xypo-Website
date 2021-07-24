
let myNav = document.querySelector(".nav-var") ;

let menuBtn = document.querySelector("#menu-btn") ;

myNav.style.right = "-300px" ;

menuBtn.onclick = (() => {
    if(myNav.style.right == "-300px"){
        myNav.style.right = "0px"
    }else{
        myNav.style.right = "-300px"
    }
})

let scroll = new SmoothScroll('a[href*="#"]',{
    speed: 500 ,
    speedDuration : true 
})