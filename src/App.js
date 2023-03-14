import './App.css';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
    return (
        <div className="App container position-relative">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
