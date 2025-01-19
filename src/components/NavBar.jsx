import holder from '../Images/placeHolder.jpg';
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import {Link} from 'react-router-dom'
import Widget from './Widget';
const NavBar = () => {
  return(
<>
     <nav className=" border-b  w-full  pt-0  lg:flex lg:justify-between lg:block hidden ">
    <div className='flex'>
       <img src={holder} alt="Image" className='w-10 h-10 ml-2 mt-3 rounded-full'/> 
       <div className='ml-1 mt-4'>
      <p className='text-xs text-blue-950 lg:block'>Welcome!</p>
      <span className='text-10px '>Ntale Lamar</span>
       </div>       
    </div>
<div className='flex items-center'>
<IoIosNotificationsOutline size={20} className='relative text-blue-950 '/>
<GoDotFill className='absolute top-0 mt-4 ml-1  text-blue-950'/>
<Link to={'/login'}><button className='flex items-center bg-blue-950 text-white rounded-md h-10 mr-2 w-32 text-center'>
   <p className='ml-7 text-l'>Logout</p> 
    <HiOutlineInformationCircle size={14} className='ml-2'/>
</button></Link>
</div>
</nav>

</>
  )
}

export default NavBar