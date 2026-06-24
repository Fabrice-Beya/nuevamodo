export const SITE_NAME = "Nueva Modo";
export const SITE_TAGLINE = "Find New Ways";
export const SITE_DESCRIPTION =
  "Nueva Modo is a South African electrical engineering and industrial technology company delivering protection & testing, commissioning, process control, industrial IoT, software systems, and our licensed nano-material cleaning technology.";

export const COMPANY = {
  legalName: "Nueva Modo (Pty) Ltd",
  founded: "2016",
  combinedExperience: "50+ years",
  tagline: "Find New Ways",
};

export const CONTACT = {
  email: "info@nuevamodo.co.za",
  phone: "+27 11 568 7980",
  phoneDisplay: "(+27) 011 568 7980",
  whatsapp: "+27 78 019 0558",
  website: "www.nuevamodo.co.za",
  addressLines: [
    "50 Electron Avenue",
    "Unit 24 Electron",
    "Exchange Isando",
    "Kempton Park",
    "1609",
  ],
  region: "Kempton Park, Gauteng - serving clients across South Africa",
};

export const MANAGING_DIRECTOR = {
  name: "Xolani Mntambo",
  title: "Managing Director",
  designation: "Pr Tech Eng",
  qualifications:
    "MBA · GCC (Factories) · BSc (Hons) Management of Technology · BTech Eng: Electrical",
  mobile: "(078) 019-0558",
  email: "Xolani.Mntambo@nuevamodo.co.za",
};

export const AFFILIATIONS = [
  "Independent Communications Authority of South Africa (ICASA)",
  "South African Bureau of Standards (SABS)",
  "Engineering Council of South Africa (ECSA)",
  "South African Institute of Electrical Engineers (SAIEE)",
  "Department of Labour",
  "Durban Chamber of Commerce and Industry NPC",
];

export const CERTIFICATIONS = ["ISO 9001", "ISO 14001", "OHSAS 18001", "National High-Tech Enterprise"];

export const AFFILIATION_LOGOS = [
  { name: "ICASA", src: "/affiliations/icasa.png" },
  { name: "SABS", src: "/affiliations/sabs.png" },
  { name: "ECSA", src: "/affiliations/ecsa.png" },
  { name: "SAIEE", src: "/affiliations/SAIEE.png" },
  { name: "ISO 9001", src: "/affiliations/iso9001.png" },
  { name: "ISO 14001", src: "/affiliations/iso14001.png" },
  { name: "OHSAS 18001", src: "/affiliations/OHSAS18001.png" },
  { name: "Department of Labour", src: "/affiliations/labour.png" },
  { name: "Durban Chamber of Commerce and Industry NPC", src: "/affiliations/chamber.png" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      {
        label: "Nano-Material Cleaning Technology",
        href: "/solutions/nano-cleaning",
        description: "Licensed, certified deep cleaning for live electrical equipment.",
      },
      {
        label: "Industrial IoT Solutions",
        href: "/solutions/iot-solutions",
        description: "Turnkey smart metering and infrastructure monitoring systems.",
      },
      {
        label: "Electrical Engineering Services",
        href: "/solutions/electrical-engineering",
        description: "Protection & testing, commissioning, maintenance, energy audits, and drafting.",
      },
      {
        label: "Process Control & Instrumentation",
        href: "/solutions/process-control",
        description: "Instrumentation, PLC, and SCADA integration for reliable processes.",
      },
      {
        label: "Software Based Solutions",
        href: "/solutions/software-solutions",
        description: "Custom platforms, automation, dashboards, AI and computer vision.",
      },
      {
        label: "Intelligent Fire Extinguisher",
        href: "/solutions/fire-extinguisher",
        description: "Self-contained, power-free automatic fire suppression.",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export const SOLUTIONS = [
  {
    title: "Nano-Material Cleaning Technology",
    slug: "nano-cleaning",
    summary:
      "Tried and tested in over 11 countries and licensed for Sub-Saharan Africa - deep cleaning for live electrical equipment.",
    icon: "sparkles",
    color: "gold" as const,
    image: "/images/solutions/solution-monitoring.jpg",
  },
  {
    title: "Industrial IoT Solutions",
    slug: "iot-solutions",
    summary:
      "Turnkey, end-to-end smart metering and infrastructure monitoring across facilities, utilities, and critical assets.",
    icon: "wifi",
    color: "sky" as const,
    image: "/images/hero/detail-smart-meters.jpg",
  },
  {
    title: "Electrical Engineering Services",
    slug: "electrical-engineering",
    summary:
      "Protection & testing, plant commissioning, maintenance, energy audits, thermographic surveys, and ECSA-signed engineering drawings.",
    icon: "zap",
    color: "orange" as const,
    image: "/images/industries/industry-utilities.jpg",
  },
  {
    title: "Process Control & Instrumentation",
    slug: "process-control",
    summary:
      "Instrumentation, PLC, and SCADA integration delivering accurate, reliable, and intelligent control of industrial processes.",
    icon: "process",
    color: "teal" as const,
    image: "/images/solutions/solution-process-control.jpg",
  },
  {
    title: "Software Based Solutions",
    slug: "software-solutions",
    summary:
      "Custom platforms, workflow automation, dashboards, APIs, AI, and computer vision that digitise operations.",
    icon: "code-2",
    color: "green" as const,
    image: "/images/solutions/solution-software.jpg",
  },
  {
    title: "Intelligent Fire Extinguisher",
    slug: "fire-extinguisher",
    summary:
      "A self-contained, power-free automatic suppression device that detects and extinguishes fire at its source.",
    icon: "flame",
    color: "orange" as const,
    image:
      "https://images.unsplash.com/photo-1769442263053-a60acf73f00a?auto=format&fit=crop&w=1600&q=80",
  },
];

export const ELECTRICAL_SERVICES = [
  {
    title: "Protection & Testing",
    icon: "shield-check",
    description:
      "Full electrical protection audits and professional testing & setting for LV and MV circuit breakers - including speed and contact resistance testing, instrument and power transformer testing, secondary injection testing, underground cable fault location, and AC/DC pressure testing of power cables.",
  },
  {
    title: "Plant Commissioning",
    icon: "settings-2",
    description:
      "A complete commissioning solution with proven competency: verification of plant construction and design, plant labelling, cold and hot commissioning, through to commercial operation and post-commissioning support.",
  },
  {
    title: "Maintenance",
    icon: "wrench",
    description:
      "Electrical and mechanical maintenance strategies tailored to your plant - full motor and transformer maintenance, on-site visual inspections, oil sampling, and comprehensive reports with recommendations.",
  },
  {
    title: "Energy Audit & Efficiency",
    icon: "gauge",
    description:
      "We collect field data across all your electrical consumers - from lighting to heavy energy converters - and deliver comprehensive reports with energy-efficient options tailored to your equipment and consumption.",
  },
  {
    title: "Thermographic Survey",
    icon: "thermometer",
    description:
      "Non-contact, non-destructive infrared surveys that detect hot spots and thermal imbalances indicating loose or corroded connections and overload conditions before they cause failure or fire.",
  },
  {
    title: "Engineering Design & Drafting",
    icon: "pencil-ruler",
    description:
      "Design and drafting across all electrical disciplines, plus professional reticulation drawings for buildings, factories, and machine/factory processes - signed off by an ECSA-registered professional engineer.",
  },
];

export const INDUSTRIES = [
  {
    title: "Power Generation",
    challenge: "Critical uptime, protection integrity, and rigorous commissioning requirements.",
    fit: "Protection & testing, commissioning, thermographic surveys, and process control.",
    icon: "zap",
    image: "/images/industries/industry-utilities.jpg",
  },
  {
    title: "Petrochemical",
    challenge: "Hazardous environments demanding precise instrumentation and safety.",
    fit: "Instrumentation, PLC/SCADA integration, maintenance, and fire suppression.",
    icon: "flame",
    image: "/images/hero/hero-background.jpg",
  },
  {
    title: "Mining",
    challenge: "Harsh conditions, heavy plant, and continuous operational demands.",
    fit: "Electrical maintenance, energy audits, and nano-material equipment cleaning.",
    icon: "mountain",
    image:
      "https://images.unsplash.com/photo-1680463990599-9d318aaecf71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Industrial & Manufacturing",
    challenge: "Complex processes, harsh environments, and the need for real-time visibility.",
    fit: "Process control, IoT monitoring, and SCADA integration for reliable operations.",
    icon: "factory",
    image: "/images/industries/industry-manufacturing.jpg",
  },
  {
    title: "Commercial Property",
    challenge: "Managing energy, environment, and infrastructure across large facilities.",
    fit: "Smart metering, energy efficiency, and building intelligence platforms.",
    icon: "building-2",
    image: "/images/industries/industry-commercial.jpg",
  },
  {
    title: "Utilities & Energy Infrastructure",
    challenge: "Monitoring substations, meters, and distributed grid assets at scale.",
    fit: "End-to-end smart metering, substation monitoring, and infrastructure intelligence.",
    icon: "zap",
    image: "/images/hero/detail-smart-meters.jpg",
  },
  {
    title: "Municipal & Public Sector",
    challenge: "Accountability, efficiency, and asset visibility across public infrastructure.",
    fit: "IoT monitoring, workflow automation, and digital reporting systems.",
    icon: "globe",
    image: "/images/industries/industry-municipal.jpg",
  },
  {
    title: "Transportation",
    challenge: "Distributed assets requiring dependable power and monitoring.",
    fit: "Electrical engineering, energy management, and connected monitoring.",
    icon: "truck",
    image: "/images/industries/industry-cold-chain.jpg",
  },
];

export const VALUES = [
  {
    title: "Respect",
    description:
      "We treat our clients, business partners, colleagues, and the environment with care and respect.",
    icon: "handshake",
  },
  {
    title: "Openness",
    description:
      "We conduct business in a manner that is fair, professional, and transparent in all respects.",
    icon: "eye",
  },
  {
    title: "Integrity",
    description:
      "We undertake all of our work with the highest levels of quality as a matter of integrity.",
    icon: "shield-check",
  },
];

export const VISION =
  "To become the best performer in our line of work, and the supplier of choice to our customers and partners, by establishing professional relationships that are mutually beneficial.";

export const MISSION =
  "Our mission is simple - find new ways to provide the best products and services to our customers.";

export const VALUE_PROPS = [
  {
    title: "Engineering-Led & Certified",
    description:
      "ECSA and SAIEE affiliated, with ECSA-registered professional engineers signing off our work.",
    icon: "shield-check",
  },
  {
    title: "SABS Nano Technology Committee",
    description:
      "We are members of the SABS Nano Technology Committee, where we contribute to the development of industry standards for nano-material technology.",
    icon: "handshake",
  },
  {
    title: "ICASA Approved Devices",
    description:
      "All our devices are ICASA approved, ensuring compliant deployment across South African communications and monitoring infrastructure.",
    icon: "network",
  },
  {
    title: "Innovative by Nature",
    description:
      "We hold the Sub-Saharan licence for a certified nano-material cleaning technology proven in 11+ countries.",
    icon: "sparkles",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Understand operational goals, assets, environments, and constraints.",
  },
  {
    step: "02",
    title: "Design",
    description: "Define the right hardware, connectivity, software, and architecture.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "Implement, integrate, configure, commission, and validate the solution.",
  },
  {
    step: "04",
    title: "Scale & Support",
    description: "Expand across sites and support long-term operational use.",
  },
];

export const STATS = [
  { value: "2016", label: "Established", description: "Trusted across South Africa" },
  { value: "50+", label: "Years Combined Experience", description: "Across the team" },
  { value: "11+", label: "Countries Proven", description: "Nano-material technology" },
  { value: "100%", label: "Turnkey Delivery", description: "Design to commissioning" },
];
