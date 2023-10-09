$(function () {
		$(document).scroll(function () {
			var $header = $("header");
			var $header__container = $(".navigation");
			$header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
			$header__container.toggleClass('scrolled-border', $(this).scrollTop() > $header.height());
		});
	});

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// скролл мышью
	// mousewheel: {
	// 	sensitivity: 1,
	// 	eventsTarget: ".swiper"
	// },
	// скрол клавиатурой
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	grabCursor: true,
	touchRatio: 3,
});
// const menu = document.querySelector("#menu__box");
// const links = Array.from(menu.children);
// 	links.forEach((link) => {
// 	link.addEventListener("click", closeOnClick);
// });
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#navigation-list").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}