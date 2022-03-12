import { FunctionComponent, useEffect } from "react";

import Item from "../item/Item";

import { Hero } from "../types";

interface ListItemsProps {
  heroes: Array<Hero>;
  handleGetItems: () => void;
  handlePush: (item: Hero) => void;
}

const ListItems: FunctionComponent<ListItemsProps> = ({
  heroes,
  handleGetItems,
  handlePush,
}) => {
  useEffect(() => {
    handleGetItems();
  }, [handleGetItems]);

  return (
    <div>
      <div>The GET request</div>
      <div>
        <button type="button" onClick={handleGetItems}>
          Reload
        </button>
      </div>
      <div>
        {heroes.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleReload={handleGetItems}
            handlePush={handlePush}
          />
        ))}
      </div>
    </div>
  );
};

export default ListItems;
