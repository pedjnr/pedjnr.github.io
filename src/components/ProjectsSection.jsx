import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { projects } from '../data/projects.js';
import { sectionContent } from '../data/site.js';
import ProjectCard from './ProjectCard.jsx';

const PROJECT_MOTION_DURATION = 920;
const PROJECT_MOTION_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

function toPlainRect(rect) {
  if (!rect) {
    return null;
  }

  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height
  };
}

export default function ProjectsSection() {
  const content = sectionContent.projects;
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [pendingMotion, setPendingMotion] = useState(null);
  const focusedProjectRef = useRef(null);

  const openProject = useCallback(
    (projectId, event) => {
      const fromRect = toPlainRect(event.currentTarget.closest('.project-card')?.getBoundingClientRect());

      if (fromRect && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setPendingMotion({ projectId, fromRect });
      }

      setActiveProjectId(projectId);
    },
    []
  );

  const closeActiveProject = useCallback(() => {
    if (activeProjectId && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const fromRect = toPlainRect(
        focusedProjectRef.current
          ?.querySelector(`.project-card[data-project-id="${activeProjectId}"]`)
          ?.getBoundingClientRect()
      );

      if (fromRect) {
        setPendingMotion({ projectId: activeProjectId, fromRect });
      }
    }

    setActiveProjectId(null);
  }, [activeProjectId]);

  useLayoutEffect(() => {
    if (!pendingMotion) {
      return undefined;
    }

    const card = focusedProjectRef.current?.querySelector(
      `.project-card[data-project-id="${pendingMotion.projectId}"]`
    );

    if (!card) {
      setPendingMotion(null);
      return undefined;
    }

    const toRect = card.getBoundingClientRect();
    const deltaX = pendingMotion.fromRect.left - toRect.left;
    const deltaY = pendingMotion.fromRect.top - toRect.top;
    const scaleX = pendingMotion.fromRect.width / toRect.width;
    const scaleY = pendingMotion.fromRect.height / toRect.height;

    card.classList.add('is-flipping');
    card.style.transformOrigin = 'top left';
    card.style.transition = 'none';
    card.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`;
    card.style.zIndex = '8';
    card.getBoundingClientRect();

    let frameId = window.requestAnimationFrame(() => {
      frameId = window.requestAnimationFrame(() => {
        card.style.transition = `transform ${PROJECT_MOTION_DURATION}ms ${PROJECT_MOTION_EASING}`;
        card.style.transform = 'translate(0, 0) scale(1, 1)';
      });
    });

    let hasFinished = false;
    let settleTimer;
    const finishMotion = () => {
      if (hasFinished) {
        return;
      }

      hasFinished = true;
      window.cancelAnimationFrame(frameId);
      card.removeEventListener('transitionend', handleTransitionEnd);
      focusedProjectRef.current?.classList.add('is-motion-settling');
      card.style.transition = 'none';
      card.style.transform = 'translate(0, 0) scale(1, 1)';
      card.getBoundingClientRect();
      card.classList.remove('is-flipping');
      card.style.transformOrigin = '';
      card.style.zIndex = '';

      settleTimer = window.setTimeout(() => {
        card.style.transition = '';
        card.style.transform = '';
        focusedProjectRef.current?.classList.remove('is-motion-settling');
        setPendingMotion(null);
      }, 240);
    };

    const fallbackTimer = window.setTimeout(finishMotion, PROJECT_MOTION_DURATION + 220);
    const handleTransitionEnd = (event) => {
      if (event.target === card && event.propertyName === 'transform') {
        window.clearTimeout(fallbackTimer);
        finishMotion();
      }
    };

    card.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(settleTimer);
      window.cancelAnimationFrame(frameId);
      card.removeEventListener('transitionend', handleTransitionEnd);
      card.classList.remove('is-flipping');
      focusedProjectRef.current?.classList.remove('is-motion-settling');
      card.style.transformOrigin = '';
      card.style.transition = '';
      card.style.transform = '';
      card.style.zIndex = '';
    };
  }, [pendingMotion]);

  useEffect(() => {
    if (!activeProjectId) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeActiveProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.requestAnimationFrame(() => {
      focusedProjectRef.current?.querySelector('.project-back-button')?.focus({ preventScroll: true });
    });

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectId, closeActiveProject]);

  return (
    <section id="projetos" className="section-container section-block">
      <div className="section-heading" data-reveal>
        <span className="eyebrow">{content.eyebrow}</span>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className={`projects-stage${activeProjectId ? ' is-focused' : ' is-overview'}`}>
        <div
          className={`projects-grid${activeProjectId ? ' has-active' : ''}`}
          ref={focusedProjectRef}
        >
          {projects.map((project) => {
            const isActive = activeProjectId === project.id;
            const isDimmed = activeProjectId && !isActive;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={isActive}
                isDimmed={Boolean(isDimmed)}
                onActivate={(event) => openProject(project.id, event)}
                onBack={closeActiveProject}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
