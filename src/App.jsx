import { useEffect, useState } from 'react'
import './App.css'
import Back from './workouts/back'
//import Chest from './workouts/chest'
//import Arms from './workouts/arms'
//import Shoulders from './workouts/shoulders'
//import Legs from './workouts/legs'
//import Home from './pages/home'
//import Display from './pages/display'
//import Firebase from './pages/firebase'
//import Nav from './pages/nav'
import{createBrowserRouter,createRoutesFromElements,Route,Link,NavLink,RouterProvider} from 'react-router-dom'

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='Display' element={<Display/>}/>
        <Route path='Firebase' element={<Firebase/>}/>
        <Route path='Back' element={<Back/>}/>
        <Route path='Back/:id' element={<Home/>}/>
      </Route>
    )
  )
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
