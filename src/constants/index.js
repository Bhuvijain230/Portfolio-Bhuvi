//import './index.css';
import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = `Hi, I’m Bhuvi Jain, a final-year Computer Science student passionate about building software that solves real problems. I love exploring algorithms, full-stack development, and emerging technologies, and I’m on a mission to turn ideas into impactful solutions.`;

export const ABOUT_TEXT = `I’m Bhuvi Jain, a final-year Computer Science Engineering student with hands-on experience in full-stack projects. I enjoy solving challenging problems and continuously learning new technologies, from backend development to front-end design. Through my projects and internship experience, I’ve developed a strong foundation in software development, problem-solving, and teamwork. My goal is to create innovative solutions that make technology more accessible and meaningful for people.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - July 2025",
    role: "Backend Developer",
    company: "Kansoft Solutions Pvt. Ltd.",
    description: "During my internship at Kansoft Solutions, I worked as a backend developer on the Medicine Expiry & Wastage Monitoring System. My work involved developing and maintaining backend functionalities using Flask and SQL, building REST APIs to handle data operations, and implementing features to automate medicine expiry tracking and reduce pharmaceutical waste. Through this internship, I gained hands-on experience in backend development, database management, and problem-solving in real-world applications, while collaborating with the team to deliver efficient and reliable solutions.",
    technologies: ["Flask, Python, SQL, REST APIs, Git, Database Management"],
  },
  {
    year: "June 2024 - July 2024",
    role: "Trainee-Technology and Innovation Department",
    company: "Wonder Home Finance",
    description: `Gained hands-on experience with LeadSquared, a CRM and marketing automation platform, enhancing understanding of client relationship management and marketing strategies. Developed foundational skills in web development, including front-end and back-end technologies`,
    technologies: ["LeadSquared", "HTML", "CSS", "JS", "SQL",],
  },
 
];

export const PROJECTS = [
  {
  title: "MediBot",
  image: project5,
  description:
    "Created an AI-driven medical chatbot offering symptom analysis, medical assistance, and healthcare guidance. Integrated 6+ AI/ML APIs including Groq AI, LLaMA 3 Vision, OpenAI Whisper, ElevenLabs, and gTTS to enable speech, vision, and NLP capabilities. Built a web-based interface with Gradio supporting 3 input modes and used Git for version control.",
  technologies: ["Groq AI", "LLaMA 3 Vision", "OpenAI Whisper", "ElevenLabs", "gTTS", "Gradio", "Git"]
},
{
  title: "Academia Rise",
  image: project6,
  description:
    "Engineered a campus social networking platform to support 200+ peer connections and foster student collaboration. Introduced features such as personalized profiles, events, study groups, and real-time notifications. Focused on creating a strong sense of community by facilitating easy access to campus events, study opportunities, and mentorship connections.",
  technologies: ["React.js", "Express.js", "MongoDB", "Vercel"]
},
{
  title: "AutoRent Manager",
  image: project7,
  description:
    "Developed a console-based Java application for managing vehicle rentals, returns, and inventory using OOP principles. Implemented user login/registration, multiple vehicle categories, rental cost calculation, and rental history tracking. Designed a modular and scalable class structure for maintainable and efficient code architecture.",
  technologies: ["Java", "OOPs"]
},

  {
    title: "Benri Buys",
    image: project1,
    description:
      "Designed and implemented the 'Benri Buys', an e-commerce platform for college campuses. Enabled peer-to-peer buying, selling, and renting of products among college students.Focused on improving user interface and accessibility to enhance user engagement and satisfaction upon deployment.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Spot Sense Manager",
    image: project2,
    description:
      "Developed a Java-based system to automate and optimize parking spot allocation.Enhanced space utilization and streamlined customer parking experiences, with a focus on urban implementation.Utilized Java and SQL to handle data processing and management, ensuring efficient performance and scalability.",
    technologies: ["Java", "SQL"],
  },
  {
    title: " PySnake: A Python-powered Snake Game ",
    image: project4,
    description:
      "Created 'PySnake', a classic Snake game using Python and the Turtle graphics library. Implemented core game mechanics including movement, collision detection, and scoring. The project demonstrates foundational skills in game development and Python programming, with potential for further feature enhancements.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  
  phoneNo: "+91 9462085606 ",
  email: "bhuvijain230@gmail.com",
};
