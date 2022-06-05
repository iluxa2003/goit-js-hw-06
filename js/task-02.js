const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const special = [];
const specialRecepie = document.querySelector("#ingredients");
for (const ingridient of ingredients) {
  const inter = document.createElement('li');
  inter.classList.add("item");
  inter.textContent = ingridient;
  special.push(inter);
}
specialRecepie.append(...special)