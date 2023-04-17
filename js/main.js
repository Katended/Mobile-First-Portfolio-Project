document.addEventListener("DOMContentLoaded",function(){

    let humbugerDiv = document.querySelector('#humbuger');
    let navMenu = document.querySelector('.nav-menu');

    humbugerDiv.addEventListener('click',function() {
       // $('.navMenu').fadeIn('500');
        navMenu.classList.toggle('active');

        let navBtn = document.querySelector('.btn-close');
        navBtn.classList.toggle('btn-close-show');   

       /// div.classList.add('.active');

    });

});