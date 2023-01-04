
import React, { useContext, useState } from 'react'
import axios from 'axios';

import data from './ContextApi';

export const Login = ()=>{
    
    const [user, setUser] = useState ({
        email: "",
        password: ""
    })

    const {setUserData} = useContext(data)

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUser((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        }
        )
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/login", user)
        .then((res) => {
            alert (res.data.message)
            setUserData(res.data.user)
        })
    }

    console.log(user)
    return(
        <div className='container'>
            <form>
                <label htmlFor='email'>Email Id</label>
                <input type="email" id="email" name='email' value={user.email} onChange={handleChange} />

                <label htmlFor='password'>Password</label>
                <input type="password" id="password" name='password' value={user.password} onChange={handleChange}  />

                <div className='btn-container'>
                    <button className='btn' onClick = {handleSubmit} >Login</button>
                    <button className='btn' onClick = {handleSubmit} >Register</button>               
                </div>               
            </form>

        </div>
    )
}
export default Login

