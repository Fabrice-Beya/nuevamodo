export const SITE_NAME = "Nueva Modo";
export const SITE_TAGLINE = "Turnkey Industrial Technology Solutions";
export const SITE_DESCRIPTION =
  "Nueva Modo delivers turnkey industrial technology solutions across smart metering, industrial IoT, smart monitoring, software systems, and process automation.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      {
        label: "Process Control & Instrumentation",
        href: "/solutions/process-control",
        description: "Instrumentation, PLC, SCADA and industrial control integration.",
      },
      {
        label: "IoT Solutions",
        href: "/solutions/iot-solutions",
        description: "Turnkey smart metering and industrial IoT systems.",
      },
      {
        label: "Smart Monitoring Solutions",
        href: "/solutions/smart-monitoring",
        description: "Sensor-driven monitoring for critical environments.",
      },
      {
        label: "Software Based Solutions",
        href: "/solutions/software-solutions",
        description: "Custom platforms, automation, and digital systems.",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const SOLUTIONS = [
  {
    title: "Process Control & Instrumentation",
    slug: "process-control",
    summary:
      "Instrumentation, PLC, SCADA, and industrial control integration for reliable process performance.",
    icon: "settings-2",
    color: "blue" as const,
    image: "/images/solutions/solution-process-control.jpg",
  },
  {
    title: "IoT Solutions",
    slug: "iot-solutions",
    summary:
      "Turnkey smart metering and industrial IoT systems for facilities, utilities, and critical infrastructure.",
    icon: "wifi",
    color: "green" as const,
    image: "/images/solutions/solution-iot.jpg",
  },
  {
    title: "Smart Monitoring Solutions",
    slug: "smart-monitoring",
    summary:
      "Sensor-driven monitoring solutions for cold storage, mobile refrigeration, property environments, and critical assets.",
    icon: "activity",
    color: "orange" as const,
    image: "/images/solutions/solution-monitoring.jpg",
  },
  {
    title: "Software Based Solutions",
    slug: "software-solutions",
    summary:
      "Custom platforms, workflow automation, dashboards, and digital systems that streamline operations.",
    icon: "code-2",
    color: "blue" as const,
    image: "/images/solutions/solution-software.jpg",
  },
];

export const INDUSTRIES = [
  {
    title: "Industrial & Manufacturing",
    challenge: "Complex processes, harsh environments, and the need for real-time visibility.",
    fit: "Process control, IoT monitoring, and SCADA integration for reliable industrial operations.",
    icon: "factory",
    image: "/images/industries/industry-manufacturing.jpg",
  },
  {
    title: "Commercial Property",
    challenge: "Managing energy, environment, and infrastructure across large facilities.",
    fit: "Smart metering, environmental monitoring, and building intelligence platforms.",
    icon: "building-2",
    image: "/images/industries/industry-commercial.jpg",
  },
  {
    title: "Real Estate Portfolios",
    challenge: "Maintaining visibility and control across distributed property assets.",
    fit: "Centralised monitoring, noise sensing, smart security, and portfolio dashboards.",
    icon: "landmark",
    image: "/images/industries/industry-real-estate.jpg",
  },
  {
    title: "Utilities & Energy Infrastructure",
    challenge: "Monitoring substations, meters, and distributed grid assets at scale.",
    fit: "End-to-end smart metering, substation monitoring, and infrastructure intelligence.",
    icon: "zap",
    image: "/images/industries/industry-utilities.jpg",
  },
  {
    title: "Municipal & Public Sector",
    challenge: "Accountability, efficiency, and asset visibility across public infrastructure.",
    fit: "IoT monitoring, workflow automation, and digital reporting systems.",
    icon: "globe",
    image: "/images/industries/industry-municipal.jpg",
  },
  {
    title: "Cold Chain & Refrigeration",
    challenge: "Continuous temperature compliance for sensitive goods and perishable assets.",
    fit: "Real-time cold room monitoring, mobile fridge tracking, and automated alerts.",
    icon: "thermometer",
    image: "/images/industries/industry-cold-chain.jpg",
  },
  {
    title: "Logistics & Mobile Assets",
    challenge: "Tracking environmental conditions and performance across moving assets.",
    fit: "4G-connected mobile monitoring and live alerting for vehicles and containers.",
    icon: "truck",
    image: "/images/industries/industry-cold-chain.jpg",
  },
];

export const VALUE_PROPS = [
  {
    title: "Turnkey Delivery",
    description:
      "We provide complete solutions from field devices and integration through to dashboards and software platforms.",
    icon: "package",
  },
  {
    title: "Industrial-Grade Capability",
    description:
      "Our solutions are built for real operational environments, not demo environments.",
    icon: "shield-check",
  },
  {
    title: "Connected Intelligence",
    description:
      "We combine sensors, infrastructure, software, and data into practical operational systems.",
    icon: "network",
  },
  {
    title: "Scalable by Design",
    description:
      "Solutions can start small, prove value quickly, and scale across sites, facilities, and infrastructure.",
    icon: "trending-up",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand operational goals, assets, environments, and constraints",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Define the right hardware, connectivity, software, and architecture",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Implement, integrate, configure, and validate the solution",
  },
  {
    step: "04",
    title: "Scale & Support",
    description:
      "Expand across sites and support long-term operational use",
  },
];

export const CONTACT = {
  email: "info@nuevamodo.co.za",
  phone: "+1 (555) 000-0000",
  whatsapp: "+1 (555) 000-0000",
  region: "Available across industrial and commercial regions",
};
