import { useEffect, useState } from "react"

export function Clock() {

    const [clock, setClock] = useState(new Date())
    useEffect (() => {setInterval(() =>{
       setClock(new Date())
    }, 1000);})

    
    
    return(
        <div>
            <h2>{clock.toLocaleTimeString()}</h2>
        </div>

        
    )
}