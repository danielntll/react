import { useState } from 'react'
import './index.css'
import Button from '../button/Button'

const InputTodo = ({ callback }) => {
  // VARIABLES ------------------------
  const [input, setInput] = useState("")
  // CONDITIONS -----------------------
  const handleAddTodo = () => {
    setInput("");
    callback(input);
  }

  // RETURN ---------------------------
  return (
    <>
      <div className='InputTodo'>
        <input onChange={(ev) => { setInput(ev.target.value) }}
          value={input} className='InputTodo__input' type="text" name="" placeholder='Cosa vuoi ricordare di fare?' />
        <Button
          text='Aggiungi'
          color="#22ffa3"
          onClickCallback={() => handleAddTodo()}
        />
      </div>
    </>
  )
}

export default InputTodo
