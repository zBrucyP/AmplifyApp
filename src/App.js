import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '' };
    }

    render() {
        return (
            <div className="App">
                <div className="app-title">To-Do List</div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        className="task-entry"
                        placeholder="What needs to be done..?"
                    />
                </form>
                <ul className="toDoList">
                    {this.state.items.map(item => (
                        <Task
                            key={item.id}
                            item={item}
                            toggleComplete={() => this.toggleComplete(item.id)}
                            deleteTask={() => this.handleDelete(item.id)}
                         />
                    ))}
                </ul>
            </div>
        )
    }

    toggleComplete = (id) => {
        this.setState(state => ({
            items: state.items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        complete: !item.complete
                    };
                } else {
                    return item
                }
            })
        }));
    };

    handleDelete = (id) => {
        this.setState(state => ({
            items: state.items.filter(item => item.id !== id)
        }));
    };

    handleChange = (e) => {
        this.setState({text: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
            complete: false
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    };
}

export default App;
