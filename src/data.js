//  icons
import {
  FiLinkedin,
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiChrome,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp.png";
import Project2 from "./assets/img/projects/p2.webp.png";
import Project3 from "./assets/img/projects/p3.webp.png";
import Project4 from "./assets/img/projects/p4.webp.png";
import Project5 from "./assets/img/projects/p5.webp.png";
import Project6 from "./assets/img/projects/p6.webp.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.png";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.png";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  // {
  //   icon: <FiYoutube />,
  //   href: '',
  // },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/shanjidarahmanmaria/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/Maria-07",
  },
  {
    icon: <FiMail />,
    href: "mailto:maria.shanjida07@gmail.com",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Axel Motors",
    category: "Full Stack",
    link: "https://alex-motors.web.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "Spicy Velvet",
    category: "Full Stack",
    link: "https://spicy-velvet.web.app/",
  },
  {
    id: "3",
    image: Project3,
    name: "TouchIt",
    category: "web development",
    link: "https://touchit-tech.netlify.app/",
  },
  {
    id: "4",
    image: Project4,
    name: "Emma Watson",
    category: "web development",
    link: "https://emma-watson-16f05.web.app/",
  },
  {
    id: "5",
    image: Project5,
    name: "Bloom Beauty",
    category: "web development",
    link: "https://bloom-beauty.netlify.app/",
  },
  {
    id: "6",
    image: Project6,
    name: "Eden Spring Event",
    category: "Web Design",
    link: "https://eden-spring-event.netlify.app/",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Full Stack",
  },
  {
    name: "web development",
  },
  {
    name: "Web Design",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
  },
  {
    icon: <FiChrome />,
    name: "Web Development",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications.",
  },
  {
    icon: <FiPenTool />,
    name: "React",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
  },
  {
    icon: <FiTag />,
    name: "Node",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "“When you fulfill your dream one day, you will become other's dream”",
    authorName: "Suga",
    authorPosition: "rapper, songwriter and record producer, BTS",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "“Everyone has a million dollar idea but not a million seconds to make it a reality. That’s why all these million dollar ideas fail. Only a very few of them becomes successful.”",
    authorName: "Jhankar Mahbub",
    authorPosition: "Senior web developer, CEO at Programming Hero",
  },
  {
    authorImg: TestiImage3,
    authorText: "“There are no shortcuts to achieve your goal !”",
    authorName: "Naruto Uzumaki",
    authorPosition: "Hokage of Konoha-Leaf village",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at maria.shanjida07@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Dhaka, Bangladesh",
    description: "Serving clients worldwide",
  },
];
