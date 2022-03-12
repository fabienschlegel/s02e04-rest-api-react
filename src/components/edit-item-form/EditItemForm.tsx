import { Dispatch, FunctionComponent, SetStateAction } from "react";

import axios from "axios";

import Style from "./EditItemForm.module.scss";
import { Hero } from "../types";

interface EditItemFormProps {
  hero: Hero | null;
  handleSet: Dispatch<SetStateAction<Hero | null>>;
  handleReload: () => void;
}

const EditItemForm: FunctionComponent<EditItemFormProps> = ({
  hero,
  handleSet,
  handleReload,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hero) {
      const { name, value } = e.target;
      handleSet({ ...hero, [name]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = hero?.id;
    const { realName, alterEgo, company } = hero as Hero;
    axios
      .put(`http://localhost:3001/heroes/${id}`, {
        id,
        realName,
        alterEgo,
        company,
      })
      .then((payload) => {
        handleReload();
        handleSet(null);
        console.log(payload);
      });
  };

  return (
    <div>
      <div>The PUT Request</div>
      <form onSubmit={handleSubmit} className={Style.editform}>
        <div className={Style.formitem}>
          <label htmlFor="realName">realName</label>
          <input
            type="text"
            name="realName"
            id="realName"
            value={hero?.realName || ""}
            onChange={handleChange}
          />
        </div>
        <div className={Style.formitem}>
          <label htmlFor="realName">alterEgo</label>
          <input
            type="text"
            name="alterEgo"
            id="alterEgo"
            value={hero?.alterEgo || ""}
            onChange={handleChange}
          />
        </div>
        <div className={Style.formitem}>
          <label htmlFor="company">company</label>
          <input
            type="text"
            name="company"
            id="company"
            value={hero?.company || ""}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditItemForm;
