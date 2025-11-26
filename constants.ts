import { ServiceCategory, TeamMember, Testimonial, FaqItem } from './types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    title: "Manicures",
    icon: "sparkles",
    count: 8,
    items: [
      { name: "Classic Manicure", price: "GH₵25", image: "/image-6.jfif" },
      { name: "French Manicure", price: "GH₵35", image: "/image-2.jfif" },
      { name: "Russian Manicure", price: "GH₵65", image: "/image-3.jfif" },
      { name: "Spa Manicure", price: "GH₵50", image: "/image-4.jfif" },
      { name: "Express Manicure", price: "GH₵20", image: "/image-5.jfif" },
      { name: "Non-Toxic Manicure", price: "GH₵35", image: "/image-6.jfif" },
      { name: "Natural Manicure", price: "GH₵30", image: "/image-7.jfif" },
      { name: "Deluxe Manicure", price: "GH₵75", image: "/image-4.jfif" },
    ]
  },
  {
    title: "Pedicures",
    icon: "sun",
    count: 4,
    items: [
      { name: "Classic Pedicure", price: "GH₵35", image: "/image-6.jfif" },
      { name: "Silk Soles", price: "GH₵60", image: "/image-2.jfif" },
      { name: "Spa Pedicure", price: "GH₵70", image: "/image-3.jfif" },
      { name: "Deluxe Pedicure", price: "GH₵80", image: "/image-4.jfif" },
    ]
  },
  {
    title: "Gel Nails",
    icon: "circle",
    count: 6,
    items: [
      { name: "Gel Manicure", price: "GH₵40", image: "/image-6.jfif" },
      { name: "Gel Overlay", price: "GH₵55", image: "/image-2.jfif" },
      { name: "Gel Pedicure", price: "GH₵55", image: "/image-3.jfif" },
      { name: "BIAB / Builder Gel", price: "GH₵75", image: "/image-4.jfif" },
      { name: "Gel Extensions", price: "GH₵85", image: "/image-5.jfif" },
      { name: "Gel Nail Art Add-On", price: "GH₵15", image: "/image-4.jfif" },
    ]
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Boatemaa Bodycia",
    role: "Founder & Artist",
    image: "/image-1.jfif"
  },
  {
    name: "Adjoa Mensah",
    role: " Nail Technician", 
    image: "/image-1.jfif"
  },
  {
    name: "Akosua Serwaa",
    role: "Nail Technician",
    image: "/image-1.jfif"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    text: "My gel pedicure lasted really beautifully. The quiet, calming space made it feel like more than just a service, truly.",
    author: "Serwaa M."
  },
  {
    text: "It's rare to find a salon that feels this calm – and leaves your nails looking this good.",
    author: "Jasmine Aboagye"
  },
  {
    text: "Brought an idea, left with something even better. The detail and care are perfect.",
    author: "Alice Kwaku"
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