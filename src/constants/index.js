const Main_navLinks = [
    {
        name: "Home",
        link: "#home"
    },
    {
        name: "Services",
        link: "#services"
    },
    {
        name: "What Sets Us Apart",
        link: "#cards"
    },
    {
        name: "What We Do Best",
        link: "#markets"
    },
    {
        name: "About Us",
        link: "#about"
    },
];

const techServicesNavlinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Our Services",
    link: "#servicesFeatures"
  },
  {
    name: "Testimonials",
    link: "#testimonials"
  },
  {
    name: "Tech Retail",
    link: "tech-retail"
  },
  {
    name: "Tech Solutions",
    link: "tech-solutions"
  },
];

const TechRetailNavlinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Products",
    link: "#products"
  },
  {
    name: "Tech Services",
    link: "tech-services"
  },
  {
    name: "Tech Solutions",
    link: "tech-solutions"
  },
];

const techSolutionsNavlinks = [
  {
    name: "Home",
    link: "/"
  },

  {
    name: "Solutions",
    link: "#solutions"
  },
  {
    name: "Testimonials",
    link: "#testimonials"
  },
  {
    name: "Tech Services",
    link: "tech-services"
  },
  {
    name: "Tech Retail",
    link: "tech-retail"
  },
];

const accessSolutionNavlinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Tech Solutions",
    link: "/tech-solutions"
  },
  {
    name: "Access Services",
    link: "#services"
  },
  {
    name: "Our Process",
    link: "#assess"
  },
  {
    name: "Why Us",
    link: "#whyUs"
  },
  {
    name: "FAQs",
    link: "#faqs"
  },
];

const cctvNavlinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Solutions",
    link: "/tech-solutions"
  },
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "Systems",
    link: "#types",
  },
  {
    name: "Process",
    link: "#assess"
  },
  {
    name: "FAQs",
    link: "#faqs"
  }
];

const digitalSignageNavlinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Solutions",
    link: "/tech-solutions"
  },
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "Types",
    link: "#types",
  },
  {
    name: "Integration",
    link: "#integration"
  },
  {
    name: "Why Choose Us",
    link: "#whyUs"
  }
];

const techServices = [
  {
    title: "Maintenance",
    price: "$99",
    description: "Routine checkups and updates to keep your IT systems performing at their aest.",
    image: "/images/download.jpg",
  },
  {
    title: "Repair",
    price: "$149",
    description: "Rapid response for unexpected issues, restoring your business swiftly.",
    image: "/images/batman.png",
  },
  {
    title: "CC TV Setup",
    price: "$89",
    description:"Seamless migrations to cloud solutions—secure, stable, and ready for growth.",
    image: "/images/knight.jpg",
  },
];

import { Wrench, Clock, Cloud, ShieldCheck, Route, } from "lucide-react";
const features = [
  { icon: Wrench, title: "Device Setup" },
  { icon: Clock, title: "Urgent Fix" },
  { icon: Cloud, title: "Cloud Storage" },
  { icon: ShieldCheck, title: "Cyber Security" },
];
const techSolutionsItems = [
  {
    title: "Access Control",
    description: "Implement robust access control systems to protect your business assets.",
    image: "/images/Leon3.jpg",
    route: "/tech-solutions/access-control",
  },
  {
    title: "CCTV Solutions",
    description: "Keep a watchful eye on what matters most with smart CCTV designed for your peace of mind.",
    image: "/images/Leon3.jpg",
    route: "/tech-solutions/CCTV"
  },
  {
    title: "Digital Signage",
    description: "Engage your audience with dynamic digital signage solutions that captivate and inform.",
    image: "/images/Leon3.jpg",
    route: "/tech-solutions/digital-signage"
  },
];

const TechSolutionstestimonials = [
  {
    quote: "Their solutions transformed our workflow.",
    name: "Alex Kim",
    role: "Something Important",
  },
  {
    quote: "Reliable, innovative, and fast delivery.",
    name: "Priya Rao",
    role: "Something Important",
  },{
    quote: "Great team to collaborate with.",
    name: "Greg Stevens",
    role: "Something Important",
  },
];

const TechServicestestimonials = [
  {
    quote: "Their solutions transformed our workflow.",
    name: "Alex Kim",
    role: "Something Important",
  },
  {
    quote: "Reliable, innovative, and fast delivery.",
    name: "Priya Rao",
    role: "Something Important",
  },{
    quote: "Great team to collaborate with.",
    name: "Greg Stevens",
    role: "Something Important",
  },
];


const items = [
    {
      id: 1,
      title: "Data-Backed Strategy",
      description: "We craft marketing plans built on real insights, not guesswork—so every move has purpose.",
      span: "md:col-span-1 md:row-span-2",
      icon: "🔭" // Binoculars representation
    },
    {
      id: 2,
      title: "Performance Analytics",
      description: "Track results in real-time and adapt fast—because great marketing never stands still.",
      span: "md:col-span-1 md:row-span-1",
      icon: "📊"
    },
    {
      id: 3,
      title: "Social Media Management",
      description: "From content calendars to engagement tactics.",
      span: "md:col-span-1 md:row-span-1",
      icon: "🎧"
    },
    {
      id: 4,
      title: "Creative Branding",
      description: "Elevate your brand with bold, strategic messaging and a brand identity that speaks your language.",
      span: "md:col-span-1 md:row-span-1",
      icon: "🎨"
    },
    {
      id: 5,
      title: "SEO & Content Marketing",
      description: "Boost visibility and authority with content that ranks, resonates, and delivers long-term value.",
      span: "md:col-span-1 md:row-span-1",
      icon: "🔍"
    }
];

  const aboutItems = [
  {
    id: 1,
    label: "Our Mission",
    title: "Driving Results That Matter",
    description: "We partner with ambitious brands to create marketing strategies that don't just look good—they deliver measurable growth and lasting impact.",
    icon: "🎯"
  },
  {
    id: 2,
    label: "Experience",
    title: "10+",
    description: "Years of Excellence",
    icon: "⭐"
  },
  {
    id: 3,
    label: "Core Values",
    title: "What Drives Us",
    values: [
      "Innovation over imitation",
      "Data-driven decisions",
      "Transparency always",
      "Results that speak",
      "Long-term partnerships"
    ]
  },
  {
    id: 4,
    label: "Impact",
    title: "Client Success",
    stats: [
      { number: "500+", label: "Projects Completed" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "250+", label: "Happy Clients" }
    ]
  },
  {
    id: 5,
    label: "Our Approach",
    title: "Strategy Meets Creativity",
    description: "We combine analytical rigor with creative excellence to build campaigns that resonate with your audience and drive real business outcomes."
  },
  {
    id: 6,
    label: "Ready to Grow?",
    title: "Let's Work Together",
    description: "Start your journey to marketing excellence"
  }
];

const socialMedia = [
    {
        name: "insta",
        url: "https://www.youtube.com/watch?v=VrBzJx7GzqY&list=RDMM&index=15",
        imgPath: "/images/insta.png",
        alt: "instagram"
    },
    {
        name: "facebook",
        url: "https://www.youtube.com/watch?v=l90QCMehK4Y&list=RDMM&index=24",
        imgPath: "/images/fb.png",
        alt: "facebook",
    },
    {
        name: "twitter",
        url: "https://www.youtube.com/watch?v=C4xbm83amc0&list=RDMM&index=43",
        imgPath: "/images/x.png",
        alt: "X/twitter",
    },
    {
        name: "linkedin",
        url: "https://www.youtube.com/watch?v=pmanD_s7G3U&list=RDMM&index=10",
        imgPath: "/images/linkedin.png",
        alt: "linkedin"
    },

];

export { Main_navLinks, 
        techSolutionsNavlinks,
         techServicesNavlinks, 
         TechRetailNavlinks, 
         techServices, 
         features, 
         techSolutionsItems, 
         TechSolutionstestimonials, 
         TechServicestestimonials, 
         items, 
         aboutItems, 
         socialMedia,
         accessSolutionNavlinks,
         cctvNavlinks,
         digitalSignageNavlinks,
        };