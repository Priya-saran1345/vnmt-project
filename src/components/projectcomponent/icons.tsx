import { BiCustomize } from "react-icons/bi";
import {
  FaBlog,
  FaBriefcase,
  FaCogs,
  FaFileAlt,
  FaHandshake,
  FaHeadset,
  FaIndustry,
  FaInfoCircle,
  FaLightbulb,
  FaLuggageCart,
  FaPiggyBank,
  FaPuzzlePiece,
  FaRegHandshake,
  FaShopify,
  FaShoppingCart,
  FaSitemap,
  FaUniversity,
  FaUsers,
  FaUtensils
} from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { ImMakeGroup } from "react-icons/im";
import { LuReplace } from "react-icons/lu";
import { MdDeveloperMode } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";





export const getMenuIcon = (icon: string) => {
  switch (icon) {
    case "info":
      return <FaInfoCircle size={20} />;
    case "team":
      return <FaUsers size={20} />;
    case "career":
      return <FaBriefcase size={20} />;
    case "consulting":
      return <FaLightbulb size={20} />;
    case "integration":
      return <FaPuzzlePiece size={20} />;
    case "support":
      return <FaHeadset size={20} />;
    case "training":
      return <FaUniversity size={20} />;
    case "optimization":
      return <GrOptimize size={20} />;
    case "development":
      return <MdDeveloperMode size={20} />;
    case "implementation":
      return <ImMakeGroup size={20} />;
    case "customization":
      return <BiCustomize size={20} />;
    case "migration":
      return <LuReplace size={20} />;
    case "administration":
      return <RiAdminLine size={20} />;
    case "ecommerce":
      return <HiMiniShoppingBag   size={20} />;
    case "suitecommerce":
      return <FiShoppingCart  size={20} />;
    case "suitecommerce-advanced":
      return <FaLuggageCart  size={20} />;
    case "suitesuccess":
      return <FaRegHandshake  size={20} />;
    case "woocommerce":
      return <FaShoppingCart size={20} />;
    case "shopify":
      return <FaShopify size={20} />;
    case "retail":
      return <FaIndustry size={20} />;
    case "wholesale":
      return <FaSitemap size={20} />;
    case "manufacturing":
      return <FaCogs size={20} />;
    case "services":
      return <FaHandshake size={20} />;
    case "food":
      return <FaUtensils size={20} />;
    case "finance":
      return <FaPiggyBank size={20} />;
    case "blog":
      return <FaBlog size={20} />;
    case "case-studies":
      return <FaFileAlt size={20} />;
    default:
      return <FaInfoCircle size={20} />;
  }
};
