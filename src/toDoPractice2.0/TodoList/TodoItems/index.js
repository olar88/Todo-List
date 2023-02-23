import React from 'react'
import EditForm from './EditForm'

function TodoItems(props) {
  const {
    id,
    completed,
    text,
    handleDeleteTodo,
    handleToggleComplete,
    editing,
    handleToggleEditing,
    handleUpdatText,
  } = props
  return (
    <>
      <li
        key={id}
        className={completed === true ? 'completed' : 'active'}
        onDoubleClick={() => {
          handleToggleEditing(id)
        }}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            handleToggleComplete(id)
          }}
        ></input>
        {editing ? (
          <EditForm text={text} id={id} handleUpdatText={handleUpdatText} />
        ) : (
          text
        )}

        <button
          onClick={() => {
            handleDeleteTodo(id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}

export default TodoItems
