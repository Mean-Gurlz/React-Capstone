import { NavLink,Link, Outlet} from "react-router-dom"
export default function Nav(){
    return(
        <>
        <NavLink to='/' className='text-3xl text-white'>Home</NavLink>
        <NavLink to='Chest' className='text-3xl text-white'>Workouts</NavLink>
        <NavLink to='Arms' className='text-3xl text-white'>Sign</NavLink>
        <Outlet/>
        </>
    )
}