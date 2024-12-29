import { SiTicktick } from "react-icons/si";

const BgShadow = () => {
  return (
    
    <div className='border h-52 bg-white mx-auto md:w-1/2  my-48 rounded-2xl shadow-2xl'>
        <div className="flex items-center flex-col my-5">
            <SiTicktick size={60} className="text-green-600"/>
            <div className="flex flex-col items-center mt-4 gap-3">
            <p>Your Application Has been Submitted for review.</p>
            <p className="text-xs text-gray-400">Please check your email for updates on the status of your application.</p>
            </div>
            
        </div>
    </div>
    
  )
}

export default BgShadow