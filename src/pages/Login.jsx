import React from "react";
import livesnap from "../pages/livesnap.png";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  const loginHandler = () => {
    console.log("Clicked");
    <Navigate to="/dashboard" replace={true} />;
  };
  return (
    <div class="bg-gradient-to-r from-rose-700 to-pink-600 h-screen font-sans">
      <div class="container mx-auto h-full flex justify-center items-center">
        <div class="w-1/3">
          <div
            class="border-teal p-8 border-t-12
 bg-white  mb-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-center pb-5">
              <img src={livesnap} className=" w-1/2" alt="" />
            </div>
            <div class="mb-4">
              <label class="font-bold text-grey-darker block mb-2">
                Username or Email
              </label>
              <input
                type="text"
                class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Username"
              />
            </div>

            <div class="mb-4">
              <label class="font-bold text-grey-darker block mb-2">
                Password
              </label>
              <input
                type="text"
                class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Password"
              />
            </div>

            <div class="flex items-center justify-between">
              <button
                class="bg-gradient-to-r from-rose-700 to-pink-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded"
                onClick={loginHandler}
              >
                Login
              </button>

              <a
                class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div class="text-center">
            <p class="text-grey-dark text-sm">
              Don't have an account?{" "}
              <a href="#" class="no-underline text-blue font-bold">
                Create an Account
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
