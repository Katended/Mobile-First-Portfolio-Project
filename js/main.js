document.addEventListener("DOMContentLoaded",function(){

    let humbugerDiv = document.querySelector('.humbuger');
    let navMenu = document.querySelector('.nav-container');
    let navBtn = document.querySelector('.btn-close');
    let navUl = document.querySelector('.nav-menu');

    humbugerDiv.addEventListener('click',function() {
       // $('.navMenu').fadeIn('500');
       
      navUl.classList.toggle('nav-menu');
     navUl.classList.add('nav-menu-white');
      navBtn.classList.add('btn-close-show');   
      navMenu.classList.remove('nav-container'); 
      navMenu.classList.add('nav-container-cover');
      humbugerDiv.classList.toggle('humbuger-hide');     
     
    });

    navBtn.addEventListener('click',function() {
      navMenu.classList.add('nav-container'); 
       navBtn.classList.toggle('btn-close-show');   
       humbugerDiv.classList.remove('humbuger-hide');  
       navMenu.classList.toggle('nav-container');
       navUl.classList.toggle('nav-menu'); 
       navMenu.classList.toggle('nav-container-cover');     
    });



});