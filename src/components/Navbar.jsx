import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../hooks/useLanguage";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { t } = useLanguage();

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToSection = (section) => {
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/#${section}`);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          ARSYX<span>.</span>
        </Link>

        {/* NAVIGATION */}
        <nav
          ref={navRef}
          id="main-nav"
          className={`nav-links ${menuOpen ? "mobile-open" : ""}`}
        >

          <button
            type="button"
            onClick={() => goToSection("projects")}
          >
            {t("nav.projects")}
          </button>

          <button
            type="button"
            onClick={() => goToSection("services")}
          >
            {t("nav.services")}
          </button>

          <button
            type="button"
            onClick={() => goToSection("team")}
          >
            {t("nav.team")}
          </button>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            {t("nav.contact")}
          </Link>

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            {t("nav.startProject")}
          </Link>

        </nav>

        {/* ACTIONS */}
        <div className="navbar-actions">

          <LanguageSwitcher />
          <ThemeToggle />

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t("nav.toggleNav")}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;