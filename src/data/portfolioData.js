export const sections = [
  { id: "intro", label: "Introduction", icon: "👨‍💻" },
  { id: "skills", label: "Skills", icon: "🔧" },
  { id: "study", label: "Education", icon: "🎓" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "🚀" },
];

export const dummyData = {
  intro: {
  title: "Pranav Dwivedi",
  description: `Full Stack Developer with 2+ years of experience crafting high-quality web applications using React, Next.js, Node.js, and Tailwind CSS.
I build informative websites, e-commerce platforms, business portfolios, personal portfolios, and blogs with clean, responsive, and user-friendly design.
Open to freelance projects and collaborations, helping brands and individuals create a strong and professional online presence.`,
  location: "Bhopal, India",
  experience: "2+ Years",
  role: "Full Stack Developer"
},
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Redux", "Framer Motion", "HTML5", "CSS3"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL" ,"SQL" , "MySQL"]
      },
      {
        name: "Tools & Concepts",
        skills: ["Visual Studio Code", "Git", "CI/CD", "WordPress", "Figma", "Postman", "Vercel", "OOPS"]
      }
    ]
  },
  study: {
    title: "Education & Certifications",
    items: [
      { degree: "Bachelor in Technology", institution: "Truba Institute of Engineering and Information Technology ", year: "2019-2023", details: "Specialized in Computer Science" },
      { degree: "High Secondry School Education", institution: "Vidhya Mandir High Secondry School Bareli Raisen MP", year: "2018-2019", details: "Physics, Chemistry, Mathematics" },
      { degree: "High School Education", institution: "Vidhya Mandir High Secondry School Bareli Raisen MP", year: "2017-2018", details: "All Subjects" },
      { degree: "Full Stack Development", institution: "Sheryians Coding School Bhopal", year: "2022", details: "MERN Stack Development (React, Node.js, Express, MongoDB)" }
    ]
  },
  experience: {
    title: "Work Experience",
    items: [
      { role: "Full Stack Developer", company: "Egniol Services Private Limited", duration: "2024-Present", details: ["Built and maintained multiple production-ready web applications using React, Next.js, and Node.js for real clients.", "Converted 30+ Figma designs into responsive, pixel-perfect user interfaces using Tailwind CSS.", "Implemented features like authentication, payments, dashboards, and dynamic content, improving overall user experience and performance.","Worked closely with designers and backend teams, handling testing, bug fixes, and code optimization to deliver stable and high-quality applications."], technologies: [
  "React js",
  "Next.js",
  "Node.js",
  "Express.js",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "JWT Authentication",
  "Razorpay",
  "REST APIs",
  "Git",
  "GitHub",
  "Postman",
  "Figma"
] },

      { role: "Internship website Developer", company: "HKRP Ahmedabad", duration: "08/2023-12/2023", details: ["Worked as a Web Development Intern, gaining hands-on experience in full stack web development and modern web technologies.", "Learned and built projects using HTML, CSS, JavaScript, React, and Node.js, understanding how front-end and back-end systems work together.", "Developed responsive web pages and basic web applications, focusing on clean UI, functionality, and performance.","Gained practical exposure to real-world development workflows, debugging, testing, and improving application features."], technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Bootstrap",
    "Git",
    "GitHub"
  ] },

      { role: "Internship Frontend Developer", company: "Next-Innovation Technology Bhopal", duration: "02/2023-06/2023", details: ["Started my journey in web development as a Front-End Development Intern, learning how modern websites are built.", "Gained hands-on experience with HTML, CSS, and JavaScript to create responsive and interactive web pages.", "Implemented real UI layouts and learned how to convert designs into functional front-end interfaces.", "Understood the development workflow, including writing clean code, testing layouts, and improving user experience."],
        technologies: [
          "C#", ".NET Core", "Azure", "React", 
          "SQL Server", "Docker", "Kubernetes"
        ], technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Flexbox",
    "CSS Grid",
    "Bootstrap",
    "UI Design",
    "Browser Developer Tools"
  ] }
    ]
  },
  projects: {
  title: "Featured Projects",
  items: [
    {
      name: "Egniol Corporate Website",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
      description: "Designed and developed the official corporate website for Egniol with responsive layout, SEO optimization, and modern UI based on Figma designs.",
      link: "https://egniol.com"
    },
    {
      name: "Client Business Websites",
      tech: ["Next.js", "React", "Tailwind CSS", "SSR"],
      description: "Built multiple SEO-optimized and responsive websites for business clients, including company profiles, service pages, and lead generation forms.",
      link: "#"
    },
    {
      name: "Employee Management System",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      description: "Developed a secure admin dashboard with employee CRUD, role-based access, authentication, pagination, and search filters.",
      link: "#"
    },
    {
      name: "Payment Integration System",
      tech: ["Node.js", "Razorpay", "REST API", "MongoDB"],
      description: "Integrated Razorpay payment gateway into client projects with secure transaction handling, order management, and payment verification.",
      link: "#"
    }
  ]
}

  
};