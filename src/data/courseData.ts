export const ENROLL_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0FAksYraSnPJbrVS6M-WooCyaQEaINndkbT5o4FKGHBWxrg/viewform?usp=publish-editor";

export interface AboutFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CourseTopic {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  keyTakeaway: string;
}

export interface WhyChooseCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefit: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const ABOUT_FEATURES: AboutFeature[] = [
  {
    id: "feature-1",
    title: "Learn Online",
    description: "Study from anywhere, anytime with self-paced video modules, live sessions, and 24/7 learning portal access.",
    iconName: "Globe"
  },
  {
    id: "feature-2",
    title: "Hands-on Projects",
    description: "Build real Generative AI projects that build your portfolio and showcase your practical capability to employers.",
    iconName: "Code2"
  },
  {
    id: "feature-3",
    title: "Expert Instructors",
    description: "Learn from industry professionals who are actively building and deploying AI models in production.",
    iconName: "UserCheck"
  },
  {
    id: "feature-4",
    title: "Certificate",
    description: "Get a verified certificate of completion from Neuronix AI to add to your LinkedIn profile and resume.",
    iconName: "Award"
  }
];

export const COURSE_MODULES: CourseTopic[] = [
  {
    id: "m1",
    number: "01",
    title: "Introduction to AI & Machine Learning",
    description: "Foundational principles of artificial intelligence, supervised vs unsupervised learning, and the modern AI paradigm shift.",
    iconName: "Sparkles",
    tags: ["AI Fundamentals", "Machine Learning", "AI History"],
    keyTakeaway: "Understand core concepts and how AI evolved into modern generative models."
  },
  {
    id: "m2",
    number: "02",
    title: "Neural Networks Basics",
    description: "Deep dive into perceptrons, activation functions, backpropagation, and deep neural network architectures.",
    iconName: "Network",
    tags: ["Deep Learning", "Weights & Biases", "Backpropagation"],
    keyTakeaway: "Grasp how artificial neural networks process data and learn patterns."
  },
  {
    id: "m3",
    number: "03",
    title: "Large Language Models (LLMs)",
    description: "Architecture of Transformer models, self-attention mechanisms, tokenization, and pre-training methodologies.",
    iconName: "Brain",
    tags: ["Transformers", "GPT", "Attention Mechanism"],
    keyTakeaway: "Master the technology behind modern LLMs like Gemini, GPT-4, and Llama."
  },
  {
    id: "m4",
    number: "04",
    title: "Prompt Engineering",
    description: "Systematic techniques for zero-shot, few-shot, chain-of-thought prompting, context window optimization, and prompt guardrails.",
    iconName: "Terminal",
    tags: ["Chain of Thought", "Context Optimization", "System Instructions"],
    keyTakeaway: "Craft high-precision prompts to elicit exact outputs from generative models."
  },
  {
    id: "m5",
    number: "05",
    title: "Building AI Applications",
    description: "Developing intelligent apps with AI SDKs, REST APIs, state management, and real-time response streaming.",
    iconName: "Cpu",
    tags: ["API Integration", "AI Agents", "Streaming Responses"],
    keyTakeaway: "Connect AI models to web applications and business logic effortlessly."
  },
  {
    id: "m6",
    number: "06",
    title: "Image & Text Generation Models",
    description: "Exploration of diffusion models, multimodal systems, text-to-image synthesis, and fine-tuning strategies.",
    iconName: "Palette",
    tags: ["Diffusion Models", "Multimodal AI", "Text-to-Image"],
    keyTakeaway: "Generate multi-format assets including text, code, imagery, and structured data."
  },
  {
    id: "m7",
    number: "07",
    title: "AI Tools & Frameworks",
    description: "Practical mastery of industry-standard toolkits including PyTorch, LangChain, HuggingFace, and Gemini APIs.",
    iconName: "Wrench",
    tags: ["PyTorch", "LangChain", "Hugging Face", "Vector DBs"],
    keyTakeaway: "Utilize the modern ecosystem of frameworks used by AI developers worldwide."
  },
  {
    id: "m8",
    number: "08",
    title: "Real-World Projects",
    description: "Guided creation of functional generative applications like intelligent search tools, custom chatbots, and creative content assistants.",
    iconName: "FolderKanban",
    tags: ["Chatbots", "Content Generators", "Semantic Search"],
    keyTakeaway: "Translate theoretical concepts into production-grade functional software."
  },
  {
    id: "m9",
    number: "09",
    title: "Capstone Project",
    description: "Design, build, and present a complete end-to-end Generative AI application under mentor guidance to receive final certification.",
    iconName: "Rocket",
    tags: ["Full Application", "Portfolio Showcase", "Final Review"],
    keyTakeaway: "Complete a signature portfolio project to demonstrate your market readiness."
  }
];

export const WHY_CHOOSE_NEURONIX: WhyChooseCard[] = [
  {
    id: "why-1",
    title: "Flexible Online Learning",
    description: "Designed for students and working professionals. Study at your own pace with 24/7 access to recorded lectures and materials.",
    iconName: "Clock",
    benefit: "100% Online & Self-Paced Flexibility"
  },
  {
    id: "why-2",
    title: "Hands-on Projects",
    description: "Learn by doing. Write code, build generative AI tools, and create a strong technical portfolio that stands out.",
    iconName: "Layers",
    benefit: "Practical Code-First Approach"
  },
  {
    id: "why-3",
    title: "Expert Mentorship",
    description: "Direct guidance from seasoned AI engineers and industry practitioners who provide code reviews and resolve queries.",
    iconName: "Users",
    benefit: "Direct Guidance & Feedback"
  },
  {
    id: "why-4",
    title: "Real-World Skills Employers Value",
    description: "Curriculum tailored to current industry demand, focusing on production AI tools, prompt engineering, and LLM application development.",
    iconName: "CheckCircle2",
    benefit: "Industry-Aligned Curriculum"
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: "Enroll in the Course",
    description: "Sign up for the Generative AI course to begin your journey toward mastering state-of-the-art AI technologies.",
    detail: "Click any 'Enroll Now' button to access our online registration portal.",
    iconName: "UserPlus"
  },
  {
    stepNumber: 2,
    title: "Apply via Form",
    description: "Submit your enrollment through our simple form with your basic contact and learning background details.",
    detail: "Fast 2-minute registration with instant email confirmation.",
    iconName: "FileSpreadsheet"
  },
  {
    stepNumber: 3,
    title: "Get Confirmation & Start Learning",
    description: "Receive confirmation, access your student dashboard, and begin your course journey right away.",
    detail: "Get immediate access to course orientation and learning materials.",
    iconName: "GraduationCap"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is this course completely online?",
    answer: "Yes, the Generative AI course by Neuronix AI is 100% online. You can access all learning materials, lectures, and project submission portals from anywhere in the world."
  },
  {
    question: "Do I need prior coding experience?",
    answer: "Basic familiarity with programming concepts (such as Python basics) is helpful, but the course starts with fundamental concepts and guides you step-by-step into advanced AI tools."
  },
  {
    question: "How long does the course take to complete?",
    answer: "The course is designed to be completed in 6 to 8 weeks with approximately 4-6 hours of weekly commitment, though you can progress at your own flexible pace."
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer: "Yes! After completing all modules and submitting your Capstone Project, you will receive a verified Neuronix AI Certificate of Completion."
  },
  {
    question: "How do I enroll in the course?",
    answer: "Simply click any 'Enroll Now' button on this page. It will open our official Google Enrollment Form where you can submit your details and secure your slot."
  }
];
