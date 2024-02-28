export function MouseClicker() {

 const HandleClick = (event) => {
        console.log(event.target.getAttribute("name"))
    }

 const HandleImage = (event) => {
        console.log(event.target.getAttribute("src"))
    }
    
    return(
        <div>
            <button onClick={HandleClick} name="one"> Click Me!</button>
            <img width={88} onClick={HandleImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6n93VNOQZROSEMdE0HlRu2t0uFv1fshC7g&usqp=CAU" />
        </div>
    )
}