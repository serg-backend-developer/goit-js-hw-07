//*Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль
//*по кліку на button.change-color і задає це значення кольору текстовим вмістом
//*для span.color.
//*Для генерування випадкового кольору використовуй функцію getRandomHexColor().

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", () => {
	const newColor = getRandomHexColor();

	body.style.backgroundColor = newColor;
	colorSpan.textContent = newColor;
});
