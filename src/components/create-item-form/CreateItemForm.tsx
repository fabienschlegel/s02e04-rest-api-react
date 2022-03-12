import { FunctionComponent } from "react";

import axios from "axios";

import Style from "./CreateItemForm.module.scss";

const CreateItemForm: FunctionComponent = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const id = (): string => Math.random().toString(36).substr(2);
    const realName = formData.get("realName") as string;
    const alterEgo = formData.get("alterEgo") as string;
    const company = formData.get("company") as string;

    axios
      .post("http://localhost:3001/heroes", { id, realName, alterEgo, company })
      .then((payload) => {
        console.log(payload);
      });
  };

  return (
    <div>
      <div>The POST Request</div>
      <form onSubmit={handleSubmit} className={Style.createform}>
        <div className={Style.formitem}>
          <label htmlFor="realName">realName</label>
          <input type="text" name="realName" id="realName" />
        </div>
        <div className={Style.formitem}>
          <label htmlFor="realName">alterEgo</label>
          <input type="text" name="alterEgo" id="alterEgo" />
        </div>
        <div className={Style.formitem}>
          <label htmlFor="company">company</label>
          <input type="text" name="company" id="company" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateItemForm;
