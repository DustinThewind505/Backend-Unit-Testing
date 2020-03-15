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
        this.setState({
            newTask: ''
        })
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Ello Poppet" onChange={() => { }} value={this.state.newTask} onChange={this.handleChange} />
                    <button>
                        Add
                </button>
                    <h6>{this.state.newTask}</h6>
                </form>
            </Fragment>
        )
    }
}

export default Form;