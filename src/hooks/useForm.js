import { useState } from "react";

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = (value, name) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    ...values,
    formValues: values,
    handleInputChange,
    reset,
  };
};
