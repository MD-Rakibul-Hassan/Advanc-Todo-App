import Todo_Process from "./Todo_porcess";
const TodoList = [
    {
        id : 1,
        title : "Rakibul Hassan",
        decription : "Hello i am rakibul hassan shehab" 
    },
    {
        id : 2,
        title : "Shehab",
        decription : "Hello i am rakibul hassan shehab" 
    }
];
const TodoIndex = () => {
    return (
        <section>
            <Todo_Process todolist = {TodoList} />
        </section>
    )
}
export default TodoIndex;