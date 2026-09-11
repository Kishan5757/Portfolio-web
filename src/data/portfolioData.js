export const portfolioData = {
  personalInfo: {
    name: "Kishan K S",
    firstName: "Kishan",
    lastName: "K S",
    title: "Computer Science Engineering Student | Full-Stack Developer | AI/ML Enthusiast",
    shortBio: "Passionate CSE undergraduate at BNM Institute of Technology with a strong foundation in full-stack web development, software engineering, and machine learning. Focused on turning ideas into practical projects that solve real-world problems.",
    location: "Bengaluru, Karnataka, India",
    institution: "B N M Institute of Technology (BNMIT)",
    email: "kskishan542@gmail.com",
    phone: "9663344582",
    displayPhone: "+91 96633 44582",
    status: "Open to Internships & Software Engineering Roles (2028)",
    resumeUrl: "/resume.pdf",
    socials: {
      github: "https://github.com/kishanks",
      linkedin: "https://linkedin.com/in/kishan-k-s",
      email: "mailto:kskishan542@gmail.com",
      phone: "tel:9663344582"
    },
    heroBullets: [
      "Building high-performance web applications with React & modern stacks",
      "Exploring Machine Learning & intelligent data-driven systems",
      "Passionate about clean architecture & competitive problem solving"
    ]
  },

  stats: [
    { label: "Projects Built", value: "8+", icon: "FolderGit2", description: "Full-stack & AI/ML apps" },
    { label: "Core Technologies", value: "14+", icon: "Cpu", description: "Languages, tools & frameworks" },
    { label: "DSA Problems Solved", value: "350+", icon: "Code2", description: "Across LeetCode & platforms" },
    { label: "Certifications", value: "5+", icon: "Award", description: "Verified credentials" },
    { label: "Academic Standing", value: "BNMIT", icon: "GraduationCap", description: "Class of 2028" },
  ],

  about: {
    greeting: "Hi, I'm Kishan K S, a Computer Science Engineering student passionate about building software and exploring new technologies.",
    paragraphs: [
      "I'm currently pursuing my B.E. in Computer Science and Engineering at B N M Institute of Technology. My journey in technology has led me to explore web development, machine learning, backend development, and software engineering.",
      "I enjoy turning ideas into practical projects and learning by building. I've worked on projects involving web applications, machine learning, mapping solutions, and interactive software, while continuously improving my programming and problem-solving skills.",
      "I'm currently focused on becoming a stronger full-stack developer and software engineer, while exploring AI/ML and building projects that solve real-world problems."
    ],
    focusAreas: [
      {
        title: "Web Development",
        description: "Designing fast, responsive, and accessible modern web applications with React, Tailwind CSS, Vite, and RESTful APIs.",
        icon: "Globe"
      },
      {
        title: "Software Engineering",
        description: "Writing clean, maintainable, and modular code adhering to OOP principles, robust design patterns, and SOLID fundamentals.",
        icon: "Layers"
      },
      {
        title: "AI & Machine Learning",
        description: "Developing practical machine learning models, data pipelines, and predictive analytics using Python, Scikit-learn, and Pandas.",
        icon: "Brain"
      },
      {
        title: "Problem Solving",
        description: "Strengthening algorithmic thinking, algorithmic complexity analysis, and competitive programming with Java, C++, and Python.",
        icon: "Terminal"
      }
    ]
  },

  education: [
    {
      degree: "B.E. Computer Science & Engineering",
      branch: "Computer Science & Engineering",
      institution: "B N M Institute of Technology (BNMIT)",
      institutionShort: "BNMIT, Bengaluru",
      location: "Bengaluru, Karnataka, India",
      startYear: "2024",
      endYear: "2028",
      expectedGraduation: "2028",
      status: "Pursuing B.E. (Expected Graduation: 2028)",
      highlights: [
        "Pursuing Bachelor of Engineering in Computer Science & Engineering at BNMIT",
        "Focus on Web Development, Machine Learning, Backend Systems, and Data Structures",
        "Actively building practical engineering applications and solving algorithmic challenges"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Java/C++)",
        "Database Management Systems",
        "Web Application Development",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning Fundamentals"
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        name: "Languages",
        icon: "Code2",
        description: "Core programming languages for algorithmic problem solving and development",
        skills: [
          { name: "C", tag: "System Programming", icon: "Code" },
          { name: "C++", tag: "DSA & OOP", icon: "Binary" },
          { name: "Java", tag: "OOP & Backend", icon: "Coffee" },
          { name: "Python", tag: "AI/ML & Scripting", icon: "FileCode" },
          { name: "JavaScript", tag: "Web & Logic", icon: "Braces" },
        ]
      },
      {
        id: "web",
        name: "Web Development",
        icon: "Globe",
        description: "Modern frontend and full-stack web engineering technologies",
        skills: [
          { name: "HTML", tag: "Semantic Markup", icon: "Layout" },
          { name: "CSS", tag: "Styling & Responsive UI", icon: "Palette" },
          { name: "JavaScript", tag: "ES6+ Logic", icon: "Braces" },
          { name: "React", tag: "Frontend Library", icon: "Atom" },
          { name: "Node.js", tag: "Backend Runtime", icon: "Server" },
        ]
      },
      {
        id: "aiml",
        name: "Machine Learning / Data",
        icon: "Brain",
        description: "Data analysis, machine learning models, and visualization tools",
        skills: [
          { name: "Python", tag: "Core ML Language", icon: "FileCode" },
          { name: "Pandas", tag: "Data Manipulation", icon: "Table" },
          { name: "NumPy", tag: "Numerical Computing", icon: "Grid" },
          { name: "Scikit-learn", tag: "Machine Learning", icon: "Cpu" },
          { name: "Matplotlib", tag: "Data Visualization", icon: "BarChart3" },
        ]
      },
      {
        id: "tools",
        name: "Tools & Technologies",
        icon: "Wrench",
        description: "Developer workflows, version control, build tools, and backend services",
        skills: [
          { name: "Git", tag: "Version Control", icon: "GitBranch" },
          { name: "GitHub", tag: "Collaboration & Repos", icon: "Github" },
          { name: "VS Code", tag: "Primary IDE", icon: "Code2" },
          { name: "Vite", tag: "Build Tool", icon: "Zap" },
          { name: "Supabase", tag: "Backend as a Service", icon: "Database" },
        ]
      }
    ]
  },

  projects: [
    {
      id: "metro-bot",
      title: "Metro-Bot",
      tagline: "Smart Transit Web Assistant for Bengaluru Namma Metro",
      category: "Web",
      categories: ["Web", "React", "Transit"],
      featured: true,
      image: "metro_bot_preview",
      badge: "Flagship Project",
      shortDescription: "An interactive, mobile-optimized transit assistant web application designed specifically for Bengaluru Namma Metro commuters to search routes, calculate fares, find interchange stations, and plan daily commutes efficiently.",
      problem: "Commuters in Bengaluru face difficulty quickly calculating multiline metro route fares, identifying interchange stations (Majestic Nadaprabhu Kempegowda interchange), predicting travel times, and accessing live station lists on mobile devices with low network connectivity.",
      solution: "Engineered an ultra-fast, responsive web app featuring Dijkstra's shortest path transit graph algorithm, real-time ticket fare matrix calculator, smart station autocomplete, and visual route path indicators across both Purple and Green lines.",
      features: [
        "Optimal route calculation with minimum interchange detection between Purple & Green lines",
        "Real-time fare calculator based on official BMRCL token and smartcard tariff rules",
        "Interactive station lookup with smart bilingual search and landmark recommendations",
        "Journey duration estimator factoring in peak frequency and transfer buffer times",
        "Mobile-first responsive interface with zero-dependency instant loading and offline caching",
        "One-click commute bookmarking saved securely to browser LocalStorage"
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "Lucide React", "LocalStorage"],
      githubUrl: "https://github.com/kishanks/metro-bot",
      liveDemoUrl: "https://metro-bot.vercel.app",
      stats: {
        stars: "12+",
        forks: "4",
        status: "Active / Maintained"
      }
    },
    {
      id: "urban-eye",
      title: "UrbanEye",
      tagline: "Civic-Engagement & AI-Powered Issue Reporting Platform",
      category: "Web",
      categories: ["Web", "AI/ML", "Civic Tech"],
      featured: true,
      image: "urban_eye_preview",
      badge: "Civic Innovation",
      shortDescription: "A modern civic-engagement platform empowering citizens to capture, geotag, and track municipal issues (potholes, streetlights, garbage, water leaks) with automated AI priority triage and public transparency dashboards.",
      problem: "Municipal grievance reporting in cities is typically slow, opaque, and disconnected from public visibility, making it hard for authorities to prioritize urgent issues and for citizens to know the resolution status.",
      solution: "Developed a progressive civic web platform where citizens submit reports with GPS coordinates and images. Integrated an AI classification workflow that categorizes grievance severity and routes it to relevant departments with an upvoting feed.",
      features: [
        "Instant geotagged issue reporting with GPS coordinate capture and photo upload",
        "AI-assisted issue categorization and automated severity risk scoring",
        "Public community issue feed with citizen upvoting to escalate urgent hazards",
        "Interactive status tracker (Submitted -> In Review -> Dispatched -> Resolved)",
        "Municipal analytics dashboard displaying resolution turnaround metrics and hotspot heatmaps",
        "Role-based authentication for citizens and municipal administrators"
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Python (AI Model)", "Leaflet Maps"],
      githubUrl: "https://github.com/kishanks/urban-eye",
      liveDemoUrl: "https://urbaneye-civic.vercel.app",
      stats: {
        stars: "18+",
        forks: "7",
        status: "Active Prototype"
      }
    },
    {
      id: "smarthealth-ai",
      title: "SmartHealth AI",
      tagline: "Clinical Symptom Prediction & Medical Risk Analyzer",
      category: "AI/ML",
      categories: ["AI/ML", "Python"],
      featured: true,
      image: "smart_health_preview",
      badge: "AI / ML",
      shortDescription: "A predictive machine learning diagnostic assistant that analyzes multi-symptom matrices and patient clinical metrics to forecast preliminary health risk scores with explainable AI feature importance graphs.",
      problem: "Patients often struggle to interpret complex combinations of preliminary symptoms, leading to either delayed clinical consultation or unnecessary anxiety from unverified search engine results.",
      solution: "Trained Random Forest and Support Vector Machine classifiers on multi-disease clinical datasets, achieving over 94% validation accuracy with interactive feature weight transparency.",
      features: [
        "Multi-symptom interactive selector with real-time confidence probability distribution",
        "Disease risk prediction across multiple specialized health domains",
        "Explainable AI feature importance breakdown displaying key driving indicators",
        "Automated health summary PDF report generator for doctor visits",
        "FastAPI backend microservice delivering sub-50ms inference times"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "FastAPI", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/kishanks/smarthealth-ai",
      liveDemoUrl: "https://smarthealth-ai-demo.vercel.app",
      stats: {
        stars: "14+",
        forks: "3",
        status: "Completed"
      }
    },
    {
      id: "codereview-ai",
      title: "CodeReview AI",
      tagline: "Automated Pull Request Code Quality & Security Auditor",
      category: "Python",
      categories: ["Python", "Web", "DevTools"],
      featured: false,
      image: "codereview_preview",
      badge: "Developer Tool",
      shortDescription: "An intelligent developer productivity tool that inspects GitHub pull requests, parses AST syntax trees, identifies code anti-patterns, and suggests optimized refactoring snippets.",
      problem: "Engineering teams spend repetitive hours during code reviews manually spotting syntax anti-patterns, unused variables, and unhandled async exceptions.",
      solution: "Engineered a Python-based webhook pipeline that analyzes diffs against clean code guidelines and posts automated, contextual markdown comments directly onto GitHub PRs.",
      features: [
        "Automated GitHub webhook listener parsing incoming pull request diffs",
        "AST-based static analysis for Python and JavaScript repositories",
        "Security vulnerability scan for hardcoded credentials and injection risks",
        "Direct GitHub markdown commenting with formatted code fix suggestions",
        "Interactive dashboard displaying repository health scores over time"
      ],
      technologies: ["Python", "FastAPI", "GitHub REST API", "PyLint", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/kishanks/codereview-ai",
      liveDemoUrl: "https://codereview-ai.vercel.app",
      stats: {
        stars: "11+",
        forks: "5",
        status: "Completed"
      }
    },
    {
      id: "portfolio-v2",
      title: "Personal Portfolio Website",
      tagline: "Modern White & Orange Developer Portfolio & Showcase",
      category: "Web",
      categories: ["Web", "React", "Tailwind"],
      featured: false,
      image: "portfolio_preview",
      badge: "Portfolio",
      shortDescription: "A high-performance personal portfolio website built with React, Vite, and Tailwind CSS featuring a sleek white & orange design system, dark mode, accessible modals, and modular data management.",
      problem: "Recruiters and hiring managers require a clean, fast, and structured platform to evaluate a candidate's projects, technical skills, and achievements without unnecessary clutter.",
      solution: "Crafted a bespoke, fully responsive web experience with optimized typography, dynamic project filters, verified certification cards, and instant interactive contact workflows.",
      features: [
        "Tailored White & Vibrant Orange aesthetic with dynamic dark theme",
        "Comprehensive project filtering with detailed modal deep-dive dialogs",
        "Consolidated achievements and coding profiles section showcasing LeetCode and GitHub",
        "Clean, modern card layouts without subjective skill percentages",
        "Full accessibility, responsive mobile navigation, and interactive feedback"
      ],
      technologies: ["React 19", "Vite", "Tailwind CSS v4", "Lucide React", "Canvas Confetti"],
      githubUrl: "https://github.com/kishanks/portfolio",
      liveDemoUrl: "https://kishanks.dev",
      stats: {
        stars: "8+",
        forks: "2",
        status: "Active"
      }
    }
  ],

  certifications: [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford Online (Coursera)",
      date: "2024",
      credentialId: "COURSERA-ML-789421",
      verificationUrl: "https://www.coursera.org/verify/example",
      skills: ["Supervised Learning", "Neural Networks", "Scikit-learn", "TensorFlow", "Regression & Classification"],
      image: "ml_cert"
    },
    {
      title: "Front-End Developer Professional Certificate",
      issuer: "Meta (Coursera)",
      date: "2024",
      credentialId: "META-FRONTEND-556102",
      verificationUrl: "https://www.coursera.org/verify/example",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "UI/UX Principles", "Version Control"],
      image: "meta_cert"
    },
    {
      title: "Problem Solving (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "2023",
      credentialId: "HR-PS-INT-992140",
      verificationUrl: "https://www.hackerrank.com/certificates/example",
      skills: ["Data Structures", "Algorithms", "Dynamic Programming", "Time Complexity", "C++ / Java"],
      image: "hackerrank_cert"
    },
    {
      title: "Python for Data Science & Machine Learning",
      issuer: "Udemy / Global Instructor",
      date: "2023",
      credentialId: "UC-PYTHON-DS-33019",
      verificationUrl: "https://www.udemy.com/certificate/example",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "Data Visualization"],
      image: "python_cert"
    },
    {
      title: "Database Management & SQL Certification",
      issuer: "Oracle / HackerRank",
      date: "2023",
      credentialId: "SQL-DB-881204",
      verificationUrl: "https://www.hackerrank.com/certificates/example",
      skills: ["Relational Database Design", "Complex SQL Joins", "Indexing", "Query Optimization", "MySQL"],
      image: "sql_cert"
    }
  ],

  achievements: [
    {
      title: "Hackathon Finalist — Smart City Solutions",
      category: "Hackathons",
      date: "2024",
      organization: "State-Level Engineering Hackathon",
      description: "Selected among top 10 finalist teams out of 80+ competing teams for engineering UrbanEye, a civic issue reporting and AI severity classification platform.",
      icon: "Trophy"
    },
    {
      title: "350+ Problems Solved on LeetCode",
      category: "Competitive Programming",
      date: "2023 – Present",
      organization: "LeetCode & Competitive Platforms",
      description: "Maintained a consistent problem-solving streak focusing on Arrays, Trees, Graphs, Dynamic Programming, and algorithmic problem solving in Java, C++, and Python.",
      icon: "Code2"
    },
    {
      title: "5-Star Proficiency in Problem Solving & Python",
      category: "Competitions",
      date: "2023",
      organization: "Competitive Coding Assessments",
      description: "Earned verified skill distinctions in both Problem Solving and Python tracks by solving complex algorithmic challenges.",
      icon: "Award"
    },
    {
      title: "Academic Excellence & Department Recognition",
      category: "Academic",
      date: "2024",
      organization: "Department of Computer Science & Engineering",
      description: "Recognized for consistent academic diligence, technical engagement, and active contribution to engineering course projects.",
      icon: "Medal"
    }
  ],

  codingProfiles: [
    {
      platform: "GitHub",
      handle: "kishanks",
      url: "https://github.com/kishanks",
      badge: "Active",
      stats: "Public Repos & Open Source",
      color: "#ea580c",
      bgLight: "bg-slate-50 dark:bg-slate-900/60",
      borderLight: "border-orange-300/60 dark:border-slate-800/80",
      description: "Personal projects, full-stack web applications, AI/ML models, and open-source explorations.",
      icon: "Github"
    },
    {
      platform: "LeetCode",
      handle: "kishan_ks",
      url: "https://leetcode.com/u/kishan_ks",
      badge: "350+ Solved",
      stats: "DSA & Problem Solving",
      color: "#FFA116",
      bgLight: "bg-amber-50/70 dark:bg-amber-950/20",
      borderLight: "border-amber-300/60 dark:border-amber-800/40",
      description: "Regular practice across Data Structures, Algorithms, Arrays, Trees, Graphs, and Dynamic Programming.",
      icon: "Code2"
    }
  ],

  githubShowcase: [
    {
      name: "metro-bot",
      description: "Smart transit assistant web app for Bengaluru Metro with optimal route finding and fare calculator.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 12,
      forks: 4,
      url: "https://github.com/kishanks/metro-bot",
      topics: ["react", "vite", "tailwind", "transit", "bengaluru-metro"]
    },
    {
      name: "urban-eye",
      description: "Civic-engagement platform for reporting & tracking local municipal issues with geotagging and AI triage.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 18,
      forks: 7,
      url: "https://github.com/kishanks/urban-eye",
      topics: ["civic-tech", "react", "express", "mongodb", "ai"]
    },
    {
      name: "smarthealth-ai",
      description: "Predictive symptom analysis & clinical risk triage model built with Scikit-learn and FastAPI.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 14,
      forks: 3,
      url: "https://github.com/kishanks/smarthealth-ai",
      topics: ["machine-learning", "python", "fastapi", "scikit-learn", "health-ai"]
    },
    {
      name: "codereview-ai",
      description: "Automated PR static code analysis & linting reviewer pipeline for GitHub repositories.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 11,
      forks: 5,
      url: "https://github.com/kishanks/codereview-ai",
      topics: ["python", "fastapi", "devtools", "github-api"]
    }
  ]
};
