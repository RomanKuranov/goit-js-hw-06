const categoriesEl = document.querySelector(`#categories`);
const itemEl = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${categoriesEl.childElementCount}`);

const itemElements = itemEl.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.childElementCount}`);
});
