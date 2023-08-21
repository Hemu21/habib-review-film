import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../firebase/FireBase';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

export default function Login(props) { 
  const data = props.userData
  function google(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      window.location.href="./main/"+user.email
      // ...
    }).catch((error) => {
      console.log(error)
      toast.error("Problem in Signin with Google",{theme:"colored"})
    });
  }
  function loginfun(){
    const email = document.getElementById("log-email").value
    const password = document.getElementById("log-password").value
    if(email===""){
      toast.info("Email Required. Please Enter",{theme:"colored"})
    }else if(password===""){
      toast.info("password Required. Please Enter",{theme:"colored"})
    }else{
      
      for (let index = 0; index < data.length; index++) {
        const ele = data[index];
        if(ele.email===email){
          if(password===ele.password){
            window.location.href= "./main/"+email
            break
          }
          else{
            toast.error("Password not matched",{theme:"colored"})
            break
          }
        }else if(email==="hemu143samyu@gmail.com"){
          if(password==="sam1205@"){
            window.location.href = "./main/hemu143samyu@gmail.com"
          }
          break
        }
        else if(index===data.length-1){
          toast.error("you doesn't have Accout. Please signin",{theme:"colored"})
          break
        }
      }
    } 
    
  }

  return (
    <div style={{cursor:"pointer"}}>
    <ToastContainer />
    <h1>Login </h1> 
    <br /><br />
    <h3 >Email ID: </h3><TextField id="log-email" label="Email ID" variant="outlined" />
    <h3 >Password: </h3><TextField id="log-password" label="Password" type="password"  />
    <br /><br /><br /><br />
    <div><Button variant="contained" color="success" onClick={loginfun}>Login</Button></div>
    <h5>if not register? <Link to={"/signin"}>Signin</Link></h5>
    <br />
        <h4>--------or--------</h4>
        <br />
        <Button variant="outline" style={{background:"white"}} onClick={google} ><img src="https://clipartcraft.com/images/google-logo-transparent-alphabet-2.png" alt='google-logo' width={"30px"} /> Login with Google</Button>
        <br /><br /><br /><br />
    </div>
  )
}
