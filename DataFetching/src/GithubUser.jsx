import { useEffect, useState } from "react"

export function GithubUser({ username }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    async function User() {

        try {
            const user = await fetch(`https://api.github.com/users/${username}`)
            const dataJson = await user.json()
            setData(dataJson)


        } catch (error) {
            setError(error)
            console.error(error)
        }
    }
    useEffect(() => {
        setLoading(true)
        User()
    }, [])


    return (
        <div>
            {data && (
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.login}</p>
                    <img width={80} src={data.avatar_url} alt="L'avatar" />
                </div>
            )}
            {error &&
                <div>
                    {error.message}
                </div>
            }
            {loading &&
                <div>
                    ...loading
                </div>
            }
        </div>
    )
}

