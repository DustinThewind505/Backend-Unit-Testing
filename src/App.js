import React, { Fragment } from "react"

import "./styles.css";
import ToDoConatainer from "./components/ToDoContainer";

const originalTasks = [
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
      Tasks: originalTasks
    }
  }

 handleClick = () => console.log("click", this.state.Tasks);


handleChange = event => {
  
}


  // toggleTask = clickedId => {
  //   const newTask = this.state.Tasks.map(element => {
  //     if(element.id === clickedId){
  //       return{
  //         ...element,
  //         complete: !element.complete
  //       }
  //     } else {
  //       return element;
  //     }
  //   })

  //   this.setState({
  //     Tasks: newTask
  //   })

  toggleTask = clickedId => {
    console.log(clickedId);
    this.setState({
      Tasks: this.state.Tasks.map(element => {
        if (element.id === clickedId) {
          return {
            ...element,
            complete: !element.complete
          };
        }
        return element;
      })
    });
  };
  



  render() {
    // console.log("render", this.state.Tasks)
    return (
      <Fragment>
        To Do List
        <div className="counter">
          <h1>Ello Poppet</h1>
          <ToDoConatainer tasks={this.state.Tasks} handleClick={this.handleClick} toggleTask={this.toggleTask}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
