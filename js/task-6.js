const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
	const boxes = [];

	for (let i = 0; i < amount; i++) {
		const size = 30 + i * 10;
		const box = document.createElement("div");
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = getRandomHexColor();
		box.style.marginBottom = "10px";

		boxes.push(box);
	}

	boxesContainer.append(...boxes);
}

function destroyBoxes() {
	boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
	const amount = Number(inputRef.value);

	if (amount > 0 && amount <= 100) {
		createBoxes(amount);
		inputRef.value = "";
	} else {
		alert("Please enter a number between 1 and 100");
	}
});

destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;
}
