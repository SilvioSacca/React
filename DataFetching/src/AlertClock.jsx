export function AlertClock() {

    function HandleButton() {
        const time = new Date()
        alert(time.toUTCString())
    }


    return (
        <div>
            <button onClick={HandleButton}>Alert Button</button>
        </div>
    )
}