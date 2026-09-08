import { ArrowUpRight } from "lucide-react";
export default function AchievementItem({ achievement, index }) {
  return (
    <li
      className={`achievement-item ${achievement.featured ? "achievement-featured" : ""}`}
    >
      <span className="achievement-number eyebrow">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="achievement-placement">{achievement.placement}</div>
      <div className="achievement-detail">
        <h3>{achievement.title}</h3>
        <p className="achievement-organizer">{achievement.organizer}</p>
        {achievement.description && (
          <p className="achievement-description">{achievement.description}</p>
        )}
      </div>
      <div className="achievement-year">
        {achievement.year && <span>{achievement.year}</span>}
        {achievement.featured && (
          <ArrowUpRight size={32} strokeWidth={1.3} aria-hidden="true" />
        )}
      </div>
    </li>
  );
}
