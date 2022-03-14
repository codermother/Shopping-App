import React, { useState } from "react";
import { auth, provider } from "../firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/action";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
        setUser(auth.user);
        setModal(false);
      })
      .catch((error) => alert(error.message));
  };

  const setUser = (user) => {
    dispatch(signIn(user));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={(e) => setModal(true)}
      >
        <i className="fa fa-sign-in me-1 "></i> Login
      </button>
      {modal === true && (
        <>
          <div className="formWrapper" onClick={() => setModal(false)} />

          <div className="modal-content position-absolute">
            <div className="d-flex justify-content-end align-items-center mb-1 mt-4 me-4">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal(false)}
              ></button>
            </div>
            <div className="modal-body ps-5 pe-5 pt-0 pb-3">
              <h5
                className="modal-title login-header text-start mb-5"
                id="exampleModalLabel"
              >
                Login
              </h5>
              <button
                className="btn btn-dark w-100 mb-4"
                data-bs-dismiss="modal"
                onClick={handleAuth}
              >
                <span className="fa fa-google me-2"></span> Sign in With Google
              </button>
              <form onSubmit={login}>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check text-start">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree the terms and conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-5 mb-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
