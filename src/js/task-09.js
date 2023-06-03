function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// стукаємо
const bodyEl = document.querySelector('body');
console.log(bodyEl);
const btnEl = document.querySelector('.change-color');
console.log(btnEl);
const spanEl = document.querySelector('.color');
console.log(spanEl);
// колбек
const handleClick = () => {
const randomHexColor = getRandomHexColor();
bodyEl.style.backgroundColor = randomHexColor;
spanEl.textContent = randomHexColor;
}
// вішаємо прослушку на кнопку
btnEl.addEventListener('click', handleClick);

