"use strict";

// Select and store html elements
const answerParagraphs = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

// Define a function to manage Accordion handler by click targets
function manageAccordion(e) {
  if (e.target == questions[0]) {
    // if first question is clicked then toggle first paragraph
    console.log("1. tıklandı");
    toggleAccordion(answerParagraphs[0]);
  } else if (e.target == questions[1]) {
    // if second question is clicked then toggle second paragraph
    console.log("2. tıklandı");
    toggleAccordion(answerParagraphs[1]);
  } else if (e.target == questions[2]) {
    // if third question is clicked then toggle third paragraph
    console.log("3. tıklandı");
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
questions.forEach((element) => {
  element.addEventListener("click", manageAccordion);
});
