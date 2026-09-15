const Section = ({
  children,
  className = "",
}) => {
  return (
    <section className={`app-section ${className}`}>
      {children}
    </section>
  );
};

export default Section;