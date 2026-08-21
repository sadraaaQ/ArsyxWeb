import { useState } from 'react';
import {
  FaTelegram,
  FaPhone,
  FaInstagram,
  FaGithub,
  FaClock,
  FaShieldAlt,
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const contactItems = [
    {
      id: 'telegram',
      label: 'TELEGRAM',
      value: '@Arsyx_web',
      href: 'https://t.me/Arsyx_web',
      icon: <FaTelegram />,
      external: true,
    },
    {
      id: 'phone',
      label: 'PHONE',
      value: '+98 996 149 5625',
      href: 'tel:+989961495625',
      icon: <FaPhone />,
      external: false,
    },
    {
      id: 'instagram',
      label: 'INSTAGRAM',
      value: '@arsyx_web',
      href: 'https://instagram.com/arsyx_web',
      icon: <FaInstagram />,
      external: true,
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: 'github.com/sadraaaQ',
      href: 'https://github.com/sadraaaQ',
      icon: <FaGithub />,
      external: true,
    },
    {
      id: 'response',
      label: 'RESPONSE TIME',
      value: 'Usually within 24–48 hours.',
      icon: <FaClock />,
      external: false,
    },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (formStatus) {
      setFormStatus(null);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, '')
      .slice(0, 20);

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    if (formStatus) {
      setFormStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch(
        '/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error || 'Failed to send message'
        );
      }

      setFormStatus({
        type: 'success',
        message:
          "✨ Message sent successfully! We'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error(
        '[contact] submit failed:',
        error
      );

      setFormStatus({
        type: 'error',
        message:
          '❌ Failed to send message. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="contact-page"
      id="contact"
    >
      <div className="container">

        {/* Header */}
        <div className="contact-header">

          <p className="contact-section-label">
            GET IN TOUCH
          </p>

          <h1 className="contact-title">
            Let's build <span>something.</span>
          </h1>

          <p className="contact-description">
            Have a project in mind? Reach out to us
            directly. We'd love to hear about your
            idea and see how we can help bring it
            to life.
          </p>

          <a
            href="tel:+989961495625"
            className="contact-call"
          >
            Call us right now ↗
          </a>

        </div>

        {/* Contact Information */}
        <div className="contact-info-grid">

          {contactItems.map((item) => (
            <div
              key={item.id}
              className="contact-info-item"
            >

              <span className="contact-icon">
                {item.icon}
              </span>

              <span className="contact-info-label">
                {item.label}
              </span>

              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {item.value}
                </a>
              ) : (
                <p>{item.value}</p>
              )}

            </div>
          ))}

        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">

          <h2 className="contact-form-title">
            Send us a message
          </h2>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* Name */}
            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                placeholder="John Doe"
                disabled={isSubmitting}
                autoComplete="name"
                aria-required="true"
              />

            </div>

            {/* Email */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                placeholder="john@example.com"
                disabled={isSubmitting}
                autoComplete="email"
                aria-required="true"
              />

            </div>

            {/* Phone */}
            <div className="form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                inputMode="numeric"
                pattern="[0-9]{5,20}"
                minLength={5}
                maxLength={20}
                placeholder="09123456789"
                disabled={isSubmitting}
                autoComplete="tel"
                aria-required="true"
              />

            </div>

            {/* Message */}
            <div className="form-group">

              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={5000}
                placeholder="Tell us about your project..."
                disabled={isSubmitting}
                aria-required="true"
              />

            </div>

            {/* Status */}
            {formStatus && (
              <div
                className={`form-status ${formStatus.type}`}
                role="alert"
                aria-live="polite"
              >
                {formStatus.message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? 'Sending...'
                : 'Send Message'}
            </button>

          </form>

          {/* Security */}
          <div className="contact-security">
            <FaShieldAlt />

            <span>
              Your data is safe and secure
            </span>
          </div>

        </div>

        {/* Quick CTA */}
        <div className="contact-quick">

          <div className="contact-quick-content">

            <span className="contact-quick-icon">
              💬
            </span>

            <div>

              <h3 className="contact-quick-title">
                Prefer instant messaging?
              </h3>

              <p className="contact-quick-text">
                Connect with us on Telegram for
                quick responses.
              </p>

            </div>

          </div>

          <a
            href="https://t.me/Arsyx_web"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-quick-button"
          >
            Chat on Telegram →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;