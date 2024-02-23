import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
    
    return (
        
        <div>
        <HelloWorld />
        <Welcome name="Silvio" age={30}/>
        <AlertClock />
        <Counter />
        </div>
    )
}