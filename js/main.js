// Form Inputs
const adj1 = document.querySelector("#adj1");
const noun = document.querySelector("#noun");
const adj2 = document.querySelector("#adj2");
const clothing = document.querySelector("#clothing");
const bodyPart = document.querySelector("#bodyPart");
const verb = document.querySelector("#verb");
const food = document.querySelector("#food");

// Display Mad Lib
const madLibDisplay = document.querySelector(".mad-lib");

// Form
const form = document.querySelector("form");

// Variable to contain the mad lib story
const story = `"My friends and I started a secret club! We meet every day by the <b></b>`;

form.addEventListener("submit", (event) => {
    event.preventDefault();
});