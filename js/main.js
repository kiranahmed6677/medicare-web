// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Appointment Form

const form = document.getElementById("appointmentForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    message.textContent = "Appointment Booked Successfully!";
    form.reset();

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});