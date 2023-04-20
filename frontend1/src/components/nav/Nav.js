import { useState, useEffect } from "react";
import "./component.css";
import LoginModel from "../login/LoginModel";
import SignModel from "../sign-in/SignModel";
import AddChild from '../child/AddChild';
import Logout from './Logout'
import {useNavigate,Link} from 'react-router-dom'
function Nav() {
  const nevigate=useNavigate();
  let [login, setLogin] = useState(false);
  let [sign, setSign] = useState(false);
  let [child,setChild]=useState(false);
  let [dashboard,setDashboard]=useState(false);
  let [myCookie, setMyCookie] = useState(false);
  let [username,setUsername]=useState('');
  useEffect(() => {
    const myCookie = document.cookie;
    if (myCookie){
      setMyCookie(true);
      userData();
    }
  },[login]);
  const userData=async()=>{
        let myCookie=document.cookie;
        const token=myCookie.split(' ')[0].split('=')[1];
        const email=myCookie.split(' ')[1].split('=')[1].replace("%40", "@");;
        let result=await fetch('http://localhost:7777/user/userData',{
           method:'post',
           headers:{
            authorization:`bearer ${token}`,
            'Content-Type':'application/json'
           },
           body:JSON.stringify({email})
        })
        result=await result.json();
        if(result){
          setUsername(result);
        }
       
  }
  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "transparent" }}
    >
      <a className="navbar-brand" href="#">
        Doctors
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" style={{ cursor: "pointer" }}>
          <li className="nav-item active">
            <Link to='/' className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <span className="nav-link">Prices</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Doctors</span>
           </li>
          {myCookie ? (
            <>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to='/dashboard' className="dropdown-item">
                    Dashboard
                  </Link>
                  <span className="dropdown-item" onClick={()=>{setChild(true)}}>
                    Add Child
                  </span>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to='/vaccine'>
                    Vaccines
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <span className="nav-link">{username}</span>
              </li>
              <li className="nav-item">
                <span className="nav-link"
                 onClick={
                  ()=>{
                    Logout()
                    setMyCookie(false);
                  }
                 }
                >Logout</span>
              </li>
             
            </>
          ) : 
           <>
           
          <li className="nav-item">
            <span
              className="nav-link "
              onClick={() => {
                setLogin(!login);
              }}
            >
              Login
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-link "
              onClick={() => {
                setSign(!sign);
              }}
            >
              Sign-in
            </span>
          </li>
       
          </> 
          
          
         }
      </ul>
      </div>
      {login ? <LoginModel login={setLogin} /> : null}

      {sign ? <SignModel sign={setSign} login={setLogin} /> : null}

      {child ? <AddChild child={setChild} /> : null}
    

         
    </nav>
   </>
  );
}
export default Nav;
