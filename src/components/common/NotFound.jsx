import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import Button from "./Button";

const NotFound = () => {
  return (
    <div className="not-found">
      <Compass size={64} />

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;