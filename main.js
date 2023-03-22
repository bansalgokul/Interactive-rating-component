/** @format */

const submit = document.querySelector(".rating__btn");

const rating_view = document.querySelector(".rating");
const thank_view = document.querySelector(".thank-you");

const rate = document.querySelectorAll(".r");

rate.forEach((rating) => {
	rating.addEventListener("click", (event) => {
		rating.classList.add("selected");
		rating.classList.remove("unselected");
		rate.forEach((others) => {
			if (others !== rating && others.classList.contains("selected")) {
				others.classList.remove("selected");
				others.classList.add("unselected");
			}
		});
	});
});

submit.addEventListener("click", (event) => {
	rating_view.classList.toggle("hidden");
	thank_view.classList.toggle("hidden");
	rating_view.classList.toggle("active");
	thank_view.classList.toggle("active");

	const curRating = document.querySelector(".selected").textContent;
	document.querySelector(
		".thank__span"
	).textContent = `You selected ${curRating} out of 5`;
});
