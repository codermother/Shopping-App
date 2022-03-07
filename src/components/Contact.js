import React from "react";

function Contact() {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4 dark-text">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="/assets/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form
              action="mailto: ozgecoskun_3@hotmail.com"
              method="post"
              enctype="text/plain"
            >
              <div className="mb-3">
                <label for="exampleForm" className="form-label">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  reaquired
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  required
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Send Message
              </button>
            </form>
            <div className="social d-flex mt-4">
              <a href="https://www.facebook.com/oskee3/">
                <i className="fa-brands fa-facebook-square social-icons"></i>{" "}
              </a>
              <a href="https://www.instagram.com/ozgecsknn/">
                <i className="fa-brands fa-instagram-square social-icons"></i>{" "}
              </a>
              <a href="https://www.linkedin.com/in/%C3%B6zge-co%C5%9Fkun-g%C3%BCrsucu-28380987">
                <i className="fa-brands fa-linkedin social-icons"></i>
              </a>
              <a href="https://twitter.com/oskee3">
                <i className="fa-brands fa-twitter-square social-icons"></i>
              </a>
              <a href="https://github.com/codermother">
                <i className="fa-brands fa-github social-icons"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
