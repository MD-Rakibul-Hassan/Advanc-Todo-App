

const Todo = (porps) => {
    const {title,dec} = porps.todo;
    const {id} = porps;
    const handleRemove = (id) => {
        porps.removetodo(id)
    }
    return (
        <article>
            <div>
                <h1>{title}</h1>
                <p>{dec}</p>
            </div>
            <div>
                <button onClick={() => {handleRemove(id)}}>Remove</button>
            </div>
        </article>
    )
} 
export default Todo;