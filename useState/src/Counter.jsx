import { useState } from "react"

export function Counter () {

    const [counter, setCounter] = useState(0)
    function HandleIncrement() {
        setCounter(() => counter +1)
    }
    
    return (
    <div>
        <button onClick={HandleIncrement}>Counter</button>
        <h2>{counter}</h2>
    </div>
    )
}