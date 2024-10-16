import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";
import { RiMegaphoneLine } from "react-icons/ri";
import { CiViewTable } from "react-icons/ci";
import { RxGear } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuWheat } from "react-icons/lu";
import { GiBellPepper, GiCorn } from "react-icons/gi";

const menuGroups = [
  {
    name: "MAIN MENU",
    menuItems: [
      {
        icon: <RxDashboard size={24} />,
        label: "Overview",
        route: "/",
      },
      {
        icon: <RiMegaphoneLine size={24} />,
        label: "Sensors",
        route: "/sensors",
      },
      {
        icon: <GiCorn size={24} />,
        label: "Corn",
        route: "/corn",
      },
      {
        icon: <GiBellPepper size={24} />,
        label: "Bell Peppers",
        route: "/bell-peppers",
      },
      {
        icon: <LuWheat size={24} />,
        label: "Wheat",
        route: "/sensors",
      },
      {
        icon: <FiUser size={24} />,
        label: "Profile",
        route: "/profile",
      },
      {
        icon: <RxGear size={24} />,
        label: "Settings",
        route: "/pages/settings",
      },
    ],
  },
];

export default menuGroups;
