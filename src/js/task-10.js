const container = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let size = 30;
const trash = [];
const createBoxes = (amount) => {
  for(let i = 0; i < input.value; i++){
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.height = `${size}px`;
    item.style.width = `${size}px`;
    trash.push(item)
    container.append(item);
    size += 10;
  }
}
const destroyBoxes = () => {
  for(const item in trash){
    trash[item].remove()
  }
  size = 30;
}
create.addEventListener("click", createBoxes)
destroy.addEventListener("click", destroyBoxes)