import React from 'react'

const TodoForm = ({editId,handleSubmit,setTodo,todo}) => {
  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className="formButton" type="submit">
          {editId ? "Edit" : "Go"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm
