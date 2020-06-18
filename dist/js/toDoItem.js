"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TodoItem = // will be our constructed DOM element
function TodoItem(aNewLabel) {
  var _this = this;

  _classCallCheck(this, TodoItem);

  _defineProperty(this, "label", '');

  _defineProperty(this, "element", null);

  _defineProperty(this, "button", null);

  _defineProperty(this, "importantButton", null);

  _defineProperty(this, "isFinished", false);

  _defineProperty(this, "isImportant", false);

  _defineProperty(this, "moveItem", function () {
    _this.isFinished = !_this.isFinished;
    _this.button.innerText = _this.isFinished ? '✅' : '❌';

    _this.render();

    TodoList.render();
  });

  _defineProperty(this, "importantItem", function () {
    _this.isImportant = !_this.isImportant;
    _this.importantButton.innerText = _this.isImportant ? '❗' : '❕';

    _this.render();

    TodoList.render();
  });

  _defineProperty(this, "render", function () {
    if (_this.isFinished) {
      _this.element.classList.add('finished');
    } else _this.element.classList.remove('finished');

    if (_this.isImportant) {
      _this.element.classList.add('important');
    } else _this.element.classList.remove('important');
  });

  console.log('TodoItem constructor', aNewLabel);
  this.label = aNewLabel;
  this.element = document.createElement('li');
  this.button = document.createElement('button');
  this.button.innerText = '❌';
  this.button.addEventListener('click', this.moveItem);
  this.importantButton = document.createElement('div');
  this.importantButton.innerText = '❕';
  this.importantButton.addEventListener('click', this.importantItem);
  var p = document.createElement('p');
  p.innerText = this.label;
  this.element.appendChild(p);
  this.element.appendChild(this.button);
  this.element.appendChild(this.importantButton);
};
//# sourceMappingURL=toDoItem.js.map
