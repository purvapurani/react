import React, {Component} from 'react';

class FormExample extends Component{

    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <h2>Add details to edit the ninja list:</h2>
                </fieldset>
                <fieldset className="float100">
                    <label htmlFor="name">Name:</label><input type="text" id="name" onChange={this.handleChange} />
                </fieldset>
                <fieldset className="float100">
                    <label htmlFor="age">Age:</label><input type="number" id="age" onChange={this.handleChange} />
                </fieldset>
                <fieldset className="float100">
                    <label htmlFor="belt">Belt:</label><input type="text" id="belt" onChange={this.handleChange} />
                </fieldset>
                <fieldset>
                    <button>Submit</button>
                </fieldset>
            </form>
        );
    };
}

export default FormExample;