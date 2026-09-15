import { motion, AnimatePresence } from "framer-motion";

const AdminTable = ({
  columns = [],
  data = [],
  loading = false,
  emptyMessage = "No data available.",
}) => {
  return (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <motion.th
                key={column.key}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
              >
                {column.label}
              </motion.th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length || 1}>
                <div className="admin-table-loading">
                  <span className="admin-table-loading-bar" />
                  <span>Loading...</span>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length || 1}>
                <motion.div
                  className="admin-table-empty"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  {emptyMessage}
                </motion.div>
              </td>
            </tr>
          ) : (
            <AnimatePresence mode="popLayout">
              {data.map((row, rowIndex) => {
                const rowKey =
                  row.id ??
                  row.userId ??
                  row.busId ??
                  row.routeId ??
                  row.bookingId ??
                  row.paymentId ??
                  rowIndex;

                return (
                  <motion.tr
                    key={rowKey}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: rowIndex * 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -1,
                    }}
                  >
                    {columns.map((column) => (
                      <td key={column.key}>
                        {column.render
                          ? column.render(row)
                          : row[column.key] ?? "—"}
                      </td>
                    ))}
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;