import {
  AWSIcon,
  Css,
  Django,
  DjangoRest,
  Git,
  GithubIcon,
  JavaScript,
  Motion,
  Nextjs,
  PostgreSQL,
  Python,
  ReactIcon,
  Redis,
  SQLite,
  TailwindCSS,
  TypeScript,
  Vercel,
} from "./svg";

export const NavLinks = [
  { label: "About Me" },
  { label: "Projects" },
  { label: "Skills & Tools" },
];

export const nextJsProjectsList = [
  {
    name: "Inqube",
    src: "/inqube.png",
    link: "https://inqube.vercel.app/",
    source: "https://github.com/ashiques-dev/inqube",
    used: ["Next.Js", "Tailwind Css"],
    description: `Inqube is a Next.js-based blog platform designed to deliver insightful and engaging content across various topics. From technology and business to lifestyle and personal development, Inqube provides readers with valuable information, expert opinions, and fresh perspectives. Whether you're looking for deep analysis or quick reads, Inqube is your go-to destination for knowledge and inspiration.`,
  },
  {
    name: "Arabian Access",
    src: "/arabian-access.png",
    link: "https://arabian-access.vercel.app/",    
    source: "https://github.com/ashiques-dev/arabian-access",
    used: ["Next.Js", "Tailwind Css", "Motion"],
    description: `Arabian Access is a Next.js project designed for an Arabian Access Management Solution, offering a variety of services including digital marketing, accounting, signage, cleaning, office interior redesigning, and more.`,
  },
  {
    name: "VitaBite",
    src: "/vitabite.png",
    link: "https://vitabite.vercel.app/",
    source: "https://github.com/ashiques-dev/vitabite",
    used: ["Next.Js", "Tailwind Css"],
    description: `Vitabite is a Next.js-powered nutrition website dedicated to promoting health and wellness through expert guidance and quality products. Offering insightful articles, personalized diet plans, and a curated selection of supplements, Vitabite helps users make informed choices for a healthier lifestyle. Whether you're looking to boost your energy, improve your diet, or explore the latest in nutrition science, Vitabite is your trusted source for all things health and wellness.`,
  },
];

export const DjangoProjectsList = [
  {
    name: "Inventory Management System",
    source: "https://github.com/ashiques-dev/inventory-management-system",
    used: [
      "Django",
      "Django Rest Framework",
      "SQLite",
      "Redis",
      "Celery",
      "Logging",
      "unittest",
    ],
    description: `An inventory management system built with Django. Users can add/edit products, add/edit categories, and track orders.`,
  },
  {
    name: "User profile CRUD",
    source: "https://github.com/ashiques-dev/user-profile-crud-backend",
    used: ["Django", "Django Rest Framework", "SQLite", "Redis", "Celery"],
    description: `A Django authentication system featuring email-based signup, OTP verification, and secure password management. Users can manage their profile, including updating personal information and profile pictures.`,
  },

  {
    name: "Student Management System",
    source: "https://github.com/ashiques-dev/students-progress",
    used: ["Django", "SQLite", "TailwindCSS"],
    description: `A comprehensive school management system built with Django. Teachers can manage multiple schools, add/edit student records, and track academic performance. Features include school administration, student enrollment, attendance tracking, and progress monitoring.`,
  },
  {
    name: "Newx",
    used: ["Django", "Django Rest Framework", "SQLite", "Celery", "Redis"],
    description: `Online booking platform enabling property listings, secure
authentication, Stripe payment integration, map functionality, and
real-time availability updates.`,
  },
  {
    name: "Caviar (E-Commerce",
    used: ["Django", "PostgreSQL", "Bootstrap"],
    description: `Premium e-commerce platform featuring advanced authentication,
secure payment options (RazorPay, COD), wishlists, and a seamless user experience.`,
  },
];

export const myDevelopmentJourney = [
  {
    year: "2019",
    description: `Began my journey with
            HTML, CSS, and JavaScript, building static web pages and
            experimenting with front-end design.`,
  },
  {
    year: "2020",
    description: `Expanded my skill set by
            learning Python, which opened doors to backend development and
            problem-solving with automation`,
  },
  {
    year: "2021 - 2022",
    description: `Took a detour into
            management, where I developed leadership, communication, and
            organizational skills that now enhance my ability to work
            effectively within teams.`,
  },
  {
    year: "2023",
    description: `Reignited my passion for
            development, diving into Django for backend development and React
            for interactive UIs. I also explored Next.js to optimize performance
            and experimented with advanced UI animations for enhanced user
            experience.`,
  },
  {
    year: "2024 - Present",
    description: `Actively developing high-performance
            web applications, collaborating with teams, and continuously pushing
            the boundaries of modern web technologies.`,
  },
];

export const forntendList = [
  { icon: <TypeScript />, name: "TypeScript" },
  { icon: <JavaScript />, name: "JavaScript" },
  { icon: <ReactIcon />, name: "React" },
  { icon: <Nextjs />, name: "Next" },
  { icon: <Motion />, name: "Motion" },
  { icon: <TailwindCSS />, name: "TailwindCSS" },
  { icon: <Css />, name: "CSS 3" },
];

export const backendList = [
  { icon: <Python />, name: "Python" },
  { icon: <Django />, name: "Django" },
  { icon: <DjangoRest />, name: "Django REST Framework" },
  { icon: <Redis />, name: "Redis" },
];

export const databaseList = [
  { icon: <PostgreSQL />, name: "PostgreSQL" },
  { icon: <SQLite />, name: "SQLite" },
];
export const toolsList = [
  { icon: <GithubIcon className="size-10"/>, name: "Github" },
  { icon: <Git />, name: "Git" },
  { icon: <Vercel />, name: "Vercel" },
  { icon: <AWSIcon />, name: "AWS" },
];
