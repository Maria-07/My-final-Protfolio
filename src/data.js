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
    description: "Email me at contact@shanjidamaria.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Dhaka, Bangladesh",
    description: "Serving clients worldwide",
  },
];

//blogs

export const blogs = [
  {
    question: "How will you improve the performance of a React Application?",
    answer: `Although React allows web applications to swiftly refresh their
                user interfaces (UIs), this does not guarantee that your medium
                or large React application will run well. Its performance will
                be determined by how you use React when creating it, as well as
                your grasp of how React works and how components progress
                through their lifecycle phases. React gives your web project a
                lot of performance boosts, and you can get them using a variety
                of strategies, features, and tools.
                <br />
                <br /> There are a few ways to improve the performance of a
                React application:
                <br /> 1.Before deploying, use a Production build.
                <br /> 2.Use React to avoid adding extra nodes to the
                DOM.Fragment
                <br />
                3.Data Structures That Aren't Modifiable
                <br /> 4.Stay away from anonymous functions.
                <br /> 5.Lazy loading reduces the time it takes for an app to
                load.`,
  },
  {
    question:
      "What are the different ways to manage a state in a React application?",
    answer: `Ways to
                manage a State :
                <br /> State Management at a Global Level In most circumstances,
                a state management library isn't required. You should only use
                an external library to manage it in larger applications that
                deal with complicated states. Data Fetching Libraries are a
                great way to get data. Pulling data from external APIs appears
                to be a simple problem, but it quickly becomes hard when you
                need to cache the data in memory (to save API calls), update it,
                and access it from multiple locations. For Complex State, use
                useReducer. When dealing with sophisticated state activity that
                may involve big objects, the useState hook may not be enough.
                The useReducer hook is a useful React hook for dealing with
                sophisticated state management without the need for third-party
                dependencies.`,
  },
  {
    question: "How does prototypical inheritance work?",
    answer: `In
                JavaScript, inheritance refers to the concept of one object's
                methods/properties being accessible to another object. This is
                accomplished by using the '[[Prototype]]' mechanism to relate
                the second item to the first. Even though the method/property
                does not exist on the second object, you have the ability to use
                it since the second object "delegates" to the first object,
                which does have the requested property/method.`,
  },
  {
    question:
      " You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
    answer: ` To find
                a product of elements of an array by it's name , 1st we can set
                a state then make a query to search the product by it's name
                then get all data from API and set it on the state`,
  },
  {
    question: "What is a unit test? Why should write unit tests?",
    answer: `UNIT
                TESTING is a type of software testing in which individual
                software units or components are examined. The goal is to make
                sure that each piece of software code functions correctly.
                During the development (code) phase of an application,
                developers perform unit testing. Unit tests are used to isolate
                and verify the correctness of a piece of code. A unit can be
                defined as a single function, method, procedure, module, or
                object.`,
  },
];
