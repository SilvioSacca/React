import { useState } from "react"
import { useEffect } from "react"

export function Counter() {

    const [counter, setCounter] = useState(0)

    useEffect (() => {console.log(counter)}, [counter]) // [counter] > dipendenza,  quando il suo stato cambia, monta tutto ciò che vi è all'interno
    

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
        <button onClick={HandleIncrement}>Incrementa</button>
        <button onClick={HandleDecrescent}>Diminuisci</button>
        <button onClick={HandleReset}>Counter Reset</button>
        <h2>{counter}</h2>

    </div>
    )
}