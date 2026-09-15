const Divider = ({ text = "" }) => {
  return (
    <div className="divider">
      <span></span>

      {text && <p>{text}</p>}

      <span></span>
    </div>
  );
};

export default Divider;