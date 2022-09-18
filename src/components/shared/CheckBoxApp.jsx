export const CheckBoxApp = ({
  checked,
  handleCheckChange,
  name,
  optionalClass,
}) => {
  return (
    <div className={`check-box-app ${optionalClass}`}>
      <input
        className="check-box-app__box"
        type="checkbox"
        id={`checkApp-${name}`}
        checked={checked}
        name={name}
        onChange={handleCheckChange}
      />
      <label
        className="check-box-app__label"
        htmlFor={`checkApp-${name}`}
      ></label>
    </div>
  );
};
