import { useEffect, useState } from 'react';
import useNavVisibility from '../hooks/useNavVisibility';
import useSectionSpy from '../hooks/useSectionSpy';
import { IconMenu, IconClose } from './Icons';
import mark from '../assets/mark.webp';
import markLight from '../assets/mark-light.webp';
import './Nav.css';

const LINKS = [
  { id: 'roles', label: 'Roles' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'records', label: 'Records' },
  { id: 'trust', label: 'Trust' },
  { id: 'terms', label: 'Terms' },
];

const IDS = LINKS.map((l) => l.id);

export default function Nav() {
  const { visible, scrolled, overDark } = useNavVisibility();
  const active = useSectionSpy(IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 18, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={[
          'nav',
          visible || open ? 'is-visible' : 'is-tucked',
          scrolled ? 'is-scrolled' : '',
          overDark ? 'is-dark' : 'is-light',
        ].join(' ')}
      >
        <nav className="nav__pill" aria-label="Primary">
          <a className="nav__brand" href="#top" onClick={(e) => go(e, 'top')}>
            <img className="nav__mark" src={overDark ? markLight : mark} alt="" width="26" height="30" />
            <span className="nav__wordmark">Tru<strong>Entry</strong></span>
          </a>

          <span className="nav__sep" aria-hidden="true" />

          <ul className="nav__links">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  className={active === l.id ? 'is-active' : undefined}
                  aria-current={active === l.id ? 'true' : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </nav>
      </header>

      <div
        className={`drawer ${open ? 'is-open' : ''}`}
        hidden={!open}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
      >
        <div className="drawer__inner">
          <p className="label label--mute">Navigate</p>
          <ul>
            {LINKS.map((l, i) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
                  <span className="drawer__num">{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
