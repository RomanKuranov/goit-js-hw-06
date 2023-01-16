function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 const inputEl = document.querySelector('input');
 const buttonCreate = document.querySelector('[data-create]');
 const buttonDestroy = document.querySelector('[data-destroy]');
 const divBoxes = document.querySelector('#boxes');


 const createBoxes= (amount) => {
  let divBoxSize = 20;

  for (let i = 1; i <= amount; i++) {
    const divBox = document.createElement('div'); 
  
    divBoxSize +=10;
    
     divBox.style.width = divBoxSize + 'px';
     divBox.style.height = divBoxSize + 'px';
     divBox.textContent += `№${i}`;
     divBox.style.backgroundColor = getRandomHexColor();

    divBoxes.appendChild(divBox);
}
 };

const onButtonCreateClick = ()=> {
  const amount = inputEl.value;
  createBoxes(amount);
};

const onButtonDestroyClick = ()=> {divBoxes.innerHTML = '';};

buttonCreate.addEventListener('click',onButtonCreateClick);
buttonDestroy.addEventListener('click', onButtonDestroyClick);
