import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div class="App">
                <div class="app-title">To-Do List</div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        class="task-entry"
                        placeholder="What needs to be done..?"
                    />
                    <button class="submit-button">Add</button>
                </form>
                <ToDoList items={this.state.items} />
            </div>
        )
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class ToDoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <Task task={item} />
                ))}
            </ul>
        )
    }
}

class Task extends React.Component {
    render() {
        return(
            <li key={this.props.task.id}>{this.props.task.text}</li>
        )
    }
}

export default App;
