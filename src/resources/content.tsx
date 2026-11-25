
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Mansi",
  lastName: "Somani",
  name: "Mansi Somani",
  role: "Solution Engineering",
  avatar: "/images/avatar.jpg",
  email: "",
  location: "America/Los_Angeles",
  languages: ["English", "Hindi"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/msomani25",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mansisomani/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: "Solution Engineering Portfolio",
  headline: <>Connecting technology to business value</>,
  featured: {
    display: false,
    title: <>Featured Demo</>,
    href: "/work",
  },
  subline: (
    <>
      I'm Mansi, a technology professional with 4+ years of experience,
      including Salesforce and Intuit, bringing together technical expertise,
      customer engagement, and business-focused solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: "Solution Engineering | Seattle, WA",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "About Me",
    description: (
      <>
        I'm a Seattle-based technology professional with over four years
        of experience in enterprise software, customer engagement,
        technical demonstrations, and solution development.
        <br /><br />
        My experience at Salesforce and Intuit has involved understanding
        business needs, translating technical capabilities into practical
        solutions, and communicating value to customers and cross-functional
        stakeholders.
        <br /><br />
        I'm passionate about helping businesses solve meaningful challenges
        through technology, AI, and intelligent automation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Salesforce",
        timeframe: "2022 – 2023",
        role: "Software Engineer",
        achievements: [
          <>
            Developed a centralized log metrics solution supporting
            more than 30 engineering teams.
          </>,
          <>
            Led recurring technical demonstrations and stakeholder
            presentations to communicate solution capabilities and value.
          </>,
          <>
            Collaborated with cross-functional teams to understand
            requirements and improve operational visibility.
          </>,
        ],
        images: [],
      },
      {
        company: "Intuit",
        timeframe: "2020 – 2021",
        role: "Software Engineer | Intern",
        achievements: [
          <>
            Contributed to automated payroll solutions for QuickBooks
            small business customers.
          </>,
          <>
            Engaged with customers to understand business needs and
            product challenges.
          </>,
          <>
            Integrated Qualtrics surveys into QuickBooks Payroll,
            increasing survey engagement by 25%.
          </>,
        ],
        images: [],
      },
      {
        company: "Teradata",
        timeframe: "2019",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Developed a Kubernetes-based proof of concept that reduced
            root cause analysis time by 50%.
          </>,
          <>
            Delivered technical training and knowledge-sharing sessions
            to more than 15 team members.
          </>,
        ],
        images: [],
      },
      {
        company: "GEP",
        timeframe: "2016 – 2017",
        role: "Software Engineer",
        achievements: [
          <>
            Developed enterprise procurement solutions and improved
            authentication performance by 15%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Rochester Institute of Technology",
        description: <>Master of Science in Computer Science</>,
      },
      {
        name: "University of Mumbai",
        description: <>Bachelor of Engineering in Information Technology</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Core Competencies",
    skills: [
      {
        title: "Solution Engineering",
        description: <>
          Customer discovery, technical demonstrations, proof of concepts,
          stakeholder engagement, and business value communication.
        </>,
        tags: [],
        images: [],
      },
      {
        title: "AI & Workflow Automation",
        description: <>
          Salesforce Agentforce, agentic AI, intelligent workflow automation,
          LLM-powered solutions, and human-in-the-loop processes.
        </>,
        tags: [],
        images: [],
      },
      {
        title: "Technical Expertise",
        description: <>
          REST APIs, enterprise integrations, Java, Python, JavaScript,
          SQL, cloud technologies, Docker, and Kubernetes.
        </>,
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: "",
};

const work: Work = {
  path: "/work",
  label: "Solution Demos",
  title: "Solution Engineering Demos",
  description: "Business-focused technical demonstrations showcasing AI, automation, and enterprise solutions.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery",
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
