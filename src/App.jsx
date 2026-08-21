import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Team from "./components/Team";
import WhyArsyx from "./components/WhyArsyx";

import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import { useLanguage } from "./hooks/useLanguage";

import "./App.css";
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");

    const timer = setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        
        <Services />
        <Team />
        <Projects />
        <Process />
        <WhyArsyx />
        
      </main>

      <Footer />
    </>
  );
}

function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
      }}>
        <p style={{ color: "var(--color-green)", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "16px" }}>
          {t("notFound.error")}
        </p>
        <h1 style={{ color: "var(--color-white)", fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 800, letterSpacing: "-4px", lineHeight: 1, marginBottom: "20px" }}>
          {t("notFound.title")} <span style={{ color: "var(--color-blue)" }}>{t("notFound.titleHighlight")}</span>
        </h1>
        <p style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.7, maxWidth: "400px", marginBottom: "36px" }}>
          {t("notFound.description")}
        </p>
        <Link to="/" style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "13px 22px",
          borderRadius: "9px",
          fontSize: "14px",
          fontWeight: 700,
          background: "var(--color-green)",
          color: "#041006",
          textDecoration: "none",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}>
          {t("notFound.backHome")}
        </Link>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactPage />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <ProjectsPage />
              <Footer />
            </>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;