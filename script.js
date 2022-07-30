const setError = (where, text) => {
  const error = document.getElementById(`${where} error`);
  error.innerHTML = text;
};

const isEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

// USERNAME VALIDATION
(() => {
  const usernameInput = document.querySelector('.usernameInput');
  const usernameForm = document.querySelector('.form-control.username');
  // const usernameError = document.querySelector('.username.error');

  usernameInput.addEventListener('input', () => {
    usernameInput.setCustomValidity('');
    usernameInput.checkValidity();
  });

  usernameInput.addEventListener('change', () => {
    if (usernameInput.checkValidity() === true) {
      usernameForm.classList.remove('error');
      usernameForm.classList.add('success');
    } else if (usernameInput.checkValidity() === false) {
      if (usernameInput.value === '') {
        usernameForm.classList.add('error');
        usernameForm.classList.remove('success');
        usernameInput.setCustomValidity('Please enter your username');
        setError('username', 'Please enter your username');
      } else {
        usernameForm.classList.add('error');
        usernameForm.classList.remove('success');
        usernameInput.setCustomValidity('Please use only lower or uppercase letters');
        setError('username', 'Please use only lower or uppercase letters');
      }
    }
  });
})();

// EMAIL VALIDATION
(() => {
  const emailInput = document.querySelector('.emailInput');
  const emailForm = document.querySelector('.form-control.email');

  emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('');
    emailInput.checkValidity();
  });

  emailInput.addEventListener('change', () => {
    if (!isEmail(emailInput.value)) {
      emailForm.classList.add('error');
      emailForm.classList.remove('success');
      emailInput.setCustomValidity('Please enter valid email (eg.email@email.com)');
      setError('email', 'Please enter valid email (eg.email@email.com)');
    } else if (emailInput.checkValidity() === true) {
      emailForm.classList.remove('error');
      emailForm.classList.add('success');
    } else if (emailInput.checkValidity() === false) {
      if (emailForm.value === '') {
        emailForm.classList.add('error');
        emailForm.classList.remove('success');
        emailInput.setCustomValidity('Please enter your email');
        setError('email', 'Please enter your email');
      } else {
        emailForm.classList.add('error');
        emailForm.classList.remove('success');
        setError('email', 'Please enter your email');
      }
    }
  });
})();

// PASSWORD VALIDATION
(() => {
  const passwordInput = document.querySelector('.passwordInput');
  const passwordForm = document.querySelector('.form-control.password');
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  passwordInput.addEventListener('input', () => {
    passwordInput.setCustomValidity('');
    passwordInput.checkValidity();
  });

  passwordInput.addEventListener('change', () => {
    if (!passwordInput.value.match(passw)) {
      passwordForm.classList.add('error');
      passwordForm.classList.remove('success');
      setError('password', 'Your password must contain at least 6 letters, one upper and lower case letter, 1 digit');
      passwordInput.setCustomValidity('Your password must contain at least 6 letters, one upper and lower case letter, 1 digit');
    } else {
      passwordForm.classList.remove('error');
      passwordForm.classList.add('success');
    }
  });
})();

// PASSWORD CONFIRMATION
(() => {
  const passwordInput = document.querySelector('.passwordInput');
  const cpawsswordInput = document.querySelector('.cpasswordInput');
  const cpawsswordForm = document.querySelector('.form-control.cpassword');

  cpawsswordInput.addEventListener('change', () => {
    if (cpawsswordInput.value !== passwordInput.value) {
      cpawsswordForm.classList.add('error');
      cpawsswordForm.classList.remove('success');
      setError('cpassword', 'Passwords do not match');
      cpawsswordInput.setCustomValidity('Passwords must match');
    } else {
      cpawsswordForm.classList.remove('error');
      cpawsswordForm.classList.add('success');
      cpawsswordInput.setCustomValidity('');
    }
  });
})();
