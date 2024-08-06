"use strict";
const body = document.body;
const toggleDark = document.getElementById("theme-toggle");
let isDarkMode = false; // Initial state (adjust based on default)

toggleDark.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("dark-mode");
  toggleDark.style.backgroundColor = isDarkMode ? "white" : "black";
  toggleDark.style.color = isDarkMode ? "black" : "white";
  const contactBorder = document.getElementById("contact-container");
  if (!isDarkMode) {
    toggleDark.textContent = "Dark Mode";
    contactBorder.style.borderColor = "black";
  } else {
    toggleDark.textContent = "Light Mode";
    contactBorder.style.borderColor = "white";
  }
});

const navbar = document.getElementById("navbar");
navbar.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(anchor.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
const checklist = document.getElementById("checklist-container");

checklist.addEventListener("click", () => {
  checklist.querySelectorAll("label").forEach((l) => {
    l.addEventListener("click", () => {
      try {
        navigator.clipboard.writeText(l.textContent);
      } catch (e) {
        console.error("An error occured: " + e);
      }
    });
  });
});

const phoneNumber = document.getElementById("phone-number");

new Promise((resolve, reject) => {
  phoneNumber.addEventListener("click", () => {
    navigator.clipboard.writeText(phoneNumber.textContent);
    phoneNumber.setAttribute("aria-label", "Copied!");
    setTimeout(() => {
      phoneNumber.setAttribute("aria-label", "Click to copy");
    }, 750);
  });
});

// const boldTextID = document.getElementById("bold-text");
// boldTextID.addEventListener("mouseover", () => {
//   const selection = window.getSelection();
//   const range = document.createRange();
//   range.selectNodeContents(boldTextID);
//   selection.removeAllRanges();
//   selection.addRange(range);
//   // Apply custom styles to the selection
//   const selectionStyle = document.createElement("style");
//   selectionStyle.innerHTML = `*::selection { background-color: black; color: #4af626; }`;
//   document.head.appendChild(selectionStyle);
//   boldTextID.addEventListener("mouseout", () => {
//     const selectionStyle = document.querySelector("style");
//     if (selectionStyle) {
//       // Apply custom styles to the selection
//       const selectionStyle = document.createElement("style");
//       selectionStyle.innerHTML = `*::selection { background-color: inherit; color: inherit }`;
//       document.head.appendChild(selectionStyle);
//     }
//   });
// });
