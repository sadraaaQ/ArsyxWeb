import { useState } from 'react';
import { 
  FaTelegram, 
  FaPhone, 
  FaInstagram, 
  FaGithub, 
  FaClock, 
  FaShieldAlt 
} from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      dir: 'ltr',
    },
    { 
      id: 'phone', 
      label: t('contact.phone'), 
      value: '+98 996 149 5625', 
      href: 'tel:+989961495625', 
      icon: <FaPhone />, 
      external: false,
      dir: 'ltr',
    },
    { 
      id: 'instagram', 
      label: t('contact.instagram'), 
      value: '@arsyx_web', 
      href: 'https://instagram.com/arsyx_web', 
      icon: <FaInstagram />, 
      external: true,
      dir: 'ltr',
    },
    { 
      id: 'github', 
      label: t('contact.github'), 
      value: 'github.com/sadraaaQ', 
      href: 'https://github.com/sadraaaQ', 
      icon: <FaGithub />, 
      external: true,
      dir: 'ltr',
    },
    { 
      id: 'response', 
      label: t('contact.responseTime'), 
      value: t('contact.responseValue'), 
      icon: <FaClock />, 
      external: false 
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (formStatus) setFormStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({ 
        type: 'success', 
        message: t('contact.successMessage')
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setFormStatus({ 
        type: 'error', 
        message: t('contact.errorMessage')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="contact-section-label">{t('contact.label')}</p>
          
          <h1 className="contact-title">
            {t('contact.title')} <span>{t('contact.titleHighlight')}</span>
          </h1>
          <p className="contact-description">
            {t('contact.description')}
          </p>
          <a href="tel:+989961495625" className="contact-call">
            {t('contact.callNow')} ↗
          </a>
        </div>

        <div className="contact-info-grid">
          {contactItems.map((item) => (
            <div key={item.id} className="contact-info-item">
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-info-label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  dir={item.dir}
                  {...(item.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  })}
                >
                  {item.value}
                </a>
              ) : (
                <p dir={item.dir}>{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="contact-form-wrapper">
          <h2 className="contact-form-title">{t('contact.formTitle')}</h2>
          
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePlaceholder')}
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder')}
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t('contact.messagePlaceholder')}
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
            
            {formStatus && (
              <div className={`form-status ${formStatus.type}`} role="alert">
                {formStatus.message}
              </div>
            )}
            
            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.sending') : t('contact.submit')}
            </button>
          </form>
          
          <div className="contact-security">
            <FaShieldAlt />
            {t('contact.security')}
          </div>
        </div>

        <div className="contact-quick">
          <div className="contact-quick-content">
            <span className="contact-quick-icon">💬</span>
            <div>
              <h3 className="contact-quick-title">{t('contact.quickTitle')}</h3>
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
