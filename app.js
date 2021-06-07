const counting = document.getElementById('counting');
const heart = document.getElementById('hearts');
const image = document.querySelector('.image');

let startTime = 0;

const createHeart = (e) => {
	const insideTop = e.offsetY;
	const insideLeft = e.offsetX;
	const iEl = document.createElement('i');
	iEl.classList.add('fas');
	iEl.classList.add('fa-heart');
	iEl.style.top = `${insideTop}px`;
	iEl.style.left = `${insideLeft}px`;
	heart.appendChild(iEl);
};

window.addEventListener('click', (e) => {
	if (startTime === 0) {
		startTime = new Date().getTime();
	} else {
		if (new Date().getTime() - startTime < 800) {
			createHeart(e);
			startTime = 0;
		} else {
			startTime = new Date().getTime();
		}
	}
});
