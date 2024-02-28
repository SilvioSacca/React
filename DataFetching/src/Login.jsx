import { useState } from "react"

export function Login({onLogin}) {

// const [username, setUsername] = useState("")
// const [password, setPassword] = useState("")
// const [checkbox, setCheckbox] = useState(false)
const [data, setData] = useState({             // questo passaggio salva i dati in un unico oggetto
    username:"",
    password:"",
    rememberCheckbox:false,
}) 



function HandleUsernameChange(event) {
    setData({...data, username: event.target.value})
}

function HandlePasswordChange(event) {
    setData({...data, password: event.target.value})
}

function HandleCheckedChange(event) {
    setData({...data, rememberCheckbox: event.target.checked}) // per le checkbox non è più value, la sintassi corretta è "checked"
}

function onFormSubmit(event) {
    event.preventDefault()
    onLogin(data)
}

function resetButton() {
    setData({            
        username:"",
        password:"",
        rememberCheckbox:false,
    })
}
    return(
        <form onSubmit={onFormSubmit}>
            <input placeholder="Username" onChange={HandleUsernameChange} type="text" value={data.username} />
            <input placeholder="Password" onChange={HandlePasswordChange} type="password" value={data.password} />
            <label>
            <input onChange={HandleCheckedChange} type="checkbox" checked={data.rememberCheckbox} />Remember me 
            </label>
            <button type="submit" onClick={onFormSubmit} disabled={!data.username||!data.password}>Login</button>
            <button onClick={resetButton}>Reset</button>
        </form>
    )
}

