let key = '';

document.addEventListener('keydown', (e) => {
	key = e.key;
});

document.addEventListener('keyup', () => {
	key = '';
});

document.addEventListener('click', (e) => {
	if (key === 'Meta') {
		e.target.style.display = 'none';
	}
}, false);
