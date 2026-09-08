import { Code2, Cpu, ScanLine, Wrench } from "lucide-react";
import { skills } from "../data/skills";
const icons = { code: Code2, chip: Cpu, scan: ScanLine, tools: Wrench };
export default function Skills() {
  return (
    <div className="skills" aria-labelledby="skills-title">
      <div className="skills-heading">
        <h3 id="skills-title" className="eyebrow">
          My toolkit
        </h3>
        <span className="eyebrow">Across software & hardware</span>
      </div>
      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div className="skill-group" key={group.title}>
              <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
