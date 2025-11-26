export interface ServiceItem {
  name: string;
  price: string;
  image?: string;
}

export interface ServiceCategory {
  title: string;
  icon: string; // Using string identifiers for Lucide icons
  items: ServiceItem[];
  count: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  text: string;
  author: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}