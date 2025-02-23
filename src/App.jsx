import React from 'react';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
import {BrowserRouter as Main, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
        <Main>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/register' element={<Register />}/>
            <Route exact path='/profile/:username' element={<Profile />}/>
          </Routes>
        </Main>
    </div>
  )
}

export default App
