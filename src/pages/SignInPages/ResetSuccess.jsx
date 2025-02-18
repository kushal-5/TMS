import Done from '../../assets/images/signinImages/done.png'
import { Link } from 'react-router-dom'

const ResetSuccess = () => {
    return(
       <div className="flex justify-center items-center  bg-[#001217] h-screen w-full overflow-hidden">
             {/* Left Side: Image */}
             <div className="flex flex-col items-start flex-shrink-0 mr-[8rem] ml-8 "> {/* Adjusted margin */}
               <img src={Done} alt="sidebar" className="w-[32rem] h-[35rem] rounded-lg" />
             </div>
             <div className="flex flex-col items-start w-[15rem] gap-[1.5rem] mr-24">

             <div>
<h1 className="text-white font-roboto text-3xl font-semibold w-[16rem] ">Reset Password Success</h1>
<p className="text-white text-xs leading-6">Your password has been reset successfully!</p>
</div>

<div className='flex flex-col justify-center items-center ms-24'>
<div className="flex justify-center items-center w-15 h-15 bg-[#808209] rounded-full">
<div className='flex justify-center items-center w-12 h-12 bg-[#CACC21] rounded-full'>
<div className='flex justify-center items-center w-10 h-10 bg-[#E8EB2D] rounded-full'>
<div className='flex justify-center items-center w-8 h-8 bg-[#F1F510] rounded-full '>
    <h1 className="text-bold bg-[#FDFF6C]  w-6 h-6 text-center rounded-full "> ✓</h1>
</div>
</div>
</div>
</div>
</div>

<button className="text-black font-roboto text-sm w-full font-normal flex p-1
justify-center items-center gap-[10px] self-stretch bg-[#F1F510] rounded-md" >
    <Link to="/" className="hover:underline">NEXT</Link>
</button>
<div className="text-[#FFF] font-roboto text-sm ms-2 font-normal leading-10 mt-24">
  <Link to="/signin" className="hover:underline"> ← Back to login</Link>
  </div>
                </div>
        </div>
    )
}

export default ResetSuccess