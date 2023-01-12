const decrementButtonEl = document.querySelector('button[data-action="decrement"]');

const incrementButtonEl = document.querySelector('button[data-action="increment"]');

const spanEl = document.querySelector('#value');

let counterValue = 0;

const actionDecrement = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

const actionIncrement = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

decrementButtonEl.addEventListener('click', actionDecrement);
incrementButtonEl.addEventListener('click', actionIncrement);
