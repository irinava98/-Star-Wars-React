import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const changeUsernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const changePasswordHandler = (e) => {
        setPassword(e.target.value);
    };

    function login(e) {
        e.preventDefault();
        setLoggedIn(true);
        navigate("/table");
    }

    return (
        <>
            <form className="login" onSubmit={login}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={changeUsernameHandler}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={changePasswordHandler}
                />
                <button
                    disabled={username.length === 0 || password.length === 0}
                >
                    Login
                </button>
            </form>
        </>
    );
}
