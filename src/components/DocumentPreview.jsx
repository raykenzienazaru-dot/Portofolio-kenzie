import { useEffect, useRef } from "react";
import { X, Download, ArrowUpRight } from "lucide-react";

export default function DocumentPreview({ document, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = window.document.activeElement;
    const overflow = window.document.body.style.overflow;
    dialog.showModal();
    window.document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      window.document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="document-dialog"
      aria-labelledby="document-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      <div className="document-dialog-inner">
        <header className="document-dialog-header">
          <div>
            <span className="eyebrow">
              {document.kind} / {document.pages} pages
            </span>
            <h2 id="document-title">{document.title}</h2>
          </div>
          <button
            className="icon-button"
            aria-label="Close document preview"
            onClick={onClose}
            autoFocus
          >
            <X size={22} />
          </button>
        </header>
        <div className="document-dialog-actions">
          <a href={document.file} target="_blank" rel="noopener noreferrer">
            Open PDF in a new tab <ArrowUpRight size={16} />
          </a>
          <a href={document.file} download>
            Download PDF <Download size={16} />
          </a>
        </div>
        <iframe
          src={`${document.file}#view=FitH`}
          title={`${document.title} PDF document`}
        />
        <p className="document-fallback">
          If your browser cannot display the PDF, use Open PDF or Download PDF
          above.
        </p>
      </div>
    </dialog>
  );
}
