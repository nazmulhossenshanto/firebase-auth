import React from "react";
import { NavLink } from "react-router";

const Register = () => {
  return (
    <div>
      <form>
        <div className="card-body">
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
    </div>
  );
};

export default Register;
