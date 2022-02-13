import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Login.css';
import { auth } from './firebase'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const history = useHistory();
    const [useremail, setUserEmail] = useState('');
    const [userpassword , setUserPassword] = useState('');

    const loginuser = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    const signupnuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    return (

        <div className='login'>
            <Link>
                <img className='login__logo'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aTSKZnRP5eF57nsmRArxvC1vWxn0z8lkcg&usqp=CAU' alt='' />
            </Link>
            <div className='login__container'>
                <h1> Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type='email' />
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type='passsword' />
                    <Button variant="outline-info" onClick={loginuser} type='submit' className='login__signInButton'> Sign In</Button>
                </form>
                <p> Signing-in , Ypu Agree to Terms & Condittion</p>
                <Button variant="outline-info" onClick={signupnuser} className='login__registerButton'> Creat your Grocer Account</Button>
            </div>

        </div>
    )

}

export default Login;
