// src/hooks/useValidation.js
import { useState } from "react";
import { validateField } from "./validation";

export default function useValidation(initialState) {
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg === "";
  };

  const validateAll = (formData) => {
    let valid = true;
    const newErrors = {};
    for (const key in formData) {
      const errorMsg = validateField(key, formData[key]);
      if (errorMsg) valid = false;
      newErrors[key] = errorMsg;
    }
    setErrors(newErrors);
    return valid;
  };

  return { errors, validate, validateAll };
}
