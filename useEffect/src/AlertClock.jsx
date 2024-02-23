export function AlertClock() {

    function HandleButton() {
        const time = new Date()
        alert(time.toUTCString())
    }


    return (
        <div>
            <button onClick={HandleButton}>Click Me!</button>
        </div>
    )
}