import { ArrowRight, ClipboardCheck, Code2, Gauge, Workflow } from 'lucide-react';
import { heroContent, heroProfileCard } from '../data/site.js';

const summaryIconByType = {
  check: ClipboardCheck,
  code: Code2,
  gauge: Gauge,
  workflow: Workflow
};

export default function Hero() {
  return (
    <section id="inicio" className="hero section-container">
      <div className="hero-content">
        <span className="eyebrow">{heroContent.eyebrow}</span>
        <h1>{heroContent.title}</h1>
        <p>{heroContent.description}</p>

        <div className="hero-actions">
          <a className="primary-button" href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label} <ArrowRight size={18} />
          </a>
          <a
            className="secondary-button"
            href={heroContent.secondaryCta.href}
            download={heroContent.secondaryCta.download}
          >
            {heroContent.secondaryCta.label}
          </a>
        </div>
      </div>

      <aside className="hero-card hero-profile-card" aria-label="Resumo profissional de Pedro Carvalho">
        <div className="profile-card-head">
          <img
            className="profile-avatar"
            src={heroProfileCard.avatar}
            alt="Avatar em pixel art de Pedro Carvalho"
          />
          <div className="profile-heading">
            <h2>{heroProfileCard.name}</h2>
            <p>{heroProfileCard.role}</p>
          </div>
        </div>

        <div className="profile-copy">
          <p className="profile-summary">{heroProfileCard.description}</p>

          <ul className="profile-highlights" aria-label="Destaques profissionais">
            {heroProfileCard.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="quality-flow profile-flow" aria-label="Fluxo de qualidade">
          {heroProfileCard.flow.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>

        <div className="metric-grid profile-summary-grid">
          {heroProfileCard.summary.map((item) => {
            const Icon = summaryIconByType[item.icon];

            return (
              <div className="metric-card profile-summary-item" key={item.title}>
                <Icon size={22} />
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            );
          })}
        </div>
      </aside>
    </section>
  );
}
