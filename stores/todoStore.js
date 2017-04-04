var mobx = require('../libs/mobx');
var extendObservable = require('../libs/mobx').extendObservable;
var computed = require('../libs/mobx').computed;
var toJS = require('../libs/mobx').toJS;
var TodoItem = require('./todoItemStore').default;

var TodoStore = function() {
  extendObservable(this, {
    todos: [new TodoItem('今天要早起')],
    filters: [{ key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }],
    filter: 'SHOW_ALL',
    get filterTodos() {
      switch( this.filter ) {
        case 'SHOW_ALL':
          return this.todos;
        case 'SHOW_COMPLETED':
          return this.todos.filter( function(t) {
            return t.completed;
          });
        case 'SHOW_ACTIVE':
          return this.todos.filter( function(t) {
            return !t.completed;
          });
        default:
          throw new Error( 'Unknown filter: ' + filter );
      }
    },

    get totalCount() {
      return this.todos.length;
    },

    get currentCount() {
      return this.filterTodos.length;
    }
  });


  this.addTodo = function(title) {
    this.todos.push( new TodoItem(title) );
  }

  this.findByTodoId = function(id) {
    var item = this.todos.find( function(element) {
      return element.id === id;
    })
    return item;
  }
}

module.exports = {
  default: new TodoStore,
}
