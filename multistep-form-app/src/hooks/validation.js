// src/hooks/useValidation.js

export const patterns = {
  name: /^[A-Za-z ]{3,30}$/, // only letters, 3–30 chars
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email regex
  phone: /^[0-9]{10,15}$/, // 10–15 digits
  address: /^.{5,100}$/, // 5–100 chars
  city: /^[A-Za-z ]{2,30}$/, // only letters
  country: /^[A-Za-z ]{2,30}$/, // only letters
};

export const validateField = (name, value) => {
  if (!value) return `${name} is required`;

  switch (name) {
    case "name":
      return patterns.name.test(value) ? "" : "Name must be 3–30 letters only";
    case "email":
      return patterns.email.test(value) ? "" : "Invalid email format";
    case "phone":
      return patterns.phone.test(value) ? "" : "Phone must be 10–15 digits";
    case "address":
      return patterns.address.test(value)
        ? ""
        : "Address must be 5–100 characters";
    case "city":
      return patterns.city.test(value) ? "" : "City must be letters only";
    case "country":
      return patterns.country.test(value) ? "" : "Country must be letters only";
    case "document":
      return value ? "" : "Document upload is required";
    default:
      return "";
  }
};
