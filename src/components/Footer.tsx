import { profile } from '../data/profile';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">
          © {year} {profile.name}. Crafted with React, TypeScript &amp; a lot of caffeine.
        </span>
        <a href="#top" className="footer__top">Back to top ↑</a>
      </div>
    </footer>
  );
}
