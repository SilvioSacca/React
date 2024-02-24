import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {
    
    return (
        
        <div>
        <HelloWorld />
        <Welcome name="Silvio" age={33}/>
        <AlertClock />
        <Counter />
        <Clock />
        <MouseClicker />
        </div>
    )
}