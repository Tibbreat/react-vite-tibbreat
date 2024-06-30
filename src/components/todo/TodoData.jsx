
const TodoData = (props) => {
    //Destructuring object
    const { todoList } = props;

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <>
                        <div>{item.name}<button>Delete</button></div>
                    </>
                )
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>

    )
}
export default TodoData
