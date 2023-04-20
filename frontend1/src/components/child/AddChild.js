import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dashboard from "../dashboard/Dashboard";
function AddChild(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(props.child(false));
  const [dash,setDash]=useState(false);
  //form data states
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [head, setHead] = useState("");
  const [cursion, setCursion] = useState("");

 

  const formSubmit = (event) => {
    event.preventDefault();
    submitAPI();
  };
  const submitAPI = async () => {
    let myCookie=document.cookie;
    const token=myCookie.split(' ')[0].split('=')[1];
    const parentEmail=myCookie.split(' ')[1].split('=')[1].replace("%40", "@");
   
    if (
        name.length > 0 &&
        dob.length > 0 &&
        tob.length > 0 &&
        gender.length > 0
    ) {

        console.log(name+" "+dob+" "+tob+" "+gender+" "+weight+" "+height+" "+head+" "+cursion)
        let result = await fetch("http://localhost:7777/child/childRegistration", {
            method: "post",
            body: JSON.stringify({parentEmail, name, dob, tob, gender, weight,height,head,cursion}),
            headers: { 
                authorization:`bearer ${token}`,
                "Content-Type": "application/json" 
            },
        });
          result = await result.json();
        
          if (result) {
            handleClose();
           
          
          }

    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Child Registration</Modal.Title>
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
            //   pattern="[A-Z]+[a-z]+@[0-9]+"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Date of birth</label>
            <input type='date' className='form-control' onChange={(e)=>{
                setDob(e.target.value)
            }} />

            <label>Time of birth</label>
            <input
              className="form-control"
              placeholder="enter time of birth"
              required
              id="tob"
              type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(e) =>{
                setTob(e.target.value);
              }}
            />
            <label>Gender</label>
            <select className="form-control"  id="gender" onChange={(e)=>{setGender(e.target.value)}}>
                 <option value={''}>Select</option>
                 <option value='Male'>Male</option>
                 <option value='Female'>Female</option>
            </select>

            <label>Weight</label>
            <input
              className="form-control"
              placeholder="enter weight in kg..."
              required
              type="text"
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
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {
          dash?<Dashboard />:null
      }
    </>
  );
}
export default AddChild;
