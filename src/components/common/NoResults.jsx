import { SearchX } from "lucide-react";

const NoResults = ({
  title = "No results found",
  message = "Try changing your search or filters.",
}) => {
  return (
    <div className="no-results">
      <SearchX size={48} />

      <h3>{title}</h3>

      <p>{message}</p>
    </div>
  );
};

export default NoResults;