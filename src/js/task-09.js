const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const output = document.querySelector('.color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const  setColor = event => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  output.textContent = body.style.backgroundColor;
};
button.addEventListener("click", setColor);