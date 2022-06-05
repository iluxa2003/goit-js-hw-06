const Sizeinput = document.querySelector("#font-size-control");
const TextOutput = document.querySelector("#text");
let size = 10;
const  change = event => {
    size = event.currentTarget.value
    TextOutput.style.fontSize = `${size}px`;
  };
  Sizeinput.addEventListener("input", change)