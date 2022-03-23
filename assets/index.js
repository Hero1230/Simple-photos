let currentSelected;

document.querySelector(".container").addEventListener("click", (event) => {
	if (event.target.classList.contains("panel")) {
		if (currentSelected) {
			currentSelected.classList.remove("active");
		}
		currentSelected = event.target;
		event.target.classList.add("active");
	}
});
