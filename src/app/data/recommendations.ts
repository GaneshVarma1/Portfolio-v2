export interface Recommendation {
  id: string;
  authorName: string;
  authorHandle: string;
  authorImage: string;
  content: string[];
  fullContent: string;
  isVerified: boolean;
  timestamp: string;
  link: string;
  reply?: {
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string;
    isVerified: boolean;
    timestamp: string;
  };
}

export const recommendations: Recommendation[] = [
  {
    id: "1",
    authorName: "Andrei Assa",
    authorHandle: "andrei-assa",
    authorImage: "/Andrei.jpeg",
    content: [
      "I had the pleasure of working closely with Sri from February – June 2025, when he joined DocNexus...",
      "In just four months he delivered results that many teams would schedule across two full quarters 🚀",
      "Sri's blend of user-centric design sense and state-of-the-art AI engineering is rare—and in high demand."
    ],
    fullContent: "I had the pleasure of working closely with Sri from February – June 2025, when he joined DocNexus on a fixed-term contract as a Full-Stack Developer. In just four months he delivered results that many teams would schedule across two full quarters.\n\n⸻\n\nProject Highlights\n\n1. AI-Enabled Next.js Platform\n• Designed and shipped a green-field web application that became the internal benchmark for future DocNexus products.\n• Implemented a conversational AI chat interface with retrieval-augmented generation (RAG). Users can ask questions, drill into source documents, and receive concise, context-aware answers—significantly reducing the time our analysts spend searching for information.\n• Orchestrated multiple AI providers (OpenAI and open-source models) behind a unified abstraction layer, giving us cost/latency flexibility with zero vendor lock-in.\n\n2. Search & Performance Architecture\n• Built an ElasticSearch experience, and tuned analyzers for medical terminology that improved first-result relevance from ~60% to 94% (measured with our in-house relevance test suite).\n• Introduced a multi-tier caching strategy (HTTP CDN, Redis edge cache, and client-side SWR hooks) that pushed P95 end-to-end response times below 150 ms.\n\n3. Frontend Excellence\n• Created a reusable design system with Tailwind + Radix + shadcn/ui, covering typography, theming, and responsive layouts. Our designers now prototype twice as fast thanks to these ready-made components.\n• Paid meticulous attention to accessibility (WCAG 2.2 AA), keyboard navigation, and motion preferences—ensuring our platform is inclusive by default.\n\n⸻\n\nTechnical & Soft Skills\n• Breadth + Depth: Equally comfortable wiring GraphQL resolvers, tuning ElasticSearch queries, or finessing micro-interactions in React.\n• Creative Problem Solver: When third-party RAG libraries fell short, he wrote a custom chunk-ranking algorithm that boosted summary accuracy without increasing token spend.\n• Code Quality Advocate: Set up ESLint, Prettier, and Vitest tests in CI, driving a culture of clean, tested code.\n• Ownership Mindset: Treated the project like a product, not a contract gig. He documented architecture decisions, onboarded a junior engineer, and even drafted the post-launch monitoring runbook.\n\n⸻\n\nImpact\n\nSri's blend of user-centric design sense and state-of-the-art AI engineering is rare—and in high demand. He left us with a scalable foundation that continues to power new features long after his contract ended. I have zero doubt he will bring the same drive, creativity, and technical rigor to any future team.\n\nI wholeheartedly recommend Sri to organizations aiming to ship beautiful, AI-native user experiences. Feel free to message me if you'd like more detail on his contributions.",
    isVerified: true,
    timestamp: "June 20, 2025",
    link: "https://linkedin.com/in/sriganeshshiramshetty",
    reply: {
      authorName: "Sri Ganesh Varma",
      authorHandle: "sriganeshvarma",
      authorImage: "/Sri.jpeg",
      content: "Thank you Andrei! Working at DocNexus was an incredible experience. The technical challenges and your leadership made it one of my most rewarding projects.",
      isVerified: true,
      timestamp: "June 20, 2025"
    }
  },
  {
    id: "2",
    authorName: "Raf Ferrigno",
    authorHandle: "raf-ferrigno",
    authorImage: "/ref.jpeg",
    content: [
      "Working with Sri as a Full Stack web developer was an absolute game-changer 🚀",
      "He's the kind of creative pro who turns ideas into stunning, functional websites—fast.",
      "Need a designer who's equal parts creative genius and reliable teammate? Sri's your go-to. 10/10 recommend!"
    ],
    fullContent: "Working with Sri as a Full Stack web developer was an absolute game-changer. He's the kind of creative pro who turns ideas into stunning, functional websites—fast.\n\nSri's mastery of ReactJs, TailwindCSS, WordPress, Elementor, HTML, and JavaScript meant our projects were always responsive, sleek, and ahead of trends. He doesn't just use templates; he customizes every detail to fit the brand perfectly. Plus, his Adobe Creative Cloud skills (Photoshop, Illustrator, etc.) brought visuals to life in ways that wowed clients.\n\nWhat I loved? His problem-solving mindset. During a tricky redesign, he spotted navigation issues and fixed them, boosting user engagement by 30%. He communicates clearly, adapts to feedback, and delivers on time—every time.\n\nNeed a designer who's equal parts creative genius and reliable teammate? Sri's your go-to. 10/10 recommend!",
    isVerified: true,
    timestamp: "January 27, 2025",
    link: "https://linkedin.com/in/sriganeshshiramshetty"
  },
  {
    id: "3",
    authorName: "John Oles",
    authorHandle: "john-oles",
    authorImage: "/john.jpeg",
    content: [
      "I am writing to wholeheartedly recommend Sri Ganesh Shiramshetty for any opportunity he pursues...",
      "Sri Ganesh consistently demonstrated exceptional talent, dedication, and remarkable ability to excel 🎯",
      "I highly recommend Sri Ganesh without reservation and am confident he will be a valuable asset."
    ],
    fullContent: "To whom it may concern:\n\nI am writing to wholeheartedly recommend Sri Ganesh Shiramshetty for any opportunity he pursues. During his tenure as a Graduate Assistant at the Office of Communication and Marketing at SUNY New Paltz, Sri Ganesh consistently demonstrated exceptional talent, dedication, and a remarkable ability to excel in various projects and responsibilities.\n\nAs a Graduate Assistant, Sri Ganesh played a pivotal role in enhancing our departmental visual and digital assets through his proficient video, graphic design and editing skills. His contributions significantly elevated our online engagement metrics, reflecting his keen eye for capturing video and his technical expertise when editing. Sri Ganesh also took the initiative to optimize and add to our broil video library, resulting in a noticeable increase in audience interaction and overall impact on our social channels.\n\nBeyond his roles within our department, Sri Ganesh has showcased his proficiency in various projects, particularly in the field of machine learning and software development. His work on projects such as \"Hotel Reservations Predictions Using Classification\" and \"Predict future crude oil prices using Ensemble learning\" exemplifies his analytical prowess, creativity, and dedication to excellence. Sri Ganesh consistently demonstrated his ability to utilize advanced techniques and methodologies to develop innovative solutions and achieve exceptional results.\n\nAdditionally, Sri Ganesh's contributions extend to his involvement with our current social media interns, where he exhibited his proficiency in various social media editing apps and knowledge of cameras. His meticulous attention to detail, coupled with his commitment to delivering high-quality work, has undoubtedly contributed to the success of our current video projects.\n\nIn summary, Sri Ganesh Shiramshetty is an outstanding individual with exceptional skills, dedication, and a passion for excellence. His contributions have made a significant impact on our department and projects, and I have no doubt that he will continue to excel in any endeavor he pursues. I highly recommend Sri Ganesh without reservation and am confident that he will be a valuable asset to your team.\n\nSincerely,\nJohn Oles\nDirector of Marketing\nSUNY New Paltz\nolesj@newpaltz.edu\n845-825-2224",
    isVerified: true,
    timestamp: "March 5, 2024",
    link: "https://linkedin.com/in/sriganeshshiramshetty",
    reply: {
      authorName: "Sri Ganesh Varma",
      authorHandle: "sriganeshvarma",
      authorImage: "/Sri.jpeg",
      content: "Thank you John! Working at SUNY New Paltz was an incredible learning experience. Your mentorship and trust in giving me creative freedom really helped me grow professionally.",
      isVerified: true,
      timestamp: "March 5, 2024"
    }
  }
]; 