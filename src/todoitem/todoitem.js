import React from 'react';


class TodoItem extends React.Component{

    render() {

        const  { todo } = this.props;
        return(
            <div onClick={this.toggleTodo}>{todo.text}</div>
        );
    }

    toggleTodo = () => {

    }

}

export default TodoItem