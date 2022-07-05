import { useState } from "react"

function App() {

  const [counter , setCounter] = useState(0)

  function increase() {
    setCounter(counter + 1)
  }

  function decrease() {
    setCounter(counter - 1)
  }

  return (
    <div className="container">
      <button onClick={decrease}>-</button>
      <p className={counter >= 100 ? "bigger" : ""}>{counter}</p>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default App
