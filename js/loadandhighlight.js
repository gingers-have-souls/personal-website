elements = document.querySelectorAll('[data-file]');

for (let i = 0; i < elements.length; i++) {
	fetch(elements[i].getAttribute('data-file'))
		.then(data => data.text())
		.then(html => elements[i].textContent = html)
		.then(() => Prism.highlightElement(elements[i]));
}
