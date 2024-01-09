

const Todo_Show = ({todo}) => {
    const {id,title,decription} = todo;
    return (
        <div className="border my-5 bg-green-400 text-black px-10 py-5">
            <h1>{title}</h1>
            <p>{decription}</p>
            <div className="bg-red-700 py-2 mt-5 text-center">
                <button>Remove</button>
            </div>
        </div>
    )
}
export default Todo_Show;