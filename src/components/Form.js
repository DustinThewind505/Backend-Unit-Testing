import React, { Fragment } from "react"

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: '',
        }
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
            newTask: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewTask(this.state.newTask)
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Ello Poppet" onChange={() => { }} value={this.state.newTask} onChange={this.handleChange} />
                    <button>
                        Add
                </button>
                    <h1>Ello Poppet: {this.state.newTask}</h1>
                </form>
            </Fragment>
        )
    }
}

export default Form;