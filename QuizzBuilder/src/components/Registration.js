import React, { useState } from 'react'
import { Form,Alert } from 'react-bootstrap';
import Login  from './Login'

function Registration() {

    const [ name , setName] = useState("");
    const [ email , setEmail] = useState("");
    const [ password , setPassword] = useState("");
    const [ flag , setFlag] = useState(false);
    const [ logIn , setLogin] = useState(true);

function handleSubmit(e){
    e.preventDefault();
    
    if(!name || !email || !password){
        setFlag(true);
    }
    else{
        setFlag(false);
        localStorage.setItem("Email",JSON.stringify(email)); 
        localStorage.setItem("Password",JSON.stringify(password)); 
        setLogin(!logIn);
    }

}

    function handleClick(){
        setLogin(!logIn);
    }


  return (
    <div className='main'>
        {" "}
          {logIn ? (
        <form onSubmit={handleSubmit} className='form-style'>
            <h2>User Registration</h2>
            <div className='form-group p-2'>
                <label>Name</label>
                <input type="text"
                className='form-control p-2 mt-2'
                placeholder='Enter your name'
                onChange={(event) => setName(event.target.value)}
                ></input>
            </div>
            <div className='form-group p-2'>
                <label>Email:</label>
                <input type="text"
                className='form-control p-2 mt-2'
                placeholder='Enter your email'
                onChange={(event) => setEmail(event.target.value)}
                ></input>
            </div>
            <div className='form-group p-2'>
                <label>Password</label>
                <input type="password"
                className='form-control p-2 mt-2'
                placeholder='Enter your password'
                onChange={(event) => setPassword(event.target.value)}
                ></input>
            </div>
            <button type='submit' className='submit btn m-3 text-light'>Register Me!</button>
            <h4></h4>
            <p>Already have an account? {" "}<span className='text-info' onClick={handleClick}>Log in</span> </p>

            {flag && (
                <Alert color="primary" variant='danger'>
                    Please fill fields properly
                </Alert>
            )}


        </form>
         ) : (

                <Login></Login>
                )}

    </div>
  );
}

export default Registration