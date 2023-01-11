const categoriesEl = document.querySelectorAll(`#categories .item`);
console.log(`Number of categories: ${categoriesEl.length}`);

const itemEl = categoriesEl.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelectorAll('ul li').length}`);
});
