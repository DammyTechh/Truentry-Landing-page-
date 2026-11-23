import { IconQuota, IconScore, IconFilter, IconLetter } from './Icons';
import './Decisions.css';

const STEPS = [
  {
    Icon: IconQuota,
    title: 'Criteria and quota go in first',
    body: 'An institution configures its departments, its admission criteria and how many places each one holds. Nothing is processed until those are set.',
  },
  {
    Icon: IconScore,
    title: 'Results are read against them',
    body: 'The decisioning engine works from O-Level and JAMB results, or from O-Level, JAMB and Post-UTME together, depending on what that institution configured.',
  },
  {
    Icon: IconFilter,
    title: 'A list comes out',
    body: 'The engine returns an admission list. It is reviewed, then approved through the admission management function by someone at the institution.',
  },
  {
    Icon: IconLetter,
    title: 'The applicant is told',
    body: 'Status moves to admitted or not admitted, and where it is admitted, a provisional admission letter is generated for the applicant to print.',
  },
];

const STATUSES = [
  ['Pending', 'wait'],
  ['Qualified', 'ok'],
  ['Not qualified', 'no'],
  ['Admitted', 'ok'],
  ['Not admitted', 'no'],
];

export default function Decisions() {
  return (
    <section className="clause decisions" id="decisions">
      <header className="clause__head" data-reveal>
        <span className="clause__num">2</span>
        <div>
          <h2 className="clause__title">The rule is set before the list is.</h2>
          <p className="clause__stand">
            An admission argument is usually about what the rule was. Here the
            criteria and the quota are configured first, recorded, and then run
            over every application in the same way.
          </p>
        </div>
      </header>

      <ol className="steps">
        {STEPS.map((s, i) => (
          <li key={s.title} data-reveal style={{ '--d': `${i * 70}ms` }}>
            <span className="steps__mark">
              <span className="steps__n">{i + 1}</span>
              <span className="steps__icon"><s.Icon size={22} /></span>
            </span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="statuses" data-reveal>
        <p className="label label--mute">What an applicant sees</p>
        <div className="statuses__row">
          {STATUSES.map(([name, tone]) => (
            <span key={name} className={`pill pill--${tone}`}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
