const Service = ({ name, isNew }) => {
  const className = isNew ? "service first-one" : "service";
  return (
    <div className={className}>
      <div></div>
      <p className="serv-description">
        {name} {isNew && <span>(nowość)</span>}
      </p>
    </div>
  );
};
export default Service;
