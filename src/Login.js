import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className='logo'>
              <Link to='/'>
                 <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                 />
                 <div className='in'>.in</div>
              </Link>
            </div>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <label for='email' className='h5'>E-mail</label>
                    <input type='text' placeholder='abcd@email.com' id='email' value={email} onChange={e => setEmail(e.target.value)} />

                    <label for='password' className=''h5>Password</label>
                    <input type='password' placeholder='Password' id='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>

            <div className='login_footer'>
                <div className='login_footer1'>
                    <div className='option condition_footer'>
                        Conditions of Use
                    </div>
                    <div className='option privacy_footer'>
                        &nbsp; Privacy Notice
                    </div>
                    <div className='option help_footer'>
                        Help
                    </div>
                </div>
                <div className='login_footer2'>
                  © 1996-2023, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </div>
    )
}

export default Login;
