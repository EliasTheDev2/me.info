"use strict";
const body = document.body;
const toggleDark = document.getElementById("theme-toggle");
let isDarkMode = false; // Initial state (adjust based on default)
const blogsContainer = document.querySelector(".blog-one");
const tracklistContainer = document.getElementById("tracklist-container");

toggleDark.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("dark-mode");
  toggleDark.style.backgroundColor = isDarkMode ? "white" : "black";
  toggleDark.style.color = isDarkMode ? "black" : "white";
  const blogsContainer = document.getElementById("contact-container");
  if (!isDarkMode) {
    toggleDark.textContent = "Dark Mode";
    blogsContainer.style.borderColor = "black";
    tracklistContainer.style.borderColor = "black";
  } else {
    toggleDark.textContent = "Light Mode";
    blogsContainer.style.borderColor = "white";
    tracklistContainer.style.borderColor = "white";
  }
});

const navbar = document.body;
navbar.querySelectorAll("a").forEach((anchor) => {
  let anchorAttr = anchor.getAttribute("href");
  anchor.addEventListener("click", function (e) {
    if (anchorAttr.startsWith("#")) {
      e.preventDefault();
      document
        .querySelector(anchor.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  });
});

const phoneNumber = document.getElementById("phone-number");

phoneNumber.addEventListener("click", () => {
  navigator.clipboard.writeText(phoneNumber.textContent);
  phoneNumber.setAttribute("aria-label", "Copied!");
  setTimeout(() => {
    phoneNumber.setAttribute("aria-label", "Click to copy");
  }, 750);
});
