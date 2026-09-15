import Modal from "../common/Modal";

const AdminFormModal = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    >
      <div className="admin-form-modal">
        {children}
      </div>
    </Modal>
  );
};

export default AdminFormModal;