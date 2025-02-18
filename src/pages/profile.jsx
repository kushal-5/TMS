import ProfileCard from "../components/profile/profilecard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GeneralPage from "../components/profile/general";
import ClientDetailPage from "../components/profile/details";
import Documents from "../components/profile/documents";
import uploadimg from "../assets/profileimg/upload.svg";

const Profile = () => {
  const tabs = [
    { id: "general", label: "General" },
    { id: "clientDetails", label: "Client Details" },
    { id: "documents", label: "Documents" },
  ];
  const userDetails = {
    name: "Diksha Muktan",
    email: "diksha@example.com",
    phone: "+977-9800000000",
    address: "Hetauda, Nepal",
    clientGroup: "Default Client Group",
    code: "45776766345353",
    ucc: "86878999898",
    boid: "87787897",
    pan: "A76868",
    marginLending: "No",
    referredBy: "Default Online Client Group",
    totalCollateral: "8,000.00",
    utilizedCollateral: "6,000.00",
    availableCollateral: "2,000,00",
    totalTradingLimit: "1,000.00",
    utilizedTradingLimit: "1,000,00",
    availableTradingLimit: "1,000.00",
    totalDueAmount: "6,000.00",
    logInDate: "12/24/2024, 11:31:27 AM",
  };
  const ClientDetails = {
    fatherName: "shyam Kumar Muktan",
    motherName: "Amrita Muktan",
    dateOfBirth: "2040-04-12",
    maritalStatus: "Unmarried",
    organizationName: "Dav NEB +2 Collage",
    organizationAddress: "sanepa",
    spouseName: "abc",
    nationality: "Nepalese",
    occupation: "Teacher",
    grandFatherName: "Narayan Singh Muktan",
    contactNumber: "9856578678",
    gender: "Female",
    citizenshipNo: "14-1-75",
    citizenshipIssueDate: "2072-02-23",
    citizenshipIssuePlace: "Hetauda",
    financialDetails: "50,000",
    bankName: "Nepal SBI Bank, Hetauda Branch",
    accountNO: "0026878368",
    temporaryAddress: "Bhaisepati, Lalitpur",
    permanentAddress: "Hetauda, Nepal",
    accountType: "Saving",
    products: "Cash N Carry",
    ordertypes: "Limit Order",
  };

  const { pathId } = useParams(); // Get tab ID from the URL
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(pathId || "general");

  useEffect(() => {
    setActiveTab(pathId || "general");
  }, [pathId]);

  return (
    <div className="p-8 w-full">
      <div className="xl:w-[1300px] lg:w-[1240px] md:w-[1210px] xl:h-[180px] lg:h-[200px] rounded-lg text-white bg-primary flex justify-between items-center p-6">
        <ProfileCard generalDetails={userDetails} />
      </div>
      <div className="flex justify-between mt-4 items-center gap-5">
        <div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => navigate(`/${tab.id}`)}
              className={`px-3 text-lg  transition ${
                activeTab === tab.id
                  ? "border-b-2 border-white "
                  : "text-gray-500 "
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "documents" && (
          <div>
            <button className="bg-seeWarnings p-2 flex gap-1 rounded-lg text-black">
              <img src={uploadimg} alt="Upload" />
              <h1>Upload File</h1>
            </button>
          </div>
        )}
      </div>
      <div className="mt-5 ">
        {activeTab === "general" && (
          <GeneralPage generalDetails={userDetails} />
        )}
        {activeTab === "clientDetails" && (
          <ClientDetailPage personalDetails={ClientDetails} />
        )}
        {activeTab === "documents" && <Documents />}
      </div>
    </div>
  );
};

export default Profile;
