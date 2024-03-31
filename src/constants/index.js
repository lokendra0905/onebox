import { FaInbox } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { RiBarChartFill } from "react-icons/ri";

export const STATUS = {
  NOT_STARTED: "NOT_STARTED",
  FETCHING: "FETCHING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  INVALID: "INVALID",
};

export const NAVLINKS = [
  {
    title: "Home",
    icons: GoHomeFill,
    route: "/",
  },

  {
    title: "User",
    icons: BiSolidUser,
    route: "#",
  },
  {
    title: "Email",
    icons: MdEmail,
    route: "#",
  },
  {
    title: "Sent",
    icons: BsFillSendFill,
    route: "#",
  },
  {
    title: "Onebox",
    icons: FaInbox,
    route: "/onebox",
  },
  {
    title: "Analytics",
    icons: RiBarChartFill,
    route: "#",
  },
];
