const panels = document.querySelectorAll('.panel');

function openActive() {
	const blurb = this.childNodes[1];
	const title = this.childNodes[3];
	this.classList.toggle('open-active');
	blurb.classList.toggle('open-active');
	title.classList.toggle('open-active');
};

panels.forEach(panel => panel.addEventListener('click', openActive));
