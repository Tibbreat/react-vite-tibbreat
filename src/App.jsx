import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
function App() {

  const [todoList, setTodoList] = useState(
    [
      // { id: 1, name: "Learning React" },
      // { id: 2, name: "Watch TV" }
    ]
  )



  const addNewTodo = (name) => {
    const newTodo = {
      id: 3,
      name: name
    }

    //C1. array.push (khong nen dung)
    // todoList.push(newTodo)
    //C2. dung setter
    setTodoList([...todoList, newTodo])
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ?
        <TodoData todoList={todoList} />
        :
        <div className='todo-img'>
          <img className='logo' src={reactLogo} />
        </div>
      }

      {/*       
      {
        todoList.length > 0 &&
        <TodoData todoList={todoList} />
      }

      {
        todoList.length === 0 &&
        <div className='todo-img'>
          <img className='logo' src={reactLogo} />
        </div>
      } */
      }
    </div>
  )
}

export default App
