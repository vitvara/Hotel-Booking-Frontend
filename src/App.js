import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { Fragment } from 'react';
import Home from './pages/home';
import RoomDis from './pages/roomDis';
import { Nav } from 'react-bootstrap';
import NavBar from './components/NavBar';
import LogIn from './pages/login';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          
          <Route path="/room-booking" element={<RoomDis />}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
