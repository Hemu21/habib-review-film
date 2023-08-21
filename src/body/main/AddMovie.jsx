import React, { useState } from 'react'
import  TextField  from '@mui/material/TextField'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from '@mui/material'
import ReactStars from 'react-stars'
import { doc, setDoc } from 'firebase/firestore/lite'
import { movieref } from '../../firebase/FireBase'

export default function AddMovie() {
    const [rate,setRate] = useState()
    function addMov(){

        const name = document.getElementById("added-name").value
        const image = document.getElementById("added-url").value
        const desc = document.getElementById("added-desc").value
        setDoc(doc(movieref,name),{name:name,image:image,desc:desc,rating:rate,addReview:[]})
        document.getElementById("added-name").value = ""
        document.getElementById("added-url").value = ""
        document.getElementById("added-desc").value = ""
        toast.success("New Movie is Added",{theme:"colored"})
    }
    
  return (
    <div >
        <ToastContainer />
        <h3 >Movie Name : </h3><TextField id="added-name" label="Movie Name" variant="outlined" />
        <h3 >Image URL : </h3><TextField id="added-url" label="Image URL" variant="outlined" />
        
        <h3 >Rating : </h3><h1 style={{marginLeft:"47.5%"}} ><ReactStars onChange={(e)=>{setRate(e)}} color1='white' /></h1>
        <h3 >Description : </h3><TextField id="added-desc" label="Description" type="text" autoComplete="current-password" />
        <br /><br /><br />
        
        <Button variant="contained" color='success' onClick={addMov} >Submit</Button>
        <br /><br /><br /><br />
    </div>
  )
}
