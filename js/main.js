// Variables
//Form Inputs
const adj1 = document.querySelector("#adj1");
const noun = document.querySelector("#noun");
const adj2 = document.querySelector("#adj2");
const clothing = document.querySelector("#clothing");
const bodyPart = document.querySelector("#bodyPart");
const verb = document.querySelector("#verb");
const food = document.querySelector("#food");

//Display Mad Lib
const madLibDisplay = document.querySelector(".madLibsForm__p");

//Form
const form = document.querySelector("form");

//Variable to contain the mad lib story
const story = `My friends and I started a secret club! We meet every day by the <b>${adj1} ${noun}</b>. Our club has some very special rules. If you want to join, you have to wear a <b>${adj2} ${clothing}</b> on your <b>${bodyPart}</b>. You are not allowed to <b>${verb}</b> during meetings, and you can only eat <b>${food}</b> for your meals. If you are interested in joining, let me know!`;



// Event Listeners
//Code for handling "submit" events upon form completion
form.addEventListener("submit", (event) => {
    // Prevent default form behaviour
    event.preventDefault();

    // Validate that form inputs contain text
    !adj1.value ? (alert("You have not entered the first adjective!"), adj1.focus())
    : !noun.value ? (alert("You have not entered a noun!"), noun.focus())
    : !adj2.value ? (alert("You have not entered the second adjective!"), adj2.focus())
    : !clothing.value ? (alert("You have not entered an item of clothing!"), clothing.focus())
    : !bodyPart.value ? (alert("You have not entered a body part!"), bodyPart.focus())
    : !verb.value ? (alert("You have not entered a verb!"), verb.focus())
    : !food.value ? (alert("You have not entered a food item!"), food.focus())
    // Display the mad lib story when all inputs have text
    : displayMadLibStory();
});

//Code for handling "reset" events upon reset button being pressed
form.addEventListener("reset", () => {
    // Clear mad lib story from paragraph
    //Text inputs automatically cleared by the "reset" action
    clearMadLibStory();
});



// Functions
//Function for displaying the mad lib story
displayMadLibStory = () => {
    madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun}`, noun.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb}`, verb.value)
    .replace(`${food}`, food.value);
};

//Function for clearing the mad lib story
clearMadLibStory = () => {
    madLibDisplay.innerHTML = "";
};