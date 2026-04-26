import { Link, useLocation } from 'react-router';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'University', path: '/university' },
  { label: 'A&C',        path: '/ac' },
  { label: 'Sports',     path: '/sports' },
  { label: 'Spectrum',   path: '/spectrum' },
  { label: 'Opinion',    path: '/opinion' },
  { label: 'Crosswords', path: '/crosswords' },
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
                  {label}
                  <span className="nav-right-tail" />
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
