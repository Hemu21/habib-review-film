import React from 'react'
import TextField from '@mui/material/TextField';
import "./signin.css";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc } from 'firebase/firestore/lite';
import { usersref } from '../../firebase/FireBase';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase/FireBase';



export default function Signin(props) {
  const provider = new GoogleAuthProvider();
  const data = props.userData
  function google(){
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      window.location.href="./main/"+user.email
      // ...
    }).catch((error) => {
      toast.error("Problem in Signin with Google",{theme:"colored"})
    });
  }
  function signcon(){
    const userid = document.getElementById("user-id").value
    const email = document.getElementById("sign-email").value
    const password = document.getElementById("sign-password").value
    const conpassword = document.getElementById("sign-confirm-password").value
    
    if(userid===""){
      toast.info("All Fields are required!",{theme:"colored"})
    }else if(email===""){
      toast.info("All Fields are required!",{theme:"colored"})
    }else if(password===""){
      toast.info("All Fields are required!",{theme:"colored"})
    }else if(conpassword===""){
      toast.info("All Fields are required!",{theme:"colored"})
    }else if(password!==conpassword){
      toast.error("Both passwords should be same!",{theme:"colored"})
    }else{
      for (let index = 0; index < data.length; index++) {
        const ele = data[index];
        if(email===ele.email){
          toast.error("This mail Already Registered",{theme:"colored"})
          setTimeout(()=>window.location.href="./signin",5000)
          break
        }else if(userid===ele.userid){
          toast.error("This userid Already Taken",{theme:"colored"})
          setTimeout(()=>window.location.href="./signin",5000)
          break
        }else if(index===data.length-1){
          setDoc(doc(usersref,userid),{userid:userid,email:email,password:password})
          window.location.href="./main/"+email 
        }
      } 
    } 
  }

  return (
    <div style={{cursor:"pointer"}}>
        <h1>Sign in</h1>
        <ToastContainer />
        <h3 >User ID : </h3><TextField id="user-id" label="User ID" variant="outlined" />
        <h3 >email ID : </h3><TextField id="sign-email" label="email ID" variant="outlined" />
        <h3 >Password : </h3><TextField id="sign-password" label="Password" type="password" autoComplete="current-password" />
        <h3 >Confirm Password : </h3><TextField id="sign-confirm-password" label="Confirm Password" type="password" autoComplete="current-password" />
        
        <br /><br /><br />
        
        <Button variant="contained" onClick={signcon} >SIGNIN</Button>
        <h5>Already have an account? <Link to={"/login"}>Login</Link></h5>
        <br />
        <h4>--------or--------</h4>
        <br />
        <Button variant="outline" style={{background:"white"}} onClick={google} ><img src="https://clipartcraft.com/images/google-logo-transparent-alphabet-2.png" alt="google-logo" width={"30px"} /> Signin with Google</Button>
        <br /><br /><br /><br />
    </div>
  )
}
