'use strict'

let menuBlock = document.querySelector('.menu__block');
let burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
	menuBlock.classList.toggle('menu__block__active');
})

