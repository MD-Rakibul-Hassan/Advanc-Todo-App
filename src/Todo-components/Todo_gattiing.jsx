import { useState } from "react"

const GetTodo = () => {
    const [todo,setTodo] = useState({
        title : "",
        decription : ""
    })
    const handleChange = (e) => {
        setTodo ((prevTod) => {
            return {...prevTod, [e.target.name] : e.target.value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="flex flex-col items-center">
                <label>Title : 
                    <input type="text" placeholder="Add title"
                    className="px-5 py-2 m-5 ml-20" 
                    onChange={handleChange}
                    />
                </label>
                <label>Dicription: 
                    <input type="text" placeholder="Add decription" 
                    className="px-5 py-2 m-5"
                    onChange={handleChange}
                    />
                </label>
                <button className="bg-yellow-500 w-full px-10 py-2 m-5">Add todo</button>
            </fieldset>
        </form>
    )
}
export default GetTodo;