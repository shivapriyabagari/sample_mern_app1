import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Adminlogin(){
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let[error, setError] = useState('')

    let navigate = useNavigate()
    let login=(event)=>{
        event.preventDefault()
        if(username === 'admin' && password === 'admin'){
            alert('Login Successful')
            navigate('/adminhome')
        }else{ 
            setError('Invalid Credentials')
        }
    }
    return(
        <div>
            <h1>Admin Login</h1>
            <form onSubmit={login}>
                <input type="text" placeholder=" Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
                <button type="submit">Admin Login</button>
            </form>
            {error &&<div className="alert alert-danger" >
                {error}
            </div>}
        </div>
    )
}
export default Adminlogin;
