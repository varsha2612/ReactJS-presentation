import Fade from 'react-reveal/Fade';
import axios from 'axios';
import './App.css';
import React, {useEffect, useState} from 'react';
import reveal from 'reveal.js';
import { Slide } from 'revealjs-react';
import Select from 'react-select'
import {Link} from 'react-router-dom';
import Navbar from "./Navigation/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
function Page() {
  const [pages,setPages]=useState([])
  const [selectedPage,setSelectedPage]=useState(null)
  const [selectedSection,setSelectedSection]=useState(null)
  const [sections,setSections]=useState([])
  const [loading,setLoading]=useState(false)
  const query=new URLSearchParams(window.location.search)
  const guidename=query.get('guidename')
  const submitHandler= async()=>{
    try {
      
      const response=await axios.post('http://localhost:8000/api/get/sections/',{guidename,pagename:selectedPage.value})
      
      const d = response.data.data.sections
      console.log(d)
    } catch (error) {
      
    }
    }
  //console.log(guidename)

 useEffect(()=>{
  const fetchData =async()=>{
  const response=await axios.post('http://localhost:8000/api/get/guidename/',{guidename})
  const d = response.data.data

  const pageList = d.pages;
  const sectionsList = d.sections
  const pageOptions=[]
  pageList.forEach((p)=>{
    const tempObject ={value:p.name,label:p.name}
    pageOptions.push(tempObject)
  })
  const sectionOptions=[]
  sectionsList.forEach((p)=>{
    const tempObject ={value:p.name,label:p.name}
    sectionOptions.push(tempObject)
  })  
setPages(pageOptions)
setSections(sectionOptions)
setLoading(true)
  }
  fetchData()
    

  },[])

  const pageChangeHandler=(s)=>{
    setSelectedPage(s)
    console.log(s)
  }
  const sectionChangeHandler=(s)=>{
    setSelectedSection(s)
    console.log(s)
  }
  return ( 
   <div>
    {
      loading && (
        
<div>

  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        APP PAGES
      </a>
 
          <li className="nav-item dropdown">
          <Select value={selectedPage} onChange={pageChangeHandler} options={pages}/>
            {/* <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a> */}
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
      
    </nav>
    </div>
    <div style={{display:"flex", width:"100vw", height:"100vh",justifyContent:"center", alignItems:"center", flexDirection:"column"}}><h1>{guidename}</h1><button style={{width:"100px", height:"40px", backgroundColor:"greenyellow", borderRadius:"5px", textDecoration:"none"}}><Link to={"/section"} state={{pagename:selectedPage,guidename:guidename}}   >Submit</Link></button></div></div>

  
  


    
       
   
       
 
   
   )
  
    }

   </div>
   
  );
}

export default Page;