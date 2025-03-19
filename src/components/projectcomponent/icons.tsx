import {
    FaInfoCircle,
    FaUsers,
    FaMapMarkerAlt,
    FaLightbulb,
    FaPuzzlePiece,
    FaHeadset,
    FaUniversity,
    FaRocket,
    FaCode,
    FaSitemap,
    FaBlog,
    FaFileAlt,
  } from "react-icons/fa"
  
  export const getMenuIcon = (icon: string) => {
    switch (icon) {
      case "info":
        return <FaInfoCircle size={20} />
      case "team":
        return <FaUsers size={20} />
      case "location":
        return <FaMapMarkerAlt size={20} />
      case "consulting":
        return <FaLightbulb size={20} />
      case "integration":
        return <FaPuzzlePiece size={20} />
      case "support":
        return <FaHeadset size={20} />
      case "training":
        return <FaUniversity size={20} />
      case "optimization":
        return <FaRocket size={20} />
      case "ipaas":
        return <FaCode size={20} />
      case "integrations":
        return <FaSitemap size={20} />
      case "api":
        return <FaCode size={20} />
      case "erp":
        return <FaSitemap size={20} />
      case "blog":
        return <FaBlog size={20} />
      case "case-studies":
        return <FaFileAlt size={20} />
      default:
        return <FaInfoCircle size={20} />
    }
  }
  
  