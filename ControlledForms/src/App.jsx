import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
// import { Welcome } from "./Welcome";

export function App() {
    
    return (
        
        <div>
        <HelloWorld />
        {/* <Welcome name="Silvio" age={33}/> */}
        <AlertClock />
        <Counter />
        <Clock />
        <MouseClicker />
        <InteractiveWelcome />
        <Login />
        </div>
    )
}