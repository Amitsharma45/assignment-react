import React from 'react'
import './login.css';

import { Link } from "react-router-dom";
function Login(props) {
    const { email, setemail, password, setpassword,  } = props;
    return (
        <div className="log">
            <form>
                <div className="heading">
                    <h1>Welcome back!</h1>
                    <h3>Please login to your account.</h3>
                </div>
                <div id="inputs">
                    <input className='input' type='email' placeholder="Username"
                        value={email}
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        onChange={e => { setemail(e.target.value) }} />
                    <input className='input' type='Password'
                        value={password}
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$"
                        title="Password should contain at least one letter, one special character and one number."
                        placeholder="password" onChange={e => { setpassword(e.target.value) }} />
                </div>
                <div className="check">
                    <div>
                        <input type='checkbox' />
                        <span>  Remember me</span>
                    </div>
                    <div style={{ color: '#61acb3' }}  >Forgot Password</div>
                </div>
                <div className="l">
                    <Link style={{textDecoration:'none'}} to='/create'>
                        <div style={{ color: '#61acb3' }} >
                            Don't have an account? Sign Up
                        </div>
                    </Link>
                </div>
                <input type="submit" className="buttom" value="Login" />
            </form>
            <div className="term">
                Terms of use. Privacy policy
            </div>
        </div>
    )
}

export default Login;
