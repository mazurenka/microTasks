import React from 'react';
import './App.css';
import {NewComponent} from "./newComponent";

export const App = () => {
    return (
        <div>
            <NewComponent clickFilter={click}/>
        </div>
    )
}