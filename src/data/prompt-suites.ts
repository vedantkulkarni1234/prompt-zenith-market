import { PromptSuite } from "@/types";

export const promptSuites: PromptSuite[] = [
  {
    id: "creative-suite",
    slug: "creative",
    name: "Creative Suite",
    category: "Creativity",
    shortDescription: "Unlock your creative potential with AI-assisted writing, storytelling, and content generation.",
    fullDescription: "The Creative Suite is designed for writers, artists, and content creators looking to enhance their creative process with AI. This collection of 50 expert-crafted prompts helps you brainstorm ideas, overcome creative blocks, develop characters and storylines, and generate various forms of creative content. From poetry to fiction, blog posts to scripts, these prompts are optimized to inspire and elevate your creative work.",
    price: 49.99,
    originalPrice: 79.99,
    image: "/creative-icon.svg",
    features: [
      "Character development frameworks",
      "Plot and storyline generators",
      "Poetry and lyric writing assistants",
      "Blog post and article structures",
      "Creative brainstorming techniques",
      "Dialogue enhancement prompts",
      "Genre-specific writing guides"
    ],
    samplePrompts: [
      "Create a complex protagonist with a unique backstory, moral dilemma, and character arc for a [GENRE] story set in [SETTING].",
      "Generate a poem in the style of [POET] about [THEME] using vivid imagery and metaphors related to [ELEMENT].",
      "Develop an outline for an engaging blog post on [TOPIC] that incorporates personal anecdotes, research data, and practical advice."
    ],
    useCase: "A novelist using the Creative Suite to develop multidimensional characters, plot intricate storylines, overcome writer's block, and refine dialogue for their upcoming book."
  },
  {
    id: "business-suite",
    slug: "business",
    name: "Business Suite",
    category: "Professional",
    shortDescription: "Enhance business communications, strategy development, and professional workflows.",
    fullDescription: "The Business Suite helps professionals streamline communications, enhance strategic thinking, and optimize business processes. This collection of 50 premium prompts is designed for executives, managers, entrepreneurs, and business professionals seeking to leverage AI for more effective business operations. From crafting compelling emails and presentations to developing strategic plans and analyzing business scenarios, these prompts deliver practical business value.",
    price: 59.99,
    originalPrice: 89.99,
    image: "/business-icon.svg",
    features: [
      "Email and communication templates",
      "Strategic planning frameworks",
      "Meeting agenda and note optimizers",
      "Business proposal generators",
      "Negotiation script assistants",
      "Employee feedback formulations",
      "Crisis communication templates"
    ],
    samplePrompts: [
      "Draft a professional email to [STAKEHOLDER] requesting [RESOURCE/ACTION] while emphasizing [BENEFIT] and addressing potential concerns about [CONCERN].",
      "Create a SWOT analysis framework for [BUSINESS/PRODUCT] with specific questions to identify key strengths, weaknesses, opportunities, and threats in the current market.",
      "Generate a detailed agenda for a 60-minute strategy meeting focused on [OBJECTIVE] with time allocations, discussion points, and desired outcomes."
    ],
    useCase: "A startup founder using the Business Suite to craft investor pitches, develop business plans, create professional communications, and structure team meetings efficiently."
  },
  {
    id: "technical-suite",
    slug: "technical",
    name: "Technical Suite",
    category: "Technology",
    shortDescription: "Accelerate coding, debugging, documentation, and technical problem-solving.",
    fullDescription: "The Technical Suite is crafted for developers, engineers, and technical professionals seeking to enhance their workflow and productivity. This collection of 50 specialized prompts helps with code generation, debugging, documentation, technical writing, and problem-solving across various programming languages and platforms. From API design to system architecture, these prompts are optimized to provide clear, accurate, and useful technical outputs.",
    price: 69.99,
    originalPrice: 99.99,
    image: "/technical-icon.svg",
    features: [
      "Code generation templates",
      "Debugging assistants",
      "Technical documentation frameworks",
      "System design patterns",
      "Algorithm explanation prompts",
      "Code review guidelines",
      "API design best practices"
    ],
    samplePrompts: [
      "Debug this [LANGUAGE] code snippet that should [FUNCTIONALITY] but is producing [ERROR/UNEXPECTED RESULT]. Explain the issue and provide a corrected version with comments.",
      "Generate comprehensive documentation for a function that [FUNCTIONALITY] including parameters, return values, exceptions, and usage examples.",
      "Design a system architecture for [APPLICATION TYPE] that handles [REQUIREMENTS] with considerations for scalability, security, and performance. Include component diagrams and data flow."
    ],
    useCase: "A software developer using the Technical Suite to debug complex code issues, generate boilerplate code, design efficient algorithms, and create clear technical documentation for their team."
  },
  {
    id: "educational-suite",
    slug: "educational",
    name: "Educational Suite",
    category: "Learning",
    shortDescription: "Transform teaching, learning, and educational content creation across subjects.",
    fullDescription: "The Educational Suite is designed for teachers, instructors, students, and educational content creators. This collection of 50 education-focused prompts helps with lesson planning, content explanation, assessment creation, and learning resource development across various subjects and educational levels. From simplifying complex concepts to creating engaging educational activities, these prompts enhance both teaching and learning experiences.",
    price: 49.99,
    originalPrice: 79.99,
    image: "/education-icon.svg",
    features: [
      "Lesson plan generators",
      "Concept explanation frameworks",
      "Assessment question creators",
      "Student feedback templates",
      "Learning activity designers",
      "Subject-specific teaching guides",
      "Educational content simplifiers"
    ],
    samplePrompts: [
      "Create a detailed lesson plan for teaching [CONCEPT] to [GRADE LEVEL] students, including objectives, activities, materials needed, assessment methods, and differentiation strategies.",
      "Explain [COMPLEX CONCEPT] in simple terms appropriate for [AGE/LEVEL] using analogies, examples, and visual descriptions. Include 3-5 check-for-understanding questions.",
      "Design a rubric for assessing [ASSIGNMENT TYPE] that evaluates [CRITERIA] with clear descriptions of performance at different levels."
    ],
    useCase: "A high school science teacher using the Educational Suite to develop engaging lesson plans, create differentiated assessments, simplify complex topics, and design interactive learning activities for students with diverse learning needs."
  },
  {
    id: "marketing-suite",
    slug: "marketing",
    name: "Marketing Suite",
    category: "Marketing",
    shortDescription: "Elevate marketing copy, campaign strategies, and customer engagement.",
    fullDescription: "The Marketing Suite is tailored for marketers, copywriters, and brand strategists seeking to enhance their marketing efforts with AI assistance. This collection of 50 marketing-focused prompts helps with copywriting, campaign planning, audience analysis, and content strategy across various marketing channels. From crafting compelling headlines to developing comprehensive campaign strategies, these prompts are designed to boost marketing effectiveness and customer engagement.",
    price: 59.99,
    originalPrice: 89.99,
    image: "/marketing-icon.svg",
    features: [
      "Copywriting frameworks",
      "Campaign strategy templates",
      "Social media content generators",
      "Email marketing sequences",
      "Value proposition formulators",
      "Audience persona developers",
      "A/B testing framework"
    ],
    samplePrompts: [
      "Create 5 compelling headlines for [PRODUCT/SERVICE] that highlight [KEY BENEFIT] and appeal to [TARGET AUDIENCE] using the AIDA framework.",
      "Develop a content strategy for launching [PRODUCT/SERVICE] to [TARGET AUDIENCE], including content types, channels, messaging themes, and a 30-day content calendar.",
      "Write a persuasive product description for [PRODUCT] that highlights [FEATURES], emphasizes [BENEFITS], addresses [PAIN POINTS], and includes a strong call to action."
    ],
    useCase: "A marketing manager using the Marketing Suite to develop campaign strategies, write persuasive copy, create engaging social media content, and design email sequences that convert prospects into customers."
  },
  {
    id: "ethical-hacking-suite",
    slug: "ethical-hacking",
    name: "Ethical Hacking Suite",
    category: "Security",
    shortDescription: "Master ethical hacking and cybersecurity with AI-powered prompts for penetration testing and security analysis.",
    fullDescription: "The Ethical Hacking Suite empowers security professionals and aspiring ethical hackers with 50 expertly crafted prompts for security assessment, vulnerability analysis, and penetration testing. From network security to web application testing, these prompts guide you through professional security practices while maintaining ethical standards. Perfect for security researchers, penetration testers, and IT professionals focused on strengthening cybersecurity measures.",
    price: 79.99,
    originalPrice: 119.99,
    image: "/technical-icon.svg",
    features: [
      "Penetration testing frameworks",
      "Security assessment templates",
      "Vulnerability analysis guides",
      "Network security protocols",
      "Web application security testing",
      "Social engineering awareness",
      "Security report generation"
    ],
    samplePrompts: [
      "Create a comprehensive security assessment plan for [SYSTEM_TYPE] focusing on [SECURITY_ASPECTS] and common vulnerabilities.",
      "Generate a structured approach to identify and analyze potential security vulnerabilities in [APPLICATION_TYPE] using [METHODOLOGY].",
      "Develop a detailed security report template that documents findings from [TEST_TYPE] with severity ratings and mitigation recommendations."
    ],
    useCase: "A cybersecurity consultant using the Ethical Hacking Suite to conduct thorough security assessments, identify vulnerabilities, and provide detailed reports with actionable recommendations for improving system security."
  }
];

export const getPromptSuiteBySlug = (slug: string): PromptSuite | undefined => {
  return promptSuites.find(suite => suite.slug === slug);
};

export const getPromptSuiteById = (id: string): PromptSuite | undefined => {
  return promptSuites.find(suite => suite.id === id);
};
