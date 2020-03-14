import React, { Fragment } from "react"

class Form extends React.Component {
    constructor(){
        super();
        this.state  = {
            newTask: '',
        }
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
            newTask: event.target.value
        })
      }

    render() {
        return (
            <Fragment>
                <input placeholder="Ello Poppet" onChange={() => { }} value={this.state.newTask} onChange={this.handleChange} />
                <button>
                    Add
                </button>
            </Fragment>
        )
    }
}

export default Form;