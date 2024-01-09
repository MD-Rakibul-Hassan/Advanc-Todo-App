import Todo_Show from "./Todo_show";
const Todo_Process = ({todolist}) => {
    return (
        <article>
            {
                todolist.map((todo) => <Todo_Show key={todo.id} todo = {todo} />)
            }
        </article>
    )
}
export default Todo_Process;