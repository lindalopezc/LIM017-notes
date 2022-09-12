import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/logo.png';
import google from '../assets/google.png';
import kamban from '../assets/img-kamban.png';
import { GoogleLogin } from 'react-google-login';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log('data de login', data);
    }
    const navigate = useNavigate();
    const responseGoogle = (response) => {
      navigate("/projects")
      console.log(response);
    }
    return (
        <div className='login d-flex'>
           <section className="login__kamban">
          <img className="img-kamban" alt="kamban" src={kamban}/>
        </section> 
        <section className="login__form">
            <form onSubmit = {handleSubmit(onSubmit)} className='d-flex flex-column'>
              <img className="logo" alt="logo" src={logo}/>
              <h1>Sign in</h1>
              <p>Organiza tus proyectos de manera fácil y gratuita.</p>
              <div>
                <label htmlFor="email"/>Email:
                <br/> 
                <input className="login__inputs" type="text" id="userEmail" {...register("userEmail")}/>
              </div>
              <div>
                <label htmlFor="password"/>Password:
                <br/> 
                <input className="login__inputs" type="password" id="userPassword" {...register("userPassword")}/>
              </div>
              <input className="login__button--submit" type="submit" value="Sign in"/>
              <GoogleLogin
              clientId="8237606553-i7hjdtc207sla1l79h0hrisau9o0u3v6.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              // onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button className="login__button--google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <img className="google" alt="google" src={google}/> Sign in with Google
                </button>
              )}
              />
              <p>Don't have an account yet? <span><Link to="/register"> Sign Up</Link></span></p>
            </form>
          </section>
        </div>
    );
}

export default Login;
