import { Link } from "react-router-dom";
import Lock from "../../assets/images/signinImages/lock.png"
import LockLogo from "../../assets/images/signinImages/lock.svg"
import Form from "../../components/ui/signin/Form";

const ResetPassword=()=>{

return (
<div className="flex justify-center items-center  bg-[#001217] h-screen w-full overflow-hidden">
      {/* Left Side: Image */}
      <div className="flex flex-col items-start flex-shrink-0 mr-[8rem] ml-8 "> {/* Adjusted margin */}
        <img src={Lock} alt="sidebar" className="w-[32rem] h-[35rem] rounded-lg" />
      </div>
      <div className="flex flex-col items-start w-[15rem] gap-[1.5rem] mr-24"> {/* Adjusted padding */}

      <div>
<h1 className="text-white font-roboto text-2xl font-semibold w-[16rem] ">Set New Password</h1>
<p className="text-white text-sm leading-6">Must be atleast 8 characters</p>
</div>
<Form
      htmlFor="password"
      labelClassName="flex flex-col text-[#828282] font-roboto text-sm font-normal  py-2"
      inputClassName="text-[#BDBDBD] font-roboto w-[235px] text-sm font-normal bg-black border-b xl:border-[.2px] md:border-[.1px] 
      border-[#BDBDBD] rounded-md xl:leading-tight leading-tight flex min-w-[10px] py-[.2rem] px-[var(--sds-size-space-400)] 
      items-center gap-[8px] self-stretch"
      
      src={LockLogo}
      type="password"
      id="password"
      label="New Password"
      placeholder="New password"
    />

<Form
      htmlFor="password"
      labelClassName="flex flex-col text-[#828282] font-roboto text-sm font-normal  py-2"
      inputClassName="text-[#BDBDBD] font-roboto w-[235px] text-sm font-normal bg-black border-b xl:border-[.2px] md:border-[.1px] 
      border-[#BDBDBD] rounded-md xl:leading-tight leading-tight flex min-w-[10px] py-[.2rem] px-[var(--sds-size-space-400)] 
      items-center gap-[8px] self-stretch"
      
      src={LockLogo}
      type="password"
      id="newpassword"
      label="Confirm new Password"
      placeholder="Confirm new password"
    />

<button className="text-black font-roboto text-sm w-full font-normal flex p-1
justify-center items-center gap-[10px] self-stretch bg-[#F1F510] rounded-md" >
    <Link to="/reset-success" className="hover:underline">RESET PASSWORD</Link>
</button>

<div className="text-[#FFF] font-roboto text-sm ms-2 font-normal leading-10 mt-24">
  <Link to="/signin" className="hover:underline"> ← Back to login</Link>
  </div>
</div>
    </div>
)

}

export default ResetPassword