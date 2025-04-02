import {
  FaInfoCircle,
  FaUsers,
  FaLightbulb,
  FaPuzzlePiece,
  FaHeadset,
  FaUniversity,
  FaRocket,
  FaCode,
  FaSitemap,
  FaBlog,
  FaFileAlt,
  FaBriefcase,
  FaShoppingCart,
  FaIndustry,
  FaCogs,
  FaHandshake,
  FaUtensils,
  FaPiggyBank,
} from "react-icons/fa";

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
      return <FaRocket size={20} />;
    case "development":
    case "implementation":
    case "customization":
    case "migration":
    case "administration":
      return <FaCode size={20} />;
    case "ecommerce":
    case "suitecommerce":
    case "suitecommerce-advanced":
    case "suitesuccess":
      return <FaShoppingCart size={20} />;
    case "woocommerce":
    case "shopify":
      return <FaShoppingCart size={20} />;
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
