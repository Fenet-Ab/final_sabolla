// src/data/localPartners.ts
import * as React from 'react';
import fireIcon from '../assets/images_as_icons/addis_ababa_fire_and_disaster.png';
import shipping from '../assets/images_as_icons/shipping_and_logistics.png';
import civil from '../assets/images_as_icons/civil_aviation.png';
import petroleum from '../assets/images_as_icons/petroleum_supply.png';
import mhuger from '../assets/images_as_icons/mhuger_cement.png';
import OCFCU from '../assets/images_as_icons/OCFCU.png';
import star_alliance from '../assets/images_as_icons/star_alliance.png';
import ETBC from '../assets/images_as_icons/ETBC.png';

import agriculture from '../assets/images_as_icons/agriculture.png';
import sugar from '../assets/images_as_icons/sugar.png';
import tele from '../assets/images_as_icons/ethiotele.png';
import { disasterRisk, ethiopianToll, waterSwage } from '../assets/asset';

export type Partner = {
  name: string;
  description: string;
  website?: string;
  icon?: React.ReactNode;
};

export const LOCAL_PARTNERS: Partner[] = [
  {
    name: "Addis Ababa Fire & Disaster Risk Management Commission",
    description:
      "The Addis Ababa Fire & Disaster Risk Management Commission is responsible for fire prevention, emergency response, disaster preparedness, and risk mitigation within Addis Ababa.",
    website: "https://www.addisfire.gov.et/",
    icon: React.createElement('img', { src: fireIcon, alt: 'Fire Commission', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethiopian Disaster Risk Management Commission",
    description:
      "The Ethiopian Disaster Risk Management Commission leads national disaster prevention, preparedness, response, and recovery efforts across Ethiopia.",
    icon: React.createElement('img', { src: disasterRisk, alt: 'Fire Commission', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethiopian Shipping & Logistics Services Enterprise",
    description:
      "A national enterprise providing maritime transport, logistics, freight forwarding, and multimodal logistics services to support Ethiopia’s international trade.",
    website: "https://www.eslse.et/",
    icon: React.createElement('img', { src: shipping, alt: 'Shipping and logistics', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethiopian Civil Aviation Authority",
    description:
      "The Ethiopian Civil Aviation Authority regulates and oversees civil aviation safety, security, and compliance in Ethiopia.",
    website: "https://www.linkedin.com/company/ethiopian-civil-aviation-authority/?originalSubdomain=et",
    icon: React.createElement('img', { src: civil, alt: 'Civil Aviation', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethiopian Petroleum Supply Enterprise",
    description:
      "Responsible for the procurement, storage, distribution, and supply of petroleum products across Ethiopia.",
    website: "https://share.google/U2UXRj2rnkcIHfFah",
    icon: React.createElement('img', { src: petroleum, alt: 'Petroleum Supply', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Chemical Industry Corporation – Mugher Cement Factory",
    description:
      "A major industrial manufacturer producing cement and chemical products that support Ethiopia’s construction and infrastructure sectors.",
    website: "https://www.cic.gov.et/",
    icon: React.createElement('img', { src: mhuger, alt: 'Mugher Cement', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Oromia Coffee Farmers Cooperative Union",
    description:
      "A cooperative union representing coffee farmers in Oromia, promoting sustainable coffee production and global export partnerships.",
    website: "https://www.oromiacoffeeunion.com/",
    icon: React.createElement('img', { src: OCFCU, alt: 'OCFCU', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethiopian Airports Group",
    description:
      "Manages and operates airports across Ethiopia, supporting aviation infrastructure, safety, and passenger services.",
    website: "https://corporate.ethiopianairlines.com/ethiopian-group",
    icon: React.createElement('img', { src: star_alliance, alt: 'Ethiopian Airports Group', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethiopian Trading Business Corporation",
    description:
      "A state-owned enterprise engaged in strategic import, export, and domestic trade of essential commodities.",
    website: "https://etbc.com.et/",
    icon: React.createElement('img', { src: ETBC, alt: 'ETBC', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethiopian Toll Roads Corporation",
    description:
      "Responsible for the development, operation, and management of toll road infrastructure in Ethiopia.",
    website: "https://etre.com.et/",
    icon: React.createElement('img', { src: ethiopianToll, alt: 'Fire Commission', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethiopian Sugar Industry Group",
    description:
      "A public enterprise overseeing sugar production, agro-industrial development, and sugar manufacturing plants nationwide.",
    website: "https://etsugar.com/esig/",
    icon: React.createElement('img', { src: sugar, alt: 'Ethiopian Sugar Industry Group', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ministry of Agriculture – Ethiopia",
    description:
      "The federal ministry responsible for agricultural policy, food security, rural development, and sustainable farming initiatives.",
    website: "http://www.moa.gov.et/",
    icon: React.createElement('img', { src: agriculture, alt: 'Ministry of Agriculture', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Addis Ababa Water & Sewerage Authority",
    description:
      "Provides potable water supply and wastewater management services for Addis Ababa.",
    website: "https://aawsa.gov.et/",
    icon: React.createElement('img', { src: waterSwage, alt: 'Water and Sewerage Authority', className: 'w-10 h-10 object-contain' }),
  },
  {
    name: "Ethio Telecom",
    description:
      "Provides telecommunications services across Ethiopia.",
    website: "https://www.ethiotelecom.et/",
    icon: React.createElement('img', { src: tele, alt: 'Ethio Telecom', className: 'w-10 h-10 object-contain' }),
  },

];