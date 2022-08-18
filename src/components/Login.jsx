import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/logo.png';
import google from '../assets/google.png';
import kamban from '../assets/img-kamban.png'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(typeof data);
    }
    return (
        <div className='login d-flex'>
           <section className="login_kamban">
          <img className="img-kamban" alt="kamban" src={kamban}/>
        </section> 
        <section className="login_form">
            <form onSubmit = {handleSubmit(onSubmit)} className='d-flex flex-column'>
              <img className="logo" alt="logo" src={logo}/>
              <h1>Sign in</h1>
              <p>Organiza tus proyectos de manera fácil y gratuita.</p>
              <div>
                <label htmlFor="userName"/>Name:
                <br/> 
                <input className="login__inputs" type="text" id="userName" {...register("userName")}/>
              </div>
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
              <button className="login__button--google"><img className="google" alt="google" src={google}/> Sign in with Google</button>
              <p>Don't have an account yet?  <span><a href="#"> Sign Up</a></span></p>
            </form>
          </section>
        </div>
    );
}

export default Login;
