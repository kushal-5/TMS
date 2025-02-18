import React from "react";
import Sidebar from "@/components/dashboardDesign/Sidebar";
import Header from "@/components/dashboardDesign/Header";
import { Outlet } from "react-router-dom";
import nabilLogo from "@/assets/nabil.png";
import sanimaLogo from "@/assets/sanima.png";
import hblLogo from "@/assets/hbl.png";

const DashboardLayout = () => {
  const tradingSymbols = [
    { name: "NABIL", logo: nabilLogo, currency: "ST NRP 1023" },
    { name: "SANIMA", logo: sanimaLogo, currency: "ST NRP 2945" },
    { name: "HBL", logo: hblLogo, currency: "ST NRP 3110" },
    { name: "NABIL", logo: nabilLogo, currency: "ST NRP 1223" },
    { name: "NIMB", logo: hblLogo, currency: "ST NRP 4305" },
    { name: "NABIL", logo: nabilLogo, currency: "ST NRP 1223" },
    { name: "NIMB", logo: hblLogo, currency: "ST NRP 4705" },
    { name: "NABIL", logo: nabilLogo, currency: "ST NRP 1223" },
    { name: "HBL", logo: hblLogo, currency: "ST NRP 3110" },
    { name: "SANIMA", logo: sanimaLogo, currency: "ST NRP 2945" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header tradingSymbols={tradingSymbols} />
        <main className="overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
