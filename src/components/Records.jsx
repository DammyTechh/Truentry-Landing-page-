import { IconLog, IconExport, IconPayment, IconNote } from './Icons';
import './Records.css';

const KEEPS = [
  {
    Icon: IconLog,
    title: 'Audit log',
    body: 'Platform activity, admission decisions and report generation events, recorded as they happen rather than reconstructed later.',
  },
  {
    Icon: IconExport,
    title: 'Audit-ready reports',
    body: 'A structured record of admission information that an institution or JAMB can generate for a given institution or department.',
  },
  {
    Icon: IconPayment,
    title: 'Financial trail',
    body: 'Every application and Post-UTME fee, with the applicant, the institution, the purpose, the amount, the status and the date.',
  },
];

export default function Records() {
  return (
    <section className="clause records" id="records">
      <header className="clause__head" data-reveal>
        <span className="clause__num">3</span>
        <div>
          <h2 className="clause__title">If it happened, it is written down.</h2>
          <p className="clause__stand">
            The point of putting admissions on one system is not speed. It is
            that afterwards there is a single account of what was decided, on
            what basis, by whom, and when.
          </p>
        </div>
      </header>

      {/* an inset panel, the way a report sets an extract apart */}
      <div className="inset" data-theme="dark" data-reveal>
        <ul className="keeps">
          {KEEPS.map((k) => (
            <li key={k.title}>
              <span className="keeps__icon"><k.Icon size={22} /></span>
              <h3>{k.title}</h3>
              <p>{k.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="caveat" data-reveal>
        <span className="caveat__icon"><IconNote size={20} /></span>
        <p className="annot">
          <strong>On the JAMB connection.</strong> Audited admission lists are
          intended to transfer to JAMB CAPS. Live JAMB API access was not
          available when this was built, so those integrations currently run
          against stub services using representative data.
        </p>
      </div>
    </section>
  );
}
