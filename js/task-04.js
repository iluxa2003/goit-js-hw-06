const plusButton = document.querySelector('button[data-action="increment"]');
const minusButton = document.querySelector('button[data-action="decrement"]');
const domSpan = document.querySelector('#value');
let counterValue = 0;
const plus = event => {
    counterValue++;
    domSpan.textContent = counterValue;
  };
  const minus = event => {
    counterValue--;
    domSpan.textContent = counterValue;
  };
  plusButton.addEventListener("click", plus);
  minusButton.addEventListener("click",minus)
