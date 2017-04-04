var observer = require('../../libs/observer').observer;
Page(observer({
  props: {
    todoStore: require('../../stores/todoStore').default
  },

  handleCheck: function(e) {
    var todoId = parseInt( e.target.dataset.id );
    var status = this.props.todoStore.findByTodoId(todoId).completed;
    this.props.todoStore.findByTodoId(todoId).completed = !status;
  },

  applyFilter: function(e) {
    this.props.todoStore.filter = e.target.dataset.key;
  },

  todosFiltered: function(){
    return this.props.todoStore.filterBy();
  },

  addTodo: function(e) {
    var title = e.detail.value.todo;
    this.props.todoStore.addTodo(title);
  }
}))
