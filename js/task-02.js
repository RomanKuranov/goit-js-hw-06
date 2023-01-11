const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsEl = document.querySelector('#ingredients');
const newLiEl = ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.classList.add('item');
  newLi.textContent = ingredient;
  return newLi;
});
ingredientsEl.append(...newLiEl);
console.log(ingredientsEl);
