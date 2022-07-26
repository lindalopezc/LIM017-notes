import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register,handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(typeof data);
    }
    return (
      <div className='register d-flex'>
        <div>Aquí va un video </div> 
          <div>
              <form onSubmit = {handleSubmit(onSubmit)} className='d-flex flex-column'>
                <h1>Sign Up</h1>
                <p>aqui va un texto</p>
								<label htmlFor="userName">Name: <input type="text" id="userName" {...register("userName")}/></label>
                <label htmlFor="email">Email: <input type="text" id="email" {...register("email")}/></label>
                <label htmlFor="password"/>Password:
                <input type="password" id="password" {...register("password")}/>
                <input type="submit" value="Sign up"/>
                <input type="button" value="Sign in with Google"/>
                <p>Don't have an account yet? <span>Sign In</span></p>
              </form>
          </div>
        </div>
    );
}

export default Register;
