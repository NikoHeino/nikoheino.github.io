import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { courses } from '../data/courses';
import { Icon } from './Icon';
import './Courses.css';

export function Courses() {
  const [open, setOpen] = useState(false);
  const ref = useReveal<HTMLDivElement>();

  const completed = courses.filter((c) => c.status === 'completed').length;
  const ongoing = courses.filter((c) => c.status === 'ongoing').length;

  return (
    <section id="courses" className="section courses">
      <div ref={ref} className="container reveal">
        <button
          type="button"
          className={`courses__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="courses-panel"
        >
          <div className="courses__toggle-text">
            <span className="section-eyebrow">Continuing education</span>
            <h2 className="courses__toggle-title">Udemy courses</h2>
            <p className="courses__toggle-meta">
              <span>{completed} completed</span>
              <span className="courses__dot-sep" />
              <span>{ongoing} ongoing</span>
            </p>
          </div>
          <span className="courses__chevron" aria-hidden="true">
            <Icon name="arrow-down" size={18} />
          </span>
        </button>

        <div
          id="courses-panel"
          className={`courses__panel ${open ? 'is-open' : ''}`}
          aria-hidden={!open}
        >
          <div className="courses__panel-inner">
            <ul className="courses__list">
              {courses.map((c, i) => (
                <li key={i} className="courses__item">
                  <span className={`courses__status courses__status--${c.status}`}>
                    {c.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                  <div className="courses__item-body">
                    {c.url ? (
                      <a href={c.url} className="courses__item-title" target="_blank" rel="noreferrer">
                        {c.title}
                        <Icon name="arrow-right" size={13} />
                      </a>
                    ) : (
                      <span className="courses__item-title">{c.title}</span>
                    )}
                    <div className="courses__item-meta">
                      {c.instructor && <span>{c.instructor}</span>}
                      {c.instructor && c.platform && <span className="courses__dot-sep" />}
                      {c.platform && <span>{c.platform}</span>}
                    </div>
                    {c.note && <p className="courses__item-note">{c.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
