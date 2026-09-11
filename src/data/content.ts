import {
  ServiceItem,
  ProcessStep,
  WhyPrinciple,
  PricingPlan,
  FAQItem,
  TeamMember,
} from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'business',
    number: '01',
    title: 'Business Websites',
    description:
      'Multi-section websites built to establish credibility, showcase your services, and make it effortless for customers to contact you.',
    tags: ['Credibility', 'Service Overview', 'Customer Trust', 'Lead Pathways'],
    icon: 'Briefcase',
    highlight: true,
  },
  {
    id: 'landing',
    number: '02',
    title: 'Landing Pages',
    description:
      'High-impact, single-page sites built around a specific offer, launch, or product with a sharp conversion focus.',
    tags: ['Product Launches', 'Focused Flow', 'Clear Call to Action'],
    icon: 'Target',
  },
  {
    id: 'portfolio',
    number: '03',
    title: 'Portfolio Websites',
    description:
      'Visual, thoughtfully structured showcases designed for designers, photographers, architects, and makers.',
    tags: ['Case Studies', 'Visual Depth', 'Clean Typography'],
    icon: 'Layers',
  },
  {
    id: 'personal-brand',
    number: '04',
    title: 'Personal Brand Websites',
    description:
      'A digital home for founders, creators, freelancers, and consultants to share their background, writing, and work.',
    tags: ['Personal Brand', 'Articles & Notes', 'Direct Contact'],
    icon: 'Sparkles',
  },
  {
    id: 'custom',
    number: '05',
    title: 'Custom Websites',
    description:
      'Unique digital experiences crafted for specific workflows, custom layouts, or distinct interactive needs.',
    tags: ['Bespoke Logic', 'Custom Interfaces', 'Tailored Systems'],
    icon: 'Code2',
    highlight: true,
  },
];

export const WHY_PRINCIPLES: WhyPrinciple[] = [
  {
    title: 'BUILT AROUND YOU',
    description:
      'Your website is shaped around your needs, not a one-size-fits-all template.',
  },
  {
    title: 'MODERN BY DEFAULT',
    description:
      'Clean layouts, responsive design, and thoughtful interactions.',
  },
  {
    title: 'PERFORMANCE-MINDED',
    description:
      'We care about how the website feels, not just how it looks.',
  },
  {
    title: 'DIRECT COMMUNICATION',
    description:
      'You work directly with the people building your website.',
  },
];

export const PROCESS_STAGES: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand your business, audience and goals.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Shape the visual direction and user experience.',
  },
  {
    number: '03',
    title: 'DEVELOP',
    description: 'Build a responsive and functional website.',
  },
  {
    number: '04',
    title: 'LAUNCH',
    description: 'Test, refine and prepare it for the real world.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '₹5,000',
    subtitle: 'From ₹5,000',
    description:
      'A focused, high-impact presence for launching your project or personal space.',
    targetAudience: ['Landing pages', 'Focused single-page sites', 'Personal pages'],
    features: [
      'Tailored 1 to 2 section layout',
      'Mobile-first responsive design',
      'Clean modern typography & styling',
      'Contact pathways & social links',
      'Domain & deployment guidance',
    ],
    ctaText: 'Get a Quote →',
    popular: false,
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: '₹10,000',
    subtitle: 'From ₹10,000',
    badge: 'MOST POPULAR',
    description:
      'A complete, multi-section website designed to introduce your services and build lasting credibility.',
    targetAudience: [
      'Small businesses',
      'Professional service providers',
      'Multi-page sites',
    ],
    features: [
      'Multi-section structured architecture',
      'Custom visual components & details',
      'Dedicated services & about areas',
      'Direct social & inquiry routing',
      'Search engine friendly structure',
      'Post-launch walkthrough & support',
    ],
    ctaText: 'Get a Quote →',
    popular: true,
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    price: "Let's Talk",
    subtitle: 'Tailored Scope',
    description:
      'Tailored web development for unique requirements, larger scopes, and specific interactive features.',
    targetAudience: [
      'Startups with custom needs',
      'Specialized visual layouts',
      'Interactive workflows',
    ],
    features: [
      'Bespoke visual architecture',
      'Custom pages & interactive modules',
      'Third-party integrations & embeds',
      'Performance & animation tuning',
      'Priority delivery timeline',
    ],
    ctaText: 'Get a Quote →',
    popular: false,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'ABHAY',
    role: 'Co-Founder · Development',
    initials: 'AB',
    description:
      'Focuses on development, problem-solving, and turning ideas into responsive, functional web experiences from concept to completion.',
  },
  {
    name: 'REHAN',
    role: 'Co-Founder · Creative & Development',
    initials: 'RH',
    description:
      'Focuses on visual direction, layout, and user experience, helping shape websites that feel clear, modern, and purposeful.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'cost',
    question: 'How much does a website cost?',
    answer:
      'Websites start from ₹5,000 for focused landing or personal pages, and from ₹10,000 for multi-section business websites. Pricing depends on page count, functionality, and timeline. We always provide a clear, upfront quote before starting.',
  },
  {
    id: 'timeline',
    question: 'How long does a website take?',
    answer:
      'A focused starter site or landing page typically takes 4 to 7 days. A comprehensive multi-section business website usually takes 1 to 2 weeks once goals and content are clear.',
  },
  {
    id: 'from-scratch',
    question: 'Can you build a website from scratch?',
    answer:
      'Yes. We can start with just an idea. We will help you organize the structure, shape the visual style, and code the full website from the ground up.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. If your current website looks dated or is difficult to use on mobile devices, we can rebuild it with a modern layout, cleaner typography, and faster load times.',
  },
  {
    id: 'domain-hosting',
    question: 'Do you help with domain and hosting?',
    answer:
      'Yes. We guide you through purchasing your domain and setting up reliable, modern hosting so your site is live and secure without technical headache.',
  },
  {
    id: 'start-project',
    question: 'How do I start a project?',
    answer:
      'Simply send us a message on Instagram (@devd_uo) or complete the quick project inquiry form below. We will discuss your goals, share a quote, and begin as soon as you are ready.',
  },
];
