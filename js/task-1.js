const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
	const categoryTitle = item.querySelector("h2").textContent;
	const subItems = item.querySelectorAll("ul li");
	console.log(`Category: ${categoryTitle}`);
	console.log(`Elements: ${subItems.length}`);
});
