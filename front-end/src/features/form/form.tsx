import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { submit } from "./formSlice";

export function Form() {
  const formValue = useSelector((state: RootState) => state.form);
  console.log(formValue);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <label htmlFor="Input">
            {formValue}
        </label>
        <input
          type="text"
          placeholder="Hello"
          onChange={(e) => dispatch(submit(e.target.value))}
        />
      </div>
    </div>
  );
}
