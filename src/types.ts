export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  highlight?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyPrinciple {
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  badge?: string;
  description: string;
  targetAudience: string[];
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  description: string;
}
