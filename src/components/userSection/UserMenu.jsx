import { useState } from "react";
import { User, Info, Settings, ArrowRight, Bell, Copy } from "lucide-react";
import SettingsMenu from "./SettingMenu";
import { Link } from "react-router-dom";

const UserMenu = ({ isOpen, onClose }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  if (!isOpen) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText("8788379");
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseAll = () => {
    setIsSettingsOpen(false); // Close settings menu
    onClose(); // Close user menu
  };

  return (
    <>
      {!isSettingsOpen && ( // Show UserMenu only if SettingsMenu is closed
        <div className="fixed right-0 top-0 h-screen w-[300px] bg-[#141414] shadow-lg overflow-hidden z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 mb-6">
            {/* Back Button - Closes the User Menu */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close User Menu"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Profile Section */}
          <div className="px-6 pb-6 flex flex-col items-center border-b border-gray-800">
            <div className="h-12 w-12 bg-[#1D1D1D] rounded-full flex items-center justify-center mb-3">
              <User className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-medium text-white mb-1">
                ARMITA THAPA
              </div>
              <div className="text-sm text-white flex items-center gap-1">
                ID: 8788379
                <button
                  onClick={handleCopyId}
                  className="hover:bg-gray-800 rounded-full p-1 transition-colors"
                  aria-label="Copy ID"
                >
                  <Copy className="h-3 w-3 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-800 rounded-lg transition-colors text-white">
              <Info className="h-5 w-5" />
              <Link to={"/profile"}>My Information</Link>
            </button>
            <button
              className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-800 rounded-lg transition-colors text-white"
              onClick={handleSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      )}

      {/* Settings Menu */}
      {isSettingsOpen && (
        <SettingsMenu isOpen={isSettingsOpen} onClose={handleCloseAll} />
      )}
    </>
  );
};

export default UserMenu;
