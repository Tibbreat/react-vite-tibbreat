import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
function App() {

  const demoProps = "Tibbreat"
  const age = 25;
  const data = {
    address: 'Ha Noi',
    country: 'Viet Nam'
  }


  const addNewTodo = (name) => {
    alert(`Call me ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={demoProps}
        age={age}
        data={data}
      />
      <div className='todo-img'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
