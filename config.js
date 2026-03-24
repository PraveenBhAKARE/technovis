/**
 * ============================================================
 *  TEKNOVIS PVT LTD — Master Site Configuration
 *  ============================================================
 *  HOW TO USE:
 *  - Edit this ONE file to update ANYTHING across the entire site.
 *  - Logo, founder pic, course thumbnails, contact details,
 *    nav links, social links, colors — all controlled here.
 *  - Save the file. Refresh any page. Changes appear everywhere.
 *  ============================================================
 */

const TEKNOVIS_CONFIG = {

  /* ── Company Identity ── */
  company: {
    name:        "Teknovis",
    namePrefix:  "Tekno",          // Part before accent colour
    nameSuffix:  "vis",            // Part that gets accent colour
    tagline:     "EdTech & AI Solutions",
    fullName:    "Teknovis (OPC) Private Limited",
    cin:         "U85500PN2026OPC253092",
    established: "2026",
    copyright:   "2026 Teknovis Pvt Ltd. All rights reserved.",
  },

  /* ── Contact Details ── */
  contact: {
    phone:       "+91 9309276636",
    phoneRaw:    "+919309276636",
    phone2:      "+91 8762379598",
    phone2Raw:   "+918762379598",
    email:       "info@teknovis.in",
    address: {
      line1: "42/2/7 42/2/8, D1 602, Dwarka Sai,",
      line2: "Kalewadi, Pune City,",
      line3: "Pune - 411017, Maharashtra, India",
    },
    hours: "Monday – Saturday, 9:00 AM – 6:00 PM IST",
  },

  /* ──  / Media ── 
     CHANGE LOGO: Update .logo path below.
     CHANGE FOUNDER PHOTO: Update .founderPic path below.
     CHANGE COURSE THUMBNAILS: Update each course's thumbnail path below.
     All paths are relative to the HTML files (e.g., "/logo.png")
  ── */
  : {
    logo:       "Teknovis2.jpeg",   // ← CHANGE THIS to update logo across ALL pages
    founderPic: "profile_pic.jpg",  // ← CHANGE THIS to update founder photo
    sharedImg:  "shared image.jpg", // ← Shared decorative image
    /* About page video — plays on loop in the about section */
    aboutVideo: "MicrosoftTeams-video.mp4",  // ← PASTE a video URL here (YouTube embed, mp4 link, etc.) to show a video in About
  },

  /* ── Navigation Links ── */
  nav: [
    { label: "Home",     href: "index.html"    },
    { label: "Courses",  href: "courses.html"  },
    { label: "Services", href: "services.html" },
    { label: "About Us", href: "about.html"    },
    { label: "Contact",  href: "contact.html"  },
  ],

  /* ── Hero Stats (Home Page) ── */
  heroStats: [
    { number: "500+", label: "Learners Trained" },
    { number: "50+",  label: "AI Projects"      },
    { number: "5+",   label: "Industry Domains" },
  ],

  /* ── Key Numbers (Stats Row) ── */
  statsRow: [
    { number: "500+", label: "Professionals Trained"   },
    { number: "5",    label: "Flagship Courses"        },
    { number: "5+",   label: "AI & Tech Services"      },
    { number: "10+",  label: "Years Industry Expertise"},
  ],

  /* ── Courses ──
     thumbnail: path to an image for the course card header.
     Leave thumbnail as "" to use the gradient + icon only.
     icon: choose from "analytics", "datascience", "genai", "testing", "webdev"
  ── */
  courses: [
    {
      id:          "data-analytics",
      title:       "Data Analytics",
      tag:         "Analytics",
      icon:        "analytics",
      gradient:    "linear-gradient(135deg,#1565C0,#42A5F5)",
      thumbnail:   "/Data Analyst.png",   // ← CHANGE course thumbnail here
      description: "Master Excel, SQL, Power BI and Python to extract meaningful insights from complex datasets and build real-world dashboards.",
      skills:      ["Excel & SQL", "Python for Analytics", "Power BI", "Statistical Methods", "Dashboard Design"],
    },
    {
      id:          "data-science",
      title:       "Data Science",
      tag:         "Data Science",
      icon:        "datascience",
      gradient:    "linear-gradient(135deg,#0D47A1,#1976D2)",
      thumbnail:   "/Data Science.png",   // ← CHANGE course thumbnail here
      description: "Learn statistical modeling, Python, machine learning fundamentals, and end-to-end data pipelines for data-driven decision-making.",
      skills:      ["Python & NumPy", "Pandas & Scikit-learn", "Statistics & Probability", "Machine Learning", "Model Deployment"],
    },
    {
      id:          "generative-ai",
      title:       "Generative AI",
      tag:         "Generative AI",
      icon:        "genai",
      gradient:    "linear-gradient(135deg,#1E88E5,#64B5F6)",
      thumbnail:   "/Generative AI.png",  // ← CHANGE course thumbnail here
      description: "Explore LLMs, prompt engineering, RAG architectures, and building intelligent AI applications using the latest generative models.",
      skills:      ["LLMs & GPT APIs", "Prompt Engineering", "RAG Architecture", "LangChain", "AI Agent Design"],
    },
    {
      id:          "software-testing",
      title:       "Software Testing",
      tag:         "QA Testing",
      icon:        "testing",
      gradient:    "linear-gradient(135deg,#0277BD,#29B6F6)",
      thumbnail:   "/Software Testing1.png", // ← CHANGE course thumbnail here
      description: "Comprehensive QA training — manual testing, Selenium automation, TestNG, API testing, and agile methodologies for enterprise-ready skills.",
      skills:      ["Manual Testing", "Selenium WebDriver", "TestNG & JUnit", "API Testing (Postman)", "Agile & Scrum"],
    },
    {
      id:          "web-development",
      title:       "Web Development",
      tag:         "Development",
      icon:        "webdev",
      gradient:    "linear-gradient(135deg,#1565C0,#039BE5)",
      thumbnail:   "/Web Development.png",   // ← CHANGE course thumbnail here
      description: "Build responsive, modern web applications using HTML5, CSS3, JavaScript, React, Node.js, and database integrations from scratch to deployment.",
      skills:      ["HTML5 & CSS3", "JavaScript & React", "Node.js & Express", "SQL & MongoDB", "Git & Deployment"],
    },
  ],

  /* ── Services ── */
  services: [
    {
      id:          "business-intelligence",
      title:       "Business Intelligence",
      category:    "Data & Analytics",
      icon:        "bi",
      gradient:    "linear-gradient(135deg,#1565C0,#42A5F5)",
      description: "Harness the power of your business data with comprehensive BI solutions. We architect enterprise data warehouses, build real-time reporting systems, and create interactive dashboards that give leadership teams instant clarity on KPIs, operational metrics, and market trends.",
      skills:      ["Power BI", "Tableau", "Data Warehousing", "ETL Pipelines"],
    },
    {
      id:          "bi-reporting-ml",
      title:       "BI Reporting & ML Solutions",
      category:    "Reporting & ML",
      icon:        "ml",
      gradient:    "linear-gradient(135deg,#0D47A1,#1976D2)",
      description: "Move beyond descriptive analytics to predictive intelligence. Our ML-enhanced reporting solutions identify patterns in historical data to forecast demand, detect anomalies, and surface opportunities before your competitors can.",
      skills:      ["Predictive Analytics", "Anomaly Detection", "Forecasting Models", "ML Pipelines"],
    },
    {
      id:          "applied-ai",
      title:       "Applied AI",
      category:    "Artificial Intelligence",
      icon:        "ai",
      gradient:    "linear-gradient(135deg,#1E88E5,#64B5F6)",
      description: "Deploy enterprise-grade AI systems that solve complex real-world problems. Our applied AI services cover computer vision, natural language processing, recommendation engines, and custom model development.",
      skills:      ["Computer Vision", "NLP", "Deep Learning", "Model Deployment"],
    },
    {
      id:          "software-testing",
      title:       "Software Testing",
      category:    "QA Engineering",
      icon:        "qa",
      gradient:    "linear-gradient(135deg,#0277BD,#29B6F6)",
      description: "Deliver software with confidence using our comprehensive quality assurance services. We provide end-to-end testing solutions including test strategy design, functional testing, regression automation, API testing, and performance benchmarking.",
      skills:      ["Test Automation", "API Testing", "Performance Testing", "Agile QA"],
    },
    {
      id:          "web-development",
      title:       "Web Development",
      category:    "Digital Engineering",
      icon:        "web",
      gradient:    "linear-gradient(135deg,#1565C0,#039BE5)",
      description: "Build fast, scalable, and visually exceptional digital products. Our full-stack development team crafts everything from marketing websites and corporate portals to complex web applications and SaaS platforms.",
      skills:      ["React & Next.js", "Node.js APIs", "Cloud Deployment", "SEO & Performance"],
    },
  ],

  /* ── Founder ── */
  founder: {
    name:     "Shilpa Honnannavar",
    role:     "Founder & Managing Director",
    company:  "Teknovis Pvt Ltd",
    badges:   ["EdTech Entrepreneur", "AI Practitioner", "Industry Mentor"],
    shortBio: "With over a decade of combined experience in enterprise technology consulting and professional training, Shilpa founded Teknovis with a conviction that the biggest barrier to career transformation is not talent — it is access to the right knowledge, delivered in the right way.",
    stats: [
      { number: "10+",  label: "Years Experience"  },
      { number: "500+", label: "Students Mentored" },
      { number: "50+",  label: "AI Projects Led"   },
    ],
  },

  /* ── Social Links ── */
  social: {
    linkedin:  "#",
    twitter:   "#",
    instagram: "#",
  },

  /* ── Theme Colors (advanced — edit to retheme entire site) ── */
  theme: {
    primary:       "#E3F2FD",
    accent:        "#64B5F6",
    accentDark:    "#1E88E5",
    accentDeeper:  "#0D47A1",
  },

};

/* ============================================================
   SITE RENDERER — reads config and injects into DOM
   DO NOT EDIT BELOW unless you are a developer.
   ============================================================ */

const ICONS = {
  analytics:   `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/><path d="M4 14l4-4 4 4 5-5"/></svg>`,
  datascience: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M12 12v6"/><circle cx="12" cy="12" r="2"/></svg>`,
  genai:       `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="1" fill="rgba(255,255,255,0.95)"/><path d="M8 3.5C8 3.5 6 7 6 10s2 6.5 2 6.5"/><path d="M16 3.5S18 7 18 10s-2 6.5-2 6.5"/></svg>`,
  testing:     `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13l2 2 4-4"/><path d="M9 17h6"/></svg>`,
  webdev:      `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="3" x2="12" y2="21" stroke="rgba(255,255,255,0.5)"/></svg>`,
  bi:          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="7" y1="14" x2="7" y2="10"/><line x1="12" y1="14" x2="12" y2="7"/><line x1="17" y1="14" x2="17" y2="11"/></svg>`,
  ml:          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  ai:          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  qa:          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  web:         `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  phone:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.19 6.19l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  email:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
};

function buildLogo(href = "index.html") {
  const c = TEKNOVIS_CONFIG;
  return `
  <a href="${href}" class="logo">
    <div class="logo-icon">
      <img src="${c..logo}" alt="${c.company.name} Logo" />
    </div>
  </a>`;
}

function buildHeader(activePage = "") {
  const c = TEKNOVIS_CONFIG;
  const navLinks = c.nav.map(n => {
    const isActive = n.href === activePage ? ' active' : '';
    return `<a href="${n.href}" class="nav-link${isActive}">${n.label}</a>`;
  }).join('\n');

  return `
<header class="site-header" id="siteHeader">
  <div class="header-top">
    <div class="container">
    <marquee behavior="scroll" direction="left" scrollamount="4">
    <span class="header-contact-item">
      <a href="tel:${c.contact.phoneRaw}" class="header-contact-item">
        ${ICONS.phone} ${c.contact.phone}
          </span>
             </marquee>
          &nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      <a href="mailto:${c.contact.email}" class="header-contact-item">
        ${ICONS.email} ${c.contact.email}
      </a>
    </div></marquee>
  </div>
  <div class="header-main">
    <div class="container">
      ${buildLogo("index.html")}
      <nav class="nav-menu" id="navMenu">
        ${navLinks}
      </nav>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
}

function buildFooter() {
  const c = TEKNOVIS_CONFIG;
  return `
<footer class="site-footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          ${buildLogo("index.html")}
          <p class="footer-tagline">Empowering individuals and enterprises through world-class technology education and intelligent AI solutions.</p>
          <div class="footer-social">
            <a href="${c.social.linkedin}" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="${c.social.twitter}" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="${c.social.instagram}" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
        <div>
          <div class="footer-heading">Company</div>
          <div class="footer-links">
            ${c.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('\n')}
          </div>
        </div>
        <div>
          <div class="footer-heading">Programs</div>
          <div class="footer-links">
            ${c.courses.map(course => `<a href="courses.html">${course.title}</a>`).join('\n')}
          </div>
        </div>
        <div>
          <div class="footer-heading">Contact</div>
          <div class="footer-contact-item">
            <div class="footer-contact-icon">${ICONS.phone}</div>
            <div>
              <div class="footer-contact-label">Phone</div>
              <a href="tel:${c.contact.phoneRaw}">${c.contact.phone}</a>
            </div>
          </div>
          <div class="footer-contact-item">
            <div class="footer-contact-icon">${ICONS.email}</div>
            <div>
              <div class="footer-contact-label">Email</div>
              <a href="mailto:${c.contact.email}">${c.contact.email}</a>
            </div>
          </div>
          <div class="footer-contact-item">
            <div class="footer-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div>
              <div class="footer-contact-label">Location</div>
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <p class="footer-copy">&copy; ${c.company.copyright}</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`;
}

function buildHeaderScript() {
  return `
<script>
  /* Inject header & footer from config */
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
    /* Close mobile nav on link click */
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        
      });
    });
  });
  
<\/script>`;
}
