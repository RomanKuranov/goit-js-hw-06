const inputEl = document.querySelector('#validation-input');

const onInputElBlur = event => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  }
  inputEl.classList.add('invalid');
};

inputEl.addEventListener('blur', onInputElBlur);
