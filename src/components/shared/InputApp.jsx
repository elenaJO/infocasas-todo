export const InputApp = ({
  optionalClass,
  type,
  placeholder,
  name,
  value,
  handleInputChange,
}) => {
  return (
    <div className={optionalClass}>
      <input
        className="input-app"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        autoComplete="off"
        onChange={handleInputChange}
      />
    </div>
  );
};
