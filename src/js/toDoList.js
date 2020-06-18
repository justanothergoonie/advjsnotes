class TodoList {
	listEl = null;
	newItemEl = null;
	items = [];
	hideCompleted = false;
	constructor(params) {
		console.log('TodoList constructor', params);

		const selector = params.selector;
		this.listEl = document.querySelector(selector);
		console.log('el', this.listEl);

		this.newItemEl = this.listEl.querySelector('input[type="text"]');
		this.newItemEl.addEventListener('keyup', this.addItem);

		this.toggleFinishedItems = document.querySelector('.toggle-finished');
		this.toggleFinishedItems.addEventListener(
			'click',
			this.toggleCompleted
		);

		this.totalLeft = document.querySelector('.total');
		this.totalComp = document.querySelector('.done-total');
		this.totalImport = document.querySelector('.import-total');

		this.render();

		window.addEventListener('updateTodoList', this.render);
	}

	isFieldValid = () => {
		return (
			'' !== this.newItemEl.value.trim() ||
			(alert(
				"I'm sorry Chris, I'm afraid I Can't do that... Daisy, Dais.."
			),
			!1)
		);
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
			}
		}
	};

	toggleCompleted = () => {
		this.hideCompleted = !this.hideCompleted;
		this.render();
		// this.completed = document.querySelectorAll('.finished');
		// let total = this.items.length;
		// for (total = 0; total < this.completed.length; total++) {
		// 	this.completed[total].();
		// }
	};
	render = () => {
		console.log('refreshing todo list', this.items);

		const ul = this.listEl.querySelector('ul');
		ul.innerText = '';
		this.newItemEl.value = '';

		let itemsLeft = this.items.filter((item) => !item.isFinished);

		let showItems = this.hideCompleted ? itemsLeft : this.items;
		showItems.forEach((item) => {
			ul.appendChild(item.element);
		});
		this.totalLeft.innerText = itemsLeft.length;

		this.totalComp.innerText = this.items.filter(
			(item) => item.isFinished
		).length;

		this.totalImport.innerText = this.items.filter(
			(item) => item.isImportant
		).length;
	};
}
