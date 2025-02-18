import React from "react";

const InfoBlock = ({ title, description }) => (
  <div>
    <h1 className="text-gray-500 text-sm">{title}</h1>
    <p className=" text-gray-400">{description}</p>
  </div>
);
const InfoBlock2 = ({ title, description }) => (
  <div className="">
    <h1 className="text-gray-500 text-sm">{title}</h1>
    <p className="text-base text-gray-400">{description}</p>
  </div>
);

const CollateralDetails = ({ details }) => (
  <div className="flex flex-col mt-4">
    <h1>Collateral Details</h1>
    <div className="mt-2 w-full text-sm grid grid-cols-4">
      {details.map((item, index) => (
        <div key={index} className="w-40">
          <h1 className="text-gray-500 text-sm">{item.title}</h1>
          <p className="text-gray-400 text-base">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const SummarySection = ({ title, buttonLabel, summaryList }) => (
  <div className="">
    <h1>{title}</h1>
    <div className="flex justify-between mt-4  text-sm w-[600px]">
      {summaryList?.map((item, index) => (
        <div key={index} className="w-36">
          <h1 className="text-gray-500 text-sm">{item.title}</h1>
          <p className="text-gray-400 text-base">
            NRP <span>{item.description}</span>
          </p>
        </div>
      ))}

      <button className="bg-seeWarnings rounded-lg mr-20 text-black p-2 ">
        {buttonLabel}
      </button>
    </div>
  </div>
);

const GeneralPage = ({ generalDetails }) => {
  const detailList = [
    {
      title: "Total Collateral",
      description: <span>{generalDetails.totalCollateral}</span>,
    },
    {
      title: "Utilized Collateral",
      description: <span>{generalDetails.utilizedCollateral}</span>,
    },
    {
      title: "Total Trading Limit",
      description: <span>{generalDetails.totalTradingLimit}</span>,
    },
    {
      title: "Utilized Trading Limit",
      description: <span>{generalDetails.utilizedTradingLimit}</span>,
    },
  ];

  const detailList2 = [
    {
      title: "Available Collateral",
      description: <span>{generalDetails.availableCollateral}</span>,
    },
    {
      title: "Available Trading Limit",
      description: <span>{generalDetails.availableTradingLimit}</span>,
    },
  ];

  const userInfo = [
    { title: "Address", description: <span>{generalDetails.address}</span> },
    { title: "Mobile No", description: <span>{generalDetails.phone}</span> },
    { title: "Code", description: <span>{generalDetails.code}</span> },
    { title: "PAN", description: <span>{generalDetails.pan}</span> },
    { title: "Email", description: <span>{generalDetails.email}</span> },

    {
      title: "Client Group",
      description: <span>{generalDetails.clientGroup}</span>,
    },

    { title: "UCC", description: <span>{generalDetails.ucc}</span> },
    {
      title: "Margin Lending",
      description: <span>{generalDetails.marginLending}</span>,
    },
  ];

  const userInfo2 = [
    { title: "Boid", description: <span>{generalDetails.boid}</span> },
    {
      title: "Referred By",
      description: <span>{generalDetails.referredBy}</span>,
    },
  ];
  const summary = [
    {
      title: "Total Due amount",
      description: <span>{generalDetails.totalDueAmount}</span>,
    },
  ];
  return (
    <div className="flex flex-col w-[1200px] gap-4 2xl:mt-10 xl:mt-5 lg:mt-9 md:mt-11 h-[440px]">
      {/* User Info Section */}

      <div className="flex justify-between flex-col">
        <div className="grid grid-cols-4 gap-2 w-full">
          {userInfo.map((info, index) => (
            <InfoBlock
              key={index}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
        <div className="flex justify-end gap-[225px] mr-[100px] mt-3">
          {userInfo2.map((info, index) => (
            <InfoBlock2
              key={index}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
      </div>

      <CollateralDetails details={detailList} />

      {/* Additional Trading Details */}
      <div className="mt-2 text-sm grid grid-flow-col grid-rows-1">
        {detailList2.map((item, index) => (
          <div key={index} className="w-56 ">
            <h1 className="text-gray-500 text-sm">{item.title}</h1>
            <p className="text-base text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex w-full mt-6">
        <SummarySection
          summaryList={summary}
          title="Sell Summary"
          buttonLabel="Make Payment Request"
        />
        <SummarySection
          summaryList={summary}
          title="Buy Summary"
          buttonLabel="Make Clearance"
        />
      </div>
    </div>
  );
};

export default GeneralPage;
