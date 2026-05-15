export interface ServiceProcessItem {
  title: string;
  bullets: string[];
}

export interface ServiceData {
  id: string; // used for routing
  title: string;
  subtitle: string;
  offerText: string;
  process: ServiceProcessItem[];
  whyChoose: string[];
  getStartedText: string;
}