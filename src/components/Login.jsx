import React from 'react';

const Login = () => {
    return (
        <div className='login d-flex'>
          <div>Aquí va un video </div> 
          <div>
              <form className='d-flex flex-column'>
                <h1>Log In</h1>
                <p>aqui va un texto</p>
                <label for="email"/>Email:
                <input type="email" id="email"/>
                <label for="password"/>Password:
                <input type="password" id="password"/>
                <input type="button" value="Log In"/>
                <input type="button" value="Sign in with Google"/>
                <p>Don’t have an account yet? <span>Sign Up</span></p>
              </form>
          </div>
        </div>
    );
}

export default Login;
