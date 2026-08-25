export const portfolioData = {
  personalInfo: {
    name: "Kishan K S",
    firstName: "Kishan",
    lastName: "K S",
    title: "Computer Science Engineering Student | Web Developer | AI/ML Enthusiast",
    shortBio: "Passionate CSE undergraduate with a strong foundation in full-stack web development, data structures, and machine learning. Focused on engineering practical, user-centric software solutions that solve real-world problems.",
    location: "Bengaluru, Karnataka, India",
    email: "kishan.ks.cse@gmail.com", // Editable placeholder
    phone: "+91 98765 43210", // Editable placeholder
    status: "Open to Internships & SDE Roles (2025–2026)",
    resumeUrl: "/resume.pdf", // Configurable resume path
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com/in",
      email: "mailto:kishan.ks.cse@gmail.com",
      twitter: "https://twitter.com",
    },
    heroBullets: [
      "Building high-performance web applications with React & modern stacks",
      "Exploring Machine Learning & intelligent data-driven systems",
      "Passionate about clean architecture & competitive problem solving"
    ]
  },

  stats: [
    { label: "Projects Built", value: "10+", icon: "FolderGit2", description: "Full-stack & AI/ML apps" },
    { label: "Technologies Mastered", value: "15+", icon: "Cpu", description: "Languages, tools & frameworks" },
    { label: "DSA Problems Solved", value: "350+", icon: "Code2", description: "Across LeetCode & HackerRank" },
    { label: "Certifications", value: "5+", icon: "Award", description: "Verified credentials" },
    { label: "Current CGPA", value: "9.3/10", icon: "GraduationCap", description: "Academic excellence" },
  ],

  about: {
    intro: "I am a dedicated Computer Science Engineering student currently pursuing my Bachelor's degree in Bengaluru. My journey in technology is driven by a deep curiosity for understanding how scalable systems work and a passion for creating impactful digital solutions.",
    paragraphs: [
      "Over the course of my academic journey, I have developed a solid foundation in core computer science disciplines including Data Structures & Algorithms, Object-Oriented Design, Database Management, and Operating Systems. I bridge theoretical fundamentals with hands-on development by crafting full-stack web platforms and applied AI/ML applications.",
      "My notable projects include Metro-Bot, a dedicated transit assistant web app for Bengaluru Metro commuters, and UrbanEye, a civic-engagement reporting platform that leverages automated classification to streamline municipal complaint management.",
      "When I am not coding, you will find me participating in hackathons, exploring open-source repositories, sharpening my problem-solving skills on competitive coding platforms, or keeping up with the latest advancements in AI."
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
      },
      {
        title: "Practical Application Dev",
        description: "Transforming real-life challenges into intuitive digital products like civic reporting platforms and transit navigators.",
        icon: "Lightbulb"
      }
    ]
  },

  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      branch: "Computer Science and Engineering",
      institution: "Visvesvaraya Technological University (VTU) Affiliated College",
      institutionShort: "VTU Engineering College",
      location: "Bengaluru, Karnataka, India",
      startYear: "2022",
      endYear: "2026",
      cgpa: "9.3 / 10.0 (Aggregate)",
      status: "Currently in 3rd / 4th Year",
      highlights: [
        "Consistently maintained academic excellence across core CS semesters",
        "Active member of the Department Technical Committee and Coding Club",
        "Led team project initiatives in Web Technologies and Machine Learning courses"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Java/C++)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning & Data Mining",
        "Web Application Development",
        "Software Engineering & Agile"
      ]
    },
    {
      degree: "Pre-University / Higher Secondary (12th Grade - PCMC)",
      branch: "Physics, Chemistry, Mathematics, Computer Science",
      institution: "Pre-University College",
      institutionShort: "PU College",
      location: "Karnataka, India",
      startYear: "2020",
      endYear: "2022",
      cgpa: "90%+ / Distinction",
      status: "Completed",
      highlights: [
        "Distinction in Mathematics and Computer Science",
        "Built early interest in algorithmic programming and logic design"
      ],
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science (C++)"]
    }
  ],

  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming Languages",
        icon: "Code2",
        description: "Core languages used for problem solving, backend systems, and scripting",
        skills: [
          { name: "C", level: 85, tag: "Core", icon: "Code" },
          { name: "C++", level: 88, tag: "DSA & OOP", icon: "Binary" },
          { name: "Java", level: 90, tag: "OOP & Backend", icon: "Coffee" },
          { name: "Python", level: 92, tag: "AI/ML & Scripting", icon: "FileCode" },
          { name: "JavaScript (ES6+)", level: 90, tag: "Web & Logic", icon: "Braces" },
        ]
      },
      {
        id: "web",
        name: "Web Development",
        icon: "Globe",
        description: "Modern frontend and full-stack web engineering technologies",
        skills: [
          { name: "React.js", level: 92, tag: "Frontend Library", icon: "Atom" },
          { name: "Tailwind CSS", level: 95, tag: "Styling & UI", icon: "Palette" },
          { name: "HTML5 & CSS3", level: 95, tag: "Semantic Markup", icon: "Layout" },
          { name: "Vite", level: 90, tag: "Build Tool", icon: "Zap" },
          { name: "Node.js", level: 80, tag: "Backend Runtime", icon: "Server" },
          { name: "Express.js", level: 78, tag: "REST APIs", icon: "Network" },
          { name: "RESTful APIs", level: 88, tag: "API Integration", icon: "Share2" },
        ]
      },
      {
        id: "database",
        name: "Databases & Storage",
        icon: "Database",
        description: "Relational, document, and cloud database management",
        skills: [
          { name: "MySQL", level: 86, tag: "Relational SQL", icon: "Database" },
          { name: "PostgreSQL", level: 82, tag: "Advanced SQL", icon: "HardDrive" },
          { name: "MongoDB", level: 84, tag: "NoSQL Document", icon: "FolderTree" },
          { name: "Supabase", level: 80, tag: "Backend as a Service", icon: "Cloud" },
        ]
      },
      {
        id: "aiml",
        name: "AI & Machine Learning",
        icon: "Brain",
        description: "Data analysis, predictive modeling, and deep learning foundations",
        skills: [
          { name: "Python for Data Science", level: 92, tag: "Data Analysis", icon: "FileText" },
          { name: "Pandas", level: 90, tag: "Data Manipulation", icon: "Table" },
          { name: "NumPy", level: 90, tag: "Numerical Arrays", icon: "Grid" },
          { name: "Scikit-learn", level: 85, tag: "Machine Learning", icon: "Cpu" },
          { name: "TensorFlow", level: 75, tag: "Neural Networks", icon: "Activity" },
          { name: "Matplotlib & Seaborn", level: 86, tag: "Data Visualization", icon: "BarChart3" },
        ]
      },
      {
        id: "tools",
        name: "Tools & DevOps",
        icon: "Wrench",
        description: "Developer workflows, version control, and productivity tools",
        skills: [
          { name: "Git", level: 90, tag: "Version Control", icon: "GitBranch" },
          { name: "GitHub", level: 92, tag: "Collaboration & CI", icon: "Github" },
          { name: "VS Code", level: 95, tag: "Primary Editor", icon: "Code2" },
          { name: "Jupyter Notebook", level: 88, tag: "Data Exploration", icon: "BookOpen" },
          { name: "Postman", level: 85, tag: "API Testing", icon: "Send" },
          { name: "Linux / Bash", level: 80, tag: "CLI & Scripting", icon: "Terminal" },
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
      id: "algorunner",
      title: "Algorunner",
      tagline: "Interactive Java Algorithm & Data Structure Visualizer",
      category: "Java",
      categories: ["Java", "Web", "Algorithms"],
      featured: false,
      image: "algorunner_preview",
      badge: "Algorithm Tool",
      shortDescription: "An educational visualizer platform for core computer science algorithms and data structures, featuring step-by-step memory frame execution, pointer movement, and time-complexity benchmarks.",
      problem: "Abstract pointer mutations, recursion call stacks, and graph search traversals are difficult for students to conceptualize solely from static textbooks or terminal outputs.",
      solution: "Constructed a real-time visual canvas supporting interactive array sorting, linked list manipulations, BST tree balancing, and Dijkstra/BFS/DFS pathfinding algorithms.",
      features: [
        "Step-by-step interactive timeline playback with adjustable animation speed",
        "Custom array and graph input builder with random and worst-case generators",
        "Synchronized Java and Python code highlights alongside memory states",
        "Live comparison benchmarks measuring actual operational swap and comparison counts",
        "Clean dark/light visual modes tailored for lecture presentations"
      ],
      technologies: ["Java", "JavaScript", "React", "Tailwind CSS", "HTML5 Canvas"],
      githubUrl: "https://github.com/kishanks/algorunner",
      liveDemoUrl: "https://algorunner.vercel.app",
      stats: {
        stars: "9+",
        forks: "2",
        status: "Active"
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
        "Tailored White & Vibrant Orange SaaS aesthetic with dynamic dark theme",
        "Comprehensive project filtering with detailed modal deep-dive dialogs",
        "Dedicated coding profiles section showcasing LeetCode, GitHub, HackerRank",
        "Centralized configuration architecture for effortless data updates",
        "Full accessibility, responsive mobile navigation, and confetti feedback"
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

  experience: [
    {
      role: "Software Developer Intern",
      organization: "Tech Innovation Labs (Placeholder / Summer Internship)",
      location: "Bengaluru, India",
      period: "June 2024 – August 2024",
      type: "Internship",
      description: "Collaborated with the software engineering team to design, build, and deploy full-stack web application modules and RESTful microservices.",
      achievements: [
        "Developed reusable React UI components that improved frontend loading performance by 25%",
        "Integrated backend REST APIs with Node.js and implemented data validation middlewares",
        "Participated in daily agile standups, code reviews, and Git-based collaborative sprint workflows",
        "Contributed to database query optimization for MySQL tables handling user transaction logs"
      ],
      skills: ["React", "JavaScript", "Node.js", "MySQL", "Git", "REST APIs"]
    },
    {
      role: "Technical Lead & Member",
      organization: "Computer Science Students Association (Department Club)",
      location: "College Campus, Bengaluru",
      period: "August 2023 – Present",
      type: "Technical Activity",
      description: "Leading technical workshops and hands-on coding sessions for junior students across full-stack development, version control, and problem solving.",
      achievements: [
        "Conducted 4+ technical bootcamps on Git/GitHub fundamentals and React basics attended by 150+ students",
        "Mentored student teams during internal college hackathons and coding challenges",
        "Managed department technical project repository and documentation standards"
      ],
      skills: ["Leadership", "Public Speaking", "Git", "React", "Mentoring"]
    },
    {
      role: "Hackathon Participant & Finalist",
      organization: "State-Level Smart City Hackathon / Inter-College Hackathons",
      location: "Bengaluru, India",
      period: "2023 – 2024",
      type: "Hackathons",
      description: "Built rapid full-stack prototypes addressing urban transportation and civic grievance workflows under intensive 24–36 hour timelines.",
      achievements: [
        "Ranked among top finalist teams for pitching UrbanEye civic tracking prototype",
        "Designed and deployed responsive web interfaces and API integrations under tight time constraints",
        "Presented technical architecture and live demos to industry judging panels"
      ],
      skills: ["Rapid Prototyping", "Full-Stack Dev", "Teamwork", "Pitching"]
    },
    {
      role: "Open Source Contributor",
      organization: "GitHub Community & Developer Tools",
      location: "Remote / Online",
      period: "2023 – Present",
      type: "Open Source",
      description: "Actively contributing to open-source developer tooling, documentation, and frontend libraries.",
      achievements: [
        "Submitted pull requests for bug fixes, UI improvements, and documentation enhancements",
        "Authored open-source utility components and starters shared with student developer community"
      ],
      skills: ["Git", "GitHub Actions", "Documentation", "Code Quality"]
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
      title: "350+ Problems Solved on LeetCode & HackerRank",
      category: "Competitive Programming",
      date: "2023 – Present",
      organization: "Competitive Coding Platforms",
      description: "Maintained a consistent daily problem-solving streak focusing on Arrays, Trees, Graphs, Dynamic Programming, and System Design fundamentals.",
      icon: "Code2"
    },
    {
      title: "5-Star Gold Badge in Problem Solving & Python",
      category: "Competitions",
      date: "2023",
      organization: "HackerRank",
      description: "Earned 5-Star proficiency badges in both Problem Solving and Python tracks by solving complex algorithmic challenges.",
      icon: "Award"
    },
    {
      title: "Academic Merit & Department Recognition",
      category: "Academic",
      date: "2023",
      organization: "College of Engineering",
      description: "Awarded Certificate of Merit for outstanding academic performance and maintaining a 9.3+ CGPA in Computer Science Engineering.",
      icon: "Medal"
    }
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      handle: "kishan_ks",
      url: "https://leetcode.com",
      badge: "Top 15%",
      stats: "250+ Solved",
      color: "#FFA116",
      bgLight: "bg-amber-50 dark:bg-amber-950/30",
      borderLight: "border-amber-200 dark:border-amber-800/40",
      description: "Focus on Medium & Hard DSA questions in Java and C++.",
      icon: "Code2"
    },
    {
      platform: "GitHub",
      handle: "kishanks",
      url: "https://github.com",
      badge: "Active",
      stats: "20+ Repositories",
      color: "#24292e",
      bgLight: "bg-slate-50 dark:bg-slate-900/40",
      borderLight: "border-slate-200 dark:border-slate-800/40",
      description: "Open source contributions, web apps, and machine learning scripts.",
      icon: "Github"
    },
    {
      platform: "HackerRank",
      handle: "kishan_ks",
      url: "https://hackerrank.com",
      badge: "5-Star Gold",
      stats: "Problem Solving & Python",
      color: "#00EA64",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
      borderLight: "border-emerald-200 dark:border-emerald-800/40",
      description: "Earned verified skill badges in Core Algorithms & Python.",
      icon: "Award"
    },
    {
      platform: "CodeChef",
      handle: "kishan_ks",
      url: "https://codechef.com",
      badge: "3-Star",
      stats: "1600+ Rating",
      color: "#5B4638",
      bgLight: "bg-orange-50 dark:bg-orange-950/30",
      borderLight: "border-orange-200 dark:border-orange-800/40",
      description: "Regular participant in Starters and Cook-Off rated contests.",
      icon: "Binary"
    },
    {
      platform: "GeeksforGeeks",
      handle: "kishan_ks",
      url: "https://geeksforgeeks.org",
      badge: "400+ Score",
      stats: "100+ Articles & POTD",
      color: "#2F8D46",
      bgLight: "bg-green-50 dark:bg-green-950/30",
      borderLight: "border-green-200 dark:border-green-800/40",
      description: "Practice problem of the day and CS fundamental concept articles.",
      icon: "BookOpen"
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
      name: "algorunner",
      description: "Interactive data structures and algorithmic visualizer for computer science students.",
      language: "Java",
      languageColor: "#b07219",
      stars: 9,
      forks: 2,
      url: "https://github.com/kishanks/algorunner",
      topics: ["java", "algorithms", "data-structures", "visualization"]
    }
  ]
};
