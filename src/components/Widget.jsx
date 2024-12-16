import { TbFileXFilled } from "react-icons/tb";
const Widget = ({prop}) => {
  return (
    <div className='mt-4 ml-3'>
      
      <div className="flex mt-5  w-1/2 ml-10 h-20 ">
       <div>
       <TbFileXFilled size={80} className="text-blue-950"/>
       </div>
      <div className="flex items-center flex-col ml-11 gap-4">
        <h2 className="text-2xl">1</h2>
        <h3 className="text-x">Under Review</h3>
      </div>

      </div>

    </div>
  )
}

export default Widget