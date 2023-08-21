import React from 'react'
import "./card.css";
import ReactStars from 'react-stars'

export default function FCard(props) {
    
  return (
    <div style={{cursor:"pointer"}} id={props.name} onClick={thisr => window.location.href = `./movie/${thisr.currentTarget.id}`}>
      <div id="cards" style={{position:"relative"}}> 
        <img className="mov-img" src={props.image} alt= {`${props.name}-image`}  />
        <div className='title'><h3 >Name: </h3><h4>{props.name}</h4></div>
        <div className='title'><h3 style={{marginTop:"5px"}}>Rating: </h3><p style={{marginTop:"5px"}}><ReactStars value={props.rating} count={5} edit={false} color2={'#ffd700'} /></p></div>
      </div>
    </div>
  )
}
