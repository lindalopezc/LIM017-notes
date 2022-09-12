import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/logo.png';
import google from '../assets/google.png';
import kamban from '../assets/img-kamban.png';
import { GoogleLogin } from 'react-google-login';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log('data del form', data);
    }
    const navigate = useNavigate();
    const responseGoogle = (response) => {
      navigate("/projects")
      console.log(response);
    }
    return (
      <div className="register d-flex">
        <section className="register__kamban">
          <img className="img-kamban" alt="kamban" src={kamban}/>
        </section> 
        <section className="register__form">
            <form onSubmit = {handleSubmit(onSubmit)} className='d-flex flex-column'>
              <img className="logo" alt="logo" src={logo}/>
              <h1>Sign up</h1>
              <p>Organiza tus proyectos de manera fácil y gratuita.</p>
              <div>
                <label htmlFor="userName"/>Name:
                <br/> 
                <input className="register__inputs" type="text" id="userName" {...register("userName")}/>
              </div>
              <div>
                <label htmlFor="email"/>Email:
                <br/> 
                <input className="register__inputs" type="text" id="userEmail" {...register("userEmail")}/>
              </div>
              <div>
                <label htmlFor="password"/>Password:
                <br/> 
                <input className="register__inputs" type="password" id="userPassword" {...register("userPassword")}/>
              </div>
              <input className="register__button--submit" type="submit" value="Sign up"/>
              <GoogleLogin
              clientId="8237606553-i7hjdtc207sla1l79h0hrisau9o0u3v6.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              // onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button className="register__button--google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <img className="google" alt="google" src={google}/> Sign up with Google
                </button>
              )}
              />
              <p>Do you have an account? <span><Link to="/"> Sign In</Link></span></p>
            </form>
          </section>
        </div>
    );
}

export default Register;
