import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home'
import Next from './Welcome'


function Login() {

  const [emaillog , setEmaillog] = useState("");
  const [passwordlog , setPasswordlog] = useState("");
  const [flag , setFlag] = useState(false);
  const [home , setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault(); 
    let mail = localStorage
      .getItem("Email")
      .replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      
    } 
    else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    }
    else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div className='main'>
      {home ? (
      <form onSubmit={handleLogin} className='form-style'>

        <h2> User Login</h2>

        <div className='form-group p-2'>
                <label>Email</label>
                <input type="text"
                className='form-control p-2 mt-2'
                placeholder='Enter your email'
                onChange={(event) => setEmaillog(event.target.value)}
                ></input>
            </div>
            <div className='form-group p-2'>
                <label>Password</label>
                <input type="password"
                className='form-control p-2 mt-2'
                placeholder='Enter your password'
                onChange={(event) => setPasswordlog(event.target.value)}
                ></input>
            </div>

            <button type='submit' className='submit btn btn-lg text-light m-3'>
              Login
            </button>

            {flag && (
              <Alert color='primary' variant='warning'>
                Fill the fields properly
              </Alert>
            )}
            </form>
               ) : (
                <Next></Next>
                )}
    </div>
  );
}

export default Login