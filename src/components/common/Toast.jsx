import { X } from "lucide-react";

const Toast = ({
  message,
  type = "info",
  onClose,
}) => {
  if (!message) return null;

  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default Toast;