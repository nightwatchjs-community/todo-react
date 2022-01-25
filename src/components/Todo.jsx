import React, { useEffect, useRef, useState } from 'react';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log('NIGHTWATCH', React === props.react, props.react);

    this.state = {
      isEditing: false,
      name: ''
    };

    this.editFieldRef = React.createRef();
    this.editButtonRef = React.createRef();
  }

  componentDidUpdate(oldProps, oldState) {
    if (this.state.isEditing && !oldState.isEditing) {
      this.editFieldRef.current.focus();
    }
    if (!this.state.isEditing && oldState.isEditing) {
      this.editButtonRef.current.focus();
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name.trim()) {
      return;
    }
    this.props.editTask(this.props.id, this.state.name);
    this.setState({ name: '', isEditing: false });
  };

  editingTemplate = () => (
    <form className='stack-small' onSubmit={this.handleSubmit}>
      <div className='form-group'>
        <label className='todo-label' htmlFor={this.props.id}>
          New name for {this.props.name}
        </label>
        <input
          id={this.props.id}
          className='todo-text'
          type='text'
          value={this.state.name || this.props.name}
          onChange={this.handleChange}
          ref={this.editFieldRef}
        />
      </div>
      <div className='btn-group'>
        <button
          type='button'
          className='btn todo-cancel'
          onClick={() => this.setState({ isEditing: false })}
        >
          Cancel
          <span className='visually-hidden'>renaming {this.props.name}</span>
        </button>
        <button type='submit' className='btn btn__primary todo-edit'>
          Save
          <span className='visually-hidden'>
            new name for {this.props.name}
          </span>
        </button>
      </div>
    </form>
  );

  viewTemplate = () => (
    <div className='stack-small'>
      <div className='c-cb'>
        <input
          id={this.props.id}
          type='checkbox'
          defaultChecked={this.props.completed}
          onChange={() => this.props.toggleTaskCompleted(this.props.id)}
        />
        <label className='todo-label' htmlFor={this.props.id}>
          {this.props.name}
        </label>
      </div>
      <div className='btn-group'>
        <button
          type='button'
          className='btn'
          onClick={() => this.setState({ isEditing: true })}
          ref={this.editButtonRef}
        >
          Edit <span className='visually-hidden'>{this.props.name}</span>
        </button>
        <button
          type='button'
          className='btn btn__danger'
          onClick={() => this.props.deleteTask(this.props.id)}
        >
          Delete <span className='visually-hidden'>{this.props.name}</span>
        </button>
      </div>
    </div>
  );

  render() {
    return (
      <li className='todo'>
        {this.state.isEditing ? this.editingTemplate() : this.viewTemplate()}
      </li>
    );
  }
}
