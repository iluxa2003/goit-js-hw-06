const container = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let size = 30;
const createBoxes = (event, amount) => {
  amount = input.value
  for(let i = 0; i < amount; i++){
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.height = `${size}px`;
    item.style.width = `${size}px`;
    container.append(item);
    size += 10;
  }
}
const destroyBoxes = () => {
  container.innerHTML = ""
  size = 30;
}
create.addEventListener("click", createBoxes)
destroy.addEventListener("click", destroyBoxes)