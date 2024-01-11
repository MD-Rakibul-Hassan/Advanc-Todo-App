import { useState } from "react";

const FormTodo = (porps) => {
    const [todo,setTodo] = useState ({title : "", dec : ""})
    const {title,dec} = todo;
    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo,[name] : event.target.value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        porps.getTodos(todo)
        setTodo({title : "",dec : ""})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="text-red-600">
                <label htmlFor="Title">Title : </label>
                <input 
                type="text" 
                placeholder="Add a title"
                value={title}
                name="title"
                onChange={handleChange}
                /> <br />
                <label htmlFor="Decription">Decription : </label>
                <textarea 
                name="dec"
                value={dec}
                onChange={handleChange}
                placeholder="Add a decription"
                >
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormTodo;