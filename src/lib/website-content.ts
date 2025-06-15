import { experiences } from "../app/data/experiences";
import { publications } from "../app/data/publications";
import { technologies } from "../app/data/technologies";

// Extract and structure website content
export function getWebsiteContent() {
  // About section
  const aboutContent = `
    Sri Ganesh Shiramshetty is a Results-driven Senior Software Engineer with over 5 years of experience in full-stack development, 
    specializing in Next.js, Node.js, and AWS. He has successfully redesigned platforms to enhance performance, such as improving 
    load times by 60% and boosting system efficiency by 40% through microservices architecture. His recent projects have focused on 
    integrating AI features that significantly enhance user interaction, making a measurable impact on user engagement.

    Contact Information:
    - Phone: +1 (845) 633-9611
    - Email: sriganeshshiram@gmail.com
    - Location: Dallas, TX, USA
    - LinkedIn: linkedin.com/in/sriganeshshiramshetty/
    - GitHub: github.com/GaneshVarma1
    - Twitter: twitter.com/sriganeshshiramshetty
    - Instagram: https://www.instagram.com/varmaaa.x_/
    - Portfolio: srishiram.xyz

     Life: Happily Single
  
    Personal Interests:
    When it comes to food, Sri is quite the foodie! He has a special place in his heart for Indian cuisine - 
    there's nothing that makes him happier than a steaming plate of biryani, some creamy butter chicken, 
    or crispy dosas. And let's not forget his sweet tooth! He's always up for trying new desserts, 
    whether it's traditional Indian sweets or fancy French pastries.

    If you're looking to catch his attention, here's a little secret: he's always excited to try new 
    restaurants, especially if they serve authentic Indian food. Maybe you know a great spot you could 
    recommend? Or better yet, why not invite him to join you for a meal? He's always up for good food 
    and great company!

    And when he's not exploring new restaurants, you'll find him enjoying the beach - there's something 
    about the ocean breeze that he finds incredibly relaxing. Perfect for a casual date or a friendly 
    meet-up, don't you think?
  `;

  // Experience content
  const experienceContent = `
    Professional Experience:

    1. Docnexus (Remote)
    Senior Software Engineer (February 2025 - June 2025)
    Key Achievements:
    - Reduced platform load time by 60% through full-stack redesign using Next.js 14, React, and TypeScript
    - Enhanced user interaction with AI-powered features using OpenAI API and LangChain
    - Improved UI responsiveness and accessibility with React, Vue, TailwindCSS, and Framer Motion
    - Increased backend scalability with Node.js microservices and PostgreSQL/NoSQL on AWS
    - Accelerated deployment cycles by 40% using GitHub Actions for CI/CD
    - Built HIPAA-compliant backend services with Node.js and PostgreSQL
    - Modernized UI with TailwindCSS and Framer Motion

    2. MMEink (New York, NY)
    Senior Web Developer (August 2024 - February 2025)
    Key Achievements:
    - Increased system performance by 40% using Java, Spring Boot, and Node.js
    - Enhanced front-end with React, JavaScript, and Angular
    - Accelerated deployment cycles by 30% with AWS and CI/CD
    - Mentored junior developers and led code reviews
    - Implemented microservices architecture

    3. SUNY - New Paltz (New Paltz, NY)
    Web Developer (August 2022 - May 2024)
    Key Achievements:
    - Increased website traffic by 30% through responsive web design
    - Boosted online engagement by 25% with interactive features
    - Improved social media interaction by 20%
    - Enhanced cross-platform user experience
    - Improved content reach by 40%
  `;

  // Education content
  const educationContent = `
    Education:
    SUNY - New Paltz
    Master's in Computer Science
    GPA: 3.67
  `;

  // Skills content
  const skillsContent = `
    Technical Skills:
    - Frontend: Next.js, React.js, TypeScript, HTML/CSS, TailwindCSS, Vue.js, Angular
    - Backend: Node.js, Java, Spring Boot, Python, PHP
    - Databases: PostgreSQL, NoSQL, Redis, Supabase, Google BigQuery, Clickhouse DB
    - Cloud & DevOps: AWS, Vercel, Git, GitHub Actions, CI/CD
    - AI/ML: TensorFlow, OpenAI API, LangChain
    - Tools: Figma, Adobe Illustrator, Postman, Zendesk, MailChimp
    - Data Science: Pandas, NumPy, MATLAB
    - Other: SEO, CMS, Operations Research
  `;

  return `
    Website Content Summary:
    
    About:
    ${aboutContent}
    
    Work Experience:
    ${experienceContent}
    
    Education:
    ${educationContent}
    
    Skills:
    ${skillsContent}
  `;
} 