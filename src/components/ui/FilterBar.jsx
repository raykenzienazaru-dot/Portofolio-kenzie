import { useId } from "react";
import { m, useReducedMotion } from "framer-motion";

// Independent adaptation of the sliding-underline pattern showcased by 21st.dev.
// Filters remain toggle buttons, not ARIA tabs: they change a single collection.
export default function FilterBar({ options, value, onChange, label }) {
  const id = useId();
  const reducedMotion = useReducedMotion();
  return (
    <div className="filter-bar" role="group" aria-label={label}>
      {options.map(({ value: option, label: text, count }) => (
        <button
          key={option}
          aria-pressed={value === option}
          onClick={() => onChange(option)}
        >
          {text}
          {count != null && (
            <span className="filter-count" aria-hidden="true">
              {String(count).padStart(2, "0")}
            </span>
          )}
          {value === option && (
            <m.span
              className="filter-indicator"
              layoutId={`${id}-underline`}
              transition={{
                duration: reducedMotion ? 0 : 0.3,
                ease: "easeOut",
              }}
              aria-hidden="true"
            />
          )}
        </button>
      ))}
    </div>
  );
}
