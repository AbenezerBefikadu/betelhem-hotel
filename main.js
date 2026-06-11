const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// welcome container
ScrollReveal().reveal(".welcome__content h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".welcome__content > p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 300,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// contact container
ScrollReveal().reveal(".contact__card", {
  ...scrollRevealOption,
  interval: 300,
});

ScrollReveal().reveal(".contact__form", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

// Get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
  return urlParams.get(param);
}

// Book room button handlers - using event delegation
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("book-room-btn")) {
    e.preventDefault();
    const roomName = e.target.getAttribute("data-room");
    console.log("Book Now clicked for room:", roomName);
    window.location.hash = `contact?room=${encodeURIComponent(roomName)}`;
    // Scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
});

// Pre-fill room field if room parameter exists
window.addEventListener("load", function () {
  const roomField = document.getElementById("room");
  const roomFromUrl = getQueryParam("room");
  if (roomFromUrl && roomField) {
    roomField.value = decodeURIComponent(roomFromUrl);
  }
});

// contact form handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact__form");
  const roomField = document.getElementById("room");
  const roomFromUrl = getQueryParam("room");
  
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        room: document.getElementById("room").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
      
      console.log("Form submitted with data:", formData);
      
      alert("Thank you for your message! Our team will get back to you soon.");
      contactForm.reset();
      // Keep the room selected if it was from URL
      if (roomFromUrl && roomField) {
        roomField.value = decodeURIComponent(roomFromUrl);
      }
    });
  }
});
