// scroll animations
let scroll =
	window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};

let el_to_show = document.querySelectorAll(".show-on-scroll");

isElInViewPort = (el) => {
	let rect = el.getBoundingClientRect();

	let distance = 200;

	return (
		rect.top <=
		(window.innerHeight - distance ||
			document.documentElement.clientHeight - distance)
	);
};

loop = () => {
	el_to_show.forEach((el) => {
		if (isElInViewPort(el)) el.classList.add("show");
	});

	scroll(loop);
};

loop();

// change header on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		header.classList.add("shrink");
	} else {
		header.classList.remove("shrink");
	}
});
