import {  useParams } from "react-router-dom"
import { useContext } from "react"
import { data } from "../workouts/Back"
   
export default function Dynamic(){
    const{id}=useParams()
    
    const{display}=useContext(data)
    return(
        <>
        <div className="bg-[url('OIP.jpg')] bg-no-repeat pb-80">
        <div className="pt-20">This is id number{id}</div>
    {
    
    }
        </div>
        </>
    )
}