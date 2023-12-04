const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	hamburger.classList.remove('active');
	navMenu.classList.remove('active');
	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.add("scroll-down");
		body.classList.remove("scroll-up");
	}

	if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}

	lastScroll = currentScroll;
})