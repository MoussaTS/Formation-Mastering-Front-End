// SELECTEURS

// Pointé des éléments avec la commandes documents.querySelector('balise_html_à_pointer')

// document.querySelector("#btn-1").style.background = "cyan";

// const exempleH4 = document.querySelector("h4");
// console.log(exempleH4);

// exempleH4.style.background = "cyan";

// Click event
// addEventListener pour ajouter un event
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

// ***********************************************
// Mouse Events
const mousemove = document.querySelector(".mousemove");

// "e" sert a designer la data (les données)
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});
// ----------------------------------------------
// KeyPress event (evenement lorsque une touche est presser)
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "h") {
    keypressContainer.style.background = "red";
  } else if (e.key === "j") {
    keypressContainer.style.background = "cyan";
  } else {
    keypressContainer.style.background = "green";
  }

  // ring();
});

// --------------------------------------------
// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log("test ! !");

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//----------------------------------------------
// Form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  // console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  // Annuler le comportement par defaut du navigateur (changer de page dans cette exemple)
  e.preventDefault();

  if (cgv.checked) {
    // inner.HTML pour ajouter une balise html
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les cgv");
  }
});

// --------------------------------------------------
// forEach

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
