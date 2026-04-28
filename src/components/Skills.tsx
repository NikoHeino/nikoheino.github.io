import { useReveal } from '../hooks/useReveal';
import { skills } from '../data/skills';
import './Skills.css';

export function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section skills">
      <div ref={ref} className="container reveal">
        <div className="skills__head">
          <div>
            <span className="section-eyebrow">Toolkit</span>
            <h2 className="section-title">What I work with</h2>
          </div>
          <p className="section-subtitle">
            A flexible stack tuned for shipping. I lean into Unreal and modern C++ for engineering work,
            and a small set of art tools to round out the pipeline.
          </p>
        </div>
        <div className="skills__grid">
          {skills.map((group) => (
            <article key={group.name} className="skills__card">
              <header className="skills__card-head">
                <span className="skills__dot" />
                <h3 className="skills__card-title">{group.name}</h3>
              </header>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__chip">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
