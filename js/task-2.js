//* Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery
//* Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
//*Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().
//*Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//*Додай мінімальне оформлення галереї флексбоксами через CSS класи.

const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
	{
		url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
		alt: "Alpine Spring Meadows",
	},
	{
		url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
		alt: "Nature Landscape",
	},
	{
		url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
		alt: "Lighthouse Coast Sea",
	},
];

const galleryList = document.querySelector(".gallery");

const galleryItems = images.map((image) => {
	const li = document.createElement("li");
	li.classList.add("gallery-item");
	const img = document.createElement("img");
	img.src = image.url;
	img.alt = image.alt;
	img.classList.add("gallery-img");

	li.appendChild(img);
	return li;
});

galleryList.append(...galleryItems);
