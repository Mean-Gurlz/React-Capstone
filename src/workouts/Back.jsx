import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import Dynamic from "../pages/Dynamic";
import { createContext } from "react";

export const data = createContext("")


export default function Back(){

    const[display,setDisplay]=useState([])

    const fetchData=async()=>{
  
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=12';
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'b091b39942mshb10ac1343871dbep1e2980jsn6c01f58b6e75',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
  };
  
  try {
      const response = await fetch(url, options);
      const result = await response.json();
      setDisplay(result);
  
  } catch (error) {
      console.error(error);
  }
    }
  
    useEffect(()=>{
      fetchData()
    },[])
  
    return (
      <>
      <div className="grid grid-cols-3 gap-3 ml-7 bg-cover bg-center">
      {
        display.map((dis)=>{
          return(
        <div className="output shadow dark:bg-gray-800 dark:border-gray-700" key={dis.id}>
          <img  className="rounded-t-lg" src={dis.gifUrl} alt="" />
          <div className="text-2xl mb-2 ml-3 font-bold">{'Name: '+dis.name}</div>
          <div className="text-2xl mb-2 ml-3 text-gray-700 dark:text-gray-400 ">{'Target: '+dis.target}</div>
          <div className="text-2xl mb-2 ml-3 text-gray-700 dark:text-gray-400 ">{'Equiment: '+dis.equipment}</div>
          <NavLink  className="text-2xl ml-3 text-gray-700 dark:text-gray-400 " to={`/Back/${dis.id}`}>View More...</NavLink>
        
        </div>
          )
        })
        
      }
      <data.Provider value={{display}}>
        <Dynamic/>
      </data.Provider>
     
      </div>
      </>
    )
}