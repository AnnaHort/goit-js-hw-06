const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const spanEl = document.querySelector('#name-output');
console.log(spanEl);
const callback = () => {
const inputValue = inputEl.value;
spanEl.textContent = inputValue;
if (!inputValue) {
    spanEl.textContent = 'Anonymus'
}
};
    // подія набору тексту в inputEl
    inputEl.addEventListener("input", callback)
