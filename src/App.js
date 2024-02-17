import "./App.css";
import "./Login.css";
import "./Table.css";
import Login from "./Login";
import Table from "./Table";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
            />
            <Route
                path="table"
                element={loggedIn ? <Table /> : <Navigate replace to={"/"} />}
            />
        </Routes>
    );
}

export default App;
