// Centralized data structure for all menu items
export type MenuItem = {
    title: string
    url?: string
    items?: SubMenuItem[]
    isHighlighted?: boolean
  }
  
  export type SubMenuItem = {
    title: string
    url: string
    icon?: string
    color?: string
  }
  
  export const menuData: MenuItem[] = [
    {
      title: "Company",
      items: [
        { title: "About Us", url: "/about-us" },
        { title: "Career", url: "/career" },
        { title: "Meet The Team", url: "/team" },
      ],
    },
    {
      title: "NetSuite",
      isHighlighted: true,
      items: [
        { title: "Netsuite Consulting", url: "/netsuite-consulting", color: "#FF7A59" },
        { title: "Netsuite Support & Maintenance", url: "/netsuite-support" },
        { title: "Netsuite Training", url: "/netsuite-training" },
      ],
    },
    {
      title: "Celigo",
      items: [
        { title: "Celigo Customization", url: "/celigo-customization" },
        { title: "Celigo Support", url: "/celigo-support" },
        { title: "Celigo Optimization", url: "/celigo-optimization" },
        { title: "Celigo Implementation", url: "/celigo-implementation" },
        { title: "Integration Using Celigo Platform", url: "/celigo-integration" },
      ],
    },
    {
      title: "Integration",
      items: [
        { title: "Netsuite Integration", url: "/netsuite-integration" },
        { title: "Magento Netsuite Integration", url: "/magento-netsuite-integration" },
        { title: "WooCommerce Netsuite Integration", url: "/woocommerce-netsuite-integration" },
        { title: "Shopify Netsuite Integration", url: "/shopify-netsuite-integration" },
        { title: "Jitterbit Netsuite Integration", url: "/jitterbit-netsuite-integration" },
      ],
    },
    {
      title: "Products",
      items: [
        { title: "Netsuite WooCommerce Integrator", url: "/netsuite-woocommerce-integrator" },
        { title: "Netsuite Shopify Loop Integrator", url: "/netsuite-shopify-integrator" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Blog", url: "/blog" },
        { title: "Case Studies", url: "/case-studies" },
      ],
    },
    {
      title: "Careers",
      url: "/careers",
    },
  ]
  
  