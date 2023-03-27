import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Blog from './component/Blog';
import Home from './component/Home';
import Login from './component/Login';
import { useSelector } from 'react-redux';
import Add from './component/Add';
import Profile from './component/Profile';

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return (
   <div>
   <header>
  <Header/>

   </header>

   <section>
   
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/blogs" element={<Blog/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/add" element={<Add/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
 

   </section>
   </div>
  );
}

export default App;
