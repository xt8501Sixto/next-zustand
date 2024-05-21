import { ChangeEventHandler, useState } from "react";
import { FormValues } from "../interfaces/formValue.interface";

export const useForm = (initialFormValue: FormValues) => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValue);
  const onInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return Object.values(formValues).every((value) => value.trim().length > 0);
  };

  const onResetForm = () => {
    setFormValues( initialFormValue );
}

  return {
    formValues,
    setFormValues,
    onInputChange,
    isFormValid,
    onResetForm
  };
};
