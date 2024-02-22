
export function Welcome({ name, age }) {

    return (

        <div>
            <p>Welcome {name}</p>
        
            {age && <p>Your age is {age}</p>}
            {age > 18 && <p>Your age is {age}</p>}
            {age > 18 && age < 65 && <p>Your age is {age}</p>}
            {age > 18 && age < 65 && name === "John" && <p>Your age is {age}</p>}
        </div>

    )
}