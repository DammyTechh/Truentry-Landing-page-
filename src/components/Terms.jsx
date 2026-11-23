import { useState } from 'react';
import { IconPlus } from './Icons';
import './Terms.css';

const TERMS = [
  ['TruEntry', 'A web-based platform for applicant verification, admission processing and regulatory reporting.'],
  ['Applicant Dashboard', 'Where applicants manage their applications and track admission progress.'],
  ['Institution Dashboard', 'Where institutions manage applications, admission parameters and decisions.'],
  ['Administrator Dashboard', 'Platform administration, institutional management, financial monitoring and audit records.'],
  ['JAMB', 'Joint Admissions and Matriculation Board, the regulatory body for tertiary admission oversight.'],
  ['NIN', 'National Identification Number, used for applicant identity verification.'],
  ['WAEC', 'West African Examinations Council, a source for O-Level result verification.'],
  ['UTME', 'Unified Tertiary Matriculation Examination, used in admission assessment.'],
  ['Post-UTME', 'An additional assessment required by certain institutions.'],
  ['Admission Quota', 'The number of places allocated according to institutional settings.'],
  ['Admission Criteria', 'The requirements an institution configures to determine eligibility and outcomes.'],
  ['Decisioning Engine', 'The component that processes applications against configured criteria and quotas.'],
  ['Application Status', 'The displayed stage or outcome of an applicant’s admission application.'],
  ['Provisional Admission Letter', 'An electronically signed admission document generated for an applicant.'],
  ['Audit-Ready Report', 'A structured record of admission information for institutional and regulatory review.'],
  ['Flutterwave', 'The payment gateway used for application fees.'],
  ['JAMB CAPS', 'The JAMB portal that receives audited admission lists.'],
  ['Stub Service', 'An internal service using representative data in place of an external API not yet available.'],
  ['Audit Log', 'A record of platform activity, admission decisions and report generation, kept for traceability.'],
];

const PREVIEW = 8;

export default function Terms() {
  const [all, setAll] = useState(false);
  const shown = all ? TERMS : TERMS.slice(0, PREVIEW);

  return (
    <section className="clause terms" id="terms">
      <header className="clause__head" data-reveal>
        <span className="clause__num">5</span>
        <div>
          <h2 className="clause__title">The words, and what they mean here.</h2>
          <p className="clause__stand">
            {TERMS.length} entries, taken from the project documentation rather
            than invented for the page.
          </p>
        </div>
      </header>

      <div className="terms__table" data-reveal>
        <table className="register">
          <thead>
            <tr><th scope="col">Term</th><th scope="col">Definition</th></tr>
          </thead>
          <tbody>
            {shown.map(([t, d]) => (
              <tr key={t}><td>{t}</td><td>{d}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      {!all && (
        <button className="terms__more" onClick={() => setAll(true)}>
          <IconPlus size={15} />
          Show the other {TERMS.length - PREVIEW}
        </button>
      )}
    </section>
  );
}
