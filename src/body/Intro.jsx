import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./intro.css";
import { Link } from 'react-router-dom';


export default function Intro() {
  return (
    <div className="col col-12" >
        <div className="col col-12 intro" >
            <Stack >
                <h2 className="col ">Getting Start</h2>
                <Link to={"login"} ><Button variant="contained" className="col " >Login</Button></Link>
            </Stack>
        </div>
    </div>
  )
}
