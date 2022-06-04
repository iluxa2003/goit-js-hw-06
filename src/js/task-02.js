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
for (const key in ingredients) {
  const inter = document.createElement('li');
  inter.classList.add("item");
  inter.textContent = ingredients[key];
  special.push(inter);
}
specialRecepie.append(...special)