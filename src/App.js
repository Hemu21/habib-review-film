import './App.css';
import Header from './header/Header';
import Login from './body/login/Login';
import Footer from './footer/Footer';
import Intro from './body/Intro';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Signin from './body/signin/Signin';
import Main from './body/main/Main';
import Movie from './body/main/Movie';
import Error404 from "./body/pageNotFound/404Error"
import { useState,useEffect } from 'react';
import { getDocs } from 'firebase/firestore/lite';
import { usersref } from './firebase/FireBase';
import AddMovie from './body/main/AddMovie';


function App() {
  const [user,setUser]=useState([])
  
  useEffect(()=>{
    async function getData(){
      const data = await getDocs(usersref)
      const test = data.docs.map((ele)=>ele.data())
      test.map(ele => setUser((pre)=>[...pre,ele])) 
    }
    getData()
  },[])
  return (
    <Router>
      
    <div className="App col">      
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} /> 
        <Route path="login" element={< Login userData={user} setUser={setUser} /> } />
        <Route path="signin" element={ <Signin userData={user} setUser={setUser} /> } />
        <Route path="main/:email" element={<Main /> } />
        <Route path="main/movie/:num" element={ <Movie /> } />
        <Route path="main/movie/add-movie" element={ <AddMovie /> } />
        <Route path="*" element={<Error404 />} />
        <Route path="main/*" element={<Error404 />} />

      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

