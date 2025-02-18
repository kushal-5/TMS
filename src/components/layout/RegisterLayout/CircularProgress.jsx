import { useForm } from "../../../contexts/FormContext";

const CircularProgress = () => {
  const { filledFields, totalFields } = useForm();
  const { calculateProgress } = useForm();
  const progress = calculateProgress();

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 204" className="w-52 h-52">
          <circle cx="101" cy="103" r="96" className="stroke-gray-800 stroke-[10]" />
          <path
            d="M101 6.64453C107.354 6.64453 113.564 7.25955 119.575 8.4333"
            className="stroke-yellow-400 stroke-[12] stroke-linecap-round"
          />
        </svg>

        {/* Centered Progress Text */}
        <span className="absolute inset-0 flex items-center justify-center text-4xl font-medium transition-all duration-700 ease-in-out">
          {progress}%
         <span className="absolute text-[#828282] text-center font-roboto text-[20px] font-normal leading-[140%] capitalize mt-28 "
         > {filledFields }/{ totalFields} </span>
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;
