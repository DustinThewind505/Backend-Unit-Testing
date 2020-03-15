import React, { Fragment } from "react"

import "./styles.css";
import ToDoConatainer from "./components/ToDoContainer";

const originalTasks = [
  {
    name: "Study",
    id: 123,
    complete: false
  },
  {
    name: "Walk",
    id: 124,
    complete: false
  },
  {
    name: "Second Study",
    id: 1235,
    complete: false
  },
  {
    name: "Fetch",
    id: 1246,
    complete: false
  },
  {
    name: "Drink Water",
    id: 1237,
    complete: false
  },
  {
    name: "Build",
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

 //handleClick = () => console.log("click", this.state.Tasks);

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

  addNewTask = str => {
    const newTask = {
      name: str,
      id: Date.now(),
      complete: false
    }

    // this.state.Tasks.push(newTask) doesn't work

    this.setState({
      Tasks: [...originalTasks, newTask]
    })
  }
  
  clearComplete = () => {
    console.log("CLEAR!")
    this.setState({
      Tasks: this.state.Tasks.filter(element => {
      return !element.complete
    })})
  }


  render() {
    // console.log("render", this.state.Tasks)
    return (
      <Fragment>
        To Do List
        <div className="counter">
          <ToDoConatainer tasks={this.state.Tasks} clearComplete={this.clearComplete} toggleTask={this.toggleTask} addNewTask={this.addNewTask}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
