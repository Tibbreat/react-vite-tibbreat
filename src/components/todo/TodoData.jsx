
const TodoData = (props) => {
    //Destructuring object
    const { name, age } = props;

    return (
        <div className='todo-data'>
            <div>My Name is {name}</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>

    )
}
export default TodoData
