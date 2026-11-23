import FloatingShot from './FloatingShot';
import shot from '../assets/shot-landing.webp';
import mark from '../assets/mark.webp';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Hero.css';

const META = [
  ['Verifies against', 'NIN, JAMB and O-Level records'],
  ['Decides with', 'Institution criteria and quotas'],
  ['Reports to', 'Institutions and JAMB'],
  ['Payments via', 'Flutterwave'],
];

export default function Hero() {
  return (
    <header className="cover" id="top">
      <div className="sheet">
        <p className="cover__slug" data-reveal>
          <span>Admissions quality assurance</span>
          <span>Nigeria</span>
          <span>Tertiary institutions and JAMB</span>
        </p>

        <div className="cover__title-row">
          <h1 className="cover__title" data-reveal style={{ '--d': '60ms' }}>
            One admission,
            <br />
            one record,
            <br />
            <em>four desks.</em>
          </h1>
          <img className="cover__mark" src={mark} alt="" data-reveal style={{ '--d': '140ms' }} />
        </div>

        <div className="cover__body">
          <p className="cover__abstract" data-reveal style={{ '--d': '120ms' }}>
            TruEntry puts applicants, tertiary institutions and JAMB on the same
            system. Applications arrive in one place. Credentials are verified
            once. Admission decisions are made against the criteria an
            institution actually set, and what comes out at the end is a report
            an auditor can read.
          </p>

          <dl className="cover__meta" data-reveal style={{ '--d': '180ms' }}>
            {META.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="figure cover__figure" data-reveal style={{ '--d': '100ms' }}>
          <div className="figure__frame">
            <FloatingShot
              src={shot}
              alt="The TruEntry web platform on a laptop, showing an applicant's admission status and a payment confirmation."
              depth={0.6}
              tiltMax={5}
              priority
            />
          </div>
          <figcaption><b>Fig. 1</b> The public platform, where an application begins.</figcaption>
        </figure>

        <div className="cover__foot" data-reveal>
          <div>
            <p className="label label--mute">Supported by</p>
            <div className="cover__logos">
              <span className="plate"><img className="cover__logo cover__logo--innov8" src={innov8} alt="Innov8 Hub" /></span>
              <span className="plate"><img className="cover__logo cover__logo--tet" src={tetfund} alt="TETFund, Tertiary Education Trust Fund" /></span>
            </div>
          </div>
          <p className="cover__issue">Developed under TETFAIR 2026</p>
        </div>
      </div>
    </header>
  );
}
