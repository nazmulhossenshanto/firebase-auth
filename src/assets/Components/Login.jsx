import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
    .then(result=> {
      console.log(result.user)
      e.target.reset();
      navigate('/orders')
    })
    .catch(err=>{
      console.log('sign in ', err)
    })
    
  };
  return (
    <div className="mt-10 ">
      <h1 className="text-center font-bold text-2xl">Please Login Now</h1>
      <form onSubmit={handleLogin}>
        <div className="card-body flex flex-col justify-center items-center">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <NavLink className="link link-hover">Forgot password?</NavLink>
            </div>
            <button className="btn btn-accent w-max mt-4">show</button>
            <button className="btn btn-accent btn-wide mt-4">Login</button>
          </fieldset>
        </div>
      </form>
      <h1 className="mb-8 text-center">
        New to this website ? Please
        <NavLink to="/register">
          <button className="btn btn-accent ml-2">Register</button>
        </NavLink>
      </h1>
    </div>
  );
};

export default Login;
