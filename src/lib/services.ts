export type Service = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  overview: string[];
  benefits: string[];
  featuresTitle: string;
  features: { title: string; text: string }[];
  processTitle: string;
  process: { title: string; text: string }[];
  cta: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website & App Development",
    short:
      "Fast, search-friendly websites, e-commerce stores and custom web applications built around your business goals.",
    metaTitle: "Website & App Development in Abuja",
    metaDescription:
      "Custom websites, e-commerce stores, CMS builds and web apps from Davin Media in Abuja. Fast, mobile-friendly and built to be found on Google.",
    intro:
      "We design and build websites and web applications that look sharp, load fast and turn visitors into customers.",
    overview: [
      "We combine design thinking and modern engineering to create digital experiences that work. From a corporate website to an online store or a custom web application, every build is planned around what your business needs it to do.",
      "Our developers use modern frameworks and best practices so your site is secure, easy to maintain and ready to grow. Search visibility, mobile performance and page speed are part of every project from day one.",
    ],
    benefits: [
      "Responsive design for every screen size",
      "Fast loading speeds for better rankings and conversions",
      "Scalable code for future growth",
      "Search-friendly structure built in",
      "Ongoing support and maintenance",
    ],
    featuresTitle: "What we build",
    features: [
      { title: "Custom design", text: "Brand-focused designs tailored to your identity and audience, so your website stands out from the competition." },
      { title: "E-commerce solutions", text: "Online stores with secure payment processing, inventory management and smooth shopping experiences." },
      { title: "CMS integration", text: "Easy-to-use content management so you can update your site without technical knowledge." },
      { title: "Web applications", text: "Custom web applications built to streamline your business processes and serve your users." },
    ],
    processTitle: "How we work",
    process: [
      { title: "Discovery", text: "We analyse your business goals, audience and requirements to create a clear project roadmap." },
      { title: "Design", text: "Wireframes and mockups bring your vision to life with an intuitive, engaging user experience." },
      { title: "Development", text: "We build with modern technologies and test thoroughly for quality and performance." },
      { title: "Launch", text: "We deploy to production, train your team and provide support so you keep succeeding." },
    ],
    cta: "Get a free quote",
    faqs: [
      { q: "How long does it take to build a website?", a: "It depends on scope. A basic business website typically takes a few weeks, while e-commerce stores and custom applications take longer. We confirm a timeline after the initial consultation." },
      { q: "Will my website show up on Google?", a: "We build every site with clean structure, fast loading, proper page titles and descriptions, and a sitemap, which gives search engines what they need. Rankings also depend on your content and competition, so we can add ongoing SEO if you want it." },
      { q: "Can I update the website myself?", a: "Yes. We can connect a content management system so you can edit pages and publish posts without writing code." },
    ],
  },
  {
    slug: "training",
    title: "Professional Training",
    short:
      "Hands-on programmes in web development, UI/UX design, data analytics and digital marketing, for individuals, teams and schools.",
    metaTitle: "Tech & Digital Skills Training in Abuja",
    metaDescription:
      "Hands-on training in web development, UI/UX design, data analytics and digital marketing in Abuja. Learn practical skills from working professionals.",
    intro:
      "Practical, project-based training that closes the gap between what schools teach and what employers need.",
    overview: [
      "Our training programmes bridge academic knowledge and industry requirements. We focus on practical, hands-on learning that prepares you for real-world challenges in today's competitive job market.",
      "Our curriculum is developed by industry practitioners and covers current technologies, tools and best practices. Whether you are starting a new career, upgrading your skills or moving into a different field, you get the knowledge and support you need.",
    ],
    benefits: [
      "Instructors with real-world experience",
      "Hands-on projects and practical assignments",
      "Flexible schedules for working professionals",
      "Certificate on completion",
      "Career support and placement assistance",
    ],
    featuresTitle: "Core programmes",
    features: [
      { title: "Web development bootcamps", text: "Front-end and back-end development with HTML, CSS, JavaScript, React, Node.js and modern frameworks." },
      { title: "Digital marketing courses", text: "SEO, social media marketing, content strategy, email marketing and analytics to drive business growth." },
      { title: "UI/UX design training", text: "Create clean interfaces and great user experiences using industry-standard design tools and principles." },
      { title: "Data analytics programmes", text: "Data analysis, visualisation, SQL, Python and business intelligence tools for data-driven decisions." },
    ],
    processTitle: "How training works",
    process: [
      { title: "Skills assessment", text: "We evaluate your current level and goals to recommend the right programme." },
      { title: "Programme selection", text: "Choose from our programmes, with flexible schedules that fit your life." },
      { title: "Interactive learning", text: "Hands-on projects, live coding sessions and group exercises guided by instructors." },
      { title: "Certification and career support", text: "Earn your certificate and get portfolio guidance and job placement assistance." },
    ],
    cta: "Enrol now",
    faqs: [
      { q: "Who are the programmes for?", a: "Students, graduates, career changers, working professionals and organisations that want to upskill their teams. We also run programmes for schools." },
      { q: "Do I need experience to join?", a: "No. We assess your level at the start and place you in the right programme." },
      { q: "Do you offer training for schools?", a: "Yes. Our Digital Technology Programme is designed for secondary school students. Contact us for details." },
    ],
  },
  {
    slug: "recruiting-placement",
    title: "Job Recruiting & Placement",
    short:
      "We connect skilled professionals with employers through personalised matching, interview coaching and post-placement support.",
    metaTitle: "Job Recruiting & Placement in Abuja",
    metaDescription:
      "Davin Media connects talented professionals with employers in Nigeria. Personalised job matching, interview coaching and placement support.",
    intro:
      "We bridge the gap between talented professionals and employers who need them.",
    overview: [
      "Our recruiting and placement services make your job search or hiring process efficient and successful. We build relationships with employers and understand what companies look for and how to position candidates for success.",
      "We take a personalised approach to every placement. We learn your skills, experience, career goals and culture-fit preferences, then match you to opportunities that support long-term growth.",
    ],
    benefits: [
      "Employer network across industries",
      "Personalised job matching based on skills and goals",
      "Interview coaching and preparation",
      "Salary negotiation guidance",
      "Post-placement follow-up and career support",
    ],
    featuresTitle: "Recruitment specialisations",
    features: [
      { title: "Tech recruitment", text: "Software developers, data scientists, IT professionals and technology specialists at all experience levels." },
      { title: "Marketing roles", text: "Digital marketers, content creators, brand managers and marketing strategists for diverse industries." },
      { title: "Entry to executive level", text: "From junior positions to senior leadership, we place professionals at every career stage." },
      { title: "Contract and permanent roles", text: "Full-time, contract, contract-to-hire and project-based placements." },
    ],
    processTitle: "How recruitment works",
    process: [
      { title: "Registration and profile assessment", text: "Submit your CV and complete a profile so we understand your skills and objectives." },
      { title: "Job matching", text: "We identify suitable roles from our employer network that align with your goals." },
      { title: "Interview preparation", text: "Coaching, CV optimisation and interview preparation to maximise your chances." },
      { title: "Placement support", text: "We assist with offer negotiation and support a smooth start in your new role." },
    ],
    cta: "Register now",
    faqs: [
      { q: "Does it cost anything to register as a candidate?", a: "Contact us for current terms. We will explain how our placement service works before you commit to anything." },
      { q: "Can employers use you to hire?", a: "Yes. Tell us the role and requirements and we will source and shortlist suitable candidates." },
      { q: "Which industries do you cover?", a: "We focus on technology and marketing roles, and we also work across other industries." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short:
      "SEO, social media, content and paid advertising that reach the right audience and show measurable results.",
    metaTitle: "Digital Marketing & SEO in Abuja",
    metaDescription:
      "SEO, social media marketing, content marketing and PPC advertising for Nigerian businesses. Data-driven campaigns from Davin Media in Abuja.",
    intro:
      "Data-driven campaigns that put the right message in front of the right people.",
    overview: [
      "Our digital marketing services combine strategic planning, creative execution and data analysis to help your business reach the right audience at the right time with the right message.",
      "We develop strategies around your goals, audience and industry. From growing brand awareness to driving enquiries and sales, we use analytics to focus effort where it pays off.",
    ],
    benefits: [
      "Data-driven strategies backed by analytics",
      "Multi-channel campaigns for maximum reach",
      "Measurable results and performance tracking",
      "Experienced marketing specialists",
      "Transparent reporting and regular updates",
    ],
    featuresTitle: "Our marketing services",
    features: [
      { title: "SEO", text: "Improve search rankings and organic visibility with keyword research, content and technical optimisation." },
      { title: "Social media marketing", text: "Build and engage your audience with compelling content, community management and targeted advertising." },
      { title: "Content marketing", text: "Valuable content that attracts and retains your audience and builds authority in your industry." },
      { title: "PPC advertising", text: "Drive immediate traffic and conversions with targeted campaigns on Google Ads and social platforms." },
    ],
    processTitle: "How we work",
    process: [
      { title: "Audit and research", text: "We analyse your current marketing, competitors and audience to find opportunities." },
      { title: "Strategy and campaign design", text: "A clear strategy with objectives, tactics and KPIs aligned to your business goals." },
      { title: "Implementation and monitoring", text: "We run campaigns across the chosen channels and optimise as results come in." },
      { title: "Analytics and reporting", text: "Detailed reports on performance and clear next steps to improve results." },
    ],
    cta: "Get a free consultation",
    faqs: [
      { q: "How soon will I see results?", a: "Paid advertising can bring traffic quickly. SEO and content take longer to build, and we explain realistic timelines for your market upfront." },
      { q: "Do you manage social media accounts?", a: "Yes. We can plan content, publish, manage the community and run paid campaigns." },
      { q: "How do I know it is working?", a: "You receive regular reports with the numbers that matter to your goals, such as traffic, enquiries and sales." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
