import './Closing.css';

const COUNT = [
  { n: '4', label: 'Interfaces', sub: 'applicant, institution, JAMB, administrator' },
  { n: '3', label: 'Result sources', sub: 'O-Level, JAMB, Post-UTME' },
  { n: '1', label: 'Record', sub: 'that all four of them read' },
];

export default function Closing() {
  return (
    <section className="clause closing" id="closing">
      <header className="clause__head" data-reveal>
        <span className="clause__num">6</span>
        <div>
          <h2 className="clause__title">An admission you can check.</h2>
        </div>
      </header>

      <div className="closing__body">
        <ul className="count">
          {COUNT.map((c, i) => (
            <li key={c.label} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <span className="count__n">{c.n}</span>
              <span className="count__label">{c.label}</span>
              <span className="count__sub">{c.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
