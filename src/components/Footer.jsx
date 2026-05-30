import { footerContent } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer-top-link" href="#inicio" aria-label="Voltar ao topo da página" title="Voltar ao topo">
        <svg className="footer-chevron-icon" viewBox="0 0 72 78" aria-hidden="true" focusable="false">
          <path className="chevron-line chevron-line-top" d="M10 30 L36 6 L62 30" />
          <path className="chevron-line chevron-line-middle" d="M10 50 L36 26 L62 50" />
          <path className="chevron-line chevron-line-bottom" d="M10 70 L36 46 L62 70" />
        </svg>
      </a>
      <p>{footerContent.copyright}</p>
    </footer>
  );
}
