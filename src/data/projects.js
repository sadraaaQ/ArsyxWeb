import skxAhvaz from "../assets/projects/skx-ahvaz.png";
import taskmanager from "../assets/projects/taskmanager.png";
import weatherFlow from "../assets/projects/weather-flow.png";

export const PROJECT_TYPES = {
  LIVE: 'live',
  PYTHON: 'python',
};

export const TAG_MAP = {
  "E-commerce": "ui.tagEcommerce",
  "Desktop App": "ui.tagDesktopApp",
  "Weather API": "ui.tagWeatherApi",
};

export const projects = [
  {
    number: "01",
    title: "SKX Ahvaz",
    description: {
      en: "An e-commerce platform built to deliver a modern and seamless online shopping experience.",
      fa: "یک فروشگاه اینترنتی برای SKX Ahvaz که با تمرکز بر تجربه خرید ساده، سریع و راحت طراحی شده است.",
    },
    tags: ["WordPress", "WooCommerce", "E-commerce"],
    link: "https://skxahwaz.ir/",
    image: skxAhvaz,
    type: PROJECT_TYPES.LIVE,
  },
  {
    number: "02",
    title: "Weather Flow",
    description: {
      en: "A simple and lightweight weather application built with Python to provide weather information in a clean and easy-to-use interface.",
      fa: "یک اپلیکیشن سبک و ساده با Python برای مشاهده اطلاعات آب‌وهوا در محیطی تمیز و راحت.",
    },
    tags: ["Weather API", "Desktop App"],
    link: null,
    image: weatherFlow,
    type: PROJECT_TYPES.PYTHON,
  },
  {
    number: "03",
    title: "SimpleTaskManager",
    description: {
      en: "A simple and lightweight task manager application built with Python to provide planing in a clean and easy-to-use interface.",
      fa: "یک ابزار ساده برای مدیریت وظایف که با Python ساخته شده و برای برنامه‌ریزی و پیگیری کارهای روزانه طراحی شده است.",
    },
    tags: ["Django", "Desktop App"],
    link: null,
    image: taskmanager,
    type: PROJECT_TYPES.PYTHON,
  },
];
