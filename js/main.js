let hamBtn = document.querySelector(".site-header__btn")
let elHeader = document.querySelector(".site-header")



hamBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header__active")
})



var elmOpen = document.querySelector(".plan-btn");
var elemWrapper = document.querySelector(".wrapper");
var elemClose = document.querySelector(".modal-close")


elmOpen.addEventListener("click",function(){
    elemWrapper.classList.add("model-show")
})

elemClose.addEventListener("click",function(){
    elemWrapper.classList.remove("model-show")
})

