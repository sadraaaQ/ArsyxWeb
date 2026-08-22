const fa = {
  // Navbar
  nav: {
    projects: "پروژه‌ها",
    services: "خدمات",
    team: "تیم",
    contact: "تماس",
    startProject: "شروع پروژه",
  },

  // Hero
  hero: {
    brand: "ARSYX",
    brandHighlight: "WEB",
    label: "طراحی و توسعه وب",
    title: "از اولین خط کد تا پروژه نهایی"
    titleHighlight: "با ارسیکس",
    description:
      "بدون قالب آماده، بدون وعده‌های الکی. ری‌اکت، Next.js، امنیت سرور. فقط کد تمیز و سایتی که کار می‌کنه.",
    trust: "قبل از شروع، درباره نیاز و راه‌حل بهترین برای پروژه‌ات صحبت می‌کنیم.",
    ctaPrimary: "شروع پروژه",
    ctaSecondary: "نمونه‌کارها",
    scroll: "بیشتر ببینید",
  },

  // Services
  services: {
    label: "خدماتی که ارائه می‌دهیم",
    title: "راهکار",
    titleHighlight: "مناسب پروژه شما.",
    description:
      "هر پروژه متفاوت است. از سایت‌های ساده تا سیستم‌های پیچیده - ما هم‌راه شما هستیم.",
    items: [
      {
        number: "01",
        title: "توسعه Full-Stack",
        description:
          "از رابط کاربری تا پایگاه داده، تمام چیزی که برای یک سیستم کامل لازم است می‌سازیم.",
        tags: ["React", "Backend", "Database"],
      },
      {
        number: "02",
        title: "WordPress",
        description:
          "اگر می‌خواهید سریع راه بیفتید و مدیریت سایت را خودتان درست کنید.",
        tags: ["WordPress", "Elementor", "CMS"],
      },
      {
        number: "03",
        title: "فروشگاه اینترنتی",
        description:
          "فروشگاهی که مدیریت‌اش ساده است و برای رشد کسب‌وکار شما طراحی شده.",
        tags: ["WooCommerce", "E-Commerce", "WordPress"],
      },
      {
        number: "04",
        title: "ربات تلگرام",
        description:
          "کارهای تکراری رو خودکار کنید. ربات‌های متناسب با فرآیند کاری شما.",
        tags: ["Python", "Telegram API", "Automation"],
      },
    ],
  },

  // Projects
  projects: {
    label: "کارهایی که انجام دادیم",
    title: "بعضی از",
    titleHighlight: "پروژه‌ها.",
    description:
      "هر پروژه با یک نیاز واقعی شروع شده و برای حل آن نیاز ساخته شده.",
    empty: "هنوز پروژه‌ای برای نمایش وجود ندارد.",
    viewAll: "دیدن همه پروژه‌ها",
    pageTitle: "همه",
    visitWebsite: "دیدن سایت",
    pythonProject: "پروژه Python",
    statusLive: "آنلاین",
    statusPython: "PYTHON",
  },

  // Process
  process: {
    label: "راه کار ما",
    title: "از ایده",
    titleHighlight: "تا آنلاین.",
    description:
      "هیچ اتفاق ناگهانی وجود ندارد. قدم‌به‌قدم جلو می‌رویم و با شما همراه هستیم.",
    steps: [
      {
        number: "01",
        title: "صحبت می‌کنیم",
        description:
          "اول درباره کسب‌وکار شما و آنچه می‌خواهید بسازید صحبت می‌کنیم.",
      },
      {
        number: "02",
        title: "نقشه رسم می‌کنیم",
        description:
          "ساختار، امکانات و ظاهر پروژه رو مشخص می‌کنیم.",
      },
      {
        number: "03",
        title: "می‌سازیم و تست می‌کنیم",
        description:
          "پروژه رو توسعه می‌دهیم و در طول مسیر با شما در ارتباط می‌مانیم.",
      },
      {
        number: "04",
        title: "راه‌اندازی می‌کنیم",
        description:
          "بعد از بررسی نهایی، آنلاین می‌کنیم و مطمئن می‌شویم همه کار می‌کند.",
      },
    ],
  },

  // Team
  team: {
    label: "کیا هستیم",
    title: "دو نفر.",
    titleHighlight: "نه شرکت بزرگ.",
    description:
      "با ما مستقیماً کار می‌کنید. بدون لایه‌های اضافی، بدون حاشیه.",
    photo: "عکس",
    members: [
      {
        number: "01",
        name: "Sadra Jokar",
        role: "توسعه‌دهنده Full-Stack",
        description:
          "Frontend و Backend. سایت‌هایی می‌سازد که امنی هستند و مقیاس‌پذیر.",
      },
      {
        number: "02",
        name: "Aria Alahpanah",
        role: "توسعه‌دهنده Frontend",
        description:
          "رابط‌های تمیز، واکنش‌گرا و درست. ایده رو به سایت واقعی تبدیل می‌کند.",
      },
    ],
  },

  // WhyArsyx
  whyArsyx: {
    label: "چرا ARSYX",
    title: "چرا",
    titleHighlight: "ما؟",
    description:
      "ما نه یک شرکت بزرگ هستیم نه قالب آماده می‌فروشیم. سایت خاصی برای نیاز خاص شما می‌سازیم.",
    items: [
      {
        number: "01",
        title: "بدون قالب آماده",
        description:
          "پروژه رو برای شما طراحی می‌کنیم، نه کسب‌وکار رو داخل قالب جا می‌دهیم.",
      },
      {
        number: "02",
        title: "همه دستگاه‌ها",
        description:
          "موبایل، تبلت، دسکتاپ - هرجا درست کار می‌کند.",
      },
      {
        number: "03",
        title: "مستقیماً تماس",
        description:
          "مستقیماً با افرادی صحبت می‌کنید که خودشان پروژه رو می‌سازند.",
      },
      {
        number: "04",
        title: "قابل رشد",
        description:
          "اگر کسب‌وکار رشد کرد، سایت هم باید رشد کند. از اول این‌طوری می‌سازیم.",
      },
    ],
  },

  // Contact
  contact: {
    label: "شروع کنیم",
    title: "ایده‌ای",
    titleHighlight: "دارید؟",
    description:
      "اگر ایده‌ای دارید - حتی اگر کاملاً واضح نیست - برایمان بنویسید. از اینجا شروع می‌کنیم.",
    callNow: "اینجا تماس بگیرید",
    formTitle: "پروژه‌تان رو تشریح کنید",
    nameLabel: "نام",
    namePlaceholder: "نام شما",
    emailLabel: "ایمیل",
    emailPlaceholder: "you@example.com",
    phoneFieldLabel: "شماره تلفن (اختیاری)",
    phonePlaceholder: "09123456789",
    messageLabel: "درباره پروژه",
    messagePlaceholder:
      "می‌خواهید چی بسازید؟ جزئیاتی که دارید برای ما بنویسید...",
    sending: "در حال ارسال...",
    submit: "ارسال",
    security: "اطلاعات شما فقط برای تماس درباره پروژه استفاده می‌شود.",
    successMessage:
      "پیامتان رسید! به‌زودی جواب می‌دهیم.",
    errorMessage:
      "مشکل پیش آمد. دوباره امتحان کنید یا مستقیماً تماس بگیرید.",
    quickTitle: "سریع‌تر دوست دارید؟",
    quickText:
      "اگر ترجیح می‌دهید سریع‌تر صحبت کنیم، تلگرام بفرستید.",
    quickButton: "تلگرام",
    telegram: "تلگرام",
    phone: "تلفن",
    instagram: "اینستاگرام",
    github: "گیت‌هاب",
    responseTime: "معمولاً",
    responseValue: "کمتر از 24 ساعت پاسخ می‌دهیم.",
  },

  // Footer
  footer: {
    description:
      "سایت‌های مخصوصی برای کسب‌وکار مخصوص شما.",
    startProject: "شروع پروژه",
    navigate: "دسترسی سریع",
    work: "پروژه‌ها",
    services: "خدمات",
    team: "تیم",
    contact: "تماس",
    contactLabel: "تماس",
    email: "ایمیل: arsyx0web@gmail.com",
    telegram: "تلگرام",
    instagram: "اینستاگرام",
    github: "گیت‌هاب",
    copyright: (year) => `© ${year} ARSYX. تمامی حقوق محفوظ است.`,
    tagline: "دو توسعه‌دهنده. یک هدف.",
  },

  // 404 Page
  notFound: {
    error: "۴۰۴",
    title: "این صفحه",
    titleHighlight: "پیدا نشد.",
    description:
      "این صفحه وجود ندارد. شاید ادرس تغییر کرده باشد.",
    backHome: "برگشت به صفحه اول",
  },

  // UI (aria-labels, etc.)
  ui: {
    switchToLight: "حالت روشن",
    switchToDark: "حالت تاریک",
    switchToPersian: "فارسی",
    switchToEnglish: "English",
    visitProject: (title) => `دیدن ${title}`,
    projectImage: (title) => `پروژه ${title}`,
    tagEcommerce: "فروشگاه آنلاین",
    tagDesktopApp: "اپلیکیشن دسکتاپ",
    tagWeatherApi: "Weather API",
  },
};

export default fa;
