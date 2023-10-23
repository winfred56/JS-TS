import {useState} from "react";
import * as events from "events";
import TodoItem from "./TodoItem";

export default function Todo(){
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([])
    const todoController = (event) =>{
        setTodo(event.target.value)
    }
    const submitTodo = (event) =>{
        event.preventDefault()
        let tempList = todoList
        tempList.push(todo)
        setTodoList(tempList)
        console.log(tempList)
        setTodo("")
    }
    return (
        <div>
            <form onSubmit={submitTodo}>
                <input type="text" value={todo} onChange={todoController}/>
                <button type="submit">Add</button>
            </form>
            {todoList.map((todoItem, index)=>
                <TodoItem key={index} name={todoItem}></TodoItem>
            )}
        </div>
    )
}