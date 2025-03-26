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
  // nextjs,
  // vuejs,
  figma,
  docker,
  coffee_windowpos,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Sabiacodedesign,
  Beltie,
  learnwithkru,
  barcodesnanner,
  lsp,
  sheep,
  api,
  windows
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
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
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Next JS",
  //   icon: nextjs,
  // },
  // {
  //   name: "Vue JS",
  //   icon: vuejs,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Developer & Teamleader at Learwithkru ",
    company_name: "SabaiCode",
    icon: Sabiacodedesign,
    iconBg: "#383E56",
    date: "nov 2023 - April 2024",
    points: [
      "Led a team to develop a scalable web app connecting students with tutors.",
      "Built RESTful APIs with Node.js and Express.js.",
      "Implemented RabbitMQ and monitoring tools (Prometheus, Grafana) for performance tracking.",
      "Used Docker and Kubernetes for containerization and deployment.",
      "Managed MongoDB for efficient data handling.",
      "Established CI/CD pipelines with GitHub Actions and provisioned infrastructure with Terraform.",
      "Deployed the app on AWS for scalability and reliability.",
      "Ensured code quality through reviews, debugging, and testing.",
      "Created comprehensive documentation for APIs and system architecture."
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
        name: "tailwind",
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
    source_code_link: "https://website-sheep.netlify.app/",
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
