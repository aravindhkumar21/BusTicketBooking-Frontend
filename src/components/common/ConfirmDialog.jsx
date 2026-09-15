import Modal from "./Modal";
import Button from "./Button";

const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    >
      <p>{message}</p>

      <div className="confirm-actions">
        <Button
          type="button"
          onClick={onClose}
          disabled={loading}
        >
          {cancelText}
        </Button>

        <Button
          type="button"
          onClick={onConfirm}
          disabled={loading}
        >
          {loading ? "Processing..." : confirmText}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;