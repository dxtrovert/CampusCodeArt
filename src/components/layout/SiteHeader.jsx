import { useEffect, useRef, useState } from 'react';
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
  const headerRef = useRef(null);
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

    let frame = 0;
    const update = () => {
      frame = 0;
      const header = headerRef.current;
      if (!header) return;
      const bottom = header.offsetHeight + (parseFloat(getComputedStyle(header).top) || 0);
      document.documentElement.style.setProperty('--header-bottom', `${bottom}px`);
      document.documentElement.style.setProperty('--viewport-width', `${document.documentElement.clientWidth}px`);
      const sections = [...document.querySelectorAll('section[data-theme]')];
      const active = sections.filter((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= bottom + 1 && rect.bottom > bottom + 1;
      }).pop();
      const dark = active?.dataset.theme === 'dark';
      const expansion = active ? getComputedStyle(active).getPropertyValue('--section-expansion').trim() : '';
      const progress = expansion === '' ? 1 : Number(expansion);
      // Light scenes keep the header light throughout expansion; dark scenes
      // blend it only in proportion to the same scrubbed progress as the mask.
      const darkness = dark ? progress : 0;
      document.documentElement.style.setProperty('--header-darkness', `${darkness * 100}%`);
      setDarkHeader(dark);
      document.documentElement.dataset.sectionTheme = dark ? 'dark' : 'light';
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('campuscode:section-expansion', schedule);
    const mutationObserver = new MutationObserver(schedule);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('campuscode:section-expansion', schedule);
      cancelAnimationFrame(frame);
      delete document.documentElement.dataset.sectionTheme;
      document.documentElement.style.removeProperty('--header-darkness');
    };
  }, [location.pathname]);

  return (
    <header ref={headerRef} className={`site-header ${darkHeader ? 'site-header--dark' : ''}`}>
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
          <Link className="header-cta" to="/dashboard">
            Open CampusCode <ArrowUpRight size={17} aria-hidden="true" />
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
