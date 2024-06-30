const TodoNew = (props) => {
    const { addNewTodo } = props
    // addNewTodo("Trung Kien");

    const handleClick = () => {
        alert("Click me")
    }
    const handleOnChange = (name) => {
        console.log("handle on change", name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button
                onClick={handleClick}
            //Note: onClick = {handleClick()} khac voi onClick = {handleClick()}
            >Add</button>
        </div>
    )
}

export default TodoNew