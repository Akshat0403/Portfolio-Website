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
import LogoJava from "/public/images/logos/Java.svg";
import LogoFirebase from "/public/images/logos/Firebase.svg";
import LogoSQL from "/public/images/logos/SQL.svg";
import LogoXebia from "/public/images/logos/logo-xebia.svg";
import LogoXebiaDark from "/public/images/logos/logo-xebia-dark.svg";

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
    url: "mailto:saxena.akshat0405@gmail.com",
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
    url: "https://www.chartjs.org/",
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
    label: "Java",
    logo: LogoJava,
    url: "https://www.java.com/",
  },
  {
    label: "Firebase",
    logo: LogoFirebase,
    url: "https://firebase.google.com/",
  },
  {
    label: "SQL",
    logo: LogoSQL,
    url: "https://www.mysql.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoXebia,
    darkModeLogo: LogoXebiaDark,
    logoAlt: "Xebia IT Architects logo",
    position: "Backend Development Intern",
    startDate: new Date(2026, 5),
    endDate: new Date(2026, 7),
    currentlyWorkHere: false,
    summary: [
      "Completed an 8-week intensive internship focused on backend development at Xebia IT Architects under professional engineering mentorship.",
      "Contributed to architecting and developing robust backend systems, APIs, and scalable data workflows.",
      "Demonstrated sincere effort, active team participation, and commitment to engineering best practices, receiving a Certificate of Appreciation.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Auto Drive Full Stack",
    description:
      "AutoDrive is a full-stack web application designed to simplify the used car buying experience using modern web technologies and machine learning. ",
    url: "https://github.com/Akshat0403/AutoDriveFrontend",
    previewImage: CodeCraft,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwindcss",
      "Convex",
      "Clerk Auth",
      "Lemon Squeezy",
      "Vercel",
    ],
  },
  {
    name: "Code Craft",
    description:
      "A real-time collaborative code editor that lets developers write, share, and execute code together in the browser. Features syntax highlighting, multi-user cursors, authentication, and a freemium model powered by a payment gateway for pro subscriptions.",
    url: "https://github.com/Akshat0403/CodeCraft",
    previewImage: CodeCraft,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwindcss",
      "Convex",
      "Clerk Auth",
      "Lemon Squeezy",
      "Vercel",
    ],
  },
  {
    name: "Fitness Application",
    description:
      "A full-stack fitness tracker that helps users discover exercises by muscle group, track their workout history, and monitor progress over time. Integrates with the ExerciseDB API for a comprehensive library of 1300+ exercises with animations and detailed instructions.",
    url: "https://github.com/Akshat0403/Full-Stack-Exercise-App",
    previewImage: ExerciseApp,
    technologies: ["React", "JavaScript", "Tailwindcss"],
  },
  {
    name: "Movie Details Application",
    description:
      "A full-stack movie discovery platform where users can browse trending films, search by genre or title, view detailed info (cast, ratings, trailers), and maintain a personal watchlist — all powered by the TMDB API with a clean, cinematic UI.",
    url: "https://github.com/Akshat0403/Full-Stack-Movie-App",
    previewImage: MovieApp,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
    ],
  },
  {
    name: "Food Recipe Application",
    description:
      "A delightful recipe discovery app that lets food lovers search, filter, and save recipes from a rich API library. Features step-by-step cooking instructions, ingredient lists, nutritional info, and a favorites system for meal planning.",
    url: "https://github.com/Akshat0403/Full-Stack-Food-Recipe-App",
    previewImage: RecipeApp,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [];
