import mark from '../assets/mark.webp';
import './Footer.css';

const COLS = [
  { title: 'The platform', links: [['Roles', '#roles'], ['Decisions', '#decisions'], ['Records', '#records']] },
  { title: 'Reference', links: [['Trust', '#trust'], ['Terms', '#terms'], ['Team', '#team'], ['Where it stands', '#closing']] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="sheet">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={mark} alt="" />
            <div>
              <p className="footer__name">Tru<strong>Entry</strong></p>
              <p>
                An admissions quality assurance platform connecting applicants,
                tertiary institutions and JAMB through one system for
                application processing, verification, admission decisions and
                regulatory reporting.
              </p>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="label label--mute">{c.title}</p>
                <ul>
                  {c.links.map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} TruEntry. All rights reserved.</p>
          <p className="footer__credit">Developed under TETFAIR 2026</p>
        </div>
      </div>
    </footer>
  );
}
