// стукаємо до елементів
const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);
const spanEl = document.querySelector('#text');
console.log(spanEl);
// пишемо колбек
const handleSizeControl = () => {
    const fontSize = inputEl.value + "px";
    spanEl.style.fontSize = fontSize;
};
// ставимо прослушку
inputEl.addEventListener('input',handleSizeControl)