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
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  vuejs,
  figma,
  docker,
  coffee_windowpos,
  Sabiacodedesign,
  Beltie,
  learnwithkru,
  barcodesnanner,
  lsp,
  js,
  sheep,
  frontEnd,
  api,
  django,
  laravel,
  php,
  windows,
  python,
  Sharp,
  dart,
  java,
  NET_Core_Logo,
  mysql,
  Postgresql_elephant,
  nestjs,
  wordpress,
  bootstrap,
  jquery,
  asw
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
  // Programming Languages
  { category: "Languages", name: "JavaScript", icon: javascript },
  { category: "Languages", name: "TypeScript", icon: typescript },
  { category: "Languages", name: "Python", icon: python },
  { category: "Languages", name: "Dart", icon: dart },
  { category: "Languages", name: "Java", icon: java },
  { category: "Languages", name: "PHP", icon: php },
  { category: "Languages", name: "C#", icon: Sharp },

  // Frontend Technologies
  { category: "Frontend", name: "HTML5", icon: html },
  { category: "Frontend", name: "CSS3", icon: css },
  { category: "Frontend", name: "React.js", icon: reactjs },
    { category: "Frontend", name: "Next.js", icon: nextjs },

    { category: "Frontend", name: "Vue.js", icon: vuejs },
      { category: "Frontend", name: "Jquery", icon: jquery },

  { category: "Frontend", name: "Tailwind CSS", icon: tailwind },
  {category: "Frontend", name: "Bootstrap",icon: bootstrap},

  // Backend & Frameworks
  { category: "Backend", name: "Node.js", icon: nodejs },
  {category: "Backend", name:  "Nest.js",icon: nestjs},
  { category: "Backend", name: "Laravel", icon: laravel },
  {category: "Backend", name: "wordpress", icon: wordpress},
    { category: "Backend", name: "ASP", icon:  NET_Core_Logo},
  { category: "Backend", name: "Django", icon: django },


  // Databases
  { category: "Database", name: "MongoDB", icon: mongodb },
    { category: "Database", name: "Mysql", icon: mysql },
    {category: "Database", name: "PostgreSql", icon: Postgresql_elephant},


  // Tools & Platforms
  { category: "Tools", name: "Git", icon: git },
  { category: "Tools", name: "Docker", icon: docker },
  {category: "Tools",name: "Aws",icon : asw},
  { category: "Tools", name: "Figma", icon: figma },
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
];

const testimonials = [
  {
  testimonial:
    "We create fast, high-quality websites tailored to your brand and business goals.",
  name: "L.Sky Cambo",
  designation: "VISION",
  company: "L.SKY CAMBO CO.,LTD",
  image: "https://images.khmer24.co/25-03-05/web-developer-back-end--953261174116336426007635-b.jpg",
  },
  {
    testimonial:
      "Thorn is a creative web developer who delivers high-quality designs and smart back-end solutions",
    name: "BELTEI International University",
    designation: "MISSION",
    company: "BELTEI GROUP",
    image: "https://www.beltei.edu.kh/asset/img/university/campus/beltei_international_university_in_cambodia.png",
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
    source_code_link: "https://coffee-system-appcoffee-system-app.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
