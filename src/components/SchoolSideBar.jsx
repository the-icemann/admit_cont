import { TbHomeFilled } from "react-icons/tb";
import { MdMenuOpen } from "react-icons/md";
import { useState } from 'react'
import phone from '../Images/Group 145.png'
import map from '../Images/map-marker.png'
const menuItems=[
    {
        icon:<TbHomeFilled size={30}/>,
        label:'School Info'
    },

    {
        icon: <img src={phone} alt="Logo" />

    },
    {
        icon: <img src={map} alt="Logo" />

    }
]
const SchoolSideBar = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <nav className={`shadow-md  h-lvh bg-blue-950 duration-500  ${isOpen?'w-60':'w-16'} `}>
           <div className="flex justify-between items-center mb-5 border-blue-950 h-20">
                 <h1 className={`text-3xl text-white ${!isOpen&&'hidden'}`} >Ad
                   <span className="text-yellow-400">MIT</span></h1>
                 <button>
                   <MdMenuOpen size={40}className={`${isOpen?'ml-14 duration-500 ':'ml-2 duration-500 rotate-180'} text-yellow-400`} onClick={()=>setIsOpen(!isOpen)}/>
                 </button>
               </div>
               {/*Menu*/}
               <ul>
                {
                  menuItems.map((items,index)=>{
                    return <li key={index}className=" text-white px-3 py-2 hover:bg-white duration-300 hover:text-blue-600 cursor-pointer rounded-md flex  items-center ">
                     <div className={`${isOpen&&'mx-auto'}`}>{items.icon}</div>
                     <p className={`${!isOpen&&'w-0 translate-x-24 duration-500'} overflow-hidden  text-xl`}>{items.label}</p>
                     
      
                    </li>
                  })
                }
               </ul>
                
                
      
          </nav>
  )
}

export default SchoolSideBar