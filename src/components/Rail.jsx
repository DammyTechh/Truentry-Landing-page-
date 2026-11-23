import useSectionSpy from '../hooks/useSectionSpy';
import './Rail.css';

/* The contents index, set in the left margin the way a report carries one.
   It is the page's primary wayfinding on wide screens; the top bar keeps
   the same links for everything narrower. */
export default function Rail({ items }) {
  const ids = items.map((i) => i.id);
  const active = useSectionSpy(ids);
  const idx = Math.max(0, ids.indexOf(active));

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <nav className="rail" aria-label="Contents">
      <p className="rail__kicker">Contents</p>
      <ol>
        {items.map((it, i) => (
          <li key={it.id} className={it.id === active ? 'is-on' : undefined}>
            <a href={`#${it.id}`} onClick={(e) => go(e, it.id)}>
              <span className="rail__n">{i + 1}</span>
              <span className="rail__t">{it.label}</span>
            </a>
          </li>
        ))}
      </ol>
      <p className="rail__pos">
        <span>{idx + 1}</span> of {items.length}
      </p>
    </nav>
  );
}
