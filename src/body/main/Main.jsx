import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FCard from './FCard';
import "./card.css"
import { useEffect } from 'react';
import { movieref } from "../../firebase/FireBase"
import { getDocs } from 'firebase/firestore/lite';


export default function Main() {
  const [res,SetRes]=useState([])
  const _url = window.location.pathname
  const url = _url.replace("/main/","")
  useEffect(()=>{
    if(url==="hemu143samyu@gmail.com"){
      document.getElementById("restricted").className = "allow"
      document.getElementById("restricted").innerHTML= "ADD Movie"
    }
    toast.success("Succussfully Entered into Your Account",{theme:"colored"})
    async function getData(){
      const data = await getDocs(movieref)
      const test = data.docs.map((ele)=>ele.data())
      test.map(ele => SetRes((pre)=>[...pre,ele])) 
    }
    getData()}
  ,[])
  return (
    <div >
      
      <ToastContainer />
      <div style={{position:"relative"}}> {res.map((e,i)=><div className='whole'><FCard key={i} name={e.name} image={e.image} rating={e.rating} /></div>)}</div>
    </div>
  )
}
