import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed} />
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    const todoComponent = todosData.map((item) => 
        <TodoItem key={item.id} text={item.text} completed={item.completed} />
    )
    
    return (
        <div className="todo-list">
            {todoComponent}
        </div>
    )
}

export default App