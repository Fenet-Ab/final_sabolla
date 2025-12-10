// src/types/index.ts (New file for best practice)

export interface ServiceDetailItem {
  title: string;
  content: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  // Add other properties from SERVICES_LIST if necessary
}

export interface DetailedService extends Service {
  details: ServiceDetailItem[];
}