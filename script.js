"use strict";

// Select and store html elements
const answerParagraphs = document.querySelectorAll(".answer");
const qaSections = document.querySelectorAll(".qa-section");

// Define a function to manage Accordion handler by click targets
function manageAccordion(e) {
  console.log("manageAccordion çalıştı!");
  // If a section contains the clicked element, toggle accordion and display paragraph
  qaSections.forEach((section, index) => {
    if (section.contains(e.target)) {
      toggleAccordion(answerParagraphs[index]);
      toggleBorder(section);
      toggleActiveClass(section);
    }
  });
}

// Open accordion if closed, close if open by toggling class name
function toggleAccordion(element) {
  element.classList.toggle("hidden");
}

// Change the color of number, question and svg by adding or removing them active class
function toggleActiveClass(element) {
  for (let i = 0; i < 3; i++) {
    element.children[i].classList.toggle("active");
  }
}

// Add top-border to the active section
function toggleBorder(element) {
  element.classList.toggle("border-top-active");
}

// Add click event listener to each section and give manageAccordion to it as an argument
qaSections.forEach((element) => {
  element.addEventListener("click", manageAccordion);
});
