import { Edit, Trash2 } from "lucide-react";
import IconButton from "../common/IconButton";

const AdminActionButtons = ({
  onEdit,
  onDelete,
  deleteDisabled = false,
}) => {
  return (
    <div className="admin-action-buttons">
      <IconButton
        type="button"
        aria-label="Edit"
        title="Edit"
        onClick={onEdit}
      >
        <Edit size={17} />
      </IconButton>

      <IconButton
        type="button"
        aria-label="Delete"
        title="Delete"
        onClick={onDelete}
        disabled={deleteDisabled}
      >
        <Trash2 size={17} />
      </IconButton>
    </div>
  );
};

export default AdminActionButtons;