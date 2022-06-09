import React, { useState } from "react";
import '../Styles/Login.css'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log(username, password)

    return (
        <div className="Login__form">
            <h1>Welcome Back</h1>
            <input name='username' 
                type="text" 
                onChange={event => setUsername(event.target.value)}
                placeholder='Username'/>
                
            <input name='username' 
                type='text' 
                onChange={event => setPassword(event.target.value)}
                placeholder='Password'/>
            <button>Log In</button>
        </div>
    )
}

export default Login