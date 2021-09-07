"use-strict";
// sidebar
const menu_btn = document.querySelector(".header__menu-btn");

const close_btn = document.querySelector(".header__list--close");
const menu = document.querySelector(".header__menu");

menu_btn.addEventListener("click", () => {
	menu.style.display = "block";
	setTimeout(() => {
		menu.style.transform = "translateX(0)";
		menu_btn.style.display = "none";
	}, 250);
});

close_btn.addEventListener("click", () => {
	menu.style.transform = "translateX(100%)";
	console.log("aaaaaaaa");
	setTimeout(() => {
		menu_btn.style.display = "block";
		menu.style.display = "none";
	}, 250);
});
// cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";
});
