import React, { useContext, useEffect, useState } from "react";
import { SIDE_MENU_DATA, SIDE_MENU_USER_DATA } from "../../utils/data";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";

const SideMenu = ({ activeMenu }) => {
    const { user, clearUser } = useContext(UserContext);
  const [sideMenuData, setSideMenuData] = useState([]);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      setShowLogoutModal(true);
      return;
    }

    navigate(route);
  };

  const handelLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
    setShowLogoutModal(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  useEffect(() => {
    if(user){
      setSideMenuData(user?.role === 'admin' ? SIDE_MENU_DATA : SIDE_MENU_USER_DATA)
    }
    return () => {};
  }, [user]);
  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center mb-7 pt-5">
        <div className="relative">
          <img
            src={user?.profileImageUrl || ""}
            alt="Profile Image"
            className="w-20 h-20 bg-slate-400 rounded-full"
          />
        </div>

        {user?.role === "admin" && (
          <div className="text-[10px] font-medium text-white bg-primary px-3 py-0.5 rounded mt-1">
            Admin
          </div>
        )}

        <h5 className="text-gray-950 font-medium leading-6 mt-3">
          {user?.name || ""}
        </h5>

        <p className="text-[12px] text-gray-500">{user?.email || ""}</p>
      </div>

      {sideMenuData.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] ${
            activeMenu == item.label
              ? "text-primary bg-linear-to-r from-blue-50/40 to-blue-100/50 border-r-3"
              : ""
          } py-3 px-6 mb-3 cursor-pointer`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
      <Modal isOpen={showLogoutModal} onClose={handleCancelLogout}>
        <div className="w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <h2 className="text-base font-semibold mb-1 text-gray-900">Confirm Logout</h2>
          <p className="mb-4 text-center text-gray-700 text-sm">Are you sure you want to logout?</p>
          <div className="flex flex-col w-full gap-2">
            <button className="w-full px-3 py-2 bg-primary text-white rounded-md text-sm font-medium" onClick={handelLogout}>Yes, Logout</button>
            <button className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium" onClick={handleCancelLogout}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SideMenu;
