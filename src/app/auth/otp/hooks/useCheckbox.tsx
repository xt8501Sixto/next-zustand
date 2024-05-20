"use client";
import { ChangeEvent, useState } from "react";

export const useCheckbox = () => {
  const [checkbox, setCheckbox] = useState(false);
  const Checkbox = async (e: ChangeEvent<HTMLInputElement>) => {
    setCheckbox(e.target.checked);
    if (e.target.checked === true) {
      console.log("remember device");
    }
  };
  return {
    Checkbox,
    setCheckbox,
    checkbox,
  };
};
