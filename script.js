var button = document.getElementById("hello")
var button2 = document.getElementById("hello2")
var button3 = document.getElementById("btn")
var contentSection = document.querySelector("contentSection")
var scrollBtn = document.getElementById("scrollBtn")
var contentSection = document.getElementById("contentSection")


button.addEventListener("contextmenu" , ()=>{
    alert("DON'T HACK US WE ARE CURRENTLY BROKE...!!!")
})

button.addEventListener("click" , ()=>{
    alert("THE SITE IS UNDER CONSTRUCTION...!!!")
})


button2.addEventListener("contextmenu" , ()=>{
    alert("DON'T HACK US WE ARE CURRENTLY BROKE...!!!")
})

button3.addEventListener("contextmenu" , ()=>{
    alert("DON'T HACK US WE ARE CURRENTLY BROKE...!!!")
})

button3.addEventListener("click" , ()=>{
    alert("THE SITE IS UNDER CONSTRUCTION...!!")
})

scrollBtn.addEventListener("click", () => {
    contentSection.scrollIntoView({ behavior: "smooth" })
})