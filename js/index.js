var toggles = document.querySelectorAll(".header-toggle")
var close_ = document.querySelectorAll(".menu-close")


toggles.forEach(button=>{
    button.addEventListener("click",()=>{
         var menu = document.querySelector("#menu-panel")
         menu.classList.toggle("is-show")
    })
})
 

close_.forEach(button=>{
    button.addEventListener("click",()=>{
        var menu = document.querySelector("#menu-panel")
        menu.classList.toggle("is-show")
   })
})