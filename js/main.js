document.addEventListener('DOMContentLoaded', () => {
  const humbugerDiv = document.querySelector('.humbuger');
  const navMenu = document.querySelector('.nav-container');
  const navBtn = document.querySelector('.btn-close');
  const navUl = document.querySelector('.nav-menu');
  const MenuItems = document.querySelectorAll('.nav-menu');

  humbugerDiv.addEventListener('click', () => {
    navUl.classList.toggle('nav-menu');
    navUl.classList.add('nav-menu-white');
    navBtn.classList.add('btn-close-show');
    navMenu.classList.remove('nav-container');
    navMenu.classList.add('nav-container-cover');
    humbugerDiv.classList.toggle('humbuger-hide');
  });
  navBtn.addEventListener('click', () => {
    navMenu.classList.add('nav-container');
    navBtn.classList.toggle('btn-close-show');
    humbugerDiv.classList.remove('humbuger-hide');
    navMenu.classList.toggle('nav-container');
    navUl.classList.toggle('nav-menu');
    navMenu.classList.toggle('nav-container-cover');
  });
  MenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      navBtn.click();
    });
  });
});