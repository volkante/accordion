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
  //toggle relevant accordion if its parent element (question) or its sibling paragraph has been clicked
  if (
    e.target.parentElement == questions[0] ||
    e.target == answerParagraphs[0]
  ) {
    toggleAccordion(answerParagraphs[0]);
  } else if (
    e.target.parentElement == questions[1] ||
    e.target == answerParagraphs[1]
  ) {
    toggleAccordion(answerParagraphs[1]);
  } else if (
    e.target.parentElement == questions[2] ||
    e.target == answerParagraphs[2]
  ) {
    toggleAccordion(answerParagraphs[2]);
  }
}

// Open accordion if closed, close if open by toggling class name
function toggleAccordion(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

// Add click event listener to each question and give manageAccordion to it as an argument
qaSections.forEach((element) => {
  element.addEventListener("click", manageAccordion);
});
