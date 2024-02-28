import { useState } from "react"

export function GitHubUser2() {
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])

    function HandleUsernameChange(event) {
        setUsername(event.target.value)

    }

    function handleSubmit(event) {
        event.preventDefault()
        async function searchGitHub() {
            const data = await fetch(`https://api.github.com/search/users?q=${username}`)
            const users = await data.json()
            console.log(users)
            setUsers(users.items)
        }
        searchGitHub()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={HandleUsernameChange} value={username} placeholder="Username" type="text" />
                <button type="submit">Search</button>
                <ul>{users.map(user => (<li>{user.login}</li>))}</ul>
            </div>
        </form>
    )
}

//Starting from the previous exercise, create a new GithubUsers component that has a form with a text input and a submit button.
//The input will be used for searching a user by providing their username.
//Each user will be displayed in a list, where each list item is a GithubUser component.
//These components will take username as a prop.