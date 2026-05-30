import { useEffect, useState } from 'react';
import { Mail, Moon, Sun } from 'lucide-react';
import { navigation, profile, socialLinks } from '../data/site.js';
import BugEye from './BugEye.jsx';

const THEME_STORAGE_KEY = 'qa-portfolio-theme-v2';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function GitHubIcon({ size = 19 }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="-1 -1 26 26"
      fill="currentColor"
    >
      <path d="M12 .5A11.5 11.5 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.7 2.6 3.4 1.8.1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 19 }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M5.4 21.5H1.7V8.8h3.7v12.7ZM3.5 7.1A2.2 2.2 0 1 1 3.5 2.7a2.2 2.2 0 0 1 0 4.4Zm18.8 14.4h-3.7v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.3h-3.7V8.8H14v1.7h.1a4 4 0 0 1 3.6-2c3.8 0 4.6 2.5 4.6 5.8v7.2Z" />
    </svg>
  );
}

const socialIconByType = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail
};

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [showThemeHint, setShowThemeHint] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return getInitialTheme() !== 'dark';
  });
  const [showContactHint, setShowContactHint] = useState(true);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'only light';
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', isDarkMode ? '#111716' : '#f5f7f4');
    }
  }, [isDarkMode, theme]);

  useEffect(() => {
    if (!showThemeHint) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowThemeHint(false);
    }, 6200);

    return () => window.clearTimeout(timer);
  }, [showThemeHint]);

  useEffect(() => {
    if (!showContactHint) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowContactHint(false);
    }, 7200);

    return () => window.clearTimeout(timer);
  }, [showContactHint]);

  function toggleTheme() {
    setShowThemeHint(false);
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  function hideContactHint() {
    setShowContactHint(false);
  }

  return (
    <>
      <header className="header">
        <div className="brand">
          <BugEye variant="brand" />
        <a className="brand-name" href="#inicio" aria-label="Ir para o início">
          {profile.name}
        </a>
      </div>

      <nav className="nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div
        className="social-links"
        aria-label="Links profissionais"
        onMouseEnter={hideContactHint}
        onFocus={hideContactHint}
      >
        {showContactHint && (
          <span className="contact-hint" role="status" aria-live="polite">
            Entre em contato
          </span>
        )}
        {socialLinks.map((link) => {
          const Icon = socialIconByType[link.type];

          return (
            <a
              key={link.type}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              aria-label={link.label}
              title={link.label}
              onClick={hideContactHint}
            >
              <Icon size={19} />
            </a>
          );
        })}
      </div>
      </header>

      <div className="floating-theme-control">
        <button
          className="theme-toggle theme-toggle--floating"
          type="button"
          aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo noturno'}
          aria-pressed={isDarkMode}
          title={isDarkMode ? 'Modo claro' : 'Modo noturno'}
          onClick={toggleTheme}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {showThemeHint && (
          <span className="theme-hint" role="status" aria-live="polite">
            <Moon size={14} />
            Modo escuro disponível
          </span>
        )}
      </div>
    </>
  );
}
