const GetTodo = () => {
    return (
        <form >
            <fieldset className="flex flex-col items-center">
                <label>Title : 
                    <input type="text" placeholder="Add title"
                    className="px-5 py-2 m-5 ml-20" 
                    />
                </label>
                <label>Dicription: 
                    <input type="text" placeholder="Add decription" 
                    className="px-5 py-2 m-5"
                    />
                </label>
                <button className="bg-yellow-500 px-10 py-2 m-5">Add todo</button>
            </fieldset>
        </form>
    )
}
export default GetTodo;