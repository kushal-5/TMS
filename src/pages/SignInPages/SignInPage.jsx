import { Link } from "react-router-dom"
import BullBeer from "../../assets/images/signinImages/tms.png";
import Form from "../../components/ui/signin/Form";
import Sms from "../../assets/images/signinImages/sms.svg";
import Lock from "../../assets/images/signinImages/lock.svg";

const SignInPage = () => {
    return (
       
 <div className="flex justify-center items-center  bg-[#001217] h-screen w-full overflow-hidden">
  {/* Left Side: Image */}
  <div className="flex flex-col items-start flex-shrink-0 xl:mr-40 lg:mr-32 md:mr-28"> {/* Adjusted margin */}
    <img src={BullBeer} alt="sidebar" className="md:w-[25rem] md:h-[22rem] lg:w-[36rem] lg:h-[40rem] xl:w-[56.875rem] xl:h-[63.563rem]  rounded-lg" />
  </div>
  
  {/* Right Side: Form */}
  <div className="flex flex-col items-start xl:w-[27.313rem] xl:gap-[2.5rem] xl:mr-16 md:w-[15rem] md:gap-[1.5rem] md:mr-24"> {/* Adjusted padding */}
    <h1 className="text-white font-roboto xl:text-5xl md:text-xl font-semibold xl:leading-3 md:leading-3 ">Sign In</h1>

    <Form
      htmlFor="email"
      labelClassName="flex flex-col text-[#828282] font-roboto xl:text-base md:text-sm font-normal xl:leading-[140%] md:leading-[60%] xl:py-2 md:py-2"
      inputClassName="text-[#BDBDBD] font-roboto xl:text-lg xl:w-[437px] md:w-[235px] md:text-sm font-normal bg-black border-b xl:border-[.2px] md:border-[.1px] 
      border-[#BDBDBD] xl:rounded-lg md:rounded-md xl:leading-tight md:leading:tight flex xl:min-w-[240px] md:min-w-[10px] xl:py-[1.125rem] md:py-[.2rem] px-[var(--sds-size-space-400)] 
      items-center xl:gap-[12px] md:gap-[8px] self-stretch"
      src={Sms}
      type="email"
      id="email"
      label="Email"
      placeholder="Enter your email"
    />

    <Form
      htmlFor="password"
      labelClassName="flex flex-col text-[#828282] font-roboto xl:text-base md:text-sm font-normal xl:leading-[140%] md:leading-[60%] xl:py-2 md:py-2"
      inputClassName="text-[#BDBDBD] font-roboto xl:text-lg xl:w-[437px] md:w-[235px] md:text-sm font-normal bg-black border-b xl:border-[.2px] md:border-[.1px] 
      border-[#BDBDBD] xl:rounded-lg md:rounded-md xl:leading-tight md:leading:tight flex xl:min-w-[240px] md:min-w-[10px] xl:py-[1.125rem] md:py-[.2rem] px-[var(--sds-size-space-400)] 
      items-center xl:gap-[12px] md:gap-[8px] self-stretch"
      
      src={Lock}
      type="password"
      id="password"
      label="Password"
      placeholder="Enter your password"
    />

{/* Remember Me */}
<div className="flex items-center gap-2 text-[#828282]">
  <input 
    type="checkbox" 
    id="rememberMe" 
    className="w-4 h-4 accent-[#001217]" // Tailwind classes for checkbox size and color
  />
  <label htmlFor="rememberMe" className="font-roboto xl:text-base md:text-sm font-normal leading-[140%]">
    Remember me
  </label>
</div>


{/* Forgot Password */}
<div className="text-[#FFF] font-roboto xl:text-base md:text-sm font-normal leading-[140%]">
  <Link to="/forgot-password" className="hover:underline">Forgot your password?</Link>
</div>
<div className="text-black font-roboto xl:text-base md:text-sm w-full font-normal xl:leading-[140%] flex xl:p-2 md:p-2 xl:px-[2rem]  md:px-[1.25rem]
justify-center items-center xl:gap-[10px] self-stretch bg-[#F1F510] rounded-lg"><Link to={"/profile"}>SIGN IN</Link></div>

<div className="text-[#828282] font-roboto xl:text-base md:text-sm  font-normal leading-[1.4]">
Don't have an account? <span> </span><Link to={"/register"} className="text-[#FFFFFF]">Register</Link>
</div>

  </div>
</div>

    );
};

export default SignInPage;


