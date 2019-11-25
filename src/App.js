import React from 'react';
import TodoList from "./todolist/todolist";
import AddTodo from "./addtodo/addtodo";
import './App.css';

class App extends  React.Component{

  constructor(){
    super();
    this.state = {
      todos: []
    };
  }




  render() {
    return(
        <div>
          <AddTodo addTodoFn={this.addTodo}/>
          <TodoList todos={this.state.todos}/>
        </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if (todos){
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });

    }else {
      console.log('no todos')
    }
  }

  addTodo = async (todo) => {
   await this.setState({ todos: [...this.state.todos, {
      text: todo,
       completed: false
     }]});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }
}

export default App;
