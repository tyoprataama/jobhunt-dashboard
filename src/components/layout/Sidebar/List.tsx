import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { FiHome, FiSettings, FiMessageCircle } from "react-icons/fi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineListAlt } from "react-icons/md";
import { IoReloadOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { RiLogoutBoxLine } from "react-icons/ri";

interface indexProps {
  icons: string[];
  title: string[];
}
const List: FC<indexProps> = (props) => {
  const { icons, title } = props;
  const getIconComponent = (icon: string) => {
    switch (icon) {
      case "FiHome":
        return FiHome;
      case "FiMessageCircle":
        return FiMessageCircle;
      case "HiOutlineBuildingOffice":
        return HiOutlineBuildingOffice;
      case "FaUserGroup":
        return FaUserGroup;
      case "MdOutlineListAlt":
        return MdOutlineListAlt;
      case "LuCalendarDays":
        return LuCalendarDays;
      case "FiSettings":
        return FiSettings;
      case "RiLogoutBoxLine":
        return RiLogoutBoxLine;
      default:
        return IoReloadOutline;
    }
  };
  return (
    <div className="flex flex-col gap-2 p-2">
      {icons.map((icon, index) => {
        const IconComponent = getIconComponent(icon);
        return (
          <Button
            variant={"ghost"}
            className={`justify-start text-base text-gray-500 font-medium hover:text-blue-500 ${
              icon == "RiLogoutBoxLine" && "text-red-500 hover:text-red-700"
            }`}
            key={index}
          >
            <span className="mr-3">{IconComponent && <IconComponent />}</span>
            <span>{title[index]}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default List;
