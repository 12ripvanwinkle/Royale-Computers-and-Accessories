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
    name: "Main Website",
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
    name: "Main Website",
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
    name: "Main Website",
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

import { Wrench, Clock, Cloud, ShieldCheck, } from "lucide-react";
const features = [
  { icon: Wrench, title: "Device Setup" },
  { icon: Clock, title: "Urgent Fix" },
  { icon: Cloud, title: "Cloud Storage" },
  { icon: ShieldCheck, title: "Cyber Security" },
];
const techSolutionsItems = [
  {
    title: "Cloud Integration",
    description: "Seamlessly connect your business to cloud platforms for improved scalability and security.",
    image: "/images/Leon1.jpg",
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions that address your specific business challenges.",
    image: "/images/Leon2.jpg",
  },
  {
    title: "IT Consulting",
    description: "Expert guidance for technology adoption and digital transformation.",
    image: "/images/Leon3.jpg",
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

const productCategory = {
  phones: Array.from({length: 30}, (_, i) => ({
        id: `phone-${i + 1}`,
        name: `${['iPhone 15', 'Galaxy S24', 'Pixel 8', 'OnePlus 12'][i % 4]} ${i % 3 === 0 ? 'Pro' : ''}`,
        brand: ['Apple', 'Samsung', 'Google', 'OnePlus'][i % 4],
        price: 299 + (i * 50),
        originalPrice: i % 3 === 0 ? (299 + (i * 50)) * 1.25 : null,
        onSale: i % 3 === 0,
        inStock: i % 5 !== 0,
        preOrder: i % 5 === 0,
        rating: 3 + (i % 3),
        warranty: ['1 Year', '2 Years', 'Extended'][i % 3],
        os: ['iOS', 'Android', 'Android', 'Android'][i % 4],
        storage: ['64GB', '128GB', '256GB', '512GB'][i % 4],
        ram: ['4GB', '6GB', '8GB', '12GB'][i % 4],
        screenSize: ['5.8"', '6.1"', '6.5"', '6.7"'][i % 4],
        camera: ['Dual', 'Triple', '48MP', '108MP'][i % 4],
        connectivity: ['4G LTE', '5G', '5G', '5G'][i % 4],
        color: ['Black', 'White', 'Blue', 'Red'][i % 4],
        bestSelling: i % 7 === 0,
        newArrival: i % 6 === 0,
        image: '📱'
    })),

  computers: Array.from({length: 30}, (_, i) => ({
        id: `computer-${i + 1}`,
        name: `${['Dell XPS', 'HP Pavilion', 'Lenovo ThinkPad', 'MacBook'][i % 4]} ${15 + i % 3}`,
        brand: ['Dell', 'HP', 'Lenovo', 'Apple'][i % 4],
        price: 599 + (i * 100),
        originalPrice: i % 4 === 0 ? (799 + (i * 100)) * 1.3 : null,
        onSale: i % 4 === 0,
        inStock: i % 5 !== 0,
        preOrder: i % 5 === 0,
        rating: 3 + (i % 3),
        warranty: ['1 Year', '2 Years', 'Extended'][i % 3],
        type: ['Laptop', 'Desktop', 'All-in-One', 'Laptop'][i % 4],
        processor: ['Intel i5', 'Intel i7', 'AMD Ryzen 7', 'Apple M2'][i % 4],
        ram: ['8GB', '16GB', '32GB', '64GB'][i % 4],
        storage: ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'][i % 4],
        graphics: ['Integrated', 'NVIDIA GTX', 'NVIDIA RTX', 'AMD Radeon'][i % 4],
        os: ['Windows', 'Windows', 'Windows', 'macOS'][i % 4],
        bestSelling: i % 7 === 0,
        newArrival: i % 6 === 0,
        image: '💻'
    })),

    tablets: Array.from({length: 30}, (_, i) => ({
        id: `tablet-${i + 1}`,
        name: `${['iPad', 'Galaxy Tab', 'Fire HD', 'Surface'][i % 4]} ${10 + i % 3}`,
        brand: ['Apple', 'Samsung', 'Amazon', 'Microsoft'][i % 4],
        price: 399 + (i * 40),
        originalPrice: i % 5 === 0 ? (399 + (i * 40)) * 1.2 : null,
        onSale: i % 5 === 0,
        inStock: i % 5 !== 0,
        preOrder: i % 5 === 0,
        rating: 3 + (i % 3),
        warranty: ['1 Year', '2 Years', 'Extended'][i % 3],
        storage: ['64GB', '128GB', '256GB', '512GB'][i % 4],
        bestSelling: i % 7 === 0,
        newArrival: i % 6 === 0,
        image: '📱'
    })),

    tvs: Array.from({length: 30}, (_, i) => ({
        id: `tv-${i + 1}`,
        name: `${['Samsung QLED', 'LG OLED', 'Sony Bravia', 'TCL'][i % 4]} ${43 + (i % 4) * 10}"`,
        brand: ['Samsung', 'LG', 'Sony', 'TCL'][i % 4],
        price: 499 + (i * 80),
        originalPrice: i % 3 === 0 ? (499 + (i * 80)) * 1.35 : null,
        onSale: i % 3 === 0,
        inStock: i % 5 !== 0,
        preOrder: i % 5 === 0,
        rating: 3 + (i % 3),
        warranty: ['1 Year', '2 Years', 'Extended'][i % 3],
        screenSize: ['43"', '55"', '65"', '75"'][i % 4],
        resolution: ['Full HD', '4K UHD', '4K UHD', '8K'][i % 4],
        displayType: ['LED', 'QLED', 'OLED', 'LED'][i % 4],
        smartTV: i % 2 === 0,
        refreshRate: ['60Hz', '120Hz', '120Hz', '144Hz'][i % 4],
        bestSelling: i % 7 === 0,
        newArrival: i % 6 === 0,
        image: '📺'
    })),

    monitors: Array.from({length: 30}, (_, i) => ({
        id: `monitor-${i + 1}`,
        name: `${['Dell UltraSharp', 'LG UltraGear', 'Samsung Odyssey', 'ASUS ROG'][i % 4]} ${24 + (i % 4) * 3}"`,
        brand: ['Dell', 'LG', 'Samsung', 'ASUS'][i % 4],
        price: 199 + (i * 30),
        originalPrice: i % 4 === 0 ? (199 + (i * 30)) * 1.25 : null,
        onSale: i % 4 === 0,
        inStock: i % 5 !== 0,
        preOrder: i % 5 === 0,
        rating: 3 + (i % 3),
        warranty: ['1 Year', '2 Years', 'Extended'][i % 3],
        screenSize: ['24"', '27"', '32"', '34"'][i % 4],
        resolution: ['Full HD', 'QHD', '4K', '4K'][i % 4],
        panelType: ['IPS', 'VA', 'IPS', 'TN'][i % 4],
        refreshRate: ['60Hz', '144Hz', '165Hz', '240Hz'][i % 4],
        usage: ['Office', 'Gaming', 'Design', 'Gaming'][i % 4],
        bestSelling: i % 7 === 0,
        newArrival: i % 6 === 0,
        image: '🖥️'
    })),

    peripherals: Array.from({length: 30}, (_, i) => ({
        id: `peripheral-${i + 1}`,
        name: `${['Logitech', 'Razer', 'Corsair', 'SteelSeries'][i % 4]} ${['MX Keys', 'DeathAdder', 'K70', 'Arctis'][i % 4]}`,
        brand: ['Logitech', 'Razer', 'Corsair', 'SteelSeries'][i % 4],
        price: 49 + (i * 10),
        originalPrice: i % 3 === 0 ? (49 + (i * 10)) * 1.3 : null,
        onSale: i % 3 === 0,
        inStock: i % 5 !== 0,
        preOrder: i % 5 === 0,
        rating: 3 + (i % 3),
        warranty: ['1 Year', '2 Years', 'Extended'][i % 3],
        category: ['Keyboard', 'Mouse', 'Headset', 'Webcam'][i % 4],
        connectionType: ['Wired', 'Wireless', 'Bluetooth', 'Wireless'][i % 4],
        compatibility: ['Windows', 'Windows/macOS', 'Console', 'Universal'][i % 4],
        useCase: ['Gaming', 'Office', 'Home', 'Gaming'][i % 4],
        bestSelling: i % 7 === 0,
        newArrival: i % 6 === 0,
        image: '⌨️'
    })),

    printers: Array.from({length: 30}, (_, i) => ({
        id: `printer-${i + 1}`,
        name: `${['HP', 'Canon', 'Epson', 'Brother'][i % 4]} ${['LaserJet', 'PIXMA', 'EcoTank', 'MFC'][i % 4]} ${1000 + i * 100}`,
        brand: ['HP', 'Canon', 'Epson', 'Brother'][i % 4],
        price: 149 + (i * 20),
        originalPrice: i % 5 === 0 ? (149 + (i * 20)) * 1.2 : null,
        onSale: i % 5 === 0,
        inStock: i % 5 !== 0,
        preOrder: i % 5 === 0,
        rating: 3 + (i % 3),
        warranty: ['1 Year', '2 Years', 'Extended'][i % 3],
        printerType: ['Inkjet', 'Laser', 'All-in-One', 'Photo'][i % 4],
        color: i % 2 === 0 ? 'Color' : 'Black & White',
        functions: [['Print'], ['Print', 'Scan'], ['Print', 'Scan', 'Copy'], ['Print', 'Scan', 'Copy', 'Fax']][i % 4],
        connectivity: [['USB'], ['USB', 'Wi-Fi'], ['Wi-Fi', 'Ethernet'], ['USB', 'Wi-Fi', 'Ethernet']][i % 4],
        paperSize: ['A4', 'A4', 'A3', 'A4'][i % 4],
        bestSelling: i % 7 === 0,
        newArrival: i % 6 === 0,
        image: '🖨️'
    })),

};

const techRetailCategories = [
  { id: 'deals', name: 'Deals', icon: '🔥' },
  { id: 'phones', name: 'Phones', icon: '📱' },
  { id: 'computers', name: 'Computers', icon: '💻' },
  { id: 'tablets', name: 'Tablets', icon: '📱' },
  { id: 'tvs', name: 'TVs', icon: '📺' },
  { id: 'monitors', name: 'Monitors', icon: '🖥️' },
  { id: 'peripherals', name: 'Peripherals', icon: '⌨️' },
  { id: 'printers', name: 'Printers', icon: '🖨️' }
];

const categoryFilters = {
  computers: [
    { key: 'type', label: 'Type' },
    { key: 'processor', label: 'Processor' },
    { key: 'ram', label: 'RAM' },
    { key: 'storage', label: 'Storage' },
    { key: 'graphics', label: 'Graphics' },
    { key: 'os', label: 'Operating System' }
  ],

  phones: [
    { key: 'os', label: 'Operating System' },
    { key: 'storage', label: 'Storage' },
    { key: 'ram', label: 'RAM' },
    { key: 'screenSize', label: 'Screen Size' },
    { key: 'camera', label: 'Camera' },
    { key: 'connectivity', label: 'Connectivity' }
  ],

  tvs: [
    { key: 'screenSize', label: 'Screen Size' },
    { key: 'resolution', label: 'Resolution' },
    { key: 'displayType', label: 'Display Type' },
    { key: 'smartTV', label: 'Smart TV', isBoolean: true },
    { key: 'refreshRate', label: 'Refresh Rate' }
  ],

  monitors: [
    { key: 'screenSize', label: 'Screen Size' },
    { key: 'resolution', label: 'Resolution' },
    { key: 'panelType', label: 'Panel Type' },
    { key: 'refreshRate', label: 'Refresh Rate' },
    { key: 'usage', label: 'Usage' }
  ],

  peripherals: [
    { key: 'category', label: 'Category' },
    { key: 'connectionType', label: 'Connection Type' },
    { key: 'compatibility', label: 'Compatibility' },
    { key: 'useCase', label: 'Use Case' }
  ],

  printers: [
    { key: 'printerType', label: 'Printer Type' },
    { key: 'color', label: 'Color' },
    { key: 'functions', label: 'Functions' },
    { key: 'connectivity', label: 'Connectivity' },
    { key: 'paperSize', label: 'Paper Size' }
  ],

  tablets: [
    { key: 'storage', label: 'Storage' }
  ]
};

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
         productCategory,
         techRetailCategories,
         categoryFilters,
         
        };