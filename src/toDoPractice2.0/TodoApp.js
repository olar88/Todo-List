import { useState } from 'react'
import TodoList from './TodoList'
import AddBox from './AddBox'
import './TodoApp.css'

function Todo() {
  const [newList, setNewList] = useState([
    { id: 1, text: '買牛奶', completed: false, editing: false },
  ])

  //過濾列表呈現項目
  //type = 'All'|'Active' |'Done'
  const filterOptions = ['All', 'Active', 'Done']
  const [myFilter, setMyFilter] = useState('All')

  const gerFilterTodos = (todo, filterType) => {
    switch (filterType) {
      case 'All':
        return todo
      case 'Active':
        return todo.filter((v, i) => !v.completed)
      case 'Done':
        return todo.filter((v, i) => v.completed)
      default:
        return todo
    }
  }

  function deletTodo(arr, id) {
    return arr.filter((v) => {
      return v.id !== id
    })
  }
  function toggleCompleted(arr, id) {
    return arr.map((v) => {
      if (v.id === id) {
        return { ...v, completed: !v.completed }
      } else {
        return { ...v }
      }
    })
  }
  function enterValue(text) {
    return {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }
  }
  const addTodo = (arr, newTodo) => {
    return [...newList, newTodo]
  }
  function updateText(arr, id, newText) {
    return arr.map((v) => {
      if (v.id === id) {
        return { ...v, text: newText, editing: false }
      } else {
        return { ...v }
      }
    })
  }
  function toggleEditing(arr, id) {
    return arr.map((v) => {
      if (v.id === id) {
        return { ...v, editing: !v.editing }
      } else {
        //其餘則不可為可編輯狀態
        return { ...v, editing: false }
      }
    })
  }
  const handleAddTodo = (text) => {
    return setNewList(addTodo(newList, enterValue(text)))
  }

  const handleToggleComplete = (id) => {
    return setNewList(toggleCompleted(newList, id))
  }
  const handleDeleteTodo = (id) => {
    return setNewList(deletTodo(newList, id))
  }
  const handleToggleEditing = (id) => {
    return setNewList(toggleEditing(newList, id))
  }
  const handleUpdatText = (id, text) => {
    return setNewList(updateText(newList, id, text))
  }

  return (
    <>
      <div className="container">
        <h1>Todo~o~</h1>
        <AddBox handleAddTodo={handleAddTodo}></AddBox>
        <TodoList
          newList={gerFilterTodos(newList, myFilter)}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleEditing={handleToggleEditing}
          handleUpdatText={handleUpdatText}
        ></TodoList>

        <div>
          {filterOptions.map((v, i) => {
            return (
              <button
                key={i}
                className={
                  v === myFilter ? 'filterBtn-active' : 'filterBtn-normal'
                }
                onClick={() => {
                  setMyFilter(v)
                }}
              >
                {v}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Todo
