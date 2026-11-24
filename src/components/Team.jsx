import team from '../assets/team.webp';
import './Team.css';

export default function Team() {
  return (
    <section className="clause team" id="team">
      <header className="clause__head" data-reveal>
        <span className="clause__num">6</span>
        <div>
          <h2 className="clause__title">Who built it.</h2>
          <p className="clause__stand">
            Three people designed the four interfaces, built the decisioning
            engine and wrote the audit and reporting rules, under TETFAIR 2026.
          </p>
        </div>
      </header>

      <figure className="figure team__figure" data-reveal style={{ '--d': '80ms' }}>
        <div className="figure__frame">
          <img
            src={team}
            alt="The three members of the TruEntry team, in TETFAIR shirts."
            loading="lazy"
          />
        </div>
        <figcaption><b>Fig. 6</b> The TruEntry team, TETFAIR 2026.</figcaption>
      </figure>
    </section>
  );
}
