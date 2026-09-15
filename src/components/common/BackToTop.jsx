import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import IconButton from "./IconButton";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="back-to-top">
      <IconButton
        icon={<ArrowUp size={20} />}
        label="Back to top"
        onClick={handleClick}
      />
    </div>
  );
};

export default BackToTop;
