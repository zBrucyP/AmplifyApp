import React from 'react';

export default class Task extends React.Component {
    render() {
        return(
            <div key={this.props.id}
                onClick={this.props.toggleComplete}
                style={{
                    padding:"4px",
                    width:"50%",
                    textDecoration: this.props.item.complete ? "line-through" : "",
                    color: this.props.item.complete ? "grey" : ""
                }}
            >
            <button onClick={this.props.deleteTask}
                style={{
                    margin:"6px",
                    color:"red"
                }}
            >X</button>
                {this.props.item.text}
            </div>
        )
    }
}
