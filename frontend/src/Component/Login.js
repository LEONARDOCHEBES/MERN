import React from 'react'

const Login = ()=>{
    return(
        <div className='container'>
            <form>
                <label htmlFor='email'>Email Id</label>
                <input type="email" id="email"/>

                <label htmlFor='password'>Password</label>
                <input type="password" id="password"/>

                <button className='btn'>Login</button>                
            </form>

        </div>
    )
}
export default Login

