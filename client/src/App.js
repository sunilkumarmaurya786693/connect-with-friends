import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Profile from './component/Profile';
import Login from './component/Login';
import Signup from './component/Signup';
import CreatePost from './component/CreatePost';
import './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact>       <Home/>           </Route>
      <Route path="/login">        <Login/>          </Route>
      <Route path="/signup">       <Signup/>         </Route>
      <Route path="/profile">      <Profile/>        </Route>
      <Route path="/create-post">  <CreatePost/>     </Route>
    </BrowserRouter>
  );
}

export default App;
