import OTP from "../../assets/images/signinImages/otp.png"
import { OtpInput } from 'reactjs-otp-input';
import { Link } from "react-router-dom";

const GetOTP=()=>{
return (
     <div className="flex justify-center items-center  bg-[#001217] h-screen w-full overflow-hidden">
      {/* Left Side: Image */}
      <div className="flex flex-col items-start flex-shrink-0 mr-[8rem] ml-8 "> {/* Adjusted margin */}
        <img src={OTP} alt="sidebar" className="w-[32rem] h-[35rem] rounded-lg" />
      </div>
      <div className="flex flex-col items-start w-[15rem] gap-[1.5rem] mr-24"> {/* Adjusted padding */}
      <div>

<h1 className="text-white font-roboto text-3xl font-semibold w-[15rem] ">OTP Verification</h1>
<p className="text-white text-sm leading-6">We have sent a code to your email</p>
</div>
    <OtpInput 
 inputStyle={{
    backgroundColor: "black",  // Background black
    border: "1px solid white",  // white border
    color: "white",            // Text color white
    width: "3rem",             // Adjust width
    height: "4rem",            // Adjust height
    textAlign: "center",       // Center the text
    borderRadius: "0.375rem",  // Rounded corners (optional)
  }}
  numInputs={4} 
  separator={<span>&nbsp;-&nbsp;</span>} 
/>

<div className="flex text-[#FFF] font-roboto text-sm ms-2 font-normal leading-10 ">
    <p>Didn't recieve email? </p> <br /> <span><Link to="/resend-otp" className="flex flex-col hover:underline">Click to resend</Link> </span>
  </div>
  <button className="text-black font-roboto text-sm w-full font-normal flex p-1
justify-center items-center gap-[10px] self-stretch bg-[#F1F510] rounded-md" >
    <Link to="/reset-password" className="hover:underline">VERIFY & PROCEED</Link>
</button>

<div className="text-[#FFF] font-roboto text-sm ms-2 font-normal leading-10 mt-24">
  <Link to="/" className="hover:underline"> ← Back to login</Link>
  </div>
      </div>
    </div>
)

}

export default GetOTP