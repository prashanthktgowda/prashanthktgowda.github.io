/**
 * ============================================================
 *  data.js — ALL YOUR PORTFOLIO CONTENT LIVES HERE
 *  Edit this file to update any text, links, or details.
 * ============================================================
 */

const DATA = {

  /* ── Personal ─────────────────────────────────────── */
  personal: {
    name:       "Prashantha K T",
    initials:   "PKT",
    tagline:    "Software Engineer",
    location:   "Bengaluru, Karnataka",
    phone:      "+91-8762431756",
    email:      "prashanthktgowda123@gmail.com",
    linkedin:   "www.linkedin.com/in/prashanth-k-t-4b596b249",   // ← update with real URL
    github:     "https://github.com/prashanthkt",               // ← update with real URL
    bio:        "Software Development Engineer with hands-on experience building scalable backend systems and applied AI solutions. Strong foundation in data structures, algorithms, object-oriented design, and system development. Passionate about solving real-world problems through clean architecture, efficient code, and production-ready machine learning applications.",
    available:  true,   // shows "Available for opportunities" badge
  },

  /* ── Stats (hero counter row) ─────────────────────── */
  stats: [
    { value: "$2M",  label: "Annual Cost Savings" },
    { value: "8.50", label: "CGPA" },
    { value: "1+",   label: "Years Experience" },
    { value: "∞",    label: "Lines of Code" },
  ],

  /* ── Experience ───────────────────────────────────── */
  experience: [
    {
      company:  "Target Corporation",
      role:     "Software Engineer",
      location: "Bengaluru",
      period:   "Feb 2026 – Present",
      current:  true,
      bullets: [
        "Building production-grade backend services and distributed systems at scale.",
        "Working on core platform infrastructure using Kotlin, Micronaut, and Kafka.",
        "Contributing to high-impact engineering initiatives across Target's technology stack.",
      ],
    },
    {
      company:  "Target Corporation",
      role:     "Tech Intern",
      location: "Bengaluru",
      period:   "Aug 2025 – Feb 2026",
      current:  false,
      bullets: [
        "Designed and implemented scalable backend services using Kotlin and Micronaut, following clean architecture and OOP principles.",
        "Built and optimized REST APIs for the Problem Freighter application; improved performance using efficient SQL and data structures.",
        "Collaborated with cross-functional teams, participated in code reviews, and followed CI/CD best practices for production deployments.",
      ],
    },
    {
      company:  "Quant Masters",
      role:     "Summer Intern",
      location: "Bengaluru",
      period:   "Mar 2024 – Jun 2024",
      current:  false,
      bullets: [
        "Worked on full-stack development tasks while applying core data structures and algorithmic problem-solving techniques.",
      ],
    },
    {
      company:  "Quant Tech",
      role:     "Workshop Facilitator",
      location: "Bengaluru",
      period:   "Feb 2023 – Apr 2023",
      current:  false,
      bullets: [
        "Led technical and soft-skill workshops, demonstrating leadership, communication, and coordination skills.",
      ],
    },
  ],

  /* ── Education ────────────────────────────────────── */
  education: [
    {
      institution: "University of Visvesvaraya College of Engineering, Bengaluru",
      degree:       "B.Tech in Artificial Intelligence and Machine Learning",
      period:       "2021 – 2025",
      score:        "CGPA: 8.50",
    },
    {
      institution: "Government P.U. College, Hosanagara",
      degree:       "P.C.M.B",
      period:       "2020 – 2021",
      score:        "78.49%",
    },
    {
      institution: "Government High School, Kanugodu, Hosanagara",
      degree:       "S.S.L.C",
      period:       "2018 – 2019",
      score:        "82.02%",
    },
  ],

  /* ── Skills ───────────────────────────────────────── */
  skills: [
    {
      icon:     "⚙️",
      category: "Languages",
      tags:     ["Java", "Kotlin", "Python"],
    },
    {
      icon:     "🔧",
      category: "Backend & APIs",
      tags:     ["Micronaut", "REST APIs", "Kafka", "SQL", "NoSQL"],
    },
    {
      icon:     "🧠",
      category: "AI / ML",
      tags:     ["PyTorch", "TensorFlow", "OpenCV", "LangChain", "YOLOv8"],
    },
    {
      icon:     "🏗️",
      category: "System Design",
      tags:     ["Low-level Design", "SOLID", "OOP", "DSA", "DBMS", "OS", "CN"],
    },
    {
      icon:     "☁️",
      category: "Cloud & DevOps",
      tags:     ["AWS EC2", "AWS S3", "Docker", "Kubernetes", "CI/CD", "Git"],
    },
    {
      icon:     "📊",
      category: "Data & Pipelines",
      tags:     ["Pandas", "NumPy", "Kubeflow", "PostgreSQL"],
    },
  ],

  /* ── Projects ─────────────────────────────────────── */
  projects: [
    {
      number:  "01",
      badge:   "💰 $2M Cost Savings · Production",
      title:   "Carton Damage Detection",
      desc:    "End-to-end computer vision system to detect and localize damaged cartons using YOLOv8. Trained and evaluated models using precision-recall metrics, optimized inference for deployment. Built reproducible ML pipelines using Kubeflow and deployed workflows on Kubernetes — reducing claim rejections and delivering an estimated $2M annual cost savings.",
      tech:    ["Python", "YOLOv8", "PyTorch", "OpenCV", "Kubeflow", "Kubernetes"],
      github:  "https://github.com/prashanthkt",  // ← update with real repo URL
    },
    {
      number:  "02",
      badge:   "🏭 Warehouse Operations · Backend",
      title:   "Problem Freighter",
      desc:    "Backend system to manage damaged-item workflows in warehouse operations. Designed REST APIs using Kotlin and Micronaut, implemented PostgreSQL data models, and integrated cloud storage using AWS S3 — focusing on scalability and clean API contracts.",
      tech:    ["Kotlin", "Micronaut", "PostgreSQL", "AWS S3", "REST APIs"],
      github:  null,  // set to null to hide the button
    },
  ],

  /* ── Extra-Curricular ─────────────────────────────── */
  activities: [
    "Organized and led a volleyball tournament during the hostel fest, coordinating teams and logistics.",
    "Organized a Blood Donation Camp in collaboration with the Lions Club.",
  ],

};
