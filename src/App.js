import { Component, createRef } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
    this.state = {
      todoList: [],
    };
  }

  createTodoItem = () => {
    const { value } = this.inputRef.current;
    if (/^\s*$/.test(value)) {
      alert("不得為空值");
      return;
    }

    const { todoList } = this.state;

    const newTodoList = todoList.concat({
      text: value,
      createDate: new Date(),
    });

    this.setState({
      todoList: newTodoList,
    });

    this.inputRef.current.value = "";
  };

  deleteTodoItem = (e, targetItem) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((item) => {
      return targetItem === item;
    });

    if (index === -1) {
      return;
    }

    todoList.splice(index, 1);
    this.setState({
      todoList,
    });
  };

  buildTodoListComponent = (list = []) => {
    return list.map((item) => {
      const { text, createDate } = item;
      return (
        <li className="todo-item" key={createDate}>
          <span>{text}</span>
          <button
            className="todo-item-delete"
            onClick={(e) => this.deleteTodoItem(e, item)}
          >
            X
          </button>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <header className="todo-header">
          <input ref={this.inputRef} />
          <button onClick={this.createTodoItem}>save</button>
        </header>
        <div className="todo-list">
          <hr></hr>
          <ul>{this.buildTodoListComponent(this.state.todoList)}</ul>
        </div>
      </div>
    );
  }
}
export default App;
