class TodoList {
	listEl = null;
	newItemEl = null;
	items = [];

	constructor(params) {
		console.log('TodoList constructor', params);

		const selector = params.selector;
		this.listEl = document.querySelector(selector);
		console.log('el', this.listEl);

		this.newItemEl = this.listEl.querySelector('input[type="text"]');
		this.newItemEl.addEventListener('keyup', this.addItem);

		this.deleteItems = document.querySelector('.clear-finished');
		this.deleteItems.addEventListener('click', this.clearCompleted);

		this.totalLeft = document.querySelector('.total');
		this.totalComp = document.querySelector('.done-total');
		this.totalImport = document.querySelector('.import-total');

		this.render();
	}

	isFieldValid = () => {
		return (
			'' !== this.newItemEl.value.trim() ||
			(alert(
				"I'm sorry Chris, I'm afraid I Can't do that... Dasiy, Dais.."
			),
			!1)
		);
	};

	clearCompleted = () => {
		this.completed = document.querySelectorAll('.finished');
		let total = this.items.length;
		for (total = 0; total < this.completed.length; total++) {
			this.completed[total].remove();
		}
	};

	addItem = (keyEvent) => {
		if (keyEvent.keyCode === 13) {
			if (this.isFieldValid()) {
				const newItemLabel = this.newItemEl.value;
				console.log('adding item', newItemLabel);

				const item = new TodoItem(newItemLabel);
				this.items.push(item);
				this.newItemEl.placeholder = 'Please Enter New Item';
				this.render();
				this.updateItemCount();
			}
		}
	};

	render = () => {
		console.log('refreshing todo list', this.items);

		const ul = this.listEl.querySelector('ul');
		this.newItemEl.value = '';

		this.items.forEach((item) => {
			ul.appendChild(item.element);
		});
		this.totalLeft.innerText = this.items.filter(
			(item) => !item.isFinished
		).length;

		this.totalComp.innerText = this.items.filter(
			(item) => item.isFinished
		).length;

		this.totalImport.innerText = this.items.filter(
			(item) => item.isImportant
		).length;
	};
}
