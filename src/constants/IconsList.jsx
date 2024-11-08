import { FaRegUser, FaPhoneFlip } from "react-icons/fa6";
import { MdHome, MdOutlineMiscellaneousServices } from "react-icons/md";
export const iconsList = [
  {
    id: 1,
    icon: <MdHome size={22} />,
    link: "#Home",
  },
  {
    id: 2,
    icon: <FaRegUser />,
    link: "#About",
  },
  {
    id: 3,
    icon: <MdOutlineMiscellaneousServices size={22} />,
    link: "#Services",
  },
  {
    id: 4,
    icon: <FaPhoneFlip />,
    link: "#Contact",
  },
];
