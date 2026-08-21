import { useState } from 'react';
import {
  FaTelegram,
  FaPhone,
  FaInstagram,
  FaGithub,
  FaClock,
  FaShieldAlt,
} from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';

function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company_website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const contactItems = [
    {
      id: 'telegram',
      label: t('contact.telegram'),
      value: '@Arsyx_web',
      href: 'https://t.me/Arsyx_web',
      icon: <FaTelegram />,
      external: true,
      ltr: true,
    },
    {
      id: 'phone',
      label: t('contact.phone'),
      value: '+98 996 149 5625',
      href: 'tel:+989961495625',
      icon: <FaPhone />,
      external: false,
      ltr: true,
    },
    {
      id: 'instagram',
      label: t('contact.instagram'),
      value: '@arsyx_web',
      href: 'https://instagram.com/arsyx_web',
      icon: <FaInstagram />,
      external: true,
      ltr: true,
    },
    {
      id: 'github',
      label: t('contact.github'),
      value: 'github.com/sadraaaQ',
      href: 'https://github.com/sadraaaQ',
      icon: <FaGithub />,
      external: true,
      ltr: true,
    },
    {
      id: 'response',
      label: t('contact.responseTime'),
      value: t('contact.responseValue'),
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
        message: t('contact.successMessage'),
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company_website: '',
      });
    } catch (error) {
      console.error(
        '[contact] submit failed:',
        error
      );

      setFormStatus({
        type: 'error',
        message: t('contact.errorMessage'),
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

        <div className="contact-header">

          <p className="contact-section-label">
            {t('contact.label')}
          </p>

          <h1 className="contact-title">
            {t('contact.title')}{' '}
            <span>{t('contact.titleHighlight')}</span>
          </h1>

          <p className="contact-description">
            {t('contact.description')}
          </p>

          <a
            href="tel:+989961495625"
            className="contact-call"
          >
            {t('contact.callNow')} ↗
          </a>

        </div>

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
                  dir={item.ltr ? 'ltr' : undefined}
                  {...(item.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {item.value}
                </a>
              ) : (
                <p dir={item.ltr ? 'ltr' : undefined}>{item.value}</p>
              )}

            </div>
          ))}

        </div>

        <div className="contact-form-wrapper">

          <h2 className="contact-form-title">
            {t('contact.formTitle')}
          </h2>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <div className="hp-field" aria-hidden="true">
              <label htmlFor="company_website">Website</label>
              <input
                type="text"
                id="company_website"
                name="company_website"
                value={formData.company_website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-group">

              <label htmlFor="name">
                {t('contact.nameLabel')}
              </label>

              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                placeholder={t('contact.namePlaceholder')}
                disabled={isSubmitting}
                autoComplete="name"
                aria-required="true"
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                {t('contact.emailLabel')}
              </label>

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                placeholder={t('contact.emailPlaceholder')}
                disabled={isSubmitting}
                autoComplete="email"
                aria-required="true"
              />

            </div>

            <div className="form-group">

              <label htmlFor="phone">
                {t('contact.phoneFieldLabel')}
              </label>

              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                inputMode="numeric"
                pattern="[0-9]{5,20}"
                minLength={5}
                maxLength={20}
                placeholder={t('contact.phonePlaceholder')}
                disabled={isSubmitting}
                autoComplete="tel"
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                {t('contact.messageLabel')}
              </label>

              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={5000}
                placeholder={t('contact.messagePlaceholder')}
                disabled={isSubmitting}
                aria-required="true"
              />

            </div>

            {formStatus && (
              <div
                className={`form-status ${formStatus.type}`}
                role="alert"
                aria-live="polite"
              >
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t('contact.sending')
                : t('contact.submit')}
            </button>

          </form>

          <div className="contact-security">
            <FaShieldAlt />

            <span>
              {t('contact.security')}
            </span>
          </div>

        </div>

        <div className="contact-quick">

          <div className="contact-quick-content">

            <span className="contact-quick-icon">
              💬
            </span>

            <div>

              <h3 className="contact-quick-title">
                {t('contact.quickTitle')}
              </h3>

              <p className="contact-quick-text">
                {t('contact.quickText')}
              </p>

            </div>

          </div>

          <a
            href="https://t.me/Arsyx_web"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-quick-button"
          >
            {t('contact.quickButton')} →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
