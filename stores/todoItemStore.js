var observable = require('../libs/mobx').observable;
var extendObservable = require('../libs/mobx').extendObservable;

var nextTodoId = 0
var TodoItemStore = function(title) {
  nextTodoId ++;

  extendObservable(this, {
    title: title,
    id: nextTodoId,
    completed: false,
  });
}

module.exports = {
  default: TodoItemStore,
}
