'use strict'

//tabs

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });

  tabContent.forEach(function (item) {
    item.classList.remove('tabs__content-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

//hamburger

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header .menu');

const toggleMenu = () => {
  menu.classList.toggle('menu--active');
  menuBtn.classList.toggle('menu-btn--active');
}

menuBtn.addEventListener('click', e => {
  e.stopPropagation(); 

  toggleMenu();

});

document.addEventListener('click', e => {
  let target = e.target;
  let itsMenu = target == menu || menu.contains(target);
  let itsMenuBtn = target == menuBtn;
  let menuIsActive = menu.classList.contains('menu--active');

  if (!itsMenu && !itsMenuBtn && menuIsActive) {
  toggleMenu();
  }
})
