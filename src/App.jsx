import React from 'react';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Todo from './components/Todo';
import { nanoid } from 'nanoid';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks || [],
      filter: 'All'
    };
    this.listHeadingRef = React.createRef();
  }

  componentDidUpdate(oldProps, oldState) {
    if (this.state.tasks.length - oldState.prevTaskLength === -1) {
      this.listHeadingRef.current.focus;
    }
  }

  toggleTaskCompleted = (id) => {
    const updatedTasks = this.state.tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  };

  deleteTask = (id) => {
    const remainingTasks = this.state.tasks.filter((task) => id !== task.id);
    this.setState({ tasks: remainingTasks });
  };

  editTask = (id, newName) => {
    const editedTaskList = this.state.tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    this.setState({ tasks: editedTaskList });
  };

  taskList = () =>
    this.state.tasks
      .filter(FILTER_MAP[this.state.filter])
      .map((task) => (
        <Todo
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
          toggleTaskCompleted={this.toggleTaskCompleted}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      ));

  filterList = () =>
    FILTER_NAMES.map((name) => (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === this.state.filter}
        setFilter={(value) => this.setState({ filter: value })}
      />
    ));

  addTask = (name) => {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false };
    this.setState((oldState) => {
      return { tasks: [...oldState.tasks, newTask] };
    });
  };

  tasksNoun = () => (this.taskList().length !== 1 ? 'tasks' : 'task');
  headingText = () => `${this.taskList().length} ${this.tasksNoun()} remaining`;

  render() {
    return (
      <div className='todoapp stack-large'>
        <Form addTask={this.addTask} />
        <div className='filters btn-group stack-exception'>
          {this.filterList()}
        </div>
        <h2 id='list-heading' tabIndex='-1' ref={this.listHeadingRef}>
          {this.headingText()}
        </h2>
        <ul
          role='list'
          className='todo-list stack-large stack-exception'
          aria-labelledby='list-heading'
        >
          {this.taskList()}
        </ul>
      </div>
    );
  }
}

export default App;
