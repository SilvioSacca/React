import { useState } from "react"

export function Counter () {

    const [counter, setCounter] = useState(0)

    function HandleDecrescent() {
        setCounter((c) => c -1)
    }
    function HandleIncrement() {
        setCounter((c) => c +1)
    }

    function HandleReset(){
        setCounter((c) => 0)
    }
    
    return (
    <div>
        <button onClick={HandleIncrement}>Counter +</button>
        <button onClick={HandleDecrescent}>Counter - </button>
        <button onClick={HandleReset}>Counter Reset</button>
        <h2>{counter}</h2>
    </div>
    )
}