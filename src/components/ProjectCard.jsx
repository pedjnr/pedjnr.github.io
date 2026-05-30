import { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Gauge, ListChecks, MonitorCheck, Network, Smartphone } from 'lucide-react';
import { profile } from '../data/site.js';

const visualIconByAccent = {
  blue: MonitorCheck,
  green: Smartphone,
  red: Network,
  yellow: Gauge
};

export default function ProjectCard({ project, isActive = false, isDimmed = false, onActivate, onBack }) {
  const tabs = project.tabs ?? [];
  const hasTabs = tabs.length > 0;
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const [activeNestedProjectIndex, setActiveNestedProjectIndex] = useState(0);
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
  const tabProjects = activeTab?.projects ?? [];
  const tabAsProject = activeTab
    ? {
        id: activeTab.id,
        title: activeTab.title,
        description: activeTab.description,
        stack: activeTab.stack ?? [],
        repo: activeTab.repo,
        highlights: activeTab.highlights ?? []
      }
    : null;
  const displayProjects = tabProjects.length > 0 ? tabProjects : tabAsProject ? [tabAsProject] : [];
  const hasProjectList = tabProjects.length > 0;
  const activeNestedProject = displayProjects.length > 0 ? displayProjects[activeNestedProjectIndex % displayProjects.length] : null;
  const hasNestedNavigation = displayProjects.length > 1;
  const VisualIcon = visualIconByAccent[project.accent] ?? MonitorCheck;
  const previewTags = tabs.map((tab) => tab.label).slice(0, 3);
  const repoLabel = 'Ver repositório';
  const ShellElement = isActive ? 'div' : 'button';

  const handleTabChange = (tabId) => {
    setActiveTabId(tabId);
    setActiveNestedProjectIndex(0);
  };

  const handleNestedProjectStep = (step) => {
    setActiveNestedProjectIndex((currentIndex) => {
      const totalProjects = displayProjects.length;

      if (!totalProjects) {
        return 0;
      }

      return (currentIndex + step + totalProjects) % totalProjects;
    });
  };

  return (
    <article
      className={`project-card project-showcase-card accent-${project.accent}${isActive ? ' is-active' : ''}${isDimmed ? ' is-dimmed' : ''}`}
      data-project-id={project.id}
      aria-hidden={isDimmed}
      style={{ viewTransitionName: `project-card-${project.id}` }}
    >
      {isActive && (
        <button className="project-back-button" type="button" onClick={onBack}>
          <ArrowLeft size={18} />
          Voltar aos projetos
        </button>
      )}

      <ShellElement
        className="project-card-shell"
        {...(!isActive
          ? {
              type: 'button',
              'aria-label': `Abrir detalhes de ${project.title}`,
              'aria-expanded': false,
              'aria-controls': `project-${project.id}-details`,
              onClick: onActivate
            }
          : {})}
      >
        <div className="project-visual" aria-hidden="true">
          <span className="project-visual-icon">
            <VisualIcon size={27} />
          </span>
          <span className="project-type-pill">{project.type}</span>
          <span className="project-visual-orbit" />
          <span className="project-visual-line" />
        </div>

        <div className="project-card-summary">
          <span className="project-kicker">Case técnico</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {!isActive && (
            <div className="project-preview-tags" aria-hidden="true">
              {previewTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </ShellElement>

      {isActive && activeTab && (
        <div className="project-expanded" id={`project-${project.id}-details`}>
          {hasTabs && (
            <div className="project-tabs" role="tablist" aria-label={`Opções de ${project.title}`}>
              {tabs.map((tab) => {
                const tabIsActive = tab.id === activeTab.id;

                return (
                  <button
                    className={`project-tab${tabIsActive ? ' is-active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={tabIsActive}
                    aria-controls={`${project.id}-${tab.id}-panel`}
                    id={`${project.id}-${tab.id}-tab`}
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}

          <div
            key={activeTab.id}
            className="project-tab-panel"
            id={`${project.id}-${activeTab.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${project.id}-${activeTab.id}-tab`}
          >
            {activeNestedProject && (
              <div className="nested-projects nested-projects--standalone" aria-label={`Projetos em ${activeTab.label}`}>
                <article className={`nested-project-card${hasNestedNavigation ? ' has-navigation' : ''}`} key={activeNestedProject.id}>
                  {hasNestedNavigation && (
                    <div className="nested-project-nav" aria-label={`Navegar entre projetos de ${activeTab.label}`}>
                      <button type="button" onClick={() => handleNestedProjectStep(-1)} aria-label="Ver projeto anterior">
                        <ChevronLeft size={16} />
                      </button>
                      <span>
                        {activeNestedProjectIndex + 1}/{displayProjects.length}
                      </span>
                      <button type="button" onClick={() => handleNestedProjectStep(1)} aria-label="Ver próximo projeto">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}

                  <div className="nested-project-card__content">
                    <span className="project-detail-label">{hasProjectList ? 'Projeto real' : 'Ferramenta em foco'}</span>
                    <h5>{activeNestedProject.title}</h5>
                    <p>{activeNestedProject.description}</p>

                    <div className="stack-list stack-list--compact" aria-label="Ferramentas e práticas do projeto">
                      {activeNestedProject.stack.map((stackItem) => (
                        <span key={stackItem}>{stackItem}</span>
                      ))}
                    </div>
                  </div>

                  <div className="nested-project-card__aside">
                    <strong>
                      <ListChecks size={17} /> Evidências
                    </strong>
                    <ul>
                      {activeNestedProject.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <a
                      className="card-link project-repo-link"
                      href={activeNestedProject.repo && activeNestedProject.repo !== '#' ? activeNestedProject.repo : profile.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {repoLabel} <ExternalLink size={17} />
                    </a>
                  </div>
                </article>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
