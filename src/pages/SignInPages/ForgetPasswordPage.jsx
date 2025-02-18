import { Link } from "react-router-dom";
import What from "../../assets/images/signinImages/what.png"
import Form from "../../components/ui/signin/Form"
import Sms from "../../assets/images/signinImages/sms.svg";
import { useState } from "react";


const ForgotPassword= ()=>{
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    // Handle form submission
    console.log('Email submitted:', email);
  };

return (
  <div className="flex justify-center items-center  bg-[#001217] h-screen w-full overflow-hidden">
   {/* Left Side: Image */}
   <div className="flex flex-col items-start flex-shrink-0 mr-[8rem] ml-8 "> {/* Adjusted margin */}
     <img src={What} alt="sidebar" className="w-[32rem] h-[35rem] rounded-lg" />
   </div>
     {/* Right Side: Form */}
  <div className="flex flex-col items-start w-[15rem] gap-[1.5rem] mr-24"> {/* Adjusted padding */}
    <div>

    <h1 className="text-white font-roboto text-3xl font-semibold w-[15rem] ">Forgot Password </h1>
    <p className="text-white text-[.6rem] leading-6"> No worries,we'll send you instructions</p>
    </div>

    <Form
      htmlFor="email"
      labelClassName="flex flex-col text-[#828282] font-roboto xl:text-base md:text-sm font-normal xl:leading-[140%] md:leading-[60%] xl:py-2 md:py-2"
      inputClassName="text-[#BDBDBD] font-roboto w-full text-sm font-normal bg-black border-b border-[.1px] 
      border-[#BDBDBD] rounded-md leading-tight py-[.2rem] px-4
      items-center gap-[8px]"
      src={Sms}
      type="email"
      id="email"
      label="Email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onSubmit={handleSubmit}
    />

<button className="text-black font-roboto text-sm w-full font-normal flex p-1
justify-center items-center gap-[10px] self-stretch bg-[#F1F510] rounded-lg" >
    <Link to="/get-otp" className="hover:underline">GET OTP</Link>
</button>

  <div className="text-[#FFF] font-roboto text-[.6rem] ms-2 font-normal leading-10 mt-24">
  <Link to="/" className="hover:underline"> ← Back to login</Link>
  </div>

    </div>

    </div>
)


}

export default ForgotPassword