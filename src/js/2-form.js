let formData = { email: '', message: '' };
const LS_Key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('#email');
const formMessage = document.querySelector('#textarea');

const localData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state') !== null) {
  formMessage.value = localData.message;
  formEmail.value = localData.email;
}
form.addEventListener('input', event => {
  if (event.target.nodeName === 'INPUT') {
    formData.email = event.target.value;
  }
  if (event.target.nodeName === 'TEXTAREA') {
    formData.message = event.target.value;
  }

  localStorage.setItem(LS_Key, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(LS_Key);
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
