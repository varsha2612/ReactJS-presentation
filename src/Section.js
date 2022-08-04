import axios from 'axios';
import './App.css';
import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

function Section() {

    const [sections,setSections]=useState(null)
    const [loading,setLoading]=useState(false)
    const location=useLocation()
    useEffect(()=>{
        const pagename= location.state.pagename.value
        const guidename= location.state.guidename
        console.log(guidename+" "+pagename)
        if(guidename==undefined || pagename==undefined)
        window.alert("No page name found")

        const fetchData =async()=>{
            try {
      

                const response=await axios.post('http://localhost:8000/api/get/sections/',{guidename,pagename})
                const d = response.data.data.sections
                setSections(d)
                setLoading(true)
              } catch (error) {
                
              }
          
        }
        fetchData()
   
        
    },[])

  return ( 
   <div>
{loading && sections.map((section)=>
  (
    <div key={section.description}><h1>{section.name}</h1><h1>{section.description}</h1></div>
 )




)}
   </div>
   
  );
}

export default Section;