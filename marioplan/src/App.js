import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import ErrorPage from './components/ErrorPage'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Dashboard}></Route>
              <Route path="/project/:id" component={ProjectDetails}></Route>
              <Route path="/signin" component={SignIn}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/createproject" component={CreateProject}></Route>
              <Route component={ErrorPage}></Route>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;