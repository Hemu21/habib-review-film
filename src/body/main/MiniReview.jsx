import React from 'react'
import "./movie.css"
import ReactStars from 'react-stars'

export default function MiniReview(props) {
  return (
    <div className='desc' style={{border:"0.2px wheat solid",borderRadius:"5px"}}>
        <h4>Rating:</h4>
        <h2 style={{marginLeft:"47.5%"}} ><ReactStars value={props.rating} count={5} edit={false} color2={'#ffd700'} /></h2>
        <h4>Description: {props.desc}</h4>
    </div>
  )
}
