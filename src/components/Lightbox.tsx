import { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import type { Project } from '../types';
import { MediaViewer } from './MediaViewer';
import { Icon } from './Icon';

interface LightboxProps {
  project: Project;
  onClose: () => void;
}

export function Lightbox({ project, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);
  const total = project.media.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, next, prev]);

  const current = project.media[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={project.title}>
      <button
        type="button"
        className="lightbox__backdrop"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="lightbox__panel">
        <header className="lightbox__head">
          <div className="lightbox__head-text">
            <h3 className="lightbox__title">{project.title}</h3>
            {project.role && <p className="lightbox__role">{project.role}{project.year ? ` · ${project.year}` : ''}</p>}
          </div>
          <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="lightbox__stage">
          <div className="media-viewer">
            <MediaViewer media={current} />
          </div>
          {total > 1 && (
            <>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--prev"
                onClick={prev}
                aria-label="Previous"
              >
                <Icon name="chevron-left" size={22} />
              </button>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                onClick={next}
                aria-label="Next"
              >
                <Icon name="chevron-right" size={22} />
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="lightbox__thumbs" role="tablist" aria-label="Media">
            {project.media.map((m, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={`lightbox__thumb ${i === index ? 'is-active' : ''}`}
              >
                <img src={m.poster ?? m.src} alt="" loading="lazy" />
                {m.kind === 'video' && <span className="lightbox__thumb-badge"><Icon name="play" size={10} /></span>}
              </button>
            ))}
          </div>
        )}

        <div className="lightbox__body">
          {project.description && (
            <div className="lightbox__desc">
              <ReactMarkdown remarkPlugins={[remarkBreaks]}>{project.description}</ReactMarkdown>
            </div>
          )}
          <ul className="lightbox__tags">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {project.links && project.links.length > 0 && (
            <div className="lightbox__links">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} className="lightbox__link" target="_blank" rel="noreferrer">
                  {l.label}
                  <Icon name="arrow-right" size={14} />
                </a>
              ))}
            </div>
          )}
          {current.caption && <p className="lightbox__caption">{current.caption}</p>}
        </div>
      </div>
    </div>
  );
}
