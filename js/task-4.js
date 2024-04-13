const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const { email, password } = event.target.elements;

	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if (emailValue === "" || passwordValue === "") {
		alert("All form fields must be filled in");
		return;
	}

	const userData = {
		email: emailValue,
		password: passwordValue,
	};

	console.log(userData);
	event.target.reset();
}
