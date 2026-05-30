import { useState } from 'react';
import { Play, RotateCw } from 'lucide-react';
import { skillShowcase } from '../data/projects.js';
import { sectionContent } from '../data/site.js';

const revealOrder = [0, 1, 2, 3, 7, 6, 5, 4, 8, 9, 10, 11];
const contactPoints = [0, 0.093, 0.187, 0.28, 0.34, 0.433, 0.527, 0.62, 0.68, 0.773, 0.867, 0.96];
const animationDuration = 4.2;
const revealDelayByIndex = new Map(
  revealOrder.map((skillIndex, step) => [skillIndex, `${(contactPoints[step] * animationDuration).toFixed(2)}s`])
);

function SkillIcon({ skill }) {
  const [hasImageError, setHasImageError] = useState(false);
  const shouldShowImage = skill.iconUrl && !hasImageError;
  const fallback = skill.iconFallback ?? skill.label.slice(0, 2);

  return (
    <span className="skill-icon" aria-hidden="true">
      {shouldShowImage && (
        <img
          src={skill.iconUrl}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setHasImageError(true)}
        />
      )}
      <span className={`skill-icon-fallback${shouldShowImage ? ' is-hidden' : ''}`}>{fallback}</span>
    </span>
  );
}

export default function SkillsSection() {
  const content = sectionContent.skills;
  const [animationKey, setAnimationKey] = useState(0);

  function replayAnimation() {
    setAnimationKey((currentKey) => currentKey + 1);
  }

  return (
    <section id="skills" className="section-container section-block skills-section">
      <div className="skills-overview">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">{content.eyebrow}</span>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <button
          className="skills-replay"
          type="button"
          aria-label="Repetir animação das ferramentas"
          title="Repetir animação"
          onClick={replayAnimation}
        >
          <RotateCw className="replay-arrow" size={34} strokeWidth={2.8} />
          <Play className="replay-play" size={14} fill="currentColor" strokeWidth={2.6} />
        </button>
      </div>

      <div className="skills-board" data-reveal style={{ '--reveal-delay': 1 }}>
        <div className="skills-animation-stage" key={animationKey}>
          <svg className="skill-path" viewBox="0 0 100 72" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 11.43 10.63 H 88.57 V 36 H 11.43 V 61.37 H 88.57" />
          </svg>
          <span className="board-chomper" aria-hidden="true" />

          <div className="skills-card-grid" aria-label={content.title}>
            {skillShowcase.map((skill, index) => (
              <article
                className="animated-skill-card"
                key={skill.label}
                style={{ '--skill-index': index, '--skill-delay': revealDelayByIndex.get(index) }}
              >
                <span className="skill-dot" aria-hidden="true" />
                <SkillIcon skill={skill} />
                <strong>{skill.label}</strong>
                <span className="skill-context">{skill.context}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
