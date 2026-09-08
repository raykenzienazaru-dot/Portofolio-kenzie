import SectionHeading from "./SectionHeading";
import AchievementItem from "./AchievementItem";
import { achievements } from "../data/achievements";
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section dark-section achievements-section"
    >
      <div className="container">
        <div className="section-title-row">
          <SectionHeading number="02" label="Milestones along the way">
            SELECTED
            <br />
            ACHIEVEMENTS<span className="heading-dot">.</span>
          </SectionHeading>
          <p>
            Ideas tested beyond the classroom.
            <br />A selection of competition milestones.
          </p>
        </div>
        <ol className="achievements-list">
          {achievements.map((achievement, index) => (
            <AchievementItem
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
