import Nav from './components/Nav';
import Hero from './components/Hero';
import Rail from './components/Rail';
import Roles from './components/Roles';
import Decisions from './components/Decisions';
import Records from './components/Records';
import Trust from './components/Trust';
import Terms from './components/Terms';
import Team from './components/Team';
import Closing from './components/Closing';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

const CONTENTS = [
  { id: 'roles', label: 'The four desks' },
  { id: 'decisions', label: 'How a decision is made' },
  { id: 'records', label: 'What is kept' },
  { id: 'trust', label: 'Security and compliance' },
  { id: 'terms', label: 'Terms used' },
  { id: 'team', label: 'Who built it' },
  { id: 'closing', label: 'Where it stands' },
];

export default function App() {
  useReveal();

  return (
    <>
      <a className="sr-only" href="#roles">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <div className="sheet">
          <div className="doc">
            <Rail items={CONTENTS} />
            <div className="doc__body">
              <Roles />
              <Decisions />
              <Records />
              <Trust />
              <Terms />
              <Team />
              <Closing />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
