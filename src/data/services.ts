import { ServiceData } from "../types/service";

export const SERVICES: ServiceData[] = [
  {
    id: "university-application",
    title: "University Application",
    subtitle:
      "Expert guidance through the entire university application process with personalized support.",
    offerText:
      "Our comprehensive university application service provides end-to-end support to help you navigate the complex process of applying to universities abroad.",
    process: [
      {
        title: "Initial Consultation",
        bullets: [
          "Assessment of your academic background and career goals",
          "Discussion of preferred countries and universities",
          "Timeline planning for application deadlines",
        ],
      },
      {
        title: "Application Strategy",
        bullets: [
          "University selection based on your profile",
          "Program recommendation and research",
          "Deadline management",
        ],
      },
    ],
    whyChoose: [
      "Expert Knowledge across countries",
      "Personalized approach",
      "Proven success rate",
      "Full ongoing support",
    ],
    getStartedText:
      "Ready to begin your university application journey? Contact us today.",
  },

  {
  id: "visa-assistance",
  title: "Visa Assistance",
  subtitle:
    "Comprehensive visa application support with document preparation and interview coaching for success.",
  offerText:
    "Navigating visa applications can be overwhelming, but our expert team is here to guide you through every step of the process. We provide comprehensive support to ensure your visa application is complete, accurate, and submitted on time.",
  process: [
    {
      title: "Document Preparation",
      bullets: [
        "Visa application form completion and review",
        "Required document checklist and verification",
        "Financial documentation assistance",
        "Academic and professional document preparation",
        "Translation services for non-English documents",
      ],
    },
    {
      title: "Application Support",
      bullets: [
        "Country-specific visa requirements guidance",
        "Application fee payment assistance",
        "Appointment scheduling and management",
        "Document submission tracking",
        "Status updates and follow-up",
      ],
    },
    {
      title: "Interview Preparation",
      bullets: [
        "Mock interview sessions",
        "Common interview questions and answers",
        "Document presentation guidance",
        "Confidence building techniques",
        "Post-interview support",
      ],
    },
  ],
  whyChoose: [
    "Expert Knowledge: Deep understanding of visa requirements across different countries",
    "High Success Rate: Proven track record of successful visa applications",
    "Personalized Service: Tailored approach based on your specific situation",
    "Stress-Free Process: We handle the complexities so you can focus on your goals",
    "Ongoing Support: Available throughout the entire process and beyond",
  ],
  getStartedText:
    "Don't let visa complications delay your dreams. Contact us today for a consultation and let us help you secure your visa with confidence.",
},

{
  id: "academic-support",
  title: "Academic Support",
  subtitle:
    "Ongoing academic assistance including tutoring, study planning, and educational resource guidance to ensure your success.",
  offerText:
    "Our comprehensive academic support services are designed to help you excel in your studies and achieve your educational goals. Whether you're struggling with specific subjects or looking to enhance your academic performance, our expert tutors and educational consultants provide personalized support tailored to your needs.",
  process: [
    {
      title: "Subject-Specific Tutoring",
      bullets: [
        "Mathematics: Algebra, calculus, statistics, and advanced mathematics",
        "Sciences: Physics, chemistry, biology, and environmental science",
        "Languages: English, literature, and foreign language support",
        "Social Sciences: History, geography, economics, and political science",
        "Computer Science: Programming, data structures, and software development",
      ],
    },
    {
      title: "Study Skills Development",
      bullets: [
        "Time management and organization techniques",
        "Note-taking strategies and study methods",
        "Exam preparation and test-taking strategies",
        "Research skills and academic writing",
        "Critical thinking and problem-solving approaches",
      ],
    },
    {
      title: "Educational Planning",
      bullets: [
        "Course selection and academic pathway planning",
        "Grade improvement strategies",
        "Academic goal setting and tracking",
        "Learning style assessment and adaptation",
        "Study schedule development",
      ],
    },
    {
      title: "Learning Formats",
      bullets: [
        "One-on-one tutoring with customized lesson plans",
        "Group sessions for collaborative learning",
        "Flexible online tutoring with interactive tools",
        "Organized study groups for specific subjects or exam preparation",
      ],
    },
    {
      title: "Our Approach",
      bullets: [
        "Comprehensive academic assessment",
        "Personalized learning plan development",
        "Regular progress monitoring and adjustments",
        "Parent communication and progress reports",
      ],
    },
  ],
  whyChoose: [
    "Qualified Tutors: Experienced educators with subject matter expertise",
    "Proven Methods: Evidence-based teaching strategies that deliver results",
    "Flexible Scheduling: Sessions that fit your busy schedule",
    "Progress Tracking: Regular assessments and monitoring",
    "Holistic Approach: Focus on academic excellence and confidence building",
  ],
  getStartedText:
    "Ready to boost your academic performance? Contact us today to schedule an assessment and begin your journey to academic excellence.",
},

{
  id: "test-preparation",
  title: "Test Preparation",
  subtitle:
    "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, and other standardized tests required for admission.",
  offerText:
    "Our expert test preparation services are designed to help you achieve your target scores on standardized tests required for university admission and professional certification. We provide comprehensive training, practice materials, and personalized coaching to ensure your success.",
  process: [
    {
      title: "Tests We Prepare You For",
      bullets: [
        "IELTS, TOEFL, PTE, and Cambridge English exams",
        "GRE, GMAT, LSAT, and MCAT graduate admissions tests",
        "SAT, ACT, and AP undergraduate examinations",
      ],
    },
    {
      title: "Diagnostic Assessment",
      bullets: [
        "Initial test to identify strengths and weaknesses",
        "Personalized study plan development",
        "Target score setting and timeline planning",
      ],
    },
    {
      title: "Comprehensive Training",
      bullets: [
        "Reading comprehension strategies for various question types",
        "Writing skills: essay structure, grammar, and vocabulary",
        "Listening skills: note-taking and comprehension techniques",
        "Speaking skills: fluency, pronunciation, and confidence building",
        "Quantitative skills: math concepts and problem-solving strategies",
      ],
    },
    {
      title: "Practice and Review",
      bullets: [
        "Regular timed practice tests",
        "Detailed performance analysis and feedback",
        "Weak area identification and targeted improvement",
        "Progress tracking and score prediction",
      ],
    },
    {
      title: "Preparation Formats",
      bullets: [
        "Individual one-on-one coaching sessions",
        "Structured group classes",
        "Intensive bootcamps for short preparation timelines",
        "Flexible online preparation with virtual coaching",
      ],
    },
  ],
  whyChoose: [
    "Expert Instructors: Certified teachers with proven track records",
    "Proven Strategies: Effective test-taking techniques",
    "Comprehensive Materials: Access to the latest practice tests and resources",
    "Flexible Scheduling: Sessions that fit your schedule",
    "High Success Rate: Consistently strong student performance",
  ],
  getStartedText:
    "Ready to achieve your target test score? Contact us today to schedule a diagnostic assessment and begin your test preparation journey.",
},

{
  id: "career-job-support",
  title: "Career and Job Support",
  subtitle:
    "Professional career guidance and job search assistance to align your academic choices with long-term career goals.",
  offerText:
    "Our comprehensive career and job support services help you navigate the professional world with confidence. Whether you're a recent graduate, career changer, or looking to advance in your current field, we provide the guidance and resources you need to achieve your professional goals.",
  process: [
    {
      title: "Career Planning and Development",
      bullets: [
        "Career assessment to identify strengths, interests, and preferences",
        "Short-term and long-term goal setting",
        "Skill gap analysis and professional development planning",
        "Career path mapping and industry research",
      ],
    },
    {
      title: "Job Search Support",
      bullets: [
        "Professional resume writing and optimization",
        "Personalized cover letter development",
        "LinkedIn profile optimization",
        "Effective job search strategies",
        "Application tracking and follow-ups",
      ],
    },
    {
      title: "Interview Preparation",
      bullets: [
        "Mock interviews with detailed feedback",
        "Preparation for common interview questions",
        "STAR method training for behavioral interviews",
        "Technical interview preparation",
        "Salary negotiation strategies",
      ],
    },
    {
      title: "Professional Development",
      bullets: [
        "In-demand skill identification and development",
        "Certification guidance and recommendations",
        "Networking strategies and relationship building",
        "Industry insights and market trend analysis",
        "Mentorship program connections",
      ],
    },
    {
      title: "Industries We Support",
      bullets: [
        "Technology and IT",
        "Business and Finance",
        "Healthcare",
        "Education",
        "Engineering",
        "Creative Industries",
      ],
    },
  ],
  whyChoose: [
    "Expert Guidance: Experienced career counselors with industry knowledge",
    "Personalized Approach: Tailored strategies based on your unique profile",
    "Proven Methods: Evidence-based techniques that deliver results",
    "Comprehensive Support: End-to-end assistance from planning to placement",
    "Industry Connections: Access to professional networks and opportunities",
  ],
  getStartedText:
    "Ready to take the next step in your career? Contact us today for a consultation and let us help you achieve your professional goals.",
},

{
  id: "counselling-search",
  title: "Counselling & Search",
  subtitle:
    "Personalized counselling and university search services to find the best educational opportunities matching your goals.",
  offerText:
    "Our counselling and search services provide personalized guidance to help you find the perfect educational opportunities that align with your academic goals, career aspirations, and personal preferences. We take a holistic approach to ensure you make informed decisions about your educational future.",
  process: [
    {
      title: "Educational Counselling",
      bullets: [
        "Academic assessment and potential evaluation",
        "Educational and career goal setting",
        "Interest profiling and learning style analysis",
        "Academic planning and roadmap development",
      ],
    },
    {
      title: "University Search and Selection",
      bullets: [
        "Comprehensive university research worldwide",
        "Program matching based on interests and goals",
        "Admission requirements and prerequisite guidance",
        "Evaluation of rankings, reputation, and campus culture",
      ],
    },
    {
      title: "Country and Location Guidance",
      bullets: [
        "Study destination comparison and analysis",
        "Cultural adaptation and lifestyle considerations",
        "Tuition, living cost, and financial aid comparison",
        "Post-graduation work and immigration opportunities",
      ],
    },
    {
      title: "Specialized Counselling",
      bullets: [
        "Scholarship and financial aid guidance",
        "Gap year and transfer student support",
        "International student services",
        "Parent counselling and advisory support",
      ],
    },
    {
      title: "Application and Decision Support",
      bullets: [
        "Initial consultation and detailed assessment",
        "Research and university matching",
        "Decision-making guidance",
        "Ongoing application support",
      ],
    },
  ],
  whyChoose: [
    "Personalized Approach: Individualized attention and tailored guidance",
    "Expert Knowledge: Experienced educational consultants",
    "Comprehensive Support: End-to-end assistance throughout the process",
    "Global Network: Access to universities and programs worldwide",
    "Proven Results: High student satisfaction and goal achievement rate",
  ],
  getStartedText:
    "Ready to find your perfect educational opportunity? Contact us today for a consultation and let us help you discover the best path for your academic future.",
},

  // 🔥 ADD YOUR OTHER 5 SERVICES HERE
];