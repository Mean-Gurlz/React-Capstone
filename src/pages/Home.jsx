import React from 'react'
import { NavLink } from 'react-router-dom'
import Firebase from './Firebase'

function Home() {
  return (
    <>
    <div className="mt-20 ml-0 pl-0 h-screen bg-no-repeat bg-cover bg-[url('modeel.jpg')] text-center items-center justify-center">
      <div className="text-5xl text-white font-bold ml-96 pt-40 pl-12">
        <div>BREATHE,</div>
        <div>TRAIN,</div>
        <div>ACHIEVE</div>
      </div>
      <div className=" ml-96 text-3xl pl-10 pt-10">
         <p className="text-white ">Push Harder Than Yesterday...</p>
      </div>
      <div className="ml-96 pl-10 pt-10">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><NavLink to='/Firebase'>Sign Up</NavLink></button>
      </div>
    </div>
    </>
  )
}

export default Home
