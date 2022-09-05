import React, { useEffect, useState } from "react";
import livesnap from "../pages/livesnap.png";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { useAuth } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notify = (msg) => {
    toast(msg);
  };
  const navigate = useNavigate();

  const { currentUser, login } = useAuth();

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log({ description: "Credentials not valid", status: "error" });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token-info")) {
      console.log("Send to mainLayout");
      navigate("/");
    } else {
      console.log("Send to Login page");
      navigate("/sign-in");
    }
    return () => {};
  }, [localStorage.getItem("token")]);

  return (
    <div class="bg-gradient-to-r from-rose-700 to-pink-600 h-screen font-sans w-full">
      <div class="container mx-auto h-full flex justify-center items-center">
        <div class="w-1/3">
          <div
            class="border-teal p-8 border-t-12
 bg-white  mb-6 rounded-lg shadow-lg"
          >
            <ToastContainer />
            <div className="flex items-center justify-center pb-5">
              <img src={livesnap} className=" w-1/2" alt="" />
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                //login Logic Here

                if (!email || !password) {
                  console.log("Credentials not valid");
                }

                setIsSubmitting(true);

                login(email, password)
                  .then((response) => {
                    console.log(response);
                    localStorage.setItem(
                      "token-info",
                      JSON.stringify(response)
                    );
                    navigate("/");
                  })
                  .catch((error) => {
                    notify(error.message);
                  })
                  .finally(() => setIsSubmitting(false));
              }}
            >
              <div class="mb-4">
                <label class="font-bold text-grey-darker block mb-2">
                  Username or Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow outline-none"
                  placeholder="Your Username"
                  required
                />
              </div>

              <div class="mb-4">
                <label class="font-bold text-grey-darker block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow outline-none"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div class="flex items-center justify-between">
                <button
                  class="bg-gradient-to-r from-rose-700 to-pink-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded"
                  type="onSubmit"
                  // onClick={() => notify("Login toast works")}
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
            </form>
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
