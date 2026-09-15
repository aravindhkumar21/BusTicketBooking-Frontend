import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "./IconButton";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <IconButton
        icon={<ChevronLeft size={18} />}
        label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <IconButton
        icon={<ChevronRight size={18} />}
        label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;