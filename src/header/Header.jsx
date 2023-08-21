import React from 'react';
import "./header.css";
export default function Header() {

  return (
    <div className="col col-12 head">
        <div className="col col-9">
            <span className="logo" ><h1>Habib</h1><span><h1 style={{color:"red"}}>Filmy</h1></span></span>
            
        </div>
        <button id="restricted" className='not-allow' onClick={()=>window.location.href = "./movie/add-movie"} ></button>
    </div>
  )
}
