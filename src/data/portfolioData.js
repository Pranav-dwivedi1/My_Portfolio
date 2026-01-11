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
    description: "Passionate Full Stack Developer specializing in modern web technologies. Building innovative solutions with clean code and optimal performance. Dedicated to creating exceptional user experiences.",
    location: "San Francisco, CA",
    experience: "3+ Years",
    role: "Full Stack Developer"
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
      },
      {
        name: "DevOps & Tools",
        skills: ["Docker", "AWS", "Git", "CI/CD", "Jest", "Figma"]
      }
    ]
  },
  study: {
    title: "Education & Certifications",
    items: [
      { degree: "B.Tech in Computer Science", institution: "Tech University", year: "2020-2024", details: "Specialized in Software Engineering" },
      { degree: "Full Stack Development", institution: "Online Certification", year: "2023", details: "Advanced React & Node.js" },
      { degree: "Cloud Computing", institution: "AWS Academy", year: "2022", details: "AWS Solutions Architect" }
    ]
  },
  experience: {
    title: "Work Experience",
    items: [
      { role: "Full Stack Developer", company: "TechCorp Inc.", duration: "2022-Present", details: ["Built scalable SaaS platforms", "Led frontend architecture", "Improved performance by 40%"] },
      { role: "Frontend Developer", company: "StartUp Labs", duration: "2021-2022", details: ["Developed responsive web apps", "Implemented design systems", "Collaborated with UX teams"] },
      { role: "Web Development Intern", company: "Digital Solutions", duration: "2020-2021", details: ["Assisted in full-stack projects", "Learned agile methodologies", "Contributed to live projects"] }
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      { name: "E-commerce Platform", tech: ["Next.js", "Stripe", "MongoDB"], description: "Full-featured online store with admin dashboard", link: "#" },
      { name: "Task Management App", tech: ["React", "Node.js", "Socket.io"], description: "Real-time collaborative task manager", link: "#" },
      { name: "Portfolio Generator", tech: ["Next.js", "Tailwind", "Framer Motion"], description: "AI-powered portfolio website builder", link: "#" },
      { name: "Analytics Dashboard", tech: ["React", "D3.js", "Express"], description: "Data visualization dashboard for business metrics", link: "#" }
    ]
  },
  contact: {
    title: "Get In Touch",
    email: "pranav@example.com",
    phone: "+1 (234) 567-8900",
    location: "San Francisco, CA"
  }
};