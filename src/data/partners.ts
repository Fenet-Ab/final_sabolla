export interface Partner {
  name: string;
  icon?: string;
  logo?: string;
  description: string;
  website?: string;
}

export const PARTNERS: Partner[] = [
  {
    name: "ASI (Europe) Ltd.",
    icon: "🌍",
    description: "European supplier of advanced industrial solutions and safety equipment.",
    website: "https://www.asieurope.com",
  },
  {
    name: "Meraj International FZC",
    icon: "🏗️",
    description: "Middle East based infrastructure & heavy machinery exporter.",
  },
  {
    name: "INDRA AVITECH GmbH",
    icon: "🧠",
    description: "German aviation & air traffic technology specialists.",
  },
  {
    name: "Rosenbauer",
    icon: "🚒",
    description: "Global leader in firefighting vehicles & emergency solutions.",
  },
  {
    name: "Moto-Truck GmbH",
    icon: "🚛",
    description: "Specialized manufacturer of airport firefighting vehicles.",
  },
  {
    name: "RESQTEC",
    icon: "🛠️",
    description: "Global hydraulic rescue tools manufacturer.",
  },
  {
    name: "Ethiopian Firms",
    icon: "🇪🇹",
    description: "Strong local partners supporting national distribution.",
  },
];
