var button = document.getElementById("hello")
var button2 = document.getElementById("hello2")
var button3 = document.getElementById("btn")
var scrollBtn = document.getElementById("scrollBtn")
var contentSection = document.getElementById("contentSection")

var factPopup = document.getElementById("factPopup")
var factText = document.getElementById("factText")
var factClose = document.getElementById("factClose")

var spaceFacts = [
    "A day on Venus is longer than a year on Venus.",
    "Neutron stars can spin at a rate of 600 rotations per second.",
    "There are more stars in the universe than grains of sand on every beach on Earth.",
    "One million Earths could fit inside the Sun.",
    "Space is completely silent because there is no atmosphere for sound to travel through.",
    "The footprints on the Moon will stay there for millions of years since there's no wind to blow them away.",
    "Saturn could float in water because it is mostly made of gas and is less dense than water.",
    "The largest known star, UY Scuti, is roughly 1,700 times the size of the Sun.",
    "A year on Mercury is just 88 Earth days long.",
    "The Milky Way galaxy will collide with the Andromeda galaxy in about 4.5 billion years.",
    "Jupiter has 95 known moons.",
    "The temperature on the surface of the Sun is about 5,500°C, but its core reaches 15 million°C.",
    "There is a giant storm on Jupiter, the Great Red Spot, that has been raging for over 350 years.",
    "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
    "Black holes can warp time itself due to their intense gravity.",
    "Olympus Mons on Mars is the tallest volcano in the solar system, nearly 3 times the height of Mount Everest.",
    "Astronauts can grow up to 5 cm taller in space due to the lack of gravity compressing their spine.",
    "The International Space Station travels at about 28,000 km/h, orbiting Earth roughly every 90 minutes.",
    "There could be more trees on Earth than stars in the Milky Way.",
    "A teaspoon of a neutron star would weigh about a billion tons on Earth."
]

function showRandomFact() {
    var randomIndex = Math.floor(Math.random() * spaceFacts.length)
    factText.textContent = spaceFacts[randomIndex]
    factPopup.classList.add("show")
}

function hideFact() {
    factPopup.classList.remove("show")
}


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
    showRandomFact()
})

factClose.addEventListener("click", () => {
    hideFact()
})

document.addEventListener("click", (e) => {
    if (factPopup.classList.contains("show") && !factPopup.contains(e.target) && e.target !== button3) {
        hideFact()
    }
})

scrollBtn.addEventListener("click", () => {
    contentSection.scrollIntoView({ behavior: "smooth" })
})