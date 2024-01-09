import TodoIndex from "./Todo-components/Todo_index";
const App = () => {
    return (
        <div className="text-3xl flex flex-col h-screen bg-black items-center justify-center text-white">
            <h1>Advanc Todo App</h1>
            <TodoIndex />
        </div>
    )
}
export default App;