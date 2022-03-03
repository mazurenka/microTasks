import React, {useState} from 'react';
import './App.css';
import {Header} from './Header';
import {Body} from './Body';
import {Footer} from "./Footer";

function App() {

    let [students, setStudents] = useState([
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'James', age: 28},
        {id: 3, name: 'James', age: 38},
        {id: 4, name: 'James', age: 48},
        {id: 5, name: 'James', age: 58},
    ])

    return (
        <div className="App">
            <Header titleForHeader={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>

        </div>
    );
}

export default App;
