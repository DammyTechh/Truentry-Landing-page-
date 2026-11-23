import './Trust.css';

const TRUST = [
  ['Transport', 'Served over an HTTPS web interface, with no other route in.'],
  ['Storage', 'Sensitive personal information encrypted at rest and in transmission.'],
  ['Access', 'Role-based control, so an account reaches its own dashboard and nothing past it.'],
  ['Identity', 'Applicants verified against NIN, JAMB registration and O-Level records before an application counts.'],
  ['Traceability', 'Admission decisions and report generation recorded for audit.'],
  ['Integrations', 'Live JAMB and WAEC connections activated only once approved API access is in place.'],
];

export default function Trust() {
  return (
    <section className="clause trust" id="trust">
      <header className="clause__head" data-reveal>
        <span className="clause__num">4</span>
        <div>
          <h2 className="clause__title">Built to be handed to a regulator.</h2>
          <p className="clause__stand">
            The platform holds identity documents, examination results and
            payments for people applying to university. It is designed against
            JAMB requirements and Nigerian data protection regulations rather
            than retrofitted to them.
          </p>
        </div>
      </header>

      <div className="trust__table" data-reveal>
        <table className="register">
          <thead>
            <tr><th scope="col">Area</th><th scope="col">Requirement</th></tr>
          </thead>
          <tbody>
            {TRUST.map(([area, req]) => (
              <tr key={area}>
                <td>{area}</td>
                <td>{req}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
