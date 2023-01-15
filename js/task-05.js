const refs = {
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

const onImputValue = event => {
  if (event.currentTarget.value === '') {
    refs.spanEl.textContent = 'Anonymous';
    return;
  }

  refs.spanEl.textContent = event.currentTarget.value;
};

refs.inputEl.addEventListener('input', onImputValue);
