import place from '../Images/placeHolder.jpg'

import { BsThreeDotsVertical } from "react-icons/bs";
const Admissions = () => {
  return (
    <div className='flex items-center mt-4 justify-between h-24'>
        <div>
            <img src={place} alt="Image" className='w-28' />
        </div>
        <div>
            <p> We are pleased to inform you that you have been selected as a senior five Student in our school.congratulations!</p>
        </div>
        <div>
            <BsThreeDotsVertical size={30}/> 
        </div>
    </div>
  )
}

export default Admissions