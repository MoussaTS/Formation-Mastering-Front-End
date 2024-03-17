// Rappel des types de donnees
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariabvle; //type Undefined

// Tableau
// Objet = accolades / array = crochets
let array = ["Paris", "Marseille", "Lyon"];
// Premier crochet pour le premier array et deuxieme crochet pour la lettre
// console.log(array[0][3]);

let array2 = ["Paris", 22, true, [1, 2], { prenom: "Moussa" }];
// console.log(array2[4].prenom);

let objet = {
  pseudo: "Moussa",
  age: 22,
  technos: ["JavaScript", "TypeScript", "C", "Python"],
  admin: false,
};
// // Ajouter un element dans le tableau
objet.adress = "93 rue du code";
// // console.log(objet);

let data = [
  {
    pseudo: "Moussa",
    age: 22,
    technos: ["JavaScript", "TypeScript", "C", "Python"],
    admin: true,
  },
  {
    pseudo: "Ines",
    age: 21,
    technos: ["CSS", "SCSS", "Tailwind", "TypeScript"],
    admin: true,
  },
  {
    pseudo: "Yuva",
    age: 19,
    technos: ["React", "TypeScript", "Bootstrap", "NodeJs"],
    admin: false,
  },
];

// console.log(data[1].pseudo[0]);

// --------------------------------------------------
// Les structures de controle
// --------------------------------------------------

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus age que " + data[1].pseudo);
} else {
  // Valeur si if est faux
}

// While = "tant que" comme en C
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de : " + w);
}

// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// On declare la valeur de i / jusqu'ou on boucle / on incremente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(data[i].technos[1]);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "typescript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});
