import { ServiceCategory, TeamMember, Testimonial, FaqItem } from './types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    title: "Manicures",
    icon: "sparkles",
    count: 8,
    items: [
      { name: "Classic Manicure", price: "GH₵25", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=200&auto=format&fit=crop" },
      { name: "French Manicure", price: "GH₵35", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=200&auto=format&fit=crop" },
      { name: "Russian Manicure", price: "GH₵65", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=200&auto=format&fit=crop" },
      { name: "Spa Manicure", price: "GH₵50", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=200&auto=format&fit=crop" },
      { name: "Express Manicure", price: "GH₵20", image: "https://images.unsplash.com/photo-1599693390740-9e67c2937861?q=80&w=200&auto=format&fit=crop" },
      { name: "Non-Toxic Manicure", price: "GH₵35", image: "https://images.unsplash.com/photo-1600063935824-00624898144b?q=80&w=200&auto=format&fit=crop" },
      { name: "Natural Manicure", price: "GH₵30", image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=200&auto=format&fit=crop" },
      { name: "Deluxe Manicure", price: "GH₵75", image: "https://images.unsplash.com/photo-1542452377-76eb949980d4?q=80&w=200&auto=format&fit=crop" },
    ]
  },
  {
    title: "Pedicures",
    icon: "sun",
    count: 4,
    items: [
      { name: "Classic Pedicure", price: "GH₵35", image: "https://images.unsplash.com/photo-1519415387722-a1c3ebb7ee59?q=80&w=200&auto=format&fit=crop" },
      { name: "Silk Soles", price: "GH₵60", image: "https://images.unsplash.com/photo-1600063935824-00624898144b?q=80&w=200&auto=format&fit=crop" },
      { name: "Spa Pedicure", price: "GH₵70", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=200&auto=format&fit=crop" },
      { name: "Deluxe Pedicure", price: "GH₵80", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=200&auto=format&fit=crop" },
    ]
  },
  {
    title: "Gel Nails",
    icon: "circle",
    count: 6,
    items: [
      { name: "Gel Manicure", price: "GH₵40", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=200&auto=format&fit=crop" },
      { name: "Gel Overlay", price: "GH₵55", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=200&auto=format&fit=crop" },
      { name: "Gel Pedicure", price: "GH₵55", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=200&auto=format&fit=crop" },
      { name: "BIAB / Builder Gel", price: "GH₵75", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=200&auto=format&fit=crop" },
      { name: "Gel Extensions", price: "GH₵85", image: "https://images.unsplash.com/photo-1599693390740-9e67c2937861?q=80&w=200&auto=format&fit=crop" },
      { name: "Gel Nail Art Add-On", price: "GH₵15", image: "https://images.unsplash.com/photo-1542452377-76eb949980d4?q=80&w=200&auto=format&fit=crop" },
    ]
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Lina Markovic",
    role: "Founder & Artist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Amira Clark",
    role: "Visit Instagram", 
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Sofia Davis",
    role: "Gel & BIAB Expert",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    text: "My gel pedicure lasted really beautifully. The quiet, calming space made it feel like more than just a service, truly.",
    author: "Taylor M."
  },
  {
    text: "It's rare to find a salon that feels this calm – and leaves your nails looking this good.",
    author: "Jasmine L."
  },
  {
    text: "Brought an idea, left with something even better. The detail and care are perfect.",
    author: "Maya S."
  },
  {
    text: "From natural sets to bold, custom nail art, they just get it. Bodycia's makes me feel seen, styled, and completely at ease.",
    author: "Rachel T."
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer: "You can book directly through our website by clicking the 'Book Now' button, or give us a call during business hours."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "We primarily work by appointment to ensure every client gets our full attention, but we do accept walk-ins if there is availability."
  },
  {
    question: "What kind of products do you use?",
    answer: "We use non-toxic, high-quality gel and polish brands that prioritize the health of your natural nails."
  },
  {
    question: "What's the service duration?",
    answer: "Service times vary. A classic manicure takes about 45 minutes, while complex nail art or gel extensions may take up to 90 minutes."
  },
  {
    question: "Can I bring my own nail design?",
    answer: "Absolutely! We love bringing your vision to life. Feel free to bring photos or inspiration."
  },
  {
    question: "Is gel safe for my nails?",
    answer: "Yes, when applied and removed correctly by professionals, gel is safe. We focus on gentle removal techniques to protect your nail bed."
  }
];