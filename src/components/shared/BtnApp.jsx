export const BtnApp = ({
  disabled = false,
  handleClick,
  image = null,
  optionalClass,
  title,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`btn ${optionalClass}`}
    >
      {image ? <img src={image} alt="acción" height="24" /> : title}
    </button>
  );
};
