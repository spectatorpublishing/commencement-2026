import { Link, useLocation } from 'react-router';
import banner from '../banner.png';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'University', path: '/articles/university' },
  { label: 'A&C',        path: '/articles/ac' },
  { label: 'Sports',     path: '/articles/sports' },
  { label: 'Spectrum',   path: '/articles/spectrum' },
  { label: 'Opinion',    path: '/articles/opinion' },
  { label: 'Crosswords', path: '/articles/crosswords' },
];

export function Navbar({ current }: { current?: string }) {
  const location = useLocation();

  return (
    <nav className="nav-wrapper">
      <ul className="nav-list">
        {NAV_LINKS.map(({ label, path }) => {
          const isActive = current
            ? current === label.toLowerCase()
            : location.pathname === path;

          return (
            <li key={label} className="nav-item">
              {isActive ? (
                <Link to={path} className="nav-active-banner">
                  <img src={banner} alt="" className="nav-banner-img" />
                  <span className="nav-banner-label">{label}</span>
                </Link>
              ) : (
                <Link to={path} className="nav-link">
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
