function scrambleText(el, finalText, options = {}) {
	const {
		duration = 1000,
		frameRate = 40,
		chars = 'abcdefghijklmnopqrstuvwxyz',
		staggerRatio = 1,
		revealOrder = 'sequential',
	} = options;

	const length = finalText.length;
	const totalFrames = Math.ceil(duration / frameRate);
	const lockStartFrame = Math.floor(totalFrames * (1 - staggerRatio));

	const order = Array.from({ length }, (_, i) => i);
	if (revealOrder === 'random') {
		for (let i = order.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[order[i], order[j]] = [order[j], order[i]];
		}
	}

	const lockFrames = new Array(length);
	order.forEach((charIndex, rank) => {
		lockFrames[charIndex] =
			length === 1
				? totalFrames
				: Math.round(
						lockStartFrame + (rank / (length - 1)) * (totalFrames - lockStartFrame)
				  );
	});

	let frame = 0;

	function randomChar() {
		return chars[Math.floor(Math.random() * chars.length)];
	}

	const interval = setInterval(() => {
		frame++;
		let output = '';
		for (let i = 0; i < length; i++) {
			const targetChar = finalText[i];
			if (targetChar === ' ') {
				output += ' ';
			} else if (frame >= lockFrames[i]) {
				output += targetChar;
			} else {
				output += randomChar();
			}
		}
		el.textContent = output;

		if (frame >= totalFrames) {
			el.textContent = finalText;
			clearInterval(interval);
		}
	}, frameRate);
}

const fortunes = [
	'let the light shine',
	'om shanti shanti shanti om',
	'imagine 1000 suns in the sky',
	'let the unknown rest',
];
const footerText = document.getElementById('footer-text');
const chosenFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
footerText.textContent = chosenFortune.replace(/\S/g, '•');

const video = document.getElementById('bg-video');
const overlay = document.getElementById('bg-overlay');
video.addEventListener('playing', () => {
	video.classList.add('loaded');
	overlay.classList.add('loaded');
	scrambleText(footerText, chosenFortune, { revealOrder: 'random' });
});

const aboutBtn = document.getElementById('about-btn');
const aboutModal = document.getElementById('about-modal');
const aboutModalCloseBtns = document.querySelectorAll('.about-modal-close');

function openModal() {
	aboutModal.classList.add('open');
	aboutModal.setAttribute('aria-hidden', 'false');
	aboutBtn.setAttribute('aria-expanded', 'true');
	document.body.classList.add('modal-open');
	document.body.style.overflow = 'hidden';
	aboutModal.focus();
	document.addEventListener('keydown', onKeydown);
}

function closeModal() {
	aboutModal.classList.remove('open');
	aboutModal.setAttribute('aria-hidden', 'true');
	aboutBtn.setAttribute('aria-expanded', 'false');
	document.body.classList.remove('modal-open');
	document.body.style.overflow = '';
	aboutBtn.focus();
	document.removeEventListener('keydown', onKeydown);
}

function onKeydown(event) {
	if (event.key === 'Escape') {
		closeModal();
	}
}

aboutBtn.addEventListener('click', openModal);
aboutModalCloseBtns.forEach((btn) => btn.addEventListener('click', closeModal));
