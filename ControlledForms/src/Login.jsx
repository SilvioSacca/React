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

function onFormSubmit() {
    onLogin(data)
}


    return(
        <div>
            <input placeholder="Username" onChange={HandleUsernameChange} type="text" value={data.username} />
            <input placeholder="Password" onChange={HandlePasswordChange} type="password" value={data.password} />
            <label>
            <input onChange={HandleCheckedChange} type="checkbox" checked={data.rememberCheckbox} />Remember me 
            </label>
            <button onClick={onFormSubmit} disabled={!data.username||!data.password}>Login</button>
        </div>
    )
}

// Add a "login" button to the Login component.
// This button should be disabled as long as the username and password inputs are empty.
// When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, 
// passing it the state, that will print the state value.

// ---------------------------------------