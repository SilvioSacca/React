import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {

const [value, setValue] = useState("")

function handleInputChange(event) {
    setValue(event.target.value)
}

    return(

        <div>
        <input onChange={handleInputChange} type="text" value={value}/>
        <Welcome name={value}/>
        </div>
    )
}     