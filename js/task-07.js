const sizeInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");
let size = 10;
const  change = event => {
    size = event.currentTarget.value
    textOutput.style.fontSize = `${size}px`;
  };
  sizeInput.addEventListener("input", change)