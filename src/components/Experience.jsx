import SectionHeading from "./SectionHeading";
const journey = [
  {
    time: "2026",
    title: "GRENVIS",
    role: "Research, Robotics, AI & IoT",
    text: "Developing Green Vision Intelligent System, combining robotics and sensing with computer vision. First place in Robotics at GLITER JAK, DKI Jakarta.",
  },
  {
    time: "Collaborative work",
    title: "WARU",
    role: "Research & Development (R&D)",
    text: "Contributing to a culinary MSME platform through research and development, with a focus on digital operations and AI-assisted business insights.",
  },
  {
    time: "Independent work",
    title: "Building, testing, learning.",
    role: "Web Development / IoT / AI",
    text: "Developing projects such as AIR.CEK, SOFIA, SIGETA and KasirKita, alongside websites for local businesses. Each project is another chance to connect research with practical development.",
  },
];
export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container experience-layout">
        <SectionHeading number="04" label="The journey so far">
          ALWAYS
          <br />A WORK IN
          <br />
          PROGRESS<span className="heading-dot">.</span>
        </SectionHeading>
        <ol className="journey">
          {journey.map((item) => (
            <li key={item.title}>
              <span className="journey-dot" aria-hidden="true" />
              <span className="eyebrow journey-time">{item.time}</span>
              <h3>{item.title}</h3>
              <p className="journey-role">{item.role}</p>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
