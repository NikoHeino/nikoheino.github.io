import type { Project } from '../types';
import { MediaThumb } from './MediaThumb';
import { Icon } from './Icon';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const cover = project.media[0];
  const mediaCount = project.media.length;

  return (
    <article
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button
        type="button"
        className="project-card__media"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title}`}
      >
        <MediaThumb media={cover} eager={index < 2} />
        <span className="project-card__overlay">
          <span className="project-card__open">
            View project
            <Icon name="arrow-right" size={16} />
          </span>
        </span>
      </button>
      <div className="project-card__body">
        <header className="project-card__head">
          <h3 className="project-card__title">{project.title}</h3>
          {project.year && <span className="project-card__year">{project.year}</span>}
        </header>
        <p className="project-card__summary">{project.summary}</p>
        <div className="project-card__meta">
          <ul className="project-card__tags">
            {project.tags.slice(0, 4).map((t) => (
              <li key={t} className="project-card__tag">{t}</li>
            ))}
          </ul>
          {mediaCount > 1 && (
            <span className="project-card__count">
              <Icon name="image" size={14} />
              {mediaCount}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
