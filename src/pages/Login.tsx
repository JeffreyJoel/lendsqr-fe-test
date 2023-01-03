import React from 'react';
import { useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate()
    return (
        <div className='Login'>
            <div className='Login__inner'>
                <h1>Welcome!</h1>
                <h4>Enter details to login.</h4>

                <form className='Login__inner__form'>
                    <div className='input__container'>
                        <input type="email"  placeholder='Email'/>
                    </div>
                    <div className='input__container password'>
                        <input type="password"  placeholder='Password'/>
                        <p>Show</p>
                    </div>
                    <p className='forgot-password'>Forgot Password?</p>
                    <button className='Login__inner__form__submit'
                        onClick={()=>{navigate('/home')}}
                    >LOG IN</button>
                </form>
            </div>
        </div>
    );
}

export default Login;