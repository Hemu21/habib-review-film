import React from 'react'
import ReactStars from 'react-stars'
import "./movie.css"
import "./card.css"
import { useState,useEffect } from 'react'
import { doc, getDocs, updateDoc } from 'firebase/firestore/lite'
import { movieref } from '../../firebase/FireBase'
import  TextField  from '@mui/material/TextField'
import MiniReview from './MiniReview'
import { Button } from '@mui/material'


export default function Movie() {
  const [index,setIndex] = useState(null)
  const [rev,setRev] = useState()
  const [rat,setRat] = useState()
  const _url = window.location.pathname
  const url = _url.replace("/main/movie/","")
  useEffect(()=>{
    async function getData(){
      const data = await getDocs(movieref)
      const test = data.docs.map((ele)=>ele.data())
      test.map(ele => {if(ele.name===url){setIndex(ele);setRev(ele.addReview); }}) 
    }
    getData()
  },[])
  function addrev(){
    const desc = document.getElementById("new-desc").value
    setRev([...rev,{rating:rat,desc:desc}])
    updateDoc(doc(movieref,index.name),{addReview:[...rev,{rating:rat,desc:desc}]})
    document.getElementById("new-desc").value=""
  }
try{
  return (
    <div>
        <img className="mov-i" src={index.image} alt="movie" />
        <br />
        <div className='title'><h3 >Name: </h3><h4>{index.name}</h4></div>
        <br />
        <div className='title'><h3 style={{marginTop:"5px"}}>Rating: </h3><p style={{marginTop:"5px"}}><ReactStars value={index.rating} count={5} edit={false} color2={'#ffd700'} /></p></div>
        <br />
        <div className='title'><h3 >Description: </h3></div>
        <br />
        <p className='desc'>{index.desc}</p>
        <br />
        <h3 >Others Opinion </h3>
        {rev.map(ele => <div><MiniReview rating={ele.rating} desc={ele.desc} /></div>)}
        <h2>ADD Your Opinion</h2>
        <h3 >Rating : </h3><h1 style={{marginLeft:"47.5%"}} ><ReactStars onChange={(e)=>{setRat(e)}} color1='white' /></h1>
        <h3 >Description : </h3><TextField id="new-desc" label="Description" type="text" autoComplete="current-password" />
        <br /><br />
        <Button variant='contained' color='success' onClick={addrev}>Add</Button>
    </div>
  )
  } catch (error) {}
}
