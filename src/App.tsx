import "./App.css";
import { Interval } from "./components/Interval";
import { Triad } from "./components/Triad";

function App() {
    return (
        <div className="App">
            <h1 id="title">Ethan's Music Theory Helpers</h1>
            <Interval />
            <Triad />
        </div>
    );
}

export default App;
