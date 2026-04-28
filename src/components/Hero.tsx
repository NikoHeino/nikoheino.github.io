import { profile } from '../data/profile';
import { Icon } from './Icon';
import './Hero.css';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__noise" />
      </div>
      <div className="container hero__inner">
        <div className="hero__eyebrow">
          <span className="hero__pulse" />
          <span>Open to new collaborations</span>
        </div>
        <h1 className="hero__title">
          <span className="hero__title-line">
            Niko <span className="hero__title-accent">Heino</span>
          </span>
          <span className="hero__title-sub">
            Unreal Engine&nbsp;C++ Developer
            <span className="hero__title-and"> &amp; </span>
            <span className="hero__title-art">Artist</span>
          </span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            View selected work
            <Icon name="arrow-right" size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost">
            <Icon name="email" size={18} />
            Get in touch
          </a>
        </div>
        <ul className="hero__stats">
          {profile.stats.map((s) => (
            <li key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
        <a href="#work" className="hero__scroll" aria-label="Scroll to work">
          <Icon name="arrow-down" size={18} />
        </a>
      </div>
    </section>
  );
}
