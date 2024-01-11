import Todos from "./Todos"
import FormTodo from "./FormTodo"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

const TodoIndex = () => {
    const [todos,setTodos] = useState([])
    const getTodos = (todos) => {
        setTodos((prevTodo) => {
            return [...prevTodo, { id : uuidv4() ,todos}]
        })
    }
    const removeTodos = (id) => {
        setTodos( (prevTods) => {
            const filterdTodo = prevTods.filter((todo) => todo.id !== id);
            return filterdTodo;
        })
    }
    return (
        <div className="w-[80%] h-screen bg-black">
            <FormTodo getTodos = {getTodos} />
            <Todos todos = {todos} removeTodos = {removeTodos}/>
        </div>
    )
}
export default TodoIndex