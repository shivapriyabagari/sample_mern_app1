import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();

        if (username === "admin" && password === "admin") {
            console.log("login success");
            navigate("/adminhome");
            return;
        }

        console.log("login failed");
        setError("Invalid credentials");
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Login;