const en = {
  // Navbar
  nav: {
    projects: "Projects",
    services: "Services",
    team: "Team",
    contact: "Contact",
    startProject: "Start a Project",
    toggleNav: "Toggle navigation",
  },

  // Hero
  hero: {
    brand: "ARSYX",
    brandHighlight: "WEB",
    label: "WEB DEVELOPMENT",
    title: "Websites Built Around",
    titleHighlight: "Your Business, Not Templates.",
    description:
      "We design and develop fast, modern and responsive websites built around your business, your goals and your customers.",
    trust: "Free consultation. No commitment until you love the plan.",
    ctaPrimary: "Get a Free Consultation",
    ctaSecondary: "View Our Work",
    scroll: "Scroll to explore",
  },

  // Services
  services: {
    label: "WHAT WE DO",
    title: "Our",
    titleHighlight: "Services.",
    description:
      "We design and develop digital solutions built around your business and your goals.",
    items: [
      {
        number: "01",
        title: "Full-Stack Development",
        description:
          "Complete websites and web applications built from the user interface to the backend and database.",
        tags: ["React", "Backend", "Database"],
      },
      {
        number: "02",
        title: "WordPress Development",
        description:
          "Professional WordPress websites with customizations, modern layouts and flexible content management.",
        tags: ["WordPress", "Elementor", "CMS"],
      },
      {
        number: "03",
        title: "E-Commerce Development",
        description:
          "Online stores with product, order and customer management designed around your business.",
        tags: ["WooCommerce", "E-Commerce", "WordPress"],
      },
      {
        number: "04",
        title: "Telegram Bot Development",
        description:
          "Custom Telegram bots for automation, notifications, customer support and business workflows.",
        tags: ["Python", "Telegram API", "Automation"],
      },
    ],
  },

  // Projects
  projects: {
    label: "OUR WORK",
    title: "Selected",
    titleHighlight: "Projects.",
    description:
      "A selection of digital products, applications and experiences created by Arsyx Web.",
    empty: "No projects available",
    visitWebsite: "Visit Website",
    pythonProject: "Python Project",
    statusLive: "LIVE",
    statusPython: "PYTHON",
  },

  // Process
  process: {
    label: "OUR PROCESS",
    title: "How we",
    titleHighlight: "work.",
    description:
      "A simple and transparent process from the first conversation to the final launch.",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "We understand your business, goals and what your website needs to achieve.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "We plan the structure and create a clear visual direction around your brand.",
      },
      {
        number: "03",
        title: "Development",
        description:
          "We build, test and optimize your website using modern technologies.",
      },
      {
        number: "04",
        title: "Launch",
        description:
          "We deploy your website, test everything and make sure it's ready to go.",
      },
    ],
  },

  // Team
  team: {
    label: "THE TEAM",
    title: "Two people.",
    titleHighlight: "One goal.",
    description:
      "We work directly with our clients from the first idea to the final launch.",
    photo: "PHOTO",
    members: [
      {
        number: "01",
        name: "Sadra Jokar",
        role: "Junior Full-Stack Developer",
        description:
          "Focused on building fast, scalable and modern web experiences from frontend to backend.",
      },
      {
        number: "02",
        name: "Aria Alahpanah",
        role: "Web Developer",
        description:
          "Focused on clean development, responsive interfaces and turning ideas into reliable digital products.",
      },
    ],
  },

  // WhyArsyx
  whyArsyx: {
    label: "WHY ARSYX",
    title: "Why",
    titleHighlight: "us?",
    description:
      "We focus on building websites that are fast, reliable and designed around your business.",
    items: [
      {
        number: "01",
        title: "Custom-built",
        description:
          "No templates. Every website is built around your business and your goals.",
      },
      {
        number: "02",
        title: "Fast & Responsive",
        description:
          "Modern websites that work smoothly across phones, tablets and desktops.",
      },
      {
        number: "03",
        title: "Direct Communication",
        description:
          "You work directly with the developers building your website.",
      },
      {
        number: "04",
        title: "Built to Grow",
        description:
          "A solid foundation that can evolve as your business grows.",
      },
    ],
  },

  // Contact
  contact: {
    label: "GET IN TOUCH",
    title: "Let's build",
    titleHighlight: "something.",
    description:
      "Have a project in mind? Reach out to us directly. We'd love to hear about your idea and see how we can help bring it to life.",
    callNow: "Call us right now",
    formTitle: "Send us a message",
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "john@example.com",
    messageLabel: "Your Message",
    messagePlaceholder: "Tell us about your project...",
    sending: "Sending...",
    submit: "Send Message",
    security: "Your data is safe and secure",
    successMessage: "Message sent successfully! We'll get back to you soon.",
    errorMessage:
      "Failed to send message. Please try again or contact us directly.",
    quickTitle: "Prefer instant messaging?",
    quickText: "Connect with us on Telegram for quick responses.",
    quickButton: "Chat on Telegram",
    telegram: "TELEGRAM",
    phone: "PHONE",
    instagram: "INSTAGRAM",
    github: "GITHUB",
    responseTime: "RESPONSE TIME",
    responseValue: "Usually within 24-48 hours.",
  },

  // Footer
  footer: {
    description: "Websites built around your business, not templates.",
    startProject: "Start a Project",
    navigate: "NAVIGATE",
    work: "Work",
    services: "Services",
    team: "Team",
    contact: "Contact",
    contactLabel: "CONTACT",
    email: "Email: arsyx0web@gmail.com",
    telegram: "Telegram",
    instagram: "Instagram",
    github: "GitHub",
    copyright: (year) => `\u00A9 ${year} ARSYX. All rights reserved.`,
    tagline: "Two developers. One goal.",
  },

  // 404 Page
  notFound: {
    error: "ERROR 404",
    title: "Page",
    titleHighlight: "not found.",
    description:
      "The page you're looking for doesn't exist or has been moved.",
    backHome: "Back to Home",
  },

  // UI (aria-labels, etc.)
  ui: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    switchToPersian: "Switch to Persian",
    switchToEnglish: "Switch to English",
    visitProject: (title) => `Visit ${title}`,
    projectImage: (title) => `${title} project`,
    tagEcommerce: "E-commerce",
    tagDesktopApp: "Desktop App",
    tagWeatherApi: "Weather API",
  },
};

export default en;
