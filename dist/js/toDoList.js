"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TodoList = function TodoList(params) {
  var _this = this;

  _classCallCheck(this, TodoList);

  _defineProperty(this, "listEl", null);

  _defineProperty(this, "newItemEl", null);

  _defineProperty(this, "items", []);

  _defineProperty(this, "hideCompleted", false);

  _defineProperty(this, "isFieldValid", function () {
    return '' !== _this.newItemEl.value.trim() || (alert("I'm sorry Chris, I'm afraid I Can't do that... Daisy, Dais.."), !1);
  });

  _defineProperty(this, "addItem", function (keyEvent) {
    if (keyEvent.keyCode === 13) {
      if (_this.isFieldValid()) {
        var newItemLabel = _this.newItemEl.value;
        console.log('adding item', newItemLabel);
        var item = new TodoItem(newItemLabel);

        _this.items.push(item);

        _this.newItemEl.placeholder = 'Please Enter New Item';

        _this.render();
      }
    }
  });

  _defineProperty(this, "toggleCompleted", function () {
    _this.hideCompleted = !_this.hideCompleted;

    _this.render(); // this.completed = document.querySelectorAll('.finished');
    // let total = this.items.length;
    // for (total = 0; total < this.completed.length; total++) {
    // 	this.completed[total].();
    // }

  });

  _defineProperty(this, "render", function () {
    console.log('refreshing todo list', _this.items);

    var ul = _this.listEl.querySelector('ul');

    ul.innerText = '';
    _this.newItemEl.value = '';

    var itemsLeft = _this.items.filter(function (item) {
      return !item.isFinished;
    });

    var showItems = _this.hideCompleted ? itemsLeft : _this.items;
    showItems.forEach(function (item) {
      ul.appendChild(item.element);
    });
    _this.totalLeft.innerText = itemsLeft.length;
    _this.totalComp.innerText = _this.items.filter(function (item) {
      return item.isFinished;
    }).length;
    _this.totalImport.innerText = _this.items.filter(function (item) {
      return item.isImportant;
    }).length;
  });

  console.log('TodoList constructor', params);
  var selector = params.selector;
  this.listEl = document.querySelector(selector);
  console.log('el', this.listEl);
  this.newItemEl = this.listEl.querySelector('input[type="text"]');
  this.newItemEl.addEventListener('keyup', this.addItem);
  this.toggleFinishedItems = document.querySelector('.toggle-finished');
  this.toggleFinishedItems.addEventListener('click', this.toggleCompleted);
  this.totalLeft = document.querySelector('.total');
  this.totalComp = document.querySelector('.done-total');
  this.totalImport = document.querySelector('.import-total');
  this.render();
  window.addEventListener('updateTodoList', this.render);
};
//# sourceMappingURL=toDoList.js.map
