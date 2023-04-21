const form = document.getElementById('myform');
form.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const errorMessage = document.querySelector('.errorMessage');
  if (/[A-Z]/.test(email)) {
    errorMessage.style.display = 'block';
    event.preventDefault();
    errorMessage.textContent = 'Invalid email. Please use lowercase letters.';
  }
  errorMessage.style.display = 'none';
});