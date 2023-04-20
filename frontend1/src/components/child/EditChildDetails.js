import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import getChildDetails from "../user data/getChildDetails";
function EditChildDetails(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(props.edit(false));
  //form data states
  const [name, setName] = useState(props.childInfo.name);
  const [dob, setDob] = useState(props.childInfo.dob);
  const [tob, setTob] = useState(props.childInfo.tob);
  const [gender, setGender] = useState(props.childInfo.gender);
  const [weight, setWeight] = useState(props.childInfo.weight);
  const [height, setHeight] = useState(props.childInfo.height);
  const [head, setHead] = useState(props.childInfo.head);
  const [cursion, setCursion] = useState(props.childInfo.cursion);

  const formSubmit = (event) => {
    event.preventDefault();
    submitAPI();
  };
  const submitAPI = async () => {
    let myCookie = document.cookie;
    const token = myCookie.split(" ")[0].split("=")[1];
    // const parentEmail=myCookie.split(' ')[1].split('=')[1].replace("%40", "@");
    const chidID = props.childId;
    if (
      name.length > 0 &&
      dob.length > 0 &&
      tob.length > 0 &&
      gender.length > 0
    ) {
      let result = await fetch(
        "http://localhost:7777/child/childDetailsUpdate",
        {
          method: "put",
          body: JSON.stringify([
            { chidID },
            { name, dob, tob, gender, weight, height, head, cursion },
          ]),
          headers: {
            authorization: `bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();
      if (result) {
        handleClose();
        getChildDetails();
      }
      //       if (result) {
      //         handleClose();
      //       }
      //     setSuccess(true);
      //     setTimeout(() => {
      //       handleClose();
      //       props.login(true)
      //     }, 1000);
      //   } else {
      //     setAlready(true);
      //   }
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <form onSubmit={formSubmit}>
          <Modal.Body>
            <label>Name</label>
            <input
              className="form-control"
              placeholder="Rahul"
              required
              id="name"
              type="text"
              value={name}
              //   pattern="[A-Z]+[a-z]+@[0-9]+"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Date of birth</label>
            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />

            <label>Time of birth</label>
            <input
              className="form-control"
              placeholder="enter time of birth"
              required
              id="tob"
              type="text"
              value={tob}
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => {
                setTob(e.target.value);
              }}
            />
            <label>Gender</label>
            <select
              className="form-control"
              id="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value={""}>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label>Weight</label>
            <input
              className="form-control"
              placeholder="enter weight in kg..."
              required
              type="text"
              value={weight}
              //   pattern="[0-9]{10}"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
            <label>Height</label>
            <input
              className="form-control"
              placeholder="enter height in cm..."
              required
              type="text"
              value={height}
              //   pattern="[0-9]{10}"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
            <label>Head</label>
            <input
              className="form-control"
              placeholder="enter head..."
              required
              type="text"
              value={head}
              //   pattern="[0-9]{10}"
              onChange={(e) => {
                setHead(e.target.value);
              }}
            />
            <label>Cursion</label>
            <input
              className="form-control"
              placeholder="enter cursion..."
              required
              type="text"
              value={cursion}
              //   pattern="[0-9]{10}"
              onChange={(e) => {
                setCursion(e.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default EditChildDetails;
