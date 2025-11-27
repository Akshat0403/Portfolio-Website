import { Github, Twitter, Figma, Linkedin, Mail } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoPython from "/public/images/logos/PythonLogo.svg";
import LogoDjango from "/public/images/logos/Django.svg";
import LogoFlask from "/public/images/logos/Flask.svg";
import LogoJava from "/public/images/logos/Java.svg";
import LogoFirebase from "/public/images/logos/Firebase.svg";
import LogoSQL from "/public/images/logos/SQL.svg";
import LogoDSA from "/public/images/logos/DSA.svg";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";

import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";
import SpaceCraft from "/public/images/SpaceCraft.png";
import CodeCraft from "/public/images/CodeCraft.png";
import ExerciseApp from "/public/images/ExerciseApp.jpg";
import MovieApp from "/public/images/MovieApp.jpg";
import RecipeApp from "/public/images/FoodRecipeApp.jpg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/Akshat0403",
  GITHUB_REPO: "https://github.com/Akshat0403",
  TWITTER: "",
  FIGMA: "",
  FIGMA_FILE: "",
};

export const NAV_LINKS = [
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/Akshat0403",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/akshat-saxena-5b769230a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    icon: Mail,
    url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKFhJwlxmDFnzpczhLQkHlmpCLRkVhMpMgTnxPqmXRDBqvxrMKnXKCGrCsBnRXdcvWJdV",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Chart.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Python",
    logo: LogoPython,
    url: "https://git-scm.com/",
  },
  {
    label: "Java",
    logo: LogoJava,
    url: "https://git-scm.com/",
  },
  {
    label: "Firebase",
    logo: LogoFirebase,
    url: "https://git-scm.com/",
  },
  {
    label: "SQL",
    logo: LogoSQL,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Space Craft",
    description:
      "Developed an AI-powered interior visualization platform that transforms empty room images into fully furnished, realistic interiors based on user prompts. Implemented advanced image-to-image generation workflows, prompt processing, and a modern, responsive UI for seamless room customization. Designed the system to deliver high-quality, photorealistic renders with efficient API integration and smooth user experience across devices. \n Under Development Phase",
    url: "https://github.com/Akshat0403/AI-Staging-App-Frontend",
    previewImage: SpaceCraft,
    technologies: [
      "React",
      "Vite",
      "Node JS",
      "Express JS",
      "Supabase",
      "Clerk Authentication",
      "Replicate AI",
      "Vercel for Frontend Hosting",
      "Render for Backend Hosting",
    ],
  },
  {
    name: "Code Craft",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://github.com/Akshat0403/Collaborative-Code-Editor",
    previewImage: CodeCraft,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Convex",
      "Clerk Authentication",
      "Lemon Squeezy Payment Gateway",
      "Vercel",
    ],
  },
  // {
  //   name: "Brain Bot",
  //   description:
  //     "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
  //   url: "https://github.com/Akshat0403/BrainBot",
  //   previewImage: ProjectWingie,
  //   technologies: [
  //     "React",
  //     "Java Script",
  //     "Node.js",
  //     "Express.js",
  //     "PostgreSQL",
  //     "Styled Components",
  //     "Redux",
  //     "Firebase",
  //   ],
  // },
  // {
  //   name: "Quick Cart",
  //   description:
  //     "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
  //   url: "https://github.com/Akshat0403/QuickCart",
  //   previewImage: ProjectFiskil,
  //   technologies: [
  //     "React",
  //     "Next.js",
  //     "Typescript",
  //     "Tailwindcss",
  //     "Material UI",
  //     "Redux Toolkit",
  //     "React Query",
  //     "Express.js",
  //     "PostgreSQL",
  //     "Firebase",
  //   ],
  // },
  // {
  //   name: "AI Powered Resume Analyzer",
  //   description:
  //     "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
  //   url: "https://github.com/Akshat0403/AI-Powered-Resume-Analyzer",
  //   previewImage: ProjectPepehousing,
  //   technologies: [
  //     "React",
  //     "Next.js",
  //     "Typescript",
  //     "Tailwindcss",
  //     "Redux Toolkit",
  //     "React Query",
  //     "Storybook",
  //   ],
  // },
  // {
  //   name: "Realtime Chat Application",
  //   description:
  //     "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
  //   url: "https://github.com/Akshat0403/Realtime-Chat-Application",
  //   previewImage: ProjectPepehousing,
  //   technologies: [
  //     "React",
  //     "Next.js",
  //     "Typescript",
  //     "Tailwindcss",
  //     "Redux Toolkit",
  //     "React Query",
  //     "Storybook",
  //   ],
  // },
  {
    name: "Fitness Application",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://github.com/Akshat0403/Full-Stack-Exercise-App",
    previewImage: ExerciseApp,
    technologies: ["React", "JavaScript", "Tailwindcss"],
  },
  {
    name: "Movie Details Application",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://github.com/Akshat0403/Full-Stack-Movie-App",
    previewImage: MovieApp,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
  {
    name: "Food Recipe Application",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://github.com/Akshat0403/Full-Stack-Food-Recipe-App",
    previewImage: RecipeApp,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [];
