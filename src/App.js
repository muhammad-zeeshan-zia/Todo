import React from "react";
import Marvel from "./marvel.jsx";
import './index.css';
import {Routes,Route} from "react-router-dom";
function App()
{
    return (
        <Routes>
            <Route exact path="/" Component={Marvel}/>
        </Routes>
    )
};
export default App;
