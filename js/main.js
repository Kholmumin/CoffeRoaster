let hamBtn = document.querySelector(".site-header__btn")
let elHeader = document.querySelector(".site-header")

hamBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header__active")
})

