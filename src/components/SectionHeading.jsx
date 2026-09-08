export default function SectionHeading({
  number,
  label,
  children,
  className = "",
  id,
}) {
  return (
    <div className={`section-heading ${className}`}>
      <div className="eyebrow section-index">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <h2 id={id}>{children}</h2>
    </div>
  );
}
