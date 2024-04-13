const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
	const trimmedValue = event.currentTarget.value.trim();
	output.textContent = trimmedValue || "Anonymous";
});
