import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Layout from "../../Layout";
import HeaderHome from "../../Layout/headerHome";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const { loginUser } = useAuth();

  const [user, setUser] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (user.username == "Niico" && user.password == "0998") {
      loginUser(user);
      history.push("/Products");
    } else {
      alert("Usuario No valido");
    }
  };

  return (
    <>
      <HeaderHome>
          <header className="bg-img">
            <div className="container">
              <div className="row justify-content-center">
                <div className="container   justify-content-center align-items-center">
                  <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                      <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                          <h5 className="card-title text-center mb-5 fw-light fs-5">
                            Sign In
                          </h5>
                          <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={(e) =>
                                  setUser({
                                    ...user,
                                    ["username"]: e.target.value,
                                  })
                                }
                              />
                              <label>Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={(e) =>
                                  setUser({
                                    ...user,
                                    ["password"]: e.target.value,
                                  })
                                }
                              />
                              <label>Password</label>
                            </div>

                            <div className="form-check mb-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="rememberPasswordCheck"
                              />
                              <label className="form-check-label">
                                Remember password
                              </label>
                            </div>
                            <div className="d-grid">
                              <button
                                className="login-button text-uppercase fw-bold"
                                type="submit"
                              >
                                Sign in
                              </button>
                            </div>
                            <hr className="my-4" />
                            <div className="d-grid mb-2">
                              <button
                                className="login-button text-uppercase fw-bold"
                                type="submit"
                              >
                                <i className="fab fa-google me-2"></i> Sign in
                                with Google
                              </button>
                            </div>
                            <div className="d-grid">
                              <button
                                className="login-button text-uppercase fw-bold"
                                type="submit"
                              >
                                <i className="fab fa-facebook-f me-2"></i> Sign
                                in with Facebook
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
      </HeaderHome>
    </>
  );
};

export default Login;
