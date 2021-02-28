import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div >
        <header className="App-header">
          <input/>
          <button>save</button>
        </header>
        <p className="todo-list">
          <hr/>
          <ul>
            <li className="todo-item">
              <span>todo 1</span>
              <button className="todo-item-delete" >X</button>
            </li>
            <li>
              todo 2
            </li>
            <li>
              todo 3
            </li>
          </ul>
        </p>
      </div>
    );
  }
}
export default App;
