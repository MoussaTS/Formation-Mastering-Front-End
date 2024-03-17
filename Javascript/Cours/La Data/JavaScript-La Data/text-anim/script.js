const target = document.getElementById("target");
let wordIndex = 0;
let letterIndex = 0;
let array = [
  "apprentit\u00A0développeur",
  "passionné",
  "à\u00A0la\u00A0recherche\u00A0d'une\u00A0alternance",
];

const createLetter = () => {
  const letter = document.createElement("span");
  target.append(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();
