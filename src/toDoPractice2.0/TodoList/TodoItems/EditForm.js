import { useState, useEffect } from 'react'

function EditForm(props) {
  const { text, id, handleUpdatText } = props
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    setInputValue(text)
  }, [text])
  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      if (inputValue) {
        handleUpdatText(id, inputValue)
      } else {
        return
      }
    }
  }
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onKeyDown={handleEnterKey}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
    </>
  )
}
export default EditForm
