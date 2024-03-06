// SELECTEURS

// Pointé des éléments avec la commandes documents.querySelector('balise_html_à_pointer')

// document.querySelector("#btn-1").style.background = "cyan";

// const exempleH4 = document.querySelector("h4");
// console.log(exempleH4);

// exempleH4.style.background = "cyan";

// Click event
// addEventListener pour ajouter une event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// toggle sert à add ou remove en fonction si l'event est activer ou non
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});
