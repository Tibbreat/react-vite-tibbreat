import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;
    const [valueInput, setValueInput] = useState("Trung Kien")


    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }
    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"

                onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew