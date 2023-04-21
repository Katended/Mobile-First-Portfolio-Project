const form = document.getElementById('myform');
form.addEventListener('submit', (event) => {        
    const email = document.getElementById('email').value;
  
    if(/[A-Z]/.test(email)){

        const errorMessage = document.querySelector('.errorMessage');  
        errorMessage.style.display='block';
        event.preventDefault();  
        errorMessage.textContent = "Invalid email. Please use lowercase letters.";                 
    }   
    errorMessage.style.display='none'; 
  }); 