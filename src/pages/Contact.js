import "./Contact.css"
import { useCount } from "./useCount"

export const Contact = () => {

  const {count, increase, decrease, reset} = useCount()

  return (
    <div className="contact">
      <h1> THIS IS Contact PAGE </h1>
      
       <div className="contactButtons">
        <button onClick={increase}>+</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrease}>-</button>
       </div>

      <h2>{count}</h2>
    </div>
  )
}