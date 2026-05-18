import { useState } from 'react';
import { Link, useLocation } from 'react-router';

import homeBanner       from '../assets/home.png';
import universityBanner from '../assets/university.png';
import acBanner         from '../assets/ac.png';
import sportsBanner     from '../assets/sports.png';
import spectrumBanner   from '../assets/spectrum.png';
import opinionBanner    from '../assets/opinion.png';
import crosswordsBanner from '../assets/crosswords.png';
import creditsBanner    from '../assets/credits.png';

const NAV_LINKS = [
  { label: 'Home',       path: '/',            banner: homeBanner },
  { label: 'University', path: '/articles/university',  banner: universityBanner },
  { label: 'A&C',        path: '/articles/ac',          banner: spectrumBanner },
  { label: 'Sports',     path: '/articles/sports',      banner: homeBanner },
  { label: 'Spectrum',   path: '/articles/spectrum',    banner: universityBanner },
  { label: 'Opinion',    path: '/articles/opinion',     banner: spectrumBanner },
  { label: 'Audio',      path: '/articles/audio',       banner: homeBanner },
  { label: 'Crosswords', path: '/articles/crosswords',  banner: universityBanner },
  { label: 'Credits',    path: '/credits',     banner: spectrumBanner },
];

export function Navbar({ current }: { current?: string }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-wrapper" style={{ paddingBottom: '1rem' }}>
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span className={`nav-hamburger-icon ${menuOpen ? 'open' : ''}`} />
      </button>

      <ul className={`nav-list ${menuOpen ? 'nav-list--open' : ''}`}>
        {NAV_LINKS.map(({ label, path, banner }) => {
          const isActive = current
            ? current === label.toLowerCase()
            : location.pathname === path;

          return (
            <li key={label} className="nav-item">
              {isActive ? (
                <Link
                  to={path}
                  className="nav-active-banner"
                  style={banner ? { ['--banner-url' as string]: `url(${banner})` } : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav-banner-label">{label}</span>
                </Link>
              ) : (
                <Link to={path} className="nav-link" onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
