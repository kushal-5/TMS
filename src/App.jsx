import React from "react";
import Dashboard from "@/pages/Dashboard"; // Import the Dashboard component
import "./App.css";

import Profile from "./pages/profile.jsx";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import Information from "./components/information/Information.jsx"

import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import SignInPage from "./pages/SignInPages/SignInPage";
import ForgotPassword from "./pages/SignInPages/ForgetPasswordPage";
import GetOTP from "./pages/SignInPages/GetOtp";
import ResendOTP from "./pages/SignInPages/ResendOtpPage";
import ResetPassword from "./pages/SignInPages/ResetPasswordPage";
import ResetSuccess from "./pages/SignInPages/ResetSuccess";
import AccountType from "./pages/RegisterPages/General/AccountTypePage";
import RegisterLayout from "./components/layout/RegisterLayout/RegisterLayout";
import { FormProvider } from "./contexts/FormContext";
import GeneralInfo from "./pages/RegisterPages/General/GeneralInfoPage";
import CompanyDetails1 from "./pages/RegisterPages/Corporate/CompanyDetail1";
import CompanyDetails2 from "./pages/RegisterPages/Corporate/CompanyDetail2";
import CompanyDetails3 from "./pages/RegisterPages/Corporate/CompanyDetail3";
import Ownership1 from "./pages/RegisterPages/Ownership/Ownership1";
import Ownership2 from "./pages/RegisterPages/Ownership/Ownership2";
import Ownership3 from "./pages/RegisterPages/Ownership/Ownership3";
import Ownership4 from "./pages/RegisterPages/Ownership/Ownership4";
import Address from "./pages/RegisterPages/Address/AddressPage";
import Bank from "./pages/RegisterPages/Bank/BankPage";
import Depositary from "./pages/RegisterPages/Depositary/Depositary";
import FileUpload from "./pages/RegisterPages/DocumentUpload/DocumentUpload";
import UserAgreement from "./pages/RegisterPages/UserAgreement/UserAgreement";
import Individual1 from "./pages/RegisterPages/Individual/Individual1";
import Individual2 from "./pages/RegisterPages/Individual/Individual2";
import Individual3 from "./pages/RegisterPages/Individual/Individual3";
import Individual4 from "./pages/RegisterPages/Individual/Individual4";
import MoneyLaunder1 from "./pages/RegisterPages/MoneyLaundering/MoneyLaunder1";
import MoneyLaunder2 from "./pages/RegisterPages/MoneyLaundering/MoneyLaunder2";
import MoneyLaunder3 from "./pages/RegisterPages/MoneyLaundering/MoneyLaunder3";
import MoneyLaunder4 from "./pages/RegisterPages/MoneyLaundering/MoneyLaunder4";
import TradeData from "./components/ui/tradeInput/TradeData.jsx";
import TableWithPagination from "./components/ui/tradeInput/TradeHistory.jsx";

function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/get-otp" element={<GetOTP />} />
          <Route path="/resend-otp" element={<ResendOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-success" element={<ResetSuccess />} />

          {/* Register Routes */}
          <Route element={<RegisterLayout />}>
            <Route path="/register/general/1" element={<AccountType />} />
            <Route
              path="/register"
              element={<Navigate to="/register/general/1" replace />}
            />
            <Route path="/register/general/2" element={<GeneralInfo />} />

            {/*CORPORATE */}
            <Route path="/register/corporate/1" element={<CompanyDetails1 />} />
            <Route path="/register/corporate/2" element={<CompanyDetails2 />} />
            <Route path="/register/corporate/3" element={<CompanyDetails3 />} />
            <Route
              path="/register/corporate/ownership/1"
              element={<Ownership1 />}
            />
            <Route
              path="/register/corporate/ownership/2"
              element={<Ownership2 />}
            />
            <Route
              path="/register/corporate/ownership/3"
              element={<Ownership3 />}
            />
            <Route
              path="/register/corporate/ownership/4"
              element={<Ownership4 />}
            />

            {/*Individual */}
            <Route path="/register/individual/1" element={<Individual1 />} />
            <Route path="/register/individual/2" element={<Individual2 />} />
            <Route path="/register/individual/3" element={<Individual3 />} />
            <Route path="/register/individual/4" element={<Individual4 />} />
            <Route
              path="/register/moneylaunder/1"
              element={<MoneyLaunder1 />}
            />
            <Route
              path="/register/moneylaunder/2"
              element={<MoneyLaunder2 />}
            />
            <Route
              path="/register/moneylaunder/3"
              element={<MoneyLaunder3 />}
            />
            <Route
              path="/register/moneylaunder/4"
              element={<MoneyLaunder4 />}
            />

            {/*Mutual Fund */}
            <Route path="/register/mutual/1" element={<CompanyDetails1 />} />
            <Route path="/register/mutual/2" element={<CompanyDetails2 />} />
            <Route path="/register/mutual/3" element={<CompanyDetails3 />} />
            <Route
              path="/register/mutual/ownership/1"
              element={<Ownership1 />}
            />
            <Route
              path="/register/mutual/ownership/2"
              element={<Ownership2 />}
            />
            <Route
              path="/register/mutual/ownership/3"
              element={<Ownership3 />}
            />
            <Route
              path="/register/mutual/ownership/4"
              element={<Ownership4 />}
            />

            <Route path="/register/address" element={<Address />} />
            <Route path="/register/bank" element={<Bank />} />
            <Route path="/register/depositary" element={<Depositary />} />
            <Route path="/register/document" element={<FileUpload />} />
            <Route
              path="/register/user-agreement"
              element={<UserAgreement />}
            />
          </Route>


          <Route element={<DashboardLayout />}>
            <Route path="/profile" element={<Navigate to="/general" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:pathId" element={<Profile />} />
            <Route path="/trade_data" element={<TradeData />}/>
            <Route path="/historic_trade" element={<TableWithPagination />}/>
            <Route path="/information" element={<Information />} />

          </Route>
          {/* Catch-All Route (404 Handling) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
