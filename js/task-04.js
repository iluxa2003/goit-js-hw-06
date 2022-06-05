const Plusbotton = document.querySelector('button[data-action="increment"]');
const Minusbotton = document.querySelector('button[data-action="decrement"]');
const DomSpan = document.querySelector('#value');
let counterValue = 0;
const plus = event => {
    counterValue++;
    DomSpan.textContent = counterValue;
  };
  const minus = event => {
    counterValue--;
    DomSpan.textContent = counterValue;
  };
  Plusbotton.addEventListener("click", plus);
  Minusbotton.addEventListener("click",minus)
