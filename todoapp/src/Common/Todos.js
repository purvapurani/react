import React from 'react';

const Todos = ({todos, tasksdone, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item float100 todo-item" key={todo.id}>
                    <p className="left">{todo.content}</p> <button className="red right btn" onClick={() => {deleteTodo(todo.id)}}>Remove</button>
                </div>
            )
        })
    ) : (
        <p className="center norows">Nothing left to do, Yay!</p>
    );

    const doneList = tasksdone.length ? (
        tasksdone.map(done => {
            return(
                <div className="collection-item float100 todo-item" key={done.id}>
                    <p className="left cut">{done.content}</p>
                </div>
            )
        })
    ) : (
        <p className="center norows">Nothing left to do, Yay!</p>
    );

    return(
        <section>
            <h3 className="center red-text">To do list</h3>
            <div className="todos collection">
                {todoList}
            </div>

            <h4 className="center red-text">Tasks done</h4>
            <div className="todos collection">
                {doneList}
            </div>
        </section>
    );
}
export default Todos;