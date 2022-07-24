// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input');
// const messageEl = document.querySelector('textarea');
// const formData = {};

// checkLocaleStorage();

// emailEl.addEventListener('input', throttle(getInputValues, 500));
// messageEl.addEventListener('input', throttle(getInputValues, 500));

// function getInputValues(event) {
//   event.preventDefault();

//   const name = event.target.name;
//   const value = event.target.value;

//   formData[name] = value;

//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// form.addEventListener('submit', sendFormData);

// function sendFormData(event) {
//   event.preventDefault();

//   const email = event.target.elements.email.value;
//   const message = event.target.elements.message.value;

//   if (email === '' || message === '') {
//     alert('Please fill in all the fields!');
//   } else {
//     localStorage.removeItem('feedback-form-state');
//     console.log({ email, message });
//   }

//   event.currentTarget.reset();
// }

// function checkLocaleStorage() {
//   const savedData = localStorage.getItem('feedback-form-state')
//     ? JSON.parse(localStorage.getItem('feedback-form-state'))
//     : {};
//   if (savedData.email) {
//     emailEl.value = savedData.email;
//   }
//   if (savedData.message) {
//     messageEl.value = savedData.message;
//   }
// }


import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input[type=email]'),
};
const input = refs.form.elements;
const FORM_STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(FORM_STORAGE_KEY);
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onInput, 500));

if (savedData) {
  const formData = JSON.parse(savedData);
  refs.email.value = formData.email;
  refs.textarea.value = formData.message;
}

function onInput(event) {
  formData.email = input.email.value;
  formData.message = input.message.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(event) {
  event.preventDefault();
  formData.email = input.email.value;
  formData.message = input.message.value;
  if (input.email.value === '' || input.message.value === '') {
    alert('EMAIL and MESSAGE field can not be empty! Please fill in BOTH fields.');
  } else {
    console.log(formData);
    refs.form.reset();
    localStorage.removeItem(FORM_STORAGE_KEY);
  }
}