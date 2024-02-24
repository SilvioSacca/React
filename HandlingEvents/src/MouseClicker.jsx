export function MouseClicker() {

 const HandleClick = (event) => {
        console.log(event.target.getAttribute("name"))
    }

 const HandleImage = (event) => {
        console.log(event.target.getAttribute("src"))
    }
    
    return(
        <div>
            <button onClick={HandleClick} name="one">
                Click Me!
                <img onClick= {HandleImage} src="https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.exibart.com%2Fattualita%2Falla-tate-modern-di-londra-vandalizzata-unopera-di-pablo-picasso%2F&psig=AOvVaw2z0RIAsS4DxHCnZk0YXzF6&ust=1708793446875000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCf0Of1wYQDFQAAAAAdAAAAABAI" alt="Un dipinto di Picasso" />
                </button>
        </div>
    )
}