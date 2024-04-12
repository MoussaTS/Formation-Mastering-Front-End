// XMLHttpRequest

// function reqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// // req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

// ------
// FETCH
// ------

// fetch("mon-url", "objet d'option")
//   .then((response) => {
//     // response
//   })
//   .catch((err) => console.log(err));

fetch("data.txt").then((res) => res.text());
// .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// CRUD => Creat (POST), read (GET), update (PUT) Delete (DELETE)
// simuler un serveur back avec nodejs (npm i -g json-s) (npx json-server --watch db.json)
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Moussa",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};
// Pour le la method DELETE il faut entrer l'id de db.json du post a supprimer et enlever le body
document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyer")
  );
});

// -------------
// Asynchrone
// ------------

setTimeout(() => {
  // console.log("test");
}, 2000);

// Promise
// fetch("monlien").then((res) => res);

// async/await
async function fetchData() {
  await fetch("monlien");
  //attends que le await soit execute avant de faire la suite

  executeFonction();
}

// syntax async pour une fonction fleché
const fetchData2 = async () => {};
