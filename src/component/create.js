import React from 'react'
import './create.css';
import { Link } from "react-router-dom";
function Create(props) {
    const { email, setemail, password, setpassword, setnumber, number, name, setname, createaccount,} = props;
    return (
        <div className="log">
            <form onSubmit={e => { e.preventDefault() }}>
                <div className="heading">
                    <h1>Welcome !</h1>
                    <h3>Please Create new account.</h3>
                </div>
                <div id="inputs">
                    <input className='input' type='text' placeholder="Name"
                        pattern="^[A-z ]+$" title="only letters and spaces allowed"
                        value={name} required autoComplete='false'
                        onChange={e => { setname(e.target.value) }} />
                    <input className='input' type='text' placeholder="Mobile No"
                        pattern="^[0-9]+$" title="Number allowed"
                        value={number} maxLength='10' required autoComplete='false'
                        onChange={e => { setnumber(e.target.value) }} />
                    <input className='input' type='email' placeholder="Email"

                        value={email} required autoComplete='false'
                        onChange={e => { setemail(e.target.value) }} />
                    <input className='input' type='password'
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$"
                        title="Password should contain at least one letter, one special character and one number."
                        value={password} required autoComplete='false'
                        placeholder="Password" onChange={e => { setpassword(e.target.value) }} />
                </div>
                <div className="l">
                    <Link style={{textDecoration:'none'}} to="login" >
                        <div style={{ color: '#61acb3' }}>
                            Already have an account? Sign in
                        </div>
                    </Link >
                </div>
                <input type="submit" className="buttom" onClick={createaccount} value="Create Account" />
            </form>
            <div className="term">
                Terms of use. Privacy policy
            </div>
        </div>
    )
}

export default Create;
