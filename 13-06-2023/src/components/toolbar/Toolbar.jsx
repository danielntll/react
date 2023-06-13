import { useEffect, useState } from "react"
import Button from "../button/Button"
import "./index.css"

const Toolbar = ({
  selectedContent,
  setSelectedcontent
}) => {
  // VARIABLES ------------------------
  const [total, setTotal] = useState(0)
  const [done, setDone] = useState(0)
  const [todo, setTodo] = useState(0)
  // CONDITIONS -----------------------
  const handleOpenHistory = () => {
    setSelectedcontent("total")
  }
  const handleOpenCompleted = () => {
    setSelectedcontent("done")
  }
  const handleOpenNotCompleted = () => {
    setSelectedcontent("todo")
  }

  // RETURN ---------------------------
  return (
    <div className="Toolbar">
      <Button
        icon="fi fi-rr-time-past"
        active={selectedContent === "total" ? true : false}
        onClickCallback={() => { handleOpenHistory() }}
        reverse
        text={"Total: " + 80}
        color="#ffc409"
      />
      <Button
        icon="fi fi-rr-checkbox"
        active={selectedContent === "done" ? true : false}
        onClickCallback={() => { handleOpenCompleted() }}
        reverse
        text={"Done: " + 10}
        color="#22ffa3"
      />
      <Button
        icon="fi fi-rr-circle-xmark"
        active={selectedContent === "todo" ? true : false}
        onClickCallback={() => { handleOpenNotCompleted() }}
        reverse
        color="#ff566c"
        text={"Todo: " + 70}
      />
    </div>
  )
}

export default Toolbar