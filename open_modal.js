const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");

function showmodal() {
	modal.classList.add("open");
}

function hidemodal() {
	modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
	buyBtn.addEventListener("click", showmodal);
}

modal.addEventListener("click", function (event) {
	event.stopPropagation();
});

modalClose.addEventListener("click", hidemodal);