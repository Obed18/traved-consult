// blogPosts.ts

export interface BlogSection {
  heading?: string;
  content?: string[] | string;
  list?: string[];
  image?: string;
}

export interface BlogNavigation {
  id: string;
  title: string;
  image: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  sections: BlogSection[];
  prev?: BlogNavigation;
  next?: BlogNavigation;
}

const blogPosts: BlogPost[] = [
  {
    id: "complete-guide-to-studying",
    category: "Study Abroad",
    title: "Your Complete Guide to Studying Abroad in 2026",
    author: "Traved Concult",
    date: "January 10, 2026",
    readTime: "5 min read",
    tags: [
      "Study Abroad",
      "International Education",
      "Student Visa",
      "University Applications",
      "Global Opportunities",
    ],
    image: "/study-abroad-guide.jpg",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Studying abroad is more than earning a degree — it is about expanding your worldview, building global networks, and unlocking international career opportunities.",
          "At Traved Concult, we help students turn this dream into a clear and achievable plan.",
        ],
      },
      {
        heading: "Why Study Abroad?",
        list: [
          "Access to world-class education",
          "Exposure to different cultures",
          "Better career opportunities",
          "International networking",
          "Personal growth and independence",
        ],
      },
      {
        heading: "Step-by-Step Process",
        list: [
          "Choose your preferred country and course",
          "Check entry requirements",
          "Prepare required documents",
          "Apply to institutions",
          "Secure admission",
          "Apply for a student visa",
          "Arrange accommodation and travel",
        ],
      },
    ],
    next: {
      id: "top-5-countries",
      title: "Top 5 Affordable Study Destinations",
      image: "/blog1.jpg",
    },
  },

  {
    id: "top-5-countries",
    category: "Education",
    title: "Top 5 Countries with Affordable Tuition for International Students",
    author: "Traved Concult",
    date: "January 15, 2026",
    readTime: "4 min read",
    tags: [
      "Affordable Universities",
      "Study in Germany",
      "Budget Study Abroad",
      "Scholarships",
      "International Students",
    ],
    image: "/affordable-study.jpg",
    sections: [
      {
        heading: "Quality Education on a Budget",
        content: [
          "Studying abroad does not always require a huge budget. Several countries offer affordable tuition and reasonable living costs.",
        ],
      },
      {
        heading: "Top Affordable Destinations",
        list: [
          "Germany – Low or no tuition fees at public universities",
          "Canada – Affordable compared to the US with post-study work options",
          "Poland – Low tuition and living costs",
          "Malaysia – Competitive tuition and multicultural environment",
          "Ireland – Scholarship opportunities and work pathways",
        ],
      },
    ],
    prev: {
      id: "complete-guide-to-studying",
      title: "Complete Guide to Studying Abroad",
      image: "/article.jpg",
    },
    next: {
      id: "how-to-prepare-sop",
      title: "How to Prepare a Winning SOP",
      image: "/blog2.jpg",
    },
  },

  {
    id: "how-to-prepare-sop",
    category: "Application Tips",
    title: "How to Prepare a Winning Statement of Purpose (SOP)",
    author: "Traved Concult",
    date: "January 20, 2026",
    readTime: "4 min read",
    tags: [
      "SOP Writing",
      "University Admission",
      "Study Application Tips",
      "Statement of Purpose",
    ],
    image: "/blog2.jpg",
    sections: [
      {
        heading: "What is an SOP?",
        content: [
          "Your Statement of Purpose is your opportunity to explain your academic journey, career goals, and reasons for choosing a particular course and institution.",
        ],
      },
      {
        heading: "Tips for a Strong SOP",
        list: [
          "Be clear and focused",
          "Avoid copying templates",
          "Show passion and direction",
          "Keep it structured and professional",
          "Proofread thoroughly",
        ],
      },
    ],
    prev: {
      id: "affordable-study-countries",
      title: "Affordable Study Destinations",
      image: "/blog1.jpg",
    },
    next: {
      id: "visa-interview-tips",
      title: "Student Visa Interview Tips",
      image: "/blog3.jpg",
    },
  },

  {
    id: "visa-interview-tips",
    category: "Visa",
    title: "Student Visa Interview Tips: How to Pass with Confidence",
    author: "Traved Concult",
    date: "January 25, 2026",
    readTime: "4 min read",
    tags: [
      "Student Visa",
      "Visa Interview",
      "Travel Consultancy",
      "Study Abroad Process",
    ],
    image: "/blog3.jpg",
    sections: [
      {
        heading: "Understanding the Interview",
        content: [
          "The student visa interview evaluates your genuine intent to study and your future plans after graduation.",
        ],
      },
      {
        heading: "Common Questions",
        list: [
          "Why did you choose this country?",
          "Why this course?",
          "Who is sponsoring your education?",
          "What are your future plans?",
        ],
      },
      {
        heading: "How to Prepare",
        list: [
          "Understand your course details",
          "Know your financial documents",
          "Practice honest and clear answers",
          "Dress professionally",
          "Stay calm and confident",
        ],
      },
    ],
    prev: {
      id: "winning-sop-guide",
      title: "Winning SOP Guide",
      image: "/blog2.jpg",
    },
    next: {
      id: "scholarships-2026",
      title: "Scholarships for African Students",
      image: "/blog4.jpg",
    },
  },

  {
    id: "scholarships-2026",
    category: "Scholarships",
    title: "Scholarships for African Students in 2026",
    author: "Traved Concult",
    date: "February 1, 2026",
    readTime: "5 min read",
    tags: [
      "Scholarships 2026",
      "Fully Funded Scholarships",
      "African Students",
      "Study Funding",
    ],
    image: "/blog4.jpg",
    sections: [
      {
        heading: "Funding Your Education",
        content: [
          "Many universities and governments offer scholarships specifically for African students.",
        ],
      },
      {
        heading: "Types of Scholarships",
        list: [
          "Fully funded scholarships",
          "Partial scholarships",
          "Merit-based scholarships",
          "Government scholarships",
          "University-specific awards",
        ],
      },
    ],
    prev: {
      id: "visa-interview-tips",
      title: "Student Visa Interview Tips",
      image: "/blog3.jpg",
    },
    next: {
      id: "post-study-work",
      title: "Post-Study Work Opportunities",
      image: "/blog5.jpg",
    },
  },

  {
    id: "post-study-work",
    category: "Career",
    title: "Post-Study Work Opportunities: What You Should Know",
    author: "Traved Concult",
    date: "February 5, 2026",
    readTime: "4 min read",
    tags: [
      "Post Study Work",
      "International Career",
      "Work Abroad",
      "Graduate Opportunities",
    ],
    image: "/blog5.jpg",
    sections: [
      {
        heading: "Planning Beyond Graduation",
        content: [
          "Several countries offer post-study work visas that allow international students to gain work experience after graduation.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Gain international work experience",
          "Earn income",
          "Improve chances of permanent residency",
          "Build global networks",
        ],
      },
    ],
    prev: {
      id: "scholarships-2026",
      title: "Scholarships for African Students",
      image: "/blog4.jpg",
    },
    next: {
      id: "why-use-consultancy",
      title: "Why Use a Travel & Study Consultancy?",
      image: "/blog6.jpg",
    },
  },

  {
    id: "why-use-consultancy",
    category: "Consultancy",
    title: "Why Use a Travel & Study Consultancy?",
    author: "Traved Concult",
    date: "February 10, 2026",
    readTime: "4 min read",
    tags: [
      "Travel Consultancy",
      "Study Abroad Support",
      "Education Consulting",
      "Visa Assistance",
    ],
    image: "/blog6.jpg",
    sections: [
      {
        heading: "Avoid Costly Mistakes",
        content: [
          "Applying alone can be overwhelming. Mistakes in documentation or visa processing can delay or deny admission.",
        ],
      },
      {
        heading: "Benefits of Using Traved Concult",
        list: [
          "Expert application guidance",
          "Course and country selection support",
          "Visa processing assistance",
          "Scholarship advisory",
          "Pre-departure briefing",
          "Travel arrangements",
        ],
      },
    ],
    prev: {
      id: "post-study-work",
      title: "Post-Study Work Opportunities",
      image: "/blog5.jpg",
    },
  },
];

export default blogPosts;