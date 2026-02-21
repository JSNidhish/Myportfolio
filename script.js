// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
});

// Contact Button
function showMessage() {
    alert("Thank you for contacting me! I will get back to you soon.");
}