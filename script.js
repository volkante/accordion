"use strict";

// Select and store html elements
const answerParagraphs = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");
const qaSections = document.querySelectorAll(".qa-section");

// Define a function to manage Accordion handler by click targets
function manageAccordion(e) {
  console.log("manageAccordion çalıştı!");
  console.log(e);
  console.log(e.target);

  // If a section contains the clicked element, toggle accordion and display paragraph
  qaSections.forEach((section, index) => {
    if (section.contains(e.target)) {
      toggleAccordion(answerParagraphs[index]);
      toggleActiveClass(questions[index]);
    }
  });
}

// Open accordion if closed, close if open by toggling class name
function toggleAccordion(element) {
  element.classList.toggle("hidden");
}

function toggleActiveClass(element) {
  element.classList.toggle("active");
}

// Add click event listener to each question and give manageAccordion to it as an argument
qaSections.forEach((element) => {
  element.addEventListener("click", manageAccordion);
});
