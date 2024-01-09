import Todo_Show from "./Todo_show";
const Todo_Process = ({todolist}) => {
    return (
        <article className="border px-10 py-5">
            {
                todolist.map((todo) => <Todo_Show key={todo.id} todo = {todo} />)
            }
        </article>
    )
}
export default Todo_Process;