import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
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
            <form onSubmit={login}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <br />
                <button type="submit">Admin Login</button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default AdminLogin;