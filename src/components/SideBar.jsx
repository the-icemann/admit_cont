import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { LiaNotesMedicalSolid } from "react-icons/lia"; 
import { HiMiniCog8Tooth } from "react-icons/hi2";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
const menuItems=[
  {
    icon:<MdOutlineSpaceDashboard size={30}/>,
    label:'User DashBoard'

  },
  {
    icon:<HiAcademicCap size={30}/>,
    label:'Application status'

  },
  {
    icon:<LiaNotesMedicalSolid size={30}/>,
    label:'School selection'

  },
  {
    icon:<HiMiniCog8Tooth size={30} />,
    label:'settings'

  }  
]
const LogOut=[
  {
    icon:<HiArrowRightStartOnRectangle size={30}/>,
    label:'LogOut'
  }
]
const SideBar = () => {

  const [isOpen,setIsOpen]=useState(true)

  return (
    <nav className={`shadow-md h-lvh  bg-blue-950 duration-500  ${isOpen?'w-60':'w-16'} `}>
     <div className="flex justify-between items-center mb-5 border-blue-950 h-20">
           <h1 className={`text-3xl text-white ${!isOpen&&'hidden'}`} >Ad
             <span className="text-yellow-400">MIT</span></h1>
           <button>
             <MdMenuOpen size={40}className={`${isOpen?'ml-14 duration-500':'ml-2 duration-500 rotate-180'} text-yellow-400`} onClick={()=>setIsOpen(!isOpen)}/>
           </button>
         </div>
         {/*Menu*/}
         <ul>
          {
            menuItems.map((items,index)=>{
              return <li key={index}className=" text-white px-3 py-2 hover:bg-white duration-300 hover:text-blue-600 cursor-pointer rounded-md flex gap-2 items-center relative group">
               <div>{items.icon}</div>
               <p className={`${!isOpen&&'w-0 translate-x-24 duration-500'} overflow-hidden`}>{items.label}</p>
               <p className={`${isOpen&&'hidden'} absolute left-32 shadow-md p-2 rounded-md
               w-0
               p-0
               duration-300
               overflow-hidden
               group-hover:w-fit
               group-hover:p-2
               group-hover:left-16
                
               `}>{items.label}</p>

              </li>
            })
          }
         </ul>
          {/* Footer */}
          <div className="mt-56">
            <hr />
            <ul >
              {LogOut.map((items,index)=>{
                return <li key={index} className="flex px-3 py-2 gap-3 mt-5 text-white items-center cursor-pointer" >
                  <div>{items.icon}</div>
                  <p className={`${!isOpen&&'hidden'}`}>{items.label}</p>
                </li>
                
              })}
            </ul>
          </div>

    </nav>
  )
}

export default SideBar