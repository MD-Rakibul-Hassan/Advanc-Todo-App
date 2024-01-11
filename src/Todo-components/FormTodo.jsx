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
            <form onSubmit={handleSubmit} className="text-white w-[100%] bg-slate-800 px-20 sm:px-3 py-15 sm:my-2">
                <input 
                type="text" 
                placeholder="Add a title"
                value={title}
                name="title"
                className="text-black w-full sm:w-full h-[70px] px-5 py-3 mt-5 mb-2"
                onChange={handleChange}
                /> <br />
                <textarea 
                name="dec"
                value={dec}
                onChange={handleChange}
                placeholder="Add a decription"
                className="text-black w-full sm:w-full h-[150px] px-5 py-3 mt-5 mb-2"
                >
                </textarea><br />
                <button type="submit" className="bg-lime-600 text-center font-bold w-full mb-5 px-5 py-3 sm:w-full">Add Item</button>
            </form>
        </div>
    )
}
export default FormTodo;