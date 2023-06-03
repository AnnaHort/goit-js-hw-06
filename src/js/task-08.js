// стукаємо до елементів
const formEl = document.querySelector('.login-form');
// колбек
const handleSubmit = (event) => {
event.preventDefault();

const {
    elements: { email, password }
} = event.currentTarget;

if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const fillFields = {
    email : email.value,
    password : password.value
  };

  console.log(fillFields);

  formEl.reset();
}

// вішаємо прослушку
formEl.addEventListener('submit', handleSubmit);
