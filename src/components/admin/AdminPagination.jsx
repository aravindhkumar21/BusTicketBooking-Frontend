import Pagination from "../common/Pagination";

const AdminPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  return (
    <div className="admin-pagination">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default AdminPagination;