import { IoCart } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const statsData = [
  {
    icon: <IoCart />,
    label: "Total Sales",
    number: "135K",
    change: "25",
    changeType: true,
  },
  {
    icon: <IoCart />,
    label: "Year Total Sales",
    number: "200K",
    change: "45",
    changeType: false,
  },
  {
    icon: <IoCart />,
    label: "Followers",
    number: "135K",
    change: "7",
    changeType: true,
  },
  {
    icon: <FaYoutube />,
    label: "Subscribers",
    number: "100M",
    change: "15",
    changeType: false,
  },
  {
    icon: <IoCart />,
    label: "Subscribers",
    number: "100M",
    change: "15",
    changeType: false,
  },
  {
    icon: <FaYoutube />,
    label: "Subscribers",
    number: "100M",
    change: "15",
    changeType: false,
  },
];

export default statsData;
