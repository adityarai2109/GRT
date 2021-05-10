import React from "react";
import grtDark from "../images/GRT_dark.svg";

function Login() {
  return (
    <div>
      {/* component */}
      <div className="h-screen w-screen">
        <div className="flex flex-col items-center flex-1 h-full justify-center">
          <div
            style={{
              color: "white",
              height: "500px",
            }}
            className="back flex rounded-lg shadow-lg w-5/6 sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          >
            <div className="flex flex-col w-full p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
                <div className="w-full mt-4">
                  <form
                    className="form-horizontal w-11/12 mx-auto"
                    method="POST"
                    action=""
                  >
                    <div className="flex flex-col mt-4">
                      <input
                        id="email"
                        type="text"
                        className="flex-grow h-10 px-4 border rounded border-grey-400"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input
                        id="password"
                        type="password"
                        className="flex-grow h-10 px-4 rounded border border-grey-400"
                        name="password"
                        required
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className="mr-2"
                      />{" "}
                      <label
                        htmlFor="remember"
                        className="text-sm text-grey-dark"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div className="flex flex-col mt-8">
                      <button
                        type="submit"
                        className="login_button bg-blue-500 text-white text-m font-semibold py-2 px-4 rounded"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="text-center mt-4">
                    <a
                      className="no-underline hover:underline text-blue-dark text-s"
                      href="mailto:keshav2682@gmail.com"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
                            src={grtDark}
                            className="hidden md:block w-1/3 m-auto"
                            style={{
                                
                            }}
                            alt=""
                        /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
