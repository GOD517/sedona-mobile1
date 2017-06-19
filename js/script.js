//================ Mobile main menu open-close

(function() {

var menuOpenBtn = document.querySelector(".main-nav-open");
var menuCloseBtn = document.querySelector(".main-nav-close");
var modalMenu = document.querySelector(".modal-menu");
var mainNav = document.querySelector(".main-nav");

function closeMenu() {
	modalMenu.classList.remove("modal-menu-open");
	mainNav.classList.remove("main-nav-active");
}

menuOpenBtn.addEventListener("click", function(event) {
	event.preventDefault();

	if (modalMenu.classList.contains("modal-menu-open")) {
		closeMenu();
	} else {
		modalMenu.classList.add("modal-menu-open");
		mainNav.classList.add("main-nav-active");
	}

});

menuCloseBtn.addEventListener("click", function(event) {
	event.preventDefault();
	closeMenu();
});

})();

// ================= Search form open-close

(function() {

var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-hotel-modal");
var close = popup.querySelector(".search-close");
var submitClose = popup.querySelector(".submit-btn");
var overlay = document.querySelector(".modal-overlay");

function closeModal() {
	popup.classList.remove("search-hotel-show");
	overlay.classList.remove("modal-overlay-show");
}

link.addEventListener("click", function(event) {
event.preventDefault();
overlay.classList.add("modal-overlay-show");
popup.classList.add("search-hotel-show");
});

close.addEventListener("click", function(event) {
event.preventDefault();
closeModal();
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("search-hotel-show")) {
			closeModal();
		}
	}
});


submitClose.addEventListener("click", function(event) {
event.preventDefault();
closeModal();
});

overlay.addEventListener("click", function(event) {
event.preventDefault();
closeModal();
});

})();
