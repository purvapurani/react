import React, {Component} from 'react';

class AddTodo extends Component{

    state = {
        content: ''
      }

    handleChange = (e) => {
        this.setState({
          content: e.target.value
        });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        // call function to add a todo
        this.props.addTodo(this.state);
        this.setState({
          content: ''
        })
      }
    

    render(){
        return(
            <section>
                <form onSubmit={this.handleSubmit}>
                    <p>Add to the list:</p>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </section>
        )
    }
}
export default AddTodo;