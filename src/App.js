import React, { Fragment } from "react"

import "./styles.css";
import ToDoConatainer from "./components/ToDoContainer";

const Tasks = [
  {
    name: "Wake",
    id: 123,
    complete: true
  },
  {
    name: "Bake",
    id: 124,
    complete: true
  },
  {
    name: "Eat",
    id: 1235,
    complete: true
  },
  {
    name: "Fetch",
    id: 1246,
    complete: false
  },
  {
    name: "Second Bake",
    id: 1237,
    complete: false
  },
  {
    name: "Third Bake",
    id: 1248,
    complete: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  render() {
    return (
      <Fragment>
        To Do List
        <div className="counter">
          <h1>Ello Poppet</h1>
          <ToDoConatainer tasks={Tasks}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
