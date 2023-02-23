import TodoItems from './TodoItems'

function TodoList(props) {
  const {
    newList,
    handleToggleComplete,
    handleDeleteTodo,
    handleToggleEditing,
    handleUpdatText,
  } = props

  return (
    <>
      <ul>
        {newList.map((v, i) => {
          const { id, completed, text, editing } = v
          const key = id

          return (
            <TodoItems
              key={key}
              id={id}
              completed={completed}
              text={text}
              editing={editing}
              handleToggleComplete={handleToggleComplete}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleEditing={handleToggleEditing}
              handleUpdatText={handleUpdatText}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
