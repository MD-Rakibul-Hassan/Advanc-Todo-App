

const Todo_Show = ({todo}) => {
    const {id,title,decription} = todo;
    return (
        <div>
            <h1>{title}</h1>
            <p>{decription}</p>
        </div>
    )
}
export default Todo_Show;