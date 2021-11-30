import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>To-Dos</h1>

        <TodoList todos={todos}/>

        <form>
          <input />
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  }
}

export default App;
