import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
function App() {

  const [todoList, setTodoList] = useState(
    [
      // { id: 1, name: "Learning React" },
      // { id: 2, name: "Watch TV" }
    ]
  )

  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomId(1, 100000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);
  }
  return (

    <>
      <Outlet />
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length > 0 ?
          <TodoData todoList={todoList}
            deleteTodo={deleteTodo} />
          :
          <div className='todo-img'>
            <img className='logo' src={reactLogo} />
          </div>
        }
      </div>

      <Footer />
    </>

  )
}

export default App
