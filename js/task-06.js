const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
// + прослуховувач на втрату фокусу

// колбек функція
const callback = () => {
const attributeLength = parseInt(inputEl.getAttribute('data-length'));
const inputValueLength = inputEl.value.length;

if(inputValueLength === attributeLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid')
}
else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid')
}
}
// прослушка
inputEl.addEventListener("blur", callback);
