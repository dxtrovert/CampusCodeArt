import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BrandMark from '../common/BrandMark.jsx';

const navigation = [
  { label: 'Explore', href: '#about', hasMenu: true },
  { label: 'Projects', href: '#arena', hasMenu: true },
  { label: 'Challenges', href: '#arena' },
  { label: 'Community', href: '#people' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkHeader, setDarkHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setDarkHeader(false);
      return undefined;
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setDarkHeader(visible.target.dataset.theme === 'dark');
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.2, 0.5] },
    );

    const observeSections = () => {
      document.querySelectorAll('[data-theme]').forEach((section) => {
        if (section.dataset.headerThemeObserved) return;
        section.dataset.headerThemeObserved = 'true';
        sectionObserver.observe(section);
      });
    };

    observeSections();
    const mutationObserver = new MutationObserver(observeSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [location.pathname]);

  return (
    <header className={`site-header ${darkHeader ? 'site-header--dark' : ''}`}>
      <div className="site-header__inner">
        <Link className="wordmark" to="/" aria-label="CampusCode home">
          <BrandMark />
          <span>CAMPUSCODE<span className="wordmark__dot">.</span></span>
        </Link>

        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={location.pathname === '/' ? item.href : `/${item.href}`}>
              {item.label}
              {item.hasMenu && <ChevronDown size={14} aria-hidden="true" />}
            </a>
          ))}
          <NavLink className="mobile-auth-link" to="/login">Log in</NavLink>
        </nav>

        <div className="site-header__actions">
          <Link className="header-login" to="/login">Log in</Link>
          <Link className="header-cta" to="/register">
            Get started <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}
