import {useState} from "react";
import * as events from "events";

export default function Todo(){
    const [todo, setTodo] = useState("");
    const todoController = (event) =>{
        setTodo(event.target.value)
    }
    return (
        <div>
            <form>
                <input type="text" value={todo} onChange={todoController}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}