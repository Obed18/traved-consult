export interface ServiceSection {
  title: string;
  description: string;
  bullets?: string[];
}

export interface ProcessStep {
  number?: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  heroDescription: string;
  image: string;
  icon?: string;

  introduction?: {
    title: string;
    paragraphs: string[];
  };

  offerSections: ServiceSection[];

  areasSupported?: {
    title: string;
    items: string[];
  };

  process?: {
    title: string;
    description?: string;
    steps: ProcessStep[];
  };

  whyChoose?: {
    title: string;
    items: WhyChooseItem[];
  };

  importantNotice?: {
    title: string;
    paragraphs: string[];
  };

  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}