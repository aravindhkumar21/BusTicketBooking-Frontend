import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="back-button"
    >
      <ArrowLeft size={18} />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;