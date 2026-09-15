import { LoaderCircle } from "lucide-react";

const Spinner = ({ size = 20 }) => {
  return (
    <LoaderCircle
      size={size}
      className="spinner"
      aria-label="Loading"
    />
  );
};

export default Spinner;