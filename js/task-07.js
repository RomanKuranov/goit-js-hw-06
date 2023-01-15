const refs = {
  inputEl: document.querySelector('#font-size-control'),
  spanEl: document.querySelector('#text'),
};

const onInputELFontSizeControle = event => {
  const fontSizeControlValue = event.currentTarget.value + 'px';
  refs.spanEl.style.fontSize = fontSizeControlValue;
};

refs.inputEl.addEventListener('input', onInputELFontSizeControle);
