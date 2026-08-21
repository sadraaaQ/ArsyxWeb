import Contact from "../components/Contact";
import { usePageTitle } from "../hooks/usePageTitle";

function ContactPage() {
  usePageTitle("Contact | Arsyx Web");

  return (
    <main>
      <Contact />
    </main>
  );
}

export default ContactPage;