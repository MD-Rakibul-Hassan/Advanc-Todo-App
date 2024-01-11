

const Todo = (porps) => {
    const {title,dec} = porps.todo;
    const {id} = porps;
    const handleRemove = (id) => {
        porps.removetodo(id)
    }
    return (
        <article>
            <div className="bg-lime-600 text-white px-10 py-5 my-3 shadow-xl">
                <h1>Title : {title}</h1>
                <p>Decription : {dec}</p>
            </div>
            <div className="bg-red-700 px-5 py-2 text-center text-white">
                <button onClick={() => {handleRemove(id)}}>Remove</button>
            </div>
        </article>
    )
} 
export default Todo;