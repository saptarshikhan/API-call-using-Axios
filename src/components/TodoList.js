const ToDoList=({todos})=>{
    return(
        <div>
            <h1>ToDo List</h1>
            <ul className="list-group">
                {todos.map((todo)=>(
                    <l1 className="list-group-item d-flex justify-content-between align-items-center">
                        {todo.title}
                        <input type="checkbox" checked={todo.completed}/>
                    </l1>
                ))}
            </ul>
        </div>

    )
}
export default ToDoList;