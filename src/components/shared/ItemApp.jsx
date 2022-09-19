import { CheckBoxApp } from "./CheckBoxApp";
import imgDelete from "../../assets/icons/delete.png";
import imgUpdate from "../../assets/icons/update.png";
import { BtnApp } from "./BtnApp";

export const ItemApp = ({
  title,
  completed,
  id,
  handleItem,
  handleItemDelete,
  handleItemToogle,
}) => {
  return (
    <div className="item-app">
      <div className="item-app__container-text">
        <CheckBoxApp
          checked={completed}
          name={`completed-${id}`}
          handleCheckChange={() => handleItemToogle(id)}
          optionalClass="mr-16"
        />
        <span className="item-app__text">{title}</span>
      </div>
      <div className="item-app__container-button">
        <BtnApp image={imgUpdate} handleClick={() => handleItem(id, title)} />
        <BtnApp image={imgDelete} handleClick={() => handleItemDelete(id)} />
      </div>
    </div>
  );
};
