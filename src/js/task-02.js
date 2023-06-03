const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// звернення до улки
const ingredientsEl = document.querySelector('#ingredients');
// перебираємо масив інгредіентс
ingredients.forEach(ingredient => {
  // створення лішки
  const liEl = document.createElement('li');
// + текстовий контент
liEl.textContent = ingredient;
// + клас
liEl.classList.add('item');
// + li в улку
ingredientsEl.appendChild(liEl);
})
console.log(ingredientsEl);
