/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prashanth K T's Portfolio",
  description:
    "A passionate individual dedicated to working on end-to-end products with AI integration that develop sustainable and scalable social and technical systems to create a positive impact.",
  og: {
    title: "Prashanth K T's Portfolio",
    type: "website",
    url: "http://prashanthktgowda.com/",
  },
};

//Home Page
const greeting = {
  title: "Prashanth K T",
  logo_name: "Prashanth K T",
  nickname: "Prashanth",
  subTitle:
    "A passionate individual dedicated to working on end-to-end products with AI integration that develop sustainable and scalable social and technical systems to create a positive impact.",
  resumeLink:
    "https://drive.google.com/drive/folders/1UV4YZqdPRX08I2S5UN8ZubjGVzTofpec?usp=sharing",
    portfolio_repository: "https://github.com/prashanthktgowda",
  githubProfile: "https://github.com/prashanthktgowda",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/hemanth1223",
  // linkedin: "https://www.linkedin.com/in/hemanth1223",
  // gmail: "hemanthgowda1223@gmail.com",
  // instagram: "https://www.instagram.com/hemanth_d.boss"

  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/prashanth-k-t-4b596b249",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/prashanthktgowda",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:prashanthktgowda@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://x.com/prashanthktgowd?t=-ws2wnx5czkcY7wJxFUv7Q&s=08",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "My Technical Skills (Software and Web Development)",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML, CSS, and JavaScript 🌐",
        "⚡ Proficient in software development with Java and Python 💻",
        "⚡ Experienced in database management using SQL, NoSql and MySQL Workbench 📊",
        "⚡ Implementing version control using Git 🛠️",
        "⚡ Familiar with Agile methodologies and software development lifecycle (SDLC) 📈",
        "⚡ Developing and deploying applications on Windows and Ubuntu environments 🖥️",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SQL & MySQL Workbench",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#0078D6",
          },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "logos:ubuntu",
          style: {
            color: "#0078D6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "",
      style: {
        color: "#5B4638",
      },
    },
    {
      siteName: "",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "",
      style: {
        color: "#323754",
      },
    },
    {
      siteName: "",
      style: {
        color: "#20BEFF",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Visvesvaraya College of Engineering, Bengaluru",
      subtitle: "B.E. in Artificial Intelligence and Machine Learnig - GPA: 8.7/10",
      logo_path: "uvce.png",
      alt_name: "UVCE, Bangalore",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied DL and AI, Computer Networks, and Date Minning and SPM. 💻",
        "⚡ I have also covered Database Management System (DBMS), Game Theory, Object Oriented Programming (OOPs), Operating System, and Software Testing. 💻",      
        "⚡ I have received scholarships for 4 years each from the Government of Karnataka. 🎓",
      ],
      website_link: "https://uvce.ac.in",
    },
    {
      title: "Govt P.U College, Hosanagara",
      subtitle: "Senior Secondary (XII) - 78.5%",
      logo_path: "puc.jpg",
      alt_name: "GOVT P.U College, Hosanagara",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I received the Academic Achievement Award in 2019. 🥇",
        "⚡ I received an award for 100% attendance for 2 consecutive years. 📅",
        "⚡ Winner of an Intra-College Chess competition. ♟️",
        "⚡ I play Kabaddi and Cricket as hobbies. 🏏",
      ],
      website_link: "https://nsampuc.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Agile Software Development",
      subtitle: "University of Minnesota - Coursera",
      logo_path: "UM.png",
      certificate_link:
        "",
      alt_name: "University of Minnesota - Coursera",
      color_code: "#8C151599",
    },
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Driven by a passion for developing sustainable, scalable social and technical systems, I am eager to seize opportunities that allow me to make a positive impact through innovation and collaboration",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Tech Support (Part-Time)",
          company: "Omega Healthcare",
          company_url: "https://www.omegahms.com",
          logo_path: "omega.png",
          duration: "Aug 2023- July 2024",
          location: "Remote",
          description:
          "As a Tech Support professional, I am responsible for providing technical assistance and support to users, troubleshooting hardware and software issues, and ensuring smooth operation of IT systems. My role involves diagnosing problems, guiding users through solutions, and maintaining documentation of support requests.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Workshop Facilitator",
          company: "Quant Tech",
          company_url: "",
          logo_path: "qtech.png",
          duration: "Feb 2023 - Apr 2023",
          location: "Bengaluru, India",
          description:
          "Conducted interactive workshops on communication, teamwork, and leadership skills, helping participants improve",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic.png",
    description:
      "I am reachable through various social media platforms mentioned below. Feel free to message me, and I'll respond within 24 hours.",
  },
  blogSection: {
    title: "Hiring Updates",
    subtitle:
      "I will be updating job and internship opportunities daily, so please check for updates.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bengaluru, Karnataka, India",
    locality: "KSV Nilaya",
    country: "India",
    region: "Bengaluru",
    postalCode: "560052",
    streetAddress: "",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "+91 876 243 1756 ",
    avatar_image_path: "address_image.svg",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
