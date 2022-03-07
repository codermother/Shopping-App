import React from "react";

function Signup() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark ms-2 "
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <i className="fa fa-user-plus me-1"></i> Register
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ps-4 pe-4 pt-1 pb-3">
            <div className="modal-body">
              <div className="d-flex justify-content-end align-items-center mb-1">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <h5
                className="modal-title login-header text-start mb-3"
                id="exampleModalLabel"
              >
                Register
              </h5>
              <button className="btn btn-dark w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign in With Google
              </button>
              <button className="btn btn-outline-dark w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign in With
                Facebook
              </button>
              <form>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
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
                <button type="submit" className="btn btn-dark w-100 mt-5">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
