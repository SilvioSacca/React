import { AlertClock } from "./AlertClock";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
    
    return (
        
        <div>
        <HelloWorld />
        <Welcome name="Silvio" age={33}/>
        <AlertClock />
        </div>
    )
}