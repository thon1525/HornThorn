import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  vuejs,
  figma,
  docker,
  coffee_windowpos,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  Sabiacodedesign,
  Beltie,
  learnwithkru,
  barcodesnanner,
  lsp,
  js,
  sheep,
  frontEnd,
  api,
  windows,
} from "../assets";

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: frontEnd,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
  {
    title: "Javascript Developer",
    icon: js,
  },
  {
    title: "API Developer",
    icon: api,
  },
  {
    title: "Window Developer",
    icon: windows,
  },
];

 const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
  { name: "Next.js", icon: nextjs },
  // { name: "Vue JS", icon: vuejs },
];

const experiences = [
   {
    title: "Freelance Full Stack Developer",
    company_name: "Chhymall",
    icon: "https://www.chhymall.eocambo.com/storage/app/public/business/2022-07-06-62c53927f10b6.png",
    iconBg: "#383E56",
    date: "Mar 2022 - Present",
    points: [
      "Contributed to the development and maintenance of Chhymall’s e-commerce platform and internal software systems using Laravel, MySQL, and Flutter.",
      "Enhanced Chhymall's e-commerce platform by implementing new features and optimizing performance, resulting in a 5% increase in user engagement within 2 months.",
      "Built new features, developed a mobile app, and ensured smooth system performance across web and mobile platforms.",
    ],
  },
    {
    title: "Web Developer",
    company_name: "L.Sky Cambo",
    icon: "https://images.khmer24.co/25-03-05/web-developer-back-end--953261174116336426007635-b.jpg",
    iconBg: "#383E56",
    date: "Dec 2024 - Apr 2025",
    points: [
      "Developed and deployed a fully responsive hotel website (LSP Hotel) within 3 months using HTML, CSS, JavaScript, WordPress, and MySQL, enhancing user engagement through dynamic content integration and a user-friendly interface",
      "Developed a cross-platform Point of Sale (POS) system for a coffee business—available on web, mobile, and desktop—that improved stock management efficiency by 60% within 3 months and enhanced user experience across all devices.",
    ],
  },
  {
    
    title: "Team Leader & Developer | LearwithKru Project",
    company_name: "SabaiCode",
    icon: Sabiacodedesign,
    iconBg: "#383E56",
    date: "nov 2023 - April 2024",
    points: [
      "Led a team to develop a scalable web app connecting students with tutors.",
      "Developed RESTful APIs with Node.js and Express.js, enhancing frontend-backend communication, which improved system integration and reduced data sync latency by 25% within 6 months.",
      "Integrated Prometheus and Grafana for real-time monitoring, improving system performance visibility and enabling proactive issue resolution within 3 months.",
      "Led the containerization of applications using Docker and orchestrated deployments with Kubernetes, achieving 30% faster deployment times within 4 months.",
      "Optimized MongoDB queries, enhancing data retrieval speed by 20% within 3 months, leading to improved application performance and user satisfaction.",
      "Provisioned cloud infrastructure using Terraform, enhancing scalability and reliability, which supported a 20% increase in application uptime within 4 months.",
      "Deployed applications on AWS, achieving 90% uptime and enhancing scalability within 4 months by implementing auto-scaling.",
      "Fostered a culture of continuous code quality improvement, implementing secure coding practices that reduced vulnerabilities by 15% and increased team efficiency.",
      "Authored comprehensive API and infrastructure documentation, cutting onboarding time for new developers by 40% and promoting knowledge sharing."
    ],
  },
  {
    title: "barcode Inventory System",
    company_name: "Beltie university",
    icon: Beltie,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Now",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Developed a barcode inventory system with user roles (Admin, Customer, Employee).",
      "Built using Laravel (backend) and MySQL (database).",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrated barcode scanning for real-time inventory updates.",
    
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "To develop the next generation of Cambodian leaders in technology and innovation.",
    name: "sabai code",
    designation: "VISION",
    company: "sabaicode",
    image: "https://sabaicode.com/sabaicode.jpg",
  },
  {
    testimonial:
      "To empower every Cambodian child with powerful technology skills",
    name: "sabai code",
    designation: "MISSION",
    company: "sabaicode",
    image: "https://sabaicode.com/sabaicode.jpg",
  },
  {
    testimonial:
      "After Thorn optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "sabai code",
    designation: "co-founder",
    company: "sabaicode",
    image: "https://sabaicode.com/sabaicode.jpg",
  },
];

const projects = [
    {
    name: "Warehouse Inventory Management System",
    description:
      "Developed a web-based Warehouse Inventory Management System using Django REST API and ReactJS to streamline product tracking, stock transactions, and warehouse organization.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mySql",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: "https://spherewms.com/wp-content/uploads/2024/01/SPH-Whse-Inv-Mgmt-Blog-shutterstock_1930996376-1.webp",
    source_code_link: "https://github.com/thon1525/wims.git",
  },
  {
    name: "Learwithkru",
    description:
      "LearnWithKru and VerifyTutor are platforms connecting students with tutors for personalized learning. LearnWithKru emphasizes diverse subjects, flexible learning options, and transparent pricing, while VerifyTutor focuses on verified tutor credentials, performance tracking, and professional standards. Both aim to ensure trust, quality education, and flexibility for students and tutors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: learnwithkru,
    source_code_link: "https://github.com/Vath-Song99/learnwithkru-monorepo.git/",
  },
  {
    name: "Barcode Inventory System",
    description: "Designed and developed a barcode-based inventory management system using Laravel and MySQL, featuring efficient product tracking, robust user roles and permissions (Admin, Customer, Employee), a comprehensive product catalog, and real-time barcode scanning for streamlined inventory operations.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: barcodesnanner,
    source_code_link: "https://github.com/thon1525/barcode-inventory-system.git",
  },
  {
    name: "LSP Hotel",
    description:
      "Develop a web-based hotel management system for LSP Hotel to enhance guest experience and streamline operations. The system will include features for managing room reservations, guest check-ins/check-outs, and staff operations while providing real-time data on hotel activities.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: lsp,
    source_code_link: "http://149.28.141.130:8118/",
  },
  {
    name: "Farm Sheep",
    description:
      "Develop a web-based hotel management system for LSP Hotel to enhance guest experience and streamline operations. The system will include features for managing room reservations, guest check-ins/check-outs, and staff operations while providing real-time data on hotel activities.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sheep,
    source_code_link: "https://github.com/thon1525/Website-Sheep.git",
  },
  {
    name: "Coffee System",
    description:
      "Develop a web-based hotel management system for LSP Hotel to enhance guest experience and streamline operations. The system will include features for managing room reservations, guest check-ins/check-outs, and staff operations while providing real-time data on hotel activities.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "pos",
        color: "green-text-gradient",
      },
      {
        name: "Api",
        color: "pink-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
    ],
    image: coffee_windowpos,
    source_code_link: "https://github.com/thon1525/coffee-system.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
