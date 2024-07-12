import { FaGithub, FaLinkedin, FaInstagram, FaAndroid } from "react-icons/fa"
import {
  SiKotlin,
  SiJavascript,
  SiReact,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiShadcnui,
  SiBootstrap,
} from "react-icons/si"

const contacts = [
  { Icon: FaGithub, link: "https://github.com/rizfadh" },
  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/rizfadh" },
  { Icon: FaInstagram, link: "https://www.instagram.com/rzy_fdhlh" },
]

const skills = [
  {
    title: "NextJS",
    Icon: SiNextdotjs,
  },
  {
    title: "TypeScript",
    Icon: SiTypescript,
  },
  {
    title: "Prisma",
    Icon: SiPrisma,
  },
  {
    title: "Android",
    Icon: FaAndroid,
  },
  {
    title: "Kotlin",
    Icon: SiKotlin,
  },
  {
    title: "Javascript",
    Icon: SiJavascript,
  },
  {
    title: "ReactJS",
    Icon: SiReact,
  },
  {
    title: "Firebase",
    Icon: SiFirebase,
  },
  {
    title: "TailwindCSS",
    Icon: SiTailwindcss,
  },
  {
    title: "ShadcnUI",
    Icon: SiShadcnui,
  },
  {
    title: "Bootstrap",
    Icon: SiBootstrap,
  },
  {
    title: "Figma",
    Icon: SiFigma,
  },
  {
    title: "Illustrator",
    Icon: SiAdobeillustrator,
  },
  {
    title: "Photoshop",
    Icon: SiAdobephotoshop,
  },
]

export { contacts, skills }
