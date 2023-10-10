const e=document.querySelector("#hamb"),o=document.querySelector("#popup"),t=document.body,l=document.querySelector("#navigation-list").cloneNode(1);// При клике на иконку hamb вызываем ф-ию hambHandler
e.addEventListener("click",// Выполняем действия при клике ..
function(n){n.preventDefault(),// Переключаем стили элементов при клике
o.classList.toggle("open"),e.classList.toggle("active"),t.classList.toggle("noscroll"),o.appendChild(l)});// Код для закрытия меню при нажатии на ссылку
const n=Array.from(l.children);// Закрытие попапа при клике на меню
function c(){o.classList.remove("open"),e.classList.remove("active"),t.classList.remove("noscroll")}// Для каждого элемента меню при клике вызываем ф-ию
n.forEach(e=>{e.addEventListener("click",c)}),$(function(){$(document).scroll(function(){var e=$("header"),o=$(".navigation");e.toggleClass("scrolled",$(this).scrollTop()>e.height()),o.toggleClass("scrolled-border",$(this).scrollTop()>e.height())})}),new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},// скролл мышью
// mousewheel: {
// 	sensitivity: 1,
// 	eventsTarget: ".swiper"
// },
// скрол клавиатурой
keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},grabCursor:!0,touchRatio:3});