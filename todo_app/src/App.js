import './App.css';
import { useState} from 'react';

function App() {

 const [todo,setTodo] = useState("")
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  
  function handleSubmit(e) {
    e.preventDefault();

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("")

      if (editId) {
        const editTodo = todos.find((i) => i.id === editId)
        const updatedTodos = todos.map((t) => t.id === editTodo.id ? (t = { id: t.id, todo }) : ({ id: t.id, todo: t.todo }))
        setTodos(updatedTodos);
        setEditId(0)
        setTodo("")
        return;
      }
    }
  }

  function handleDelete(id) {
    const delTodo = todos.filter((element) => element.id !== id)
    setTodos([...delTodo])
  }

  function handleEdit(id) {
    const editTodo = todos.find((element) => element.id === id)
    setTodo(editTodo.todo)
    setEditId(id)
  }

  return (
    <div className='App' >
      <div className='container'>
        <h1 >Todo List</h1>
        <form className='inputForm' onSubmit={handleSubmit}>
          <input type='text'
            onChange={(e) => setTodo(e.target.value)}
            value={todo} />
          <button className='formButton' type='submit'>{editId? "Edit" : "Go" }</button>
        </form>

        <ul className='allTodos'>
          {
            todos.map((t) => (
              <li className='singleTodo'><span className='todoText' key={t.id}>{t.todo}</span>
                  <button onClick={()=>handleEdit(t.id)}>Edit</button>
                  <button onClick={()=>handleDelete(t.id)}>Delete</button>
              </li>
            ))
          }
          
         
        </ul>
      </div>
    </div>
  );
}

export default App;
