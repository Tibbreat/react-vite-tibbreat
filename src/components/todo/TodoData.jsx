
const TodoData = (props) => {
    //Destructuring object
    const { todoList } = props;

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={index}>
                        <div>{item.name}<button>Delete</button></div>
                    </div>
                )
            })}
        </div>

    )
}
export default TodoData
