import Button from "./Button";
import Spinner from "./Spinner";

const LoadingButton = ({
  children,
  loading = false,
  loadingText = "Processing...",
  disabled = false,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
    >
      {loading ? (
        <>
          <Spinner size={18} />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;