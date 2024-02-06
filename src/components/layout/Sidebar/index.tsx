import React, { FC } from "react";
import List from "./List";

interface indexProps {}
const Sidebar: FC<indexProps> = () => {
  const dashIcon = [
    "FiHome",
    "FiMessageCircle",
    "HiOutlineBuildingOffice",
    "FaUserGroup",
    "MdOutlineListAlt",
    "LuCalendarDays",
  ];
  const settingIcon = ["FiSettings", "RiLogoutBoxLine"];
  const dashTitle = [
    "Home",
    "Messages",
    "Company Profile",
    "Applicant",
    "Job Listing",
    "My Schedule",
  ];
  const settingTitle = ["Settings", "Logout"];
  return (
    <div className="pb-10 min-h-screen bg-slate-50">
      <div className="py-4 space-y-4">
        <h1 className="px-4 font-semibold mb-2 text-xl">Dashboard</h1>
        <List icons={dashIcon} title={dashTitle} />
        <h1 className="px-4 font-semibold mb-2 text-xl">Settings</h1>
        <List icons={settingIcon} title={settingTitle} />
      </div>
    </div>
  );
};

export default Sidebar;
