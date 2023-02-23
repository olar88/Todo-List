import { useEffect, useState } from 'react'

function AddBox(props) {
  const { handleAddTodo } = props
  const [inputValue, setInputValue] = useState('')

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      if (inputValue) {
        handleAddTodo(inputValue)
        setInputValue('')
      } else {
        return
      }
    }
  }

  return (
    <>
      <input
        type="text"
        autoFocus
        placeholder="What neet to be done?"
        value={inputValue}
        onKeyDown={handleEnterKey}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      ></input>
    </>
  )
}

export default AddBox
