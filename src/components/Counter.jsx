import { useState } from "react"

export const Counter = () => {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count +=1)
      }
      function decrement() {
        setCount(count -=1)
      }
    return (
        <div>
            <button onClick={increment}>incr</button>
            <button onClick={decrement}>decr</button>
            {count}
        </div>
    )
}