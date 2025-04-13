import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievement", href: "#award" },
  { label: "Journey", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Sakshi Tak",
  info: "Full-stack Web developer and UI/UX Designer.",
};

export const ABOUT = {
  text1: "I build dynamic, responsive websites that merge creativity with functionality",
  text2: "Hello, I am SAKSHI TAK a full-stack web developer and UI/UX designer. passionate about guiding others and exploring cutting-edge technologies. I've created multiple web development projects showcasing my skills across the stack. Currently, I'm expanding my knowledge in AI and ML to enhance my web development capabilities - particularly in integrating machine learning modules to make websites more intelligent, real-time, and dynamic. I love the challenge of blending design aesthetics with technical implementation to create seamless user experiences."
};

export const PROJECTS = [
  {
    title: "Pet Adoption Website",
    subtitle: "A full-stack Pet Adoption Website built with HTML,CSS,JS,PHP,MySQL.",
    image: image1,
    github: "https://github.com/Sakshitak19/Pet-Adoption-Website",
  },
  {
    title: "Eye Infopedia Website",
    subtitle: "A Eye Infopedia Website developed using HTML,CSS,JS,Node.js,MySQL.",
    image: image2,
    github: "https://github.com/Sakshitak19/EYE-INFOPEDIA",
  },
  {
    title: "Rock Paper Scissors Game",
    subtitle: "Rock Paper Scissors Game built with HTML,CSS,JS.",
    image: image3,
    github: "https://github.com/Sakshitak19/Rock-Paper-Scissors",
  },
  {
    title: "Secure Password Maker",
    subtitle: "A Secure Password Maker website designed with React.js, Tailwind CSS.",
    image: image4,
    github: "https://github.com/Sakshitak19/Secure-Password-Maker",
  },
  {
    title: "Background Color Changer",
    subtitle: "A Background color Changer website built with React.js and Tailwind CSS.",
    image: image5,
    github: "https://github.com/Sakshitak19/BGChanger",
  },
  {
    title: "Counter Website",
    subtitle: "A Counter Website developed with React.js, Tailwind CSS.",
    image: image6,
    github: "https://github.com/Sakshitak19/React-Counter-Website",
  },
  {
    title: "Currency Converter",
    subtitle: "A Currency Converter created using HTML, CSS, JS.",
    image: image7,
    github: "https://github.com/Sakshitak19/currency-converter",
  },
  {
    title: "Personal Portfolio",
    subtitle: "A Personal Portfolio developed with React.js, Tailwind CSS and Framer motion",
    image: image8,
    github: "https://github.com/Sakshitak19/Portfolio",
  },
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React.js",
    experience: "1+ years",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-blue-400" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <SiJavascript className="text-4xl lg:text-6xl text-yellow-400" />, 
    name: "JavaScript",  // Fixed capitalization
    experience: "1+ years",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-blue-600" />,
    name: "SQL",
    experience: "1+ year"
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <SiPhp className="text-4xl lg:text-6xl text-purple-500" />,
    name: "PHP",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "Microsoft Learn Student Ambassador",
  award: "Beta MLSA - 2025",
  description:
    "As a Beta Microsoft Learn Student Ambassador, I organized and led multiple online workshops on GitHub and Microsoft Azure. Mentored 40+ participants through hands-on coding sessions, helping them gain practical skills in these technologies. Created comprehensive workshop materials and follow-up resources to support continuous learning.",
};

export const TESTIMONIALS = [
  {
    name: "Frontend Foundations",
    title: "HTML, CSS, JavaScript",
    quote: "Started my development journey by mastering the core web technologies - HTML for structure, CSS for styling, and JavaScript for interactivity. Built several static websites and small applications to solidify my understanding.",
    image: user1,
  },
  {
    name: "Backend Development",
    title: "PHP, Node.js, MySQL",
    quote: "Expanded my skills to server-side programming with PHP and Node.js, along with database management using MySQL. Learned to create dynamic, data-driven web applications and understand full-stack workflows.",
    image: user2,
  },
  {
    name: "Modern Frontend",
    title: "React.js, Tailwind CSS",
    quote: "Upgraded my frontend skills with React.js for building component-based UIs and Tailwind CSS for efficient styling. Developed multiple projects to practice state management and responsive design principles.",
    image: user3,
  },
  {
    name: "Current Focus",
    title: "AI & Machine Learning",
    quote: "Currently expanding my knowledge into artificial intelligence and machine learning. Exploring Python, TensorFlow, and neural networks to understand how to integrate AI capabilities into web applications.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61568501881440",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  
  {
    href: "https://www.instagram.com/sakshitak21?igsh=amE1bzM5c291czg4",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  
  {
    href: "https://github.com/Sakshitak19",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://in.linkedin.com/in/sakshi-j-tak-199a52258",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
