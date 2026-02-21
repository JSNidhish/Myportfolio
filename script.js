function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent Successfully!");
});