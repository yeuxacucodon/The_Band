var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
var menuItems = document.querySelectorAll(".menu li a[href*='#']");

mobileMenu.onclick = function () {
	var isClose = header.clientHeight === headerHeight;
	if (isClose) {
		header.style.height = "auto";
	} else {
		header.style.height = null;
	}
};

for (var i = 0; i < menuItems.length; i++) {
	var menuItem = menuItems[i];

	menuItem.onclick = function () {
		header.style.height = null;
	};
}
