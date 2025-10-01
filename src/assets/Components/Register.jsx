import React, { useContext } from "react";
import { NavLink } from "react-router";

import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
    .then(result =>{
      console.log(result.user)
      e.target.reset();
    })
    .catch(error=>{
      console.log('Errrrrrr', error)
    })
  };
  return (
    <div className="mt-10 ">
          <h1 className="text-center font-bold text-2xl">Register Now</h1>
          <form onSubmit={handleLogin}>
            <div className="card-body flex flex-col justify-center items-center">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
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
            Already have an account ? Please
            <NavLink to="/login">
              <button className="btn btn-accent ml-2">Login</button>
            </NavLink>
          </h1>
        </div>
  );
};

export default Register;
