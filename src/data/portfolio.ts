// Portfolio data for Achyuth Mukund

export const personalInfo = {
  name: "Achyuth Mukund",
  location: "Chennai, Tamil Nadu",
  tagline: "Building Intelligent Systems",
  description: "Software developer crafting intelligent systems at the intersection of GenAI, IoT, and ML. Shipping clean code that solves real problems.",
  email: "achyuth2004@gmail.com",
  phone: "+91 73584 41472",
  social: {
    github: "https://github.com/achyuth-2308",
    linkedin: "https://www.linkedin.com/in/achyuth-mukund/",
    youtube: "https://www.youtube.com/@AchyuthMukund",
    instagram: "https://instagram.com/achyuth_2308",
    medium: "https://medium.com/@achyuth_2308",
    researchgate: "https://www.researchgate.net/profile/Achyuth-Mukund",
    orcid: "https://orcid.org/0009-0002-5798-0858",
    linktree: "https://linktr.ee/achyuth.mukund"
  }
};

export const about = {
  bio: "Motivated and versatile developer with a strong sense of responsibility and discipline, committed to delivering efficient, high-performance software solutions. Eager to contribute to innovative, impact-driven projects while enhancing technical expertise and problem-solving capabilities in real-world environments.",
  education: [
    {
      degree: "B.Tech, Computer Science & Engineering",
      specialization: "Internet of Things (IoT)",
      institution: "Shiv Nadar University Chennai",
      duration: "2022 - 2026",
      grade: "CGPA: 7.62/10"
    },
    {
      degree: "B.S, Data Science and Applications",
      specialization: "Data Science",
      institution: "Indian Institute of Technology (IIT), Madras",
      duration: "2024 - Present",
      grade: "CGPA: 7.87/10"
    }
  ],
  languages: ["English", "Tamil", "Hindi", "Sanskrit"]
};

export const skills = {
  languages: ["Python", "C/C++", "Java", "JavaScript", "HTML/CSS", "LaTeX", "MySQL"],
  frameworks: ["LangChain", "LangGraph", "Flask", "React.js", "PyTorch", "TensorFlow"],
  tools: ["Git", "GitHub", "Postman", "Arduino IDE", "VS Code", "Jupyter", "Azure", "Linux"],
  domains: ["GenAI", "RAG Pipelines", "LLMs", "IoT", "Machine Learning", "Data Science"]
};

export const certifications = [
  { name: "Postman API Fundamentals Student Expert", issuer: "Postman" },
  { name: "Microsoft Azure Cloud Services", issuer: "Coursera" },
  { name: "Enterprise Design Thinking Practitioner", issuer: "IBM" },
  { name: "Programming in Modern C++", issuer: "IIT Kharagpur - NPTEL" },
  { name: "Data Science and Analytics", issuer: "HP Foundation" },
  { name: "Cyber Security Trends & Emerging Applications", issuer: "CyberTEA - IIIT Sri City" },
  { name: "Introduction to LLMs", issuer: "IIT Delhi - NPTEL" }
];

export const experience = [
  {
    role: "DevOps and Test Automation Intern",
    company: "Logitech",
    type: "Internship",
    duration: "Feb 2026 - Present",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Working on automating CI failure analysis during NPI runs. Building and integrating a log processing pipeline into GitHub Actions that reads test logs, extracts failure details, summarizes them using LLMs, and groups similar issues to reduce duplicate debugging effort.",
      "Focusing on making the system stable under real workloads - handling large log sizes, token limits, API rate limits, parallel execution, and clustering accuracy. The goal is to reduce manual log reading time and make failure triage faster and more structured for engineering teams."
    ],
    technologies: ["GitHub Actions", "CI/CD", "LLMs", "Python", "Log Processing", "DevOps"]
  },
  {
    role: "GenAI Intern",
    company: "Prodapt Solutions Pvt. Ltd.",
    type: "Internship",
    duration: "May 2025 - Jul 2025",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Designed and deployed enterprise-grade Proof-of-Concepts (PoC) solutions at the intersection of Generative AI and Machine Learning, showcasing intelligent AI agents, autonomous task handlers, and workflow optimizers for clients across telecom, media, and allied industries.",
      "Engineered multi-agent systems using LangGraph, LangChain, and Gemini APIs, incorporating RAG pipelines, LLM fine-tuning, and vector databases to demonstrate technical feasibility and drive client-specific solutioning for global sales enablement."
    ],
    technologies: ["LangChain", "LangGraph", "Gemini APIs", "RAG", "LLMs", "Vector Databases"]
  },
  {
    role: "Research Intern",
    company: "Indian Institute of Information Technology, Design and Manufacturing (IIIT-D&M), Kancheepuram",
    type: "Internship",
    duration: "Dec 2024 - Jan 2025",
    location: "Kancheepuram, Tamil Nadu",
    highlights: [
      "Extensively worked on a real-time project using Reinforcement Learning (RL) based-routing on IoT Networks, Localization and Trilateration using Raspberry Pi, ESP-32 & UWB (Ultra Wideband) Sensor.",
      "Implemented routing solutions and prototypes using Decawave DW1000 Library in the Hybrid Intelligence Lab, Department of Computer Science.",
      "Collaborated on dataset collection, experiments, and documentation for research publications."
    ],
    technologies: ["Raspberry Pi", "ESP-32", "UWB Sensors", "Reinforcement Learning", "IoT Networks", "Python"]
  },
  {
    role: "Machine Learning Intern",
    company: "Suvidha Foundation",
    type: "Internship",
    duration: "Jan 2024 - Feb 2024",
    location: "Nagpur, Maharashtra (Remote)",
    highlights: [
      "Conducted Exploratory Data Analysis (EDA) and preprocessed 10,000+ raw data points, optimizing training efficiency by 30% through advanced pipelines in Python and TensorFlow, improving model accuracy by 37%.",
      "Boosted model accuracy by 20% via feature selection and dimensionality reduction, leveraging Scikit-learn and NumPy.",
      "Built and validated ML pipelines and pre-processing scripts; supported model evaluation and wrote reports summarizing findings and recommendations."
    ],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Data Analysis"]
  }
];

export const projects = [
  {
    title: "IntelliRisk",
    subtitle: "AI Powered Risk Evaluation Engine for Engineering Product Compliance",
    category: "GenAI",
    description: "Built a full-stack AI-powered PoC for engineering compliance using LLMs (Google Gemini), dual FAISS VectorStores, and RAG pipelines to semantically compare original and alternate product components.",
    highlights: [
      "Automated parsing of engineering documents (.docx, .csv) and enabled intelligent section-level retrieval and report generation with compliance scores and explainable risk ratings.",
      "Deployed a Streamlit-based interface for dynamic input and report generation, integrating Markdown/Word outputs."
    ],
    technologies: ["Python", "LangChain", "Streamlit", "FAISS", "Gemini APIs", "Pandas"],
    date: "July 2025",
    github: "https://github.com/achyuth-2308/IntelliRisk-AI-Powered-Risk-Evaluation-Engine",
    featured: true
  },
  {
    title: "SmartSeal",
    subtitle: "IoT-based Smart Anti-Tampering Solution for Secure Deliveries",
    category: "IoT",
    description: "Developed an IoT-based smart anti-tampering solution for secure deliveries using embedded sensors and real-time monitoring.",
    highlights: [
      "Real-time tampering detection and alerts",
      "Secure delivery verification system"
    ],
    technologies: ["Arduino", "ESP32", "IoT Sensors", "MQTT", "React"],
    date: "2024",
    github: "https://github.com/achyuth-2308/SmartSeal-IoT-based-Smart-Anti-Tampering-Solution-for-Secure-Deliveries",
    featured: true
  },
  {
    title: "GestureGenius",
    subtitle: "Virtual Cursor Commander",
    category: "Computer Vision",
    description: "Hand gesture-controlled virtual mouse using computer vision and machine learning for touchless interaction.",
    highlights: [
      "Real-time hand tracking and gesture recognition",
      "Mouse control without physical contact"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    date: "2024",
    github: "https://github.com/achyuth-2308/GestureGenius-Virtual-Cursor-Commander",
    featured: true
  },
  {
    title: "EquiBot",
    subtitle: "Self-Balancing Bot",
    category: "IoT",
    description: "A self-balancing robot using PID control algorithms and sensor fusion for stable autonomous movement.",
    highlights: [
      "PID control implementation for balance",
      "Real-time sensor data processing"
    ],
    technologies: ["Arduino", "MPU6050", "DC Motors", "PID Control"],
    date: "2024",
    github: "https://github.com/achyuth-2308/EquiBot-Self-Balancing-Bot",
    featured: true
  },
  {
    title: "SafeStep",
    subtitle: "Smart IoT Safety Net for Elderly",
    category: "IoT",
    description: "An IoT-based safety monitoring system designed to protect elderly individuals with fall detection and emergency alerts.",
    highlights: [
      "Fall detection using accelerometer data",
      "Emergency alert system for caregivers"
    ],
    technologies: ["ESP32", "Accelerometer", "Firebase", "React Native"],
    date: "2024",
    github: "https://github.com/achyuth-2308/SafeStep-Smart-IoT-Safety-Net",
    featured: true
  },
  {
    title: "EcoSphereX",
    subtitle: "IoT-Based Integrated Monitoring System for Environmental Health",
    category: "IoT",
    description: "Monitoring system providing reliable data on Noise, Air, and pH levels using IoT Sensors to enhance environmental quality and assess habitability.",
    highlights: [
      "STIRS Grant Award recipient - Rs.10,000/-",
      "Presented at IIT Madras AIRSS 2025"
    ],
    technologies: ["Arduino IDE", "NodeMCU ESP8266", "DHT-11", "Soil Sensor", "MQTT Protocol"],
    date: "Aug 2023 - Feb 2025",
    github: "https://github.com/achyuth-2308/EcoSphereX-IoT-Based-Integrated-Monitoring-System-for-Environmental-Health",
    featured: true
  }
];

export const researchPhilosophy = `I've always been drawn to problems that sit right at the edge of technology and humanity. What excites me most is the idea that intelligence doesn't need to come at the cost of privacy. That's what pushed me into privacy-preserving AI, especially federated learning for IoT and wearable systems, where data stays where it belongs — with the person, at the edge, not in a distant server.

My work in healthcare AI comes from a simple belief: predictions are powerful only when trust is preserved. Building efficient on-device models for sensitive medical and sensor data fascinates me because it forces creativity — making models smaller, smarter, faster, and more respectful of the people they serve.

Lately, my curiosity has shifted toward the invisible side of AI — implicit and intersectional bias in LLMs. BADx was born from frustration with static bias tests that don't reflect how models behave when they "wear" personas. Studying how bias changes under context, and how we can explain it clearly, keeps me hooked.

To me, research isn't about publishing papers — it's about proving that we can build systems that are intelligent, cautious, and fair at the same time. If a model I build or audit makes even one person trust AI a little more, or protects one piece of sensitive data, I consider that real progress.`;

export const researchProfiles = {
  googleScholar: "https://scholar.google.com/citations?user=zMSeQwQAAAAJ&hl=en",
  researchGate: "https://www.researchgate.net/profile/Achyuth-Mukund/research",
  orcid: "https://orcid.org/my-orcid?orcid=0009-0002-5798-0858"
};

export const publications = [
  {
    number: "01",
    title: "The Synergy of Federated Learning and IoT: Pioneering Privacy and Efficiency in Decentralised Systems",
    authors: "Achyuth Mukund, T. Aditya Varun, Dr. K. B. Sundharakumar",
    year: "2025",
    venue: "ICCIDS 2025",
    publisher: "Springer",
    doi: "10.1007/978-3-031-98360-3_6",
    linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7296823234719621120/",
    mediumPost: "https://medium.com/@achyuth_2308/from-conference-halls-to-real-world-impact-a-journey-into-federated-learning-and-iot-6d46e20fdcdc",
    status: "published",
    images: ["publications/iccids-presentation.png", "publications/iccids-certificate.png"],
    abstract: "This paper explores the integration of Federated Learning with Internet of Things ecosystems, demonstrating how decentralized machine learning can preserve data privacy while maintaining model accuracy. We present a comprehensive framework for implementing privacy-preserving AI in distributed IoT networks."
  },
  {
    number: "02",
    title: "Wearable Technology and Sensor Data in Assistive Systems: Enhancing Rehabilitation Through Predictive Analytics",
    authors: "Achyuth Mukund",
    year: "2025",
    venue: "Predictive Algorithms for Rehabilitation and Assistive Systems",
    publisher: "IGI Global Scientific Publishing",
    doi: "10.4018/979-8-3373-0194-5.ch010",
    linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7339959639381327873/",
    status: "published",
    images: ["publications/igi-global-wearable.png"],
    abstract: "This chapter examines how wearable sensors and predictive analytics can transform rehabilitation practices. We discuss methodologies for collecting, processing, and analyzing sensor data to provide personalized rehabilitation recommendations and real-time progress monitoring."
  },
  {
    number: "03",
    title: "Enhancing Security in Federated Learning for Healthcare Data Sharing",
    authors: "Achyuth Mukund",
    year: "2025",
    venue: "Building Secure Ecosystems: Advances in Privacy-Preserving Machine Learning",
    publisher: "Apple Academic Press (CRC Press, Taylor & Francis Group), Burlington, Canada",
    doi: null,
    linkedinPost: null,
    status: "in-press",
    abstract: "This book chapter addresses critical security challenges in federated learning implementations for healthcare environments. We propose novel security mechanisms to protect sensitive medical data during collaborative model training across distributed healthcare institutions."
  },
  {
    number: "04",
    title: "Invisible Influences: Investigating Implicit Intersectional Biases through Persona Engineering in Large Language Models",
    authors: "Nandini Arimanda, Achyuth Mukund, Dr. Sathi Balan Muthiah, Dr. Rajesh Sharma",
    year: "2026",
    venue: "18th ACM Web Science Conference (WebSci '26)",
    publisher: "ACM",
    doi: "https://doi.org/10.1145/3795766.3799772",
    linkedinPost: null,
    status: "accepted",
    conferenceDate: "May 26–29, 2026",
    conferenceLocation: "Braunschweig, Germany",
    abstract: "A persona-induced bias study introducing the BADx metric for dynamic intersectional bias measurement and explainability. We systematically analyze how implicit biases manifest across 5 state-of-the-art LLMs when prompted with various persona configurations, revealing hidden patterns of intersectional discrimination."
  }
];

export const timeline = [
  { year: "2025", event: "GenAI Intern at Prodapt" },
  { year: "2025", event: "Published in IGI Global" },
  { year: "2025", event: "AIRSS 2025 Presentation at IIT Madras" },
  { year: "2024-25", event: "Research Intern at IIIT D&M Kancheepuram" },
  { year: "2024", event: "Started B.S at IIT Madras" },
  { year: "2024", event: "ML Intern at Suvidha Foundation" },
  { year: "2024", event: "STIRS Grant Award" },
  { year: "2023", event: "Started EcoSphereX Project" },
  { year: "2022", event: "Joined Shiv Nadar University" }
];

export const achievements = [
  {
    title: "STIRS Grant Award",
    year: "2024",
    description: "Recognized for excellence in research and received a grant of Rs.10,000/- for the EcoSphereX project",
    organization: "Shiv Nadar University Chennai"
  },
  {
    title: "IIT Madras AIRSS 2025",
    year: "2025",
    description: "Shortlisted and selected to present EcoSphereX project at All India Research Scholar Summit",
    organization: "IIT Madras"
  },
  {
    title: "World Record Ensemble",
    year: "2023",
    description: "Participated as a keyboardist in a world record music ensemble",
    organization: "Music Community"
  }
];
