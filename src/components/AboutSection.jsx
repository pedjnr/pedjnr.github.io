import { BadgeCheck, BriefcaseBusiness, CalendarDays, GraduationCap } from 'lucide-react';
import { experienceContent } from '../data/site.js';

export default function AboutSection() {
  return (
    <section id="experiencias" className="section-container section-block experience-section">
      <div className="experience-panel" data-reveal>
        <div className="section-heading">
          <span className="eyebrow">{experienceContent.eyebrow}</span>
          <h2>{experienceContent.title}</h2>
          <p>{experienceContent.description}</p>
        </div>

        <div className="experience-layout">
          <div className="timeline" aria-label="Linha do tempo profissional">
            {experienceContent.timeline.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`} data-reveal style={{ '--reveal-delay': index + 1 }}>
                <div className="timeline-marker" aria-hidden="true">
                  <BriefcaseBusiness size={18} />
                </div>

                <div className="timeline-card">
                  <div className="timeline-meta">
                    <span>
                      <CalendarDays size={16} />
                      {item.period}
                    </span>
                    <span>{item.type}</span>
                  </div>

                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.description}</p>

                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="timeline-tags" aria-label="Principais tecnologias e práticas">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="experience-support" aria-label="Formação e certificações">
            {experienceContent.supporting.map((group, index) => {
              const Icon = index === 0 ? GraduationCap : BadgeCheck;

              return (
                <div key={group.title} data-reveal style={{ '--reveal-delay': index + 3 }}>
                  <Icon size={22} />
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
}
