import React, { Component } from 'react';
import Ninjas from './Ninjas'
import FormExample from './FormExample';
import './index.scss';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random(2);
    let ninjaCopy = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjaCopy
    });
  }
  deleteNinja = (id) => {
    let updatedNinjas = this.state.ninjas.filter(ninja => {
      return id !== ninja.id;
    });
    this.setState({
      ninjas: updatedNinjas
    });
  }
  render() {
    return (
      <main className="App">
        <header><h1>Ninja list</h1></header>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <FormExample addNinja={this.addNinja} />
      </main>
    );
  }
}

export default App;