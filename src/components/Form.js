import React, { Fragment } from "react"

class Form extends React.Component {
    constructor(){
        super();
        this.state  = {

        }
    }

    render() {
        return (
            <Fragment>
                <input placeholder="Ello Poppet" onChange={() => { }} />
                <button>
                    Add
                </button>
            </Fragment>
        )
    }
}

export default Form;