// src/data/mockData.ts
export const CORE_CONTENT = {
  heroTagline: "Your Gateway to Ethiopia’s Market",
  introDescription: "SABOLLA INTERNATIONAL TRADING PLC connects international businesses with Ethiopia’s growing market. With over 20 years of expertise in trade representation, the company provides advisory services, market insights, sourcing, import and export facilitation, and supply chain management. The team ensures regulatory compliance, smooth operations, and strong partnerships to help global businesses succeed.",
  closingSlogan: "Expert Support. Seamless Operations. Global Connections.",
  aboutUsContent: "SABOLLA is a professional foreign trade agency with two decades of experience connecting global businesses to Ethiopian markets. It provides end-to-end trade solutions to simplify operations, reduce risk, and drive sustainable growth. Services include advisory, sourcing, supply chain management, and import/export facilitation, built on professionalism, integrity, and strong regulatory knowledge.",
};

// 2. Achievements (Stats)
export const ACHIEVEMENTS = [
  { value: '20+', label: 'Years of Experience' },
  { value: '100+', label: 'International Suppliers' },
  { value: '150+', label: 'Successful Shipments' },
  { value: '50+', label: 'Product Categories' },
];

// 3. Products (Categories)
export const PRODUCT_CATEGORIES = [
  { name: "Aviation Systems", slug: "aviation", description: "VHF, AMHS, AIM, AIS" },
  { name: "Military Communication", slug: "military-comm", description: "Navigation equipment" },
  { name: "Fire & Disaster Management", slug: "fire-disaster", description: "Fire trucks, ladders, foam, powder" },
  { name: "Safety & Security", slug: "safety-security", description: "Fire suits, breathing apparatus" },
  { name: "Agricultural Implements", slug: "agriculture", description: "Hermetic & jute bags" },
  // { name: "Water and Sewerage Industry", slug: "Water and Sewerage Industry", description: "Water and Sewerage Industry"" },
  // { name: "Power and Energy", slug: "Power and Energy", description: "Power and Energy" },
  // { name: "Transportation and Storage", slug: "Transportation and Storage", description: "Transportation and Storage" },

  // ... rest of the categories
];
export const SERVICES_LIST = [
  { name: "Advisory & Consultancy", slug: "advisory", shortDesc: "Guidance for international business partners." },
  { name: "Local Market Assessments", slug: "market-assessments", shortDesc: "Detailed market intelligence reports." },
  { name: "Import & Export Facilitation", slug: "import-export", shortDesc: "Handling logistics and customs compliance." },
  { name: "Sourcing & Supply Chain", slug: "sourcing", shortDesc: "End-to-end supply chain management." },
];

// 5. Partners (Logos)
export const PARTNER_LOGOS = [
  { name: "ASI (Europe) Ltd.", src: "/logos/asi.svg" }, // Assuming assets folder for logos
  { name: "Rosenbauer", src: "/logos/rosenbauer.svg" },
  // ... all 11 partners plus 'Ethiopian firms'
];

// 6. Contact Info
export const CONTACT_INFO = {
  address: "Marathon Mall, Megenagna, Addis Ababa, Ethiopia",
  email: "info@sabolla-trading.com",
  phone: "+251 93 390 6088",
};