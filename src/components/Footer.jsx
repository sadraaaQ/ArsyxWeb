import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >
              ARSYX<span>.</span>
            </Link>

            <p>
              {t("footer.description")}
            </p>

            <Link
              to="/contact"
              className="footer-cta"
            >
              {t("footer.startProject")} ↗
            </Link>

          </div>


          {/* LINKS */}
          <div className="footer-links">

            {/* NAVIGATE */}
            <div className="footer-column">

              <span className="footer-label">
                {t("footer.navigate")}
              </span>

              <Link to="/#projects">
                {t("footer.work")}
              </Link>

              <Link to="/#services">
                {t("footer.services")}
              </Link>

              <Link to="/#team">
                {t("footer.team")}
              </Link>

              <Link to="/contact">
                {t("footer.contact")}
              </Link>

            </div>


            {/* CONTACT / SOCIAL */}
            <div className="footer-column">

              <span className="footer-label">
                {t("footer.contactLabel")}
              </span>
   <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=arsyx0web@gmail.com"
    target="_blank"
  rel="noopener noreferrer"
   >
 {t("footer.email")}
   </a> 
              <a
                href="https://t.me/Arsyx_web"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.telegram")}
              </a>

              <a
                href="https://instagram.com/arsyx_web"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.instagram")}
              </a>

              <a
                href="https://github.com/sadraaaQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.github")}
              </a>

            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            {t("footer.copyright")(new Date().getFullYear())}
          </p>

          <p>
            {t("footer.tagline")}
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
