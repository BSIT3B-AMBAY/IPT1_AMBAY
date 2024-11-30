document.addEventListener("DOMContentLoaded", function () {
    // Toggle Button Functionality
    const togglebtn = document.querySelector(".togglebtn");
    const nav = document.querySelector(".navlinks");

    if (togglebtn && nav) { // Ensure elements exist
        togglebtn.addEventListener("click", function () {
            this.classList.toggle("click");
            nav.classList.toggle("open");
        });
    } else {
        console.error("Error: .togglebtn or .navlinks not found in the DOM.");
    }

    // Typed.js Animation
    new Typed(".input", {
        strings: ["Frontend Developer", "UX Designer", "Web Developer"],
        typeSpeed: 70, // Speed of typing
        backSpeed: 55, // Speed of backspacing
        loop: true     // Loop animation
    });
});
