const menuBtn = document.getElementById("mobileMenuBtn"),
  mobileMenu = document.getElementById("mobileMenu");

//this function for controlling mobile menu
const mobileMenuHandler = () => {
  mobileMenu.classList.toggle("hidden");
};

//all eventlistener is here
menuBtn.addEventListener("click", mobileMenuHandler);
