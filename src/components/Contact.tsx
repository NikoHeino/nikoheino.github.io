import { useReveal } from '../hooks/useReveal';
import { profile } from '../data/profile';
import { Icon, type IconName } from './Icon';
import './Contact.css';

const iconMap: Record<string, IconName> = {
  github: 'github',
  linkedin: 'linkedin',
  x: 'x',
  artstation: 'artstation',
  email: 'email',
};

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section contact">
      <div ref={ref} className="container reveal">
        <div className="contact__card">
          <div className="contact__bg" aria-hidden="true">
            <div className="contact__beam" />
            <div className="contact__grid" />
          </div>
          <div className="contact__copy">
            <span className="section-eyebrow">Get in touch</span>
            <h2 className="contact__title">
              Got a project in mind?<br />
              <span className="contact__title-accent">Let's build something.</span>
            </h2>
            <p className="contact__text">
              I'm always open to interesting collaborations — gameplay engineering, technical art,
              tools, or even art direction work. Drop a line and I'll get back within a day or two.
            </p>
            <div className="contact__actions">
              <a href={`mailto:${profile.email}`} className="btn btn--primary">
                <Icon name="email" size={18} />
                {profile.email}
              </a>
              <div className="contact__socials">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="contact__social"
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name={iconMap[s.icon]} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
