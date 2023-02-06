import React from 'react'

const TodosList = ({todo,todos,handleDelete,handleEdit}) => {
  return (
    <div>
      <ul className="allTodos">
        {todos.map((t) => (
          <li className="singleTodo">
            <span className="todoText" key={t.id}>
              {t.todo}
            </span>
            <button onClick={() => handleEdit(t.id)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosList
