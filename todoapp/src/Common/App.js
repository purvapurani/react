import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Navbar from'../Pages/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Careers from '../Pages/Careers';
import AboutUs from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Post from './Post';
import LocalPost from './LocalPost';

class App extends Component {

  state = {
    todos: [
      {id:1, content: 'Buy some milk'},
      {id:2, content: 'Watch movie'}
    ],
    tasksdone : [
      {id:3, content: 'Wash clothes'}
    ]
  }

  deleteTodo = (id) => {
    let updatedList = this.state.todos.filter(todo => {
      return id !== todo.id;
    });

    let done = this.state.todos.filter(done => {
      return id === done.id ? done : null;
    });
    
    let doneList = [...this.state.tasksdone, done[0]];

    this.setState({
      todos: updatedList,
      tasksdone: doneList
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random(2);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="todo-app">
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route path='/about' exact component={AboutUs}></Route>
              <Route path='/careers' exact component={Careers}></Route>
              <Route path='/contacts' component={Contacts}></Route>
              <Route path="/about/:post_id" component={Post}></Route>
              <Route path="/careers/:post_id" component={LocalPost}></Route>
            </Switch>
          </main>
          <footer className="page-footer">
            <div className="container">
              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} tasksdone={this.state.tasksdone}  />
              <AddTodo addTodo={this.addTodo} />
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;