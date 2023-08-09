import { FaGithub, FaLinkedin, FaInstagram, FaAndroid } from "react-icons/fa"
import { SiKotlin, SiJavascript, SiReact, SiFigma, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si"

const contacts = [
    {Icon: FaGithub, link: "https://github.com/rizfadh"},
    {Icon: FaLinkedin, link: "https://www.linkedin.com/in/rizfadh"},
    {Icon: FaInstagram, link: "https://www.instagram.com/rzy_fdhlh"},
]

const skills = [
    {
        title: "Android",
        Icon: FaAndroid
    },
    {
        title: "Kotlin",
        Icon: SiKotlin
    },
    {
        title: "Javascript",
        Icon: SiJavascript
    },
    {
        title: "ReactJS",
        Icon: SiReact
    },
    {
        title: "Figma",
        Icon: SiFigma
    },
    {
        title: "Illustrator",
        Icon: SiAdobeillustrator
    },
    {
        title: "Photoshop",
        Icon: SiAdobephotoshop
    },
]

export { contacts, skills }