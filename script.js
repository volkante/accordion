"use strict";

// Select and store sections
const qaSections = document.querySelectorAll(".qa-section");

// Define a function to manage Accordion handler by click targets
function manageAccordion(e) {
  // If a section contains the clicked element, toggle accordion to display paragraph
  qaSections.forEach((section) => {
    if (section.contains(e.target)) {
      toggleActiveClass(section);
    }
  });
}

// Change the color of number, question and svg and add/remove top border by adding or removing active class
function toggleActiveClass(element) {
  for (let i = 0; i < 3; i++) {
    element.classList.toggle("active");
  }
}

// Add click event listener to each section and give manageAccordion to it as an argument
qaSections.forEach((element) => {
  element.addEventListener("click", manageAccordion);
});
