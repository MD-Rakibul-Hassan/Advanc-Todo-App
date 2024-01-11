import Todo from "./Todo";
const Todos = (props) => {
    return (
        <section className="border bg-slate-200 px-5 py-5 text-black text-xl mt-5 ">
            {
                props.todos.map( (todo) => <Todo todo = {todo.todos} key={todo.id} id = {todo.id} removetodo = {props.removeTodos} />)
            }
        </section>
    )
}
export default Todos;