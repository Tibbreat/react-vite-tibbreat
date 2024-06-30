import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;

    //useState hook
    // const valueInput = "Trung Kien"
    const [valueInput, setValueInput] = useState("Trung Kien")


    // addNewTodo("Trung Kien");

    const handleClick = () => {
        addNewTodo(valueInput)
    }
    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                //Vì không thể truyền biến name vào function
                // -> Sử dụng arrow function để tránh việc thực thi ngay khi vào web
                // Vì sử dụng onChange() nên ở đầu hàm, nó sẽ tự đông cho 1 biến 'event'
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button
                onClick={handleClick}
            //Note: onClick = {handleClick()} khac voi onClick = {handleClick()}
            >Add</button>
            <div>
                My input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew