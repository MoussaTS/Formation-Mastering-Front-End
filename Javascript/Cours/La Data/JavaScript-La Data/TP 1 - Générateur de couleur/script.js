function getColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
}

setInterval(getColor, 1500);
