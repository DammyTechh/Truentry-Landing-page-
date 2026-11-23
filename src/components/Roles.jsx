import { useState } from 'react';
import FloatingShot from './FloatingShot';
import { IconApplicant, IconInstitution, IconBoard, IconAdmin } from './Icons';
import shotApplicant from '../assets/shot-applicant.webp';
import shotInstitution from '../assets/shot-two.webp';
import shotJamb from '../assets/shot-jamb.webp';
import shotAdmin from '../assets/shot-sysadmin.webp';
import './Roles.css';

const DESKS = [
  {
    id: 'applicant',
    Icon: IconApplicant,
    name: 'Applicant',
    line: 'Applies once, verified once, tracks it to the letter.',
    does: [
      'Register, then complete a profile with biodata, NIN, JAMB registration number and O-Level details',
      'Clear identity and credential verification before applying',
      'Browse institutions and departments, accept the admission policy, pay the fee through Flutterwave',
      'Complete Post-UTME where the institution requires it',
      'Watch the status move through pending, qualified, admitted',
      'Print the provisional admission letter once it is issued',
    ],
    shot: shotApplicant,
    ratio: '1600 / 642',
    alt: 'The applicant workspace: a list of institutions to apply to, and a dashboard of submitted applications with their statuses.',
  },
  {
    id: 'institution',
    Icon: IconInstitution,
    name: 'Institution',
    line: 'Sets the rules, then runs them over every application.',
    does: [
      'Configure admission criteria, departments and quotas',
      'Review submitted applications, filtered by department or found by applicant ID',
      'Run admission processing against the criteria already configured',
      'Review the generated admission list and approve it',
      'Generate admission reports for internal review and for the regulator',
    ],
    shot: shotInstitution,
    ratio: '1500 / 844',
    alt: 'The institution dashboard: revenue, application and admission counts above a filterable table of applications.',
  },
  {
    id: 'jamb',
    Icon: IconBoard,
    name: 'JAMB',
    line: 'Reads the same record the institution acted on.',
    does: [
      'Open the admission records of any institution on the platform',
      'Generate or download audit-ready reports by institution or by department',
      'Review quota settings and admission criteria alongside the outcome',
      'Use the institutional communication function where a query arises',
    ],
    shot: shotJamb,
    ratio: '1100 / 670',
    alt: 'An admission audit report showing applicant totals, quota settings and the admission criteria that were applied.',
  },
  {
    id: 'admin',
    Icon: IconAdmin,
    name: 'Administrator',
    line: 'Keeps the platform, the money and the log.',
    does: [
      'Manage institutional profiles and categories',
      'Review user records across the platform',
      'Watch the financial overview: total revenue, application fees, Post-UTME fees',
      'Open recent payments down to applicant, institution, purpose, amount, status and date',
      'Read the audit log of platform activity and admission decisions',
    ],
    shot: shotAdmin,
    ratio: '1100 / 670',
    alt: 'The administrator dashboard: applications by stage, institution and revenue totals, and recent applications.',
  },
];

export default function Roles() {
  const [active, setActive] = useState('applicant');
  const desk = DESKS.find((d) => d.id === active);

  const figNo = DESKS.findIndex((d) => d.id === active) + 2;

  return (
    <section className="clause roles" id="roles">
      <header className="clause__head" data-reveal>
        <span className="clause__num">1</span>
        <div>
          <h2 className="clause__title">Same record. Four ways in.</h2>
          <p className="clause__stand">
            An admission touches four parties who have never shared a system.
            TruEntry gives each of them its own interface over one set of
            records, so nobody is reconciling spreadsheets at the end of it.
          </p>
        </div>
      </header>

      <div className="switch" role="tablist" aria-label="Platform roles">
          {DESKS.map((d) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={d.id === active}
              className={`switch__tab ${d.id === active ? 'is-on' : ''}`}
              onClick={() => setActive(d.id)}
            >
              <span className="switch__icon"><d.Icon size={22} /></span>
              {d.name}
            </button>
          ))}
      </div>

      <div className="desk">
          <div className="desk__copy">
            <h3 className="desk__line">{desk.line}</h3>
            <ol className="desk__does">
              {desk.does.map((t, i) => (
                <li key={i}><span className="desk__n">{i + 1}</span>{t}</li>
              ))}
            </ol>
          </div>

          <div className="desk__stage">
            <figure className="figure">
              <div className="figure__frame">
                <FloatingShot
                  key={desk.id}
                  src={desk.shot}
                  alt={desk.alt}
                  depth={0.5}
                  tiltMax={5}
                />
              </div>
              <figcaption><b>Fig. {figNo}</b> {desk.name} interface.</figcaption>
            </figure>
          </div>
      </div>
    </section>
  );
}
