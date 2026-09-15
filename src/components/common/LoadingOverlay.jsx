import Spinner from "./Spinner";

const LoadingOverlay = ({ loading = false, message = "Loading..." }) => {
  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <Spinner size={36} />
      <p>{message}</p>
    </div>
  );
};

export default LoadingOverlay;