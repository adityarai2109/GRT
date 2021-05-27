import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "../axios";
import { Toast, Toasty } from "./Toasty";
import { useHistory } from "react-router-dom";
import { AdminContext } from "../context/AdminState";

function Login(props) {
  const imgUrl = process.env.REACT_APP_IMAGE_FETCH_API;

  const { signIn, isAdmin, token } = useContext(AdminContext);
  let history = useHistory();
  // console.log(history);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticate, setAuthenticate] = useState({
    admin: true,
  });

  const submitLoginForm = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    // console.log(loginData);
    try {
      const res = await axios.post(`/admin/signin`, loginData);
      if (res.status === 200) {
        // console.log("admin logged in");
        signIn(res.data.token);

        if (isAdmin) {
          //  console.log(isAdmin)
          //  <Redirect to={`/dashboard`} />
          history.push("/dashboard");
        }
      }
    } catch (error) {
      //console.log(error.response);
      if (typeof error.response != "undefined")
        Toast("error", `${error.response.data.message}`);
      else Toast("error", "server timeout");
    }
  };

  return (
    <>
      {token ? (
        history.push("/dashboard")
      ) : (
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
                    <h1 className="text-4xl text-center font-thin">
                      Welcome Back
                    </h1>
                    <div className="w-full mt-4">
                      <form
                        className="form-horizontal w-11/12 mx-auto"
                        onSubmit={submitLoginForm}
                      >
                        <div className="flex flex-col mt-4">
                          <input
                            type="text"
                            style={{
                              background: "white",
                              color: "black",
                              paddingLeft: "1rem",
                            }}
                            value={email}
                            id="email"
                            className="flex-grow h-10 px-4 border rounded border-grey-400"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <input
                            type="password"
                            style={{
                              background: "white",
                              color: "black",
                              paddingLeft: "1rem",
                            }}
                            value={password}
                            id="password"
                            className="flex-grow h-10 px-4 rounded border border-grey-400"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col mt-8">
                          <button
                            type="submit"
                            className="login_button bg-blue-500 text-white text-m font-semibold py-2 px-4 rounded"
                          >
                            Login
                          </button>
                          {Toasty()}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
