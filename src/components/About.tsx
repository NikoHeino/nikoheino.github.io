import { useReveal } from '../hooks/useReveal';
import { profile } from '../data/profile';
import { Icon } from './Icon';
import './About.css';

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div ref={ref} className="container about__inner reveal">
        <div className="about__visual">
          <div className="about__portrait" aria-hidden="true">
            <div className="about__portrait-grid" />
            <div className="about__portrait-glow" />
            <span className="about__portrait-mark">{profile.initials}</span>
          </div>
          <div className="about__chip about__chip--top">
            <Icon name="sparkle" size={14} />
            <span>Engineer · Artist · Generalist</span>
          </div>
          <div className="about__chip about__chip--bottom">{profile.location}</div>
        </div>
        <div className="about__copy">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">
            Mostly engineer, Hobbyist artist<br />
          </h2>
          {profile.about.map((p, i) => (
            <p key={i} className="about__paragraph">{p}</p>
          ))}
          <a href="#contact" className="about__link">
            Let's talk
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
