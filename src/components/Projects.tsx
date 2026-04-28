import { useMemo, useState } from 'react';
import { allTags, projects } from '../data/projects';
import type { Project } from '../types';
import { useReveal } from '../hooks/useReveal';
import { ProjectCard } from './ProjectCard';
import { Lightbox } from './Lightbox';
import './Projects.css';

const ALL = 'All';

export function Projects() {
  const [filter, setFilter] = useState<string>(ALL);
  const [open, setOpen] = useState<Project | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const filtered = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="work" className="section projects">
      <div ref={ref} className="container reveal">
        <div className="projects__head">
          <div>
            <span className="section-eyebrow">Selected work</span>
            <h2 className="section-title">Things I've built &amp; made</h2>
            <p className="section-subtitle">
              A mix of gameplay systems, tech art, tools, and personal art studies.
              Click any card for a full breakdown with images, GIFs, and video.
            </p>
          </div>
          <div className="projects__filters" role="tablist" aria-label="Filter by tag">
            <button
              type="button"
              role="tab"
              aria-selected={filter === ALL}
              className={`projects__filter ${filter === ALL ? 'is-active' : ''}`}
              onClick={() => setFilter(ALL)}
            >
              All
              <span className="projects__filter-count">{projects.length}</span>
            </button>
            {allTags.map((tag) => {
              const count = projects.filter((p) => p.tags.includes(tag)).length;
              return (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={filter === tag}
                  className={`projects__filter ${filter === tag ? 'is-active' : ''}`}
                  onClick={() => setFilter(tag)}
                >
                  {tag}
                  <span className="projects__filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="projects__grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setOpen} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="projects__empty">No projects match that filter yet.</p>
        )}
      </div>

      {open && <Lightbox project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
