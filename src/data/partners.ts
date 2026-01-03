
import type { ReactNode } from 'react';
import ASI from '../assets/global_images/ASI.png'; 
import FIRECHEM from '../assets/global_images/FIRECHEM.png'; 
import JSHK from '../assets/global_images/JSHK.png'; 
import leviathan from '../assets/global_images/leviathan.png'; 
import meraj from '../assets/global_images/meraj.png'; 
import mototruck from '../assets/global_images/mototruck.png'; 
import rosenbauer from '../assets/global_images/rosenbauer.svg'; 
import RESQTEC from '../assets/global_images/RESQTEC.png'; 
import unitexport from '../assets/global_images/unitexport.png'; 
import * as React from 'react';

export type Partner = {
  name: string;
  description: string;
  website?: string;
  icon?: ReactNode;
};

export const PARTNERS: Partner[] = [
  {
    name: "ASI (Europe) Ltd.",
    description:
      "ASI (Europe) Ltd. is a trusted global supplier of high-quality electronic components for commercial and military applications. With decades of experience and deep market expertise, ASI is recognized worldwide for delivering reliable, hard-to-source electronic solutions.",
    website: "https://www.asieurope.net/",
    icon: React.createElement('img', { src: ASI, alt: 'ASI Europe', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Meraj International FZC",
    description:
      "Meraj International FZC is a leading manufacturer of custom-built special application and specialty vehicles across the GCC and MENA region. The company delivers innovative municipal, rescue, firefighting, jetting, vacuum, and industrial vehicles.",
    website: "https://www.merajinternational.com/",
    icon: React.createElement('img', { src: meraj, alt: 'Meraj International', className: 'w-10 h-10 object-contain' }),
  },

  {
    name: "Rosenbauer",
    description:
      "Rosenbauer is the world’s leading manufacturer of firefighting and disaster-response equipment. With over 150 years of innovation, the company provides fire engines, aerial platforms, rescue systems, and digital solutions worldwide.",
    website: "https://www.rosenbauer.com/en",
    icon: React.createElement('img', { src: rosenbauer, alt: 'Rosenbauer', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Moto-Truck GmbH",
    description:
      "Moto-Truck GmbH is a specialized manufacturer of emergency and municipal vehicles, known for durable construction, modern engineering, and customer-focused solutions.",
    website: "https://www.mototruck.pl/en/",
    icon: React.createElement('img', { src: mototruck, alt: 'Moto-Truck', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Leviathan Corporation (OTRUSA)",
    description:
      "OTRUSA is a global wholesale distributor of OTR and industrial tires serving mining, construction, logistics, and agriculture. With over 20 years of expertise, it delivers tires, wheels, TPMS, and performance-enhancing sealants worldwide.",
    website: "https://www.leviathancorp.com/",
    icon: React.createElement('img', { src: leviathan, alt: 'Leviathan Corporation', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Unit Export Ltd.",
    description:
      "Unit Export Ltd. brings more than 45 years of experience delivering international supply contracts funded by organizations such as the World Bank, European Commission, and UN agencies, specializing in complex global procurement projects.",
    website: "https://www.unitexport.com/",
    icon: React.createElement('img', { src: unitexport, alt: 'Unit Export', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Fire Safety Devices Pvt. Ltd.",
    description:
      "Fire Safety Devices Pvt. Ltd. is an ISO-certified manufacturer providing premium firefighting products since 1995, including foam concentrates, extinguishers, dry powders, and advanced fire protection systems.",
    website: "https://www.firesafetydevices.co.in/",
    icon: React.createElement('img', { src: FIRECHEM, alt: 'Fire Safety Devices', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "RESQTEC",
    description:
      "RESQTEC is a global innovator in rescue and aircraft recovery equipment with over 50 years of experience, delivering advanced, mission-critical solutions for emergency and recovery teams worldwide.",
    website: "https://rescue.resqtec.com/en_gb/",
      icon: React.createElement('img', { src: RESQTEC, alt: 'RESQTEC', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Jingshen International (HK) Ltd.",
    description:
      "Jingshen International is a Hong Kong–based trading company specializing in global transit, import, and export operations across medical equipment, electronics, industrial materials, and metals.",
    website: "https://jshkgroup.com/?lang=en",
    icon: React.createElement('img', { src: JSHK, alt: 'Jingshen International', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Yiwu Foreal Import & Export Co. Ltd.",
    description:
      "Yiwu Foreal Import & Export Co. Ltd. provides reliable global sourcing, import, and export services, supporting international partners with efficient trade execution and transparent operations.",
    icon: "📊",
  },
];