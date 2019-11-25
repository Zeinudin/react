import React from 'react';
import TodoItem from "../todoitem/todoitem";

class TodoList extends React.Component{

    render() {

        const  todos = this.props.todos;

        return(
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return(
                            <TodoItem key={_index} _todo={_todo}/>
                        )
                        }
                    )
                }

            </div>
        )
    }
}

export default TodoList;