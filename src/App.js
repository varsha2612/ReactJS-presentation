import Fade from 'react-reveal/Fade';
import axios from 'axios';
import './App.css';
import React, {useEffect, useState} from 'react';
import reveal from 'reveal.js';
import { Slide } from 'revealjs-react';
import Select from 'react-select'
import {Link} from 'react-router-dom';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Section from './Section';
import Page from './Page';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Page />}/>
      <Route path='/section' element={<Section />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;