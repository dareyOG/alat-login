'strict mode';

// show button
const showBtn = document.querySelector('.btn--show');

const password = document.querySelector('.logIn__input #password');

const showPassword = () => {
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';

  password.setAttribute('type', type);
};

showBtn.addEventListener('click', showPassword);
