import { TbLayoutDashboard } from "react-icons/tb";
import { RiFileUserFill } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { IoSettings } from "react-icons/io5";
import { FiKey } from "react-icons/fi";
import { FaListAlt } from "react-icons/fa";
const sidebarList = [
  {
    name: `Dashboard`,
    path: `/`,
    icon: <TbLayoutDashboard />,
  },
  {
    name: `Users`,
    path: `users`,
    icon: <RiFileUserFill />,
  },
  {
    name: `Get License`,
    path: `license`,
    icon: <FiKey />,
  },
  {
    name: `Waiting List`,
    path: `waiting`,
    icon: <FaListAlt />,
  },
  {
    name: `Setting`,
    path: `setting`,
    icon: <IoSettings />,
  },
  {
    name: `Logout`,
    path: `logout`,
    icon: <VscSignOut />,
  },
];

export default sidebarList;
