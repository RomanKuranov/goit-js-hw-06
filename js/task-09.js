const refs = {
  spanEl:document.querySelector('.color'),
  buttonEl:document.querySelector('.change-color'),
  bodyEl:document.querySelector('body'),
}

const onButtonClick = (event) => {
  refs.spanEl.textContent = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


refs.buttonEl.addEventListener("click", onButtonClick);