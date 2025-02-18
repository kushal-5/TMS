const InfoBlock = ({ title, description }) => (
  <div>
    <h1 className="text-sm text-gray-500">{title}</h1>
    <p className="text-base text-gray-400">{description}</p>
  </div>
);

const Section = ({ title, data }) => (
  <div className="grid grid-cols-4 gap-4 mt-1">
    {data.map((info, index) => (
      <div key={index} className=" flex flex-col gap-5">
        <InfoBlock title={info.title} description={info.description} />
      </div>
    ))}
  </div>
);

const ClientDetailPage = ({ personalDetails }) => {
  const personalInfo = [
    {
      title: "Father's Name",
      description: <span>{personalDetails.fatherName}</span>,
    },
    {
      title: "Mother's Name",
      description: <span>{personalDetails.motherName}</span>,
    },
    {
      title: "Date Of Birth",
      description: <span>{personalDetails.dateOfBirth}</span>,
    },
    {
      title: "Marital Status",
      description: <span>{personalDetails.maritalStatus}</span>,
    },
    {
      title: "Organization Name",
      description: <span>{personalDetails.organizationName}</span>,
    },
    {
      title: "Organization Address",
      description: <span>{personalDetails.organizationAddress}</span>,
    },
    {
      title: "Spouse Name",
      description: <span>{personalDetails.spouseName}</span>,
    },
    {
      title: "Nationality",
      description: <span>{personalDetails.nationality}</span>,
    },
    {
      title: "Occupation",
      description: <span>{personalDetails.occupation}</span>,
    },
    {
      title: "Grand Father's Name",
      description: <span>{personalDetails.grandFatherName}</span>,
    },
    {
      title: "Contact No",
      description: <span>{personalDetails.contactNumber}</span>,
    },
    {
      title: "Gender",
      description: <span>{personalDetails.gender}</span>,
    },
    {
      title: "Citizenship No",
      description: <span>{personalDetails.citizenshipNo}</span>,
    },
    {
      title: "Citizenship Issue Date",
      description: <span>{personalDetails.citizenshipIssueDate}</span>,
    },
    {
      title: "Citizenship Issue Place",
      description: <span>{personalDetails.citizenshipIssuePlace}</span>,
    },
    {
      title: "Financial Details",
      description: <span>{personalDetails.financialDetails}</span>,
    },
  ];

  const bankDetails = [
    {
      title: "Bank Name",
      description: <span>{personalDetails.bankName}</span>,
    },
    {
      title: "Account Number",
      description: <span>{personalDetails.accountNO}</span>,
    },
    {
      title: "Temporary Address",
      description: <span>{personalDetails.temporaryAddress}</span>,
    },
    {
      title: "Permanent Address",
      description: <span>{personalDetails.permanentAddress}</span>,
    },
    {
      title: "Account Type",
      description: <span>{personalDetails.accountType}</span>,
    },
  ];

  const productDetails = [
    { title: "Products", description: <span>{personalDetails.products}</span> },
    {
      title: "Order Types",
      description: <span>{personalDetails.ordertypes}</span>,
    },
  ];

  return (
    <div className="gap-3 flex flex-col w-[1200px] ">
      {/* Personal Info Section */}
      <Section title="Personal Info" data={personalInfo} />
      {/* <Section title="Additional Info" data={additionalInfo} /> */}

      {/* Bank & Address Details */}
      <div className="flex text-white mt-3 w-full">
        <h1 className="w-2/6">Bank Details</h1>
        <h1 className="ms-52">Address Details</h1>
      </div>

      <Section title="Bank Details" data={bankDetails} />

      {/* Product & Order Details */}
      <div className="relative">
        <h1 className="text-white text-md">Products and Order Details</h1>

        <Section title="Product Details" data={productDetails} />

        <button className="p-2 text-black rounded-lg bg-seeWarnings right-11 bottom-0 flex absolute">
          Export To PDF
        </button>
      </div>
    </div>
  );
};

export default ClientDetailPage;
