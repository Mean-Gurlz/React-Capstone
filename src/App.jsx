import { useEffect, useState } from 'react'
import './App.css'
import Back from './workouts/Back'
import Chest from './workouts/Chest'
import Arms from './workouts/Arms'
import Shoulders from './workouts/Shoulders'
import Legs from './workouts/Legs'
import Home from './pages/Home'
import Display from './pages/Display'
import Firebase from './pages/Firebase'
import Nav from './pages/Nav'
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
