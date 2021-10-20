import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import Views from "./views/Views";

function App() {
    return (
            <Router>
                <Views/>
            </Router>
    );
}

export default App;
