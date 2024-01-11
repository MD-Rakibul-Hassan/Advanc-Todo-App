import Todo from "./Todo";
const Todos = (props) => {
    return (
        <section>
            {
                props.todos.map( (todo) => <Todo todo = {todo.todos} key={todo.id} id = {todo.id} removetodo = {props.removeTodos} />)
            }
        </section>
    )
}
export default Todos;