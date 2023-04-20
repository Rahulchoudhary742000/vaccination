import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function LoginModel(props){
    
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(props.login(false));
    const handleShow = () => setShow(true);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const formSubmit=(event)=>{
       event.preventDefault();
       submitAPI();
    }
    const submitAPI=async()=>{
       
        if(email.length>0&&password.length>0){
           
          // var headers = new Headers();
          // headers.append('Content-Type', 'application/json');
          // headers.append('Accept', 'application/json');
          
          // return fetch('http://localhost:7777/login', {
          //     method: 'post',
          //     credentials: 'include', // Don't forget to specify this if you need cookies
          //     headers: headers,
          //     body: JSON.stringify({email,password})
          // })

          let result=await fetch('http://localhost:7777/user/login',{
             method:'post',
             credentials:'include',
             headers:({'Content-Type':'application/json'}),
             body:JSON.stringify({email,password})
          })
          result=await result.json();
          if(result){
              // localStorage.setItem('vaccineUSER',JSON.stringify(email));
              handleClose();
                //nevigate("/user")
          }
        }
    }
     return(
        <>
         <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <form onSubmit={formSubmit} >
          <Modal.Body>
          
            <label>Email</label>
            <input 
               className='form-control'
               placeholder='enter email' 
               required 
               type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
               onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password</label>
            <input type='password' 
               className='form-control'
               placeholder='enter password' 
               required onChange={(e)=>{setPassword(e.target.value)}}
               
            />
          
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type='submit'>
              Login
            </Button>
            
          </Modal.Footer>
          </form> 
        </Modal>
      </>
     )
}
export default LoginModel;