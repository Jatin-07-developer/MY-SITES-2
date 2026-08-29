var button = document.getElementById("hello")
var button2 = document.getElementById("hello2")
var button3 = document.getElementById("btn")
var scrollBtn = document.getElementById("scrollBtn")
var contentSection = document.getElementById("contentSection")

var factPopup = document.getElementById("factPopup")
var factOverlay = document.getElementById("factOverlay")
var factText = document.getElementById("factText")
var factClose = document.getElementById("factClose")

var spaceFacts = [
    "A day on Venus is longer than a year on Venus.",
    "Neutron stars can spin hundreds of times per second.",
    "There are more stars in the observable universe than grains of sand on Earth's beaches.",
    "One million Earths could fit inside the Sun.",
    "Space is silent because sound needs a medium such as air to travel.",
    "Footprints on the Moon can remain for millions of years because there is no wind or rain.",
    "Saturn is less dense than water and could theoretically float in a giant ocean.",
    "UY Scuti is one of the largest known stars by radius.",
    "A year on Mercury lasts only 88 Earth days.",
    "The Milky Way and Andromeda galaxies are expected to merge in roughly 4.5 billion years.",
    "Jupiter has 95 officially recognized moons.",
    "The Sun's surface is about 5,500°C, while its core reaches roughly 15 million°C.",
    "Jupiter's Great Red Spot is a giant storm that has lasted for centuries.",
    "Sunlight takes about 8 minutes and 20 seconds to reach Earth.",
    "Black holes have gravity so strong that even light cannot escape from inside their event horizon.",
    "Olympus Mons on Mars is the tallest known volcano in the solar system.",
    "Astronauts can become temporarily taller in space because their spines stretch in microgravity.",
    "The International Space Station travels around Earth at roughly 28,000 km/h.",
    "Some estimates suggest there may be hundreds of billions of stars in the Milky Way.",
    "A teaspoon of neutron-star material would weigh billions of tons on Earth.",
    "Venus is the hottest planet in our solar system despite Mercury being closer to the Sun.",
    "Uranus rotates on its side, with an axial tilt of about 98 degrees.",
    "Neptune has the fastest planetary winds in the solar system, reaching over 2,000 km/h.",
    "Jupiter is the largest planet in our solar system.",
    "Mercury has extreme temperature changes between its day and night sides.",
    "Mars has two small moons named Phobos and Deimos.",
    "The Moon is slowly moving away from Earth by about 3.8 centimeters each year.",
    "Earth is the only known planet with large amounts of stable liquid water on its surface.",
    "The Sun contains more than 99% of the total mass of our solar system.",
    "Light travels through space at about 299,792 kilometers per second.",
    "Pluto takes about 248 Earth years to complete one orbit around the Sun.",
    "Venus rotates in the opposite direction to most planets in the solar system.",
    "Mercury has no substantial atmosphere like Earth's.",
    "Saturn's rings are made mostly of countless pieces of ice and rock.",
    "Jupiter's magnetic field is the strongest planetary magnetic field in our solar system.",
    "Neptune was the first planet whose existence was predicted mathematically before it was observed.",
    "Mars appears red because iron minerals in its surface have oxidized.",
    "The Sun is classified as a G-type main-sequence star.",
    "A solar eclipse occurs when the Moon passes between Earth and the Sun.",
    "A lunar eclipse occurs when Earth passes between the Sun and the Moon.",
    "The Moon has much weaker gravity than Earth.",
    "Stars are enormous balls of hot plasma held together by gravity.",
    "The nearest star to the Sun is Proxima Centauri.",
    "Proxima Centauri is more than four light-years away from Earth.",
    "A light-year measures distance, not time.",
    "Black holes can merge and produce ripples in spacetime called gravitational waves.",
    "Some galaxies contain trillions of stars.",
    "Galaxies can have spiral, elliptical, or irregular shapes.",
    "The Milky Way is a barred spiral galaxy.",
    "Our solar system is located in one of the Milky Way's spiral arms.",
    "The Sun orbits the center of the Milky Way galaxy.",
    "One orbit of the Sun around the Milky Way takes roughly 230 million years.",
    "Mars has the largest known dust storms in the solar system.",
    "Sunsets on Mars can appear bluish near the Sun because of the planet's dusty atmosphere.",
    "Water ice exists at the permanently shadowed regions of some lunar craters.",
    "Europa, one of Jupiter's moons, is believed to have a vast ocean beneath its icy surface.",
    "Enceladus, a moon of Saturn, shoots plumes of water-rich material into space.",
    "Titan, Saturn's largest moon, has lakes and seas made of liquid methane and ethane.",
    "Titan is the only moon known to have a dense, nitrogen-rich atmosphere.",
    "Io, a moon of Jupiter, is the most volcanically active world known in the solar system.",
    "Jupiter's moon Ganymede is the largest moon in the solar system.",
    "Ganymede is even larger in diameter than the planet Mercury.",
    "Callisto, a moon of Jupiter, is one of the most heavily cratered objects in the solar system.",
    "Neptune's moon Triton orbits in the opposite direction of Neptune's rotation.",
    "Pluto has a heart-shaped region on its surface called Tombaugh Regio.",
    "Pluto and its largest moon Charon are unusually close in size.",
    "Pluto has mountains made largely of water ice.",
    "Asteroids are mostly rocky or metallic remnants left over from the formation of the solar system.",
    "Comets are made largely of ice, dust, and rocky material.",
    "A comet can develop a glowing coma when it approaches the Sun.",
    "Comet tails generally point away from the Sun because of solar wind and radiation pressure.",
    "The asteroid belt lies mainly between the orbits of Mars and Jupiter.",
    "Most meteors burn up in Earth's atmosphere before reaching the ground.",
    "A meteorite is a space rock that survives atmospheric entry and reaches the surface.",
    "The largest known asteroid in the main asteroid belt is Ceres.",
    "Ceres is classified as a dwarf planet.",
    "Most of the solar system's planets orbit the Sun in roughly the same flat plane.",
    "Earth's atmosphere protects the surface from much of the Sun's harmful ultraviolet radiation.",
    "Earth's magnetic field helps shield the planet from charged particles from the Sun.",
    "The aurora borealis occurs when charged particles interact with Earth's upper atmosphere.",
    "The aurora australis is the southern counterpart of the northern lights.",
    "Solar flares can release enormous amounts of energy from the Sun.",
    "Coronal mass ejections can send huge clouds of charged particles into space.",
    "Space weather can interfere with satellites, radio communication, and power systems on Earth.",
    "The Hubble Space Telescope has observed galaxies billions of light-years away.",
    "The James Webb Space Telescope observes the universe mainly in infrared wavelengths.",
    "Looking farther into space means looking further back in cosmic history.",
    "The cosmic microwave background is leftover radiation from the early universe.",
    "The universe is estimated to be about 13.8 billion years old.",
    "The observable universe is much larger than the distance light could travel during the universe's age because space itself has expanded.",
    "Dark matter does not appear to emit or absorb light, but its gravity affects galaxies and other objects.",
    "Dark energy is associated with the accelerating expansion of the universe.",
    "Some stars end their lives in spectacular explosions called supernovae.",
    "A supernova can briefly outshine an entire galaxy.",
    "Neutron stars are incredibly dense remnants of massive stars.",
    "Some neutron stars have extremely powerful magnetic fields and are called magnetars.",
    "Pulsars are rapidly rotating neutron stars that emit beams of radiation.",
    "White dwarfs are the dense remnants of stars similar in mass to the Sun.",
    "The Sun will eventually become a white dwarf after passing through its red giant phase.",
    "Stars generate energy through nuclear fusion in their cores.",
    "Hydrogen fusion is the main energy source of Sun-like stars.",
    "The elements in your body were produced through cosmic processes, including stellar nucleosynthesis.",
    "Gold and many other heavy elements can be created in extreme cosmic events such as neutron-star mergers."
]

function showRandomFact() {
    var randomIndex = Math.floor(Math.random() * spaceFacts.length)
    factText.textContent = spaceFacts[randomIndex]
    factPopup.classList.add("show")
    factOverlay.classList.add("show")
}

function hideFact() {
    factPopup.classList.remove("show")
    factOverlay.classList.remove("show")
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

factOverlay.addEventListener("click", () => {
    hideFact()
})

scrollBtn.addEventListener("click", () => {
    contentSection.scrollIntoView({ behavior: "smooth" })
})