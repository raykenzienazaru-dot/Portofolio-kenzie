import SectionHeading from "./SectionHeading";
import Skills from "./Skills";
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-layout">
          <SectionHeading number="01" label="A little about me">
            CURIOUS BY
            <br />
            NATURE.
            <br />
            <span className="muted-heading">
              HANDS-ON
              <br />
              BY CHOICE.
            </span>
          </SectionHeading>
          <div className="about-copy">
            <p className="lead">
              I like understanding how things work.
              <br />
              Then finding out what I can build with them.
            </p>
            <p>
              I'm Raykenzie Nazaru Fathurrahmansyah, a student at SMK Negeri 1
              Jakarta in the Sistem Informasi, Jaringan dan Aplikasi (SIJA)
              program.
            </p>
            <p>
              My interests connect software development, IoT, artificial
              intelligence and computer vision. I work on web applications,
              monitoring systems and research prototypes—sometimes
              independently, sometimes with a team, and often for competitions.
            </p>
            <p>
              Research and development is part of that process: exploring a
              problem, testing an idea and learning from what happens.
            </p>
            <dl className="about-facts">
              <div>
                <dt>Education</dt>
                <dd>
                  SMK Negeri 1 Jakarta
                  <br />
                  <span>SIJA</span>
                </dd>
              </div>
              <div>
                <dt>Current role</dt>
                <dd>
                  Student Developer
                  <br />& Research & Development
                </dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Jakarta, Indonesia</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>IoT / AI / Web Development</dd>
              </div>
            </dl>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
}
