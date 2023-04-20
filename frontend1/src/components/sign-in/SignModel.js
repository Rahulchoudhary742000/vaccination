import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function SignModel(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(props.sign(false));
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [already, setAlready] = useState(false);
  const [success, setSuccess] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();
    submitAPI();
  };
  const submitAPI = async () => {
    if (
      username.length > 0 &&
      email.length > 0 &&
      mobile.length > 0 &&
      password.length > 0
    ) {
      let result = await fetch("http://localhost:7777/user/sign-in", {
        method: "post",
        body: JSON.stringify({ username, mobile, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      result = await result.json();
      alert(result);
      if (result) {
        setSuccess(true);
        setTimeout(() => {
          handleClose();
          props.login(true)
        }, 1000);
      } else {
        setAlready(true);
      }
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          {already ? (
            <>
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
                style={{ position: "absolute", top: "0px", left: "1px" }}
              >
                <strong>account already exists</strong> You should check in on
                some of those fields below.
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  style={{ border: "none" }}
                >
                  <span
                    aria-hidden="true"
                    onClick={() => {
                      setAlready(false);
                    }}
                  >
                    &times;
                  </span>
                </button>
              </div>
            </>
          ) : null}
          {success ? (
            <>
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
                style={{ position: "absolute", top: "0px", right: "0px" }}
              >
                <strong>Account Registered </strong>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  style={{ border: "none" }}
                >
                  <span
                    aria-hidden="true"
                    onClick={() => {
                      setSuccess(false);
                    }}
                  >
                    &times;
                  </span>
                </button>
              </div>
            </>
          ) : null}
          <Modal.Title>Sign-UP</Modal.Title>
        </Modal.Header>
        <form onSubmit={formSubmit}>
          <Modal.Body>
            <label>Username</label>
            <input
              className="form-control"
              placeholder="Abcd@123..."
              required
              id="username"
              type="text"
              pattern="[A-Z]+[a-z]+@[0-9]+"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label>Email</label>
            <input
              className="form-control"
              placeholder="enter email"
              required
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Mobile</label>
            <input
              className="form-control"
              placeholder="enter number"
              required
              type="text"
              pattern="[0-9]{10}"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="enter password"
              pattern="[a-z0-9]{6}"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Sign-Up
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default SignModel;
