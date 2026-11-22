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
      {
        title: "Custom design",
        text: "Brand-focused designs tailored to your identity and audience, so your website stands out from the competition.",
      },
      {
        title: "E-commerce solutions",
        text: "Online stores with secure payment processing, inventory management and smooth shopping experiences.",
      },
      {
        title: "CMS integration",
        text: "Easy-to-use content management so you can update your site without technical knowledge.",
      },
      {
        title: "Web applications",
        text: "Custom web applications built to streamline your business processes and serve your users.",
      },
    ],
    processTitle: "How we work",
    process: [
      {
        title: "Discovery",
        text: "We analyse your business goals, audience and requirements to create a clear project roadmap.",
      },
      {
        title: "Design",
        text: "Wireframes and mockups bring your vision to life with an intuitive, engaging user experience.",
      },
      {
        title: "Development",
        text: "We build with modern technologies and test thoroughly for quality and performance.",
      },
      {
        title: "Launch",
        text: "We deploy to production, train your team and provide support so you keep succeeding.",
      },
    ],
    cta: "Get a free quote",
    faqs: [
      {
        q: "How long does it take to build a website?",
        a: "It depends on scope. A basic business website typically takes a few weeks, while e-commerce stores and custom applications take longer. We confirm a timeline after the initial consultation.",
      },
      {
        q: "Will my website show up on Google?",
        a: "We build every site with clean structure, fast loading, proper page titles and descriptions, and a sitemap, which gives search engines what they need. Rankings also depend on your content and competition, so we can add ongoing SEO if you want it.",
      },
      {
        q: "Can I update the website myself?",
        a: "Yes. We can connect a content management system so you can edit pages and publish posts without writing code.",
      },
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
      {
        title: "Web development bootcamps",
        text: "Front-end and back-end development with HTML, CSS, JavaScript, React, Node.js and modern frameworks.",
      },
      {
        title: "Digital marketing courses",
        text: "SEO, social media marketing, content strategy, email marketing and analytics to drive business growth.",
      },
      {
        title: "UI/UX design training",
        text: "Create clean interfaces and great user experiences using industry-standard design tools and principles.",
      },
      {
        title: "Data analytics programmes",
        text: "Data analysis, visualisation, SQL, Python and business intelligence tools for data-driven decisions.",
      },
    ],
    processTitle: "How training works",
    process: [
      {
        title: "Skills assessment",
        text: "We evaluate your current level and goals to recommend the right programme.",
      },
      {
        title: "Programme selection",
        text: "Choose from our programmes, with flexible schedules that fit your life.",
      },
      {
        title: "Interactive learning",
        text: "Hands-on projects, live coding sessions and group exercises guided by instructors.",
      },
      {
        title: "Certification and career support",
        text: "Earn your certificate and get portfolio guidance and job placement assistance.",
      },
    ],
    cta: "Enrol now",
    faqs: [
      {
        q: "Who are the programmes for?",
        a: "Students, graduates, career changers, working professionals and organisations that want to upskill their teams. We also run programmes for schools.",
      },
      {
        q: "Do I need experience to join?",
        a: "No. We assess your level at the start and place you in the right programme.",
      },
      {
        q: "Do you offer training for schools?",
        a: "Yes. Our Digital Technology Programme is designed for secondary school students. Contact us for details.",
      },
    ],
  },
  {
    slug: "printing-design",
    title: "Printing & Design",
    short:
      "Professional printing and design services including brand identity, marketing materials, and custom print solutions that make your brand stand out.",
    metaTitle: "Printing & Design Services in Abuja",
    metaDescription:
      "Davin Media delivers professional printing and design services in Nigeria. Brand identity, marketing materials, large format printing and custom packaging solutions.",
    intro:
      "We create compelling visual identities and deliver high-quality print materials that make lasting impressions.",
    overview: [
      "Our printing and design services combine creativity with cutting-edge technology to deliver exceptional results. From business cards to billboards, we understand what makes a brand memorable and how to bring your vision to life.",
      "We take a personalised approach to every project, working closely with you to understand your brand identity, target audience and marketing goals. Our dedicated team delivers print materials that not only look stunning but also effectively communicate your message.",
    ],
    benefits: [
      "Professional brand identity and logo design",
      "High-quality offset and digital printing",
      "Fast turnaround times and reliable delivery",
      "Custom design solutions tailored to your brand",
      "Competitive pricing and flexible packages",
    ],
    featuresTitle: "Design & print specialisations",
    features: [
      {
        title: "Brand identity design",
        text: "Logo design, brand guidelines, visual identity systems and complete brand packages that reflect your business values.",
      },
      {
        title: "Marketing materials",
        text: "Brochures, flyers, posters, business cards, letterheads and promotional materials designed to captivate your audience.",
      },
      {
        title: "Large format printing",
        text: "Banners, billboards, vehicle wraps, trade show displays and outdoor signage that make bold statements.",
      },
      {
        title: "Packaging & labels",
        text: "Custom packaging design, product labels, stickers and specialty printing for retail and e-commerce businesses.",
      },
    ],
    processTitle: "How we work",
    process: [
      {
        title: "Consultation & concept",
        text: "We discuss your vision, brand goals and project requirements to develop creative concepts that align with your objectives.",
      },
      {
        title: "Design & development",
        text: "Our design team creates mockups and prototypes, incorporating your feedback to refine the final design.",
      },
      {
        title: "Approval & production",
        text: "Once approved, we move to production using premium materials and professional printing techniques.",
      },
      {
        title: "Delivery & support",
        text: "We ensure timely delivery and provide ongoing support for reprints and additional materials as needed.",
      },
    ],
    cta: "Get a quote",
    faqs: [
      {
        q: "What file formats do you accept?",
        a: "We accept PDF, AI, EPS, PSD and high-resolution JPG or PNG files. If you need design help, we can create the artwork for you.",
      },
      {
        q: "Do you offer revisions?",
        a: "Yes. We offer unlimited revisions during the design phase to ensure you're completely satisfied with the final product.",
      },
      {
        q: "What is the turnaround time?",
        a: "It depends on the project. Business cards and standard materials typically take a few days, while large format printing and custom packaging may take longer. We confirm timelines upfront.",
      },
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
      {
        title: "SEO",
        text: "Improve search rankings and organic visibility with keyword research, content and technical optimisation.",
      },
      {
        title: "Social media marketing",
        text: "Build and engage your audience with compelling content, community management and targeted advertising.",
      },
      {
        title: "Content marketing",
        text: "Valuable content that attracts and retains your audience and builds authority in your industry.",
      },
      {
        title: "PPC advertising",
        text: "Drive immediate traffic and conversions with targeted campaigns on Google Ads and social platforms.",
      },
    ],
    processTitle: "How we work",
    process: [
      {
        title: "Audit and research",
        text: "We analyse your current marketing, competitors and audience to find opportunities.",
      },
      {
        title: "Strategy and campaign design",
        text: "A clear strategy with objectives, tactics and KPIs aligned to your business goals.",
      },
      {
        title: "Implementation and monitoring",
        text: "We run campaigns across the chosen channels and optimise as results come in.",
      },
      {
        title: "Analytics and reporting",
        text: "Detailed reports on performance and clear next steps to improve results.",
      },
    ],
    cta: "Get a free consultation",
    faqs: [
      {
        q: "How soon will I see results?",
        a: "Paid advertising can bring traffic quickly. SEO and content take longer to build, and we explain realistic timelines for your market upfront.",
      },
      {
        q: "Do you manage social media accounts?",
        a: "Yes. We can plan content, publish, manage the community and run paid campaigns.",
      },
      {
        q: "How do I know it is working?",
        a: "You receive regular reports with the numbers that matter to your goals, such as traffic, enquiries and sales.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
