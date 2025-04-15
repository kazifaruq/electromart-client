import React from "react";
import { Link } from "react-router";
import "./register.css";
import { FaCamera } from "react-icons/fa6";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className=" text-2xl font-bold text-blue-900 text-center">
          Register
        </legend>
        <form onSubmit={handleRegister}>
          <div className="mx-auto   flex justify-center">
            <div class="relative overflow-hidden inline-block upload-btn-wrapper ">
              <div className="rounded-full p-5 text-xl border-2 border-blue-900 text-blue-900"> <FaCamera />              </div>
              <input type="file" name="myfile" />
            </div>
          </div>

          <label className="fieldset-label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="fieldset-label">Mobile</label>
          <input type="text" className="input" placeholder="Mobile" />

          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn bg-blue-900 text-white w-full mt-4 ">
            Login
          </button>
        </form>

        <p className="text-base">
          Already have an Account?{" "}
          <Link className="text-blue-900 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
