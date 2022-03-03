import React, {useState} from 'react';
import './App.css';

function App() {

    let [num, setNum] = useState(1)

    const increment = () => {
        setNum(num + 1)
    }
    const reset = () => {
        setNum(0)
    }

    return (
        <div className="App">
            {num}
            <button onClick={increment}>inc</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default App;
