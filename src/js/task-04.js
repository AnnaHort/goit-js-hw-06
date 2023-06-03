// 1
// створення змінної
let counterValue = 0;
console.log(counterValue);
// 2 
// стукаємо до  кнопок
const decrementEl = document.querySelector('button[data-action="decrement"]');
console.log(decrementEl);
const incrementEl = document.querySelector('button[data-action="increment"]');
console.log(incrementEl);
const valueSpan = document.getElementById("value");
console.log(valueSpan);
// + колбек та слухача 
// змінюємо значення спану
const newSpan = () => valueSpan.textContent = counterValue;
// на -1
const handleClickDecrement = () => {
  counterValue -= 1;
  newSpan()
};
decrementEl.addEventListener("click", handleClickDecrement);
// на +1
const handleClickIncrement = () => {
  counterValue += 1;
  newSpan()
};
incrementEl.addEventListener("click", handleClickIncrement);










