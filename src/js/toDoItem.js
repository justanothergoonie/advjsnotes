class TodoItem {
	label = '';
	element = null; // will be our constructed DOM element
	button = null;
	importantButton = null;
	isFinished = false;
	isImportant = false;

	constructor(aNewLabel) {
		console.log('TodoItem constructor', aNewLabel);
		this.label = aNewLabel;

		this.element = document.createElement('li');

		this.button = document.createElement('button');
		this.button.innerText = '❌';
		this.button.addEventListener('click', this.moveItem);

		this.importantButton = document.createElement('div');
		this.importantButton.innerText = '❕';
		this.importantButton.addEventListener('click', this.importantItem);

		const p = document.createElement('p');
		p.innerText = this.label;
		this.element.appendChild(p);
		this.element.appendChild(this.button);
		this.element.appendChild(this.importantButton);
	}

	moveItem = () => {
		this.isFinished = !this.isFinished;
		this.button.innerText = this.isFinished ? '✅' : '❌';
		this.render();
	};

	importantItem = () => {
		this.isImportant = !this.isImportant;
		this.importantButton.innerText = this.isImportant ? '❗' : '❕';
		this.render();
	};

	render = () => {
		if (this.isFinished) {
			this.element.classList.add('finished');
		} else this.element.classList.remove('finished');

		if (this.isImportant) {
			this.element.classList.add('important');
		} else this.element.classList.remove('important');
		window.dispatchEvent(new Event('updateTodoList'));
	};
}
