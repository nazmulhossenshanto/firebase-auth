import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div> 
            <h1>Please Login Now</h1>
            <form onSubmit={handleLogin}>
        <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><NavLink className="link link-hover">Forgot password?</NavLink></div>
          <button  className="btn btn-accent w-max mt-4">show</button>
          <button  className="btn btn-accent btn-wide mt-4">Login</button>
        </fieldset>
      </div>
      </form>
      <h1 className='mb-8'>New to this website ? Please <NavLink to="/register"><button className='btn btn-accent'>Register</button></NavLink></h1>
        </div>
    );
};

export default Login;