import { useCallback, useState } from "react";

import clsx from "clsx";
import axios from "axios";

import { ListItems, CreateItemForm, EditItemForm } from "..";

import { Hero } from "../types";

import Style from "./App.module.scss";

function App() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [heroes, setHeroes] = useState<Array<Hero>>([]);

  const pushEditValues = (item: Hero) => {
    setHero(item);
  };

  const handleGetItems = useCallback(
    () =>
      axios.get("http://localhost:3001/heroes").then((payload) => {
        const { data } = payload;
        setHeroes(data);
      }),
    []
  );

  return (
    <div className={Style.container}>
      <div className={clsx(Style.box, Style.one)}>
        <CreateItemForm />
      </div>
      <div className={clsx(Style.box, Style.two)}>
        <ListItems
          handlePush={pushEditValues}
          handleGetItems={handleGetItems}
          heroes={heroes}
        />
      </div>
      <div className={clsx(Style.box, Style.three)}>
        <EditItemForm
          hero={hero}
          handleSet={setHero}
          handleReload={handleGetItems}
        />
      </div>
    </div>
  );
}

export default App;
