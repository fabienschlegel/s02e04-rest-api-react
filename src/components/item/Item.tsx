import { FunctionComponent } from "react";

import axios from "axios";

import Style from "./Item.module.scss";

import { Hero } from "../types";

interface ItemProps {
  item: Hero;
  handleReload: () => void;
  handlePush: (item: Hero) => void;
}

const Item: FunctionComponent<ItemProps> = ({
  item,
  handleReload,
  handlePush,
}) => {
  const { realName, alterEgo, company } = item;

  const handleEditItem = (item: Hero) => {
    handlePush(item);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/heroes/${item.id}`).then((payload) => {
      if (payload.status === 200) {
        handleReload();
      }
    });
  };

  return (
    <div className={Style.item}>
      <p>{realName}</p>
      <p>{alterEgo}</p>
      <p>{company}</p>
      <button type="button" onClick={() => handleEditItem(item)}>
        Edit
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Item;
