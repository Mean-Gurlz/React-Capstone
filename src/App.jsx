import { useEffect, useState } from 'react'
import './App.css'
import Back from './workouts/back'
import Chest from './workouts/chest'
import Arms from './workouts/arms'
import Shoulders from './workouts/shoulders'
import Legs from './workouts/legs'
import Home from './pages/home'

import{createBrowserRouter,createRoutesFromElements,Route,Link,NavLink, RouterProvider} from 'react-router-dom'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='Back' element={<Back/>}/>
        <Route path='Chest' element={<Chest/>}/>
        <Route path='Arms' element={<Arms/>}/>
        <Route path='Shoulders' element={<Shoulders/>}/>
        <Route path='Legs' element={<Legs/>}/>
      </Route>
    )
  )
  
  return (
    <>
    <RouterProvider router={router}/>
    <Home/>
    </>
  )
}

export default App
