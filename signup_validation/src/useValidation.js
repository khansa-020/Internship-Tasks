import { useState } from "react";

export function useValidation() {
  const [errors, setErrors] = useState({});

  const validate = (values, fieldName) => {
    let newErrors = { ...errors };

    // Helper for required fields
    const required = (field, msg) => {
      if (!values[field]) newErrors[field] = msg;
      else delete newErrors[field];
    };

    // Name
    if (!fieldName || fieldName === "name") {
      required("name", "Name is required");
      if (values.name && !/^[A-Za-z\s]+$/.test(values.name)) {
        newErrors.name = "Only alphabets allowed (no numbers/special chars)";
      }
    }

    // Email
    if (!fieldName || fieldName === "email") {
      required("email", "Email is required");
      if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    // Password
    if (!fieldName || fieldName === "password") {
      required("password", "Password is required");
      if (values.password && values.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
    }

    // Confirm Password
    if (!fieldName || fieldName === "confirmPassword") {
      if (values.confirmPassword !== values.password) {
        newErrors.confirmPassword = "Passwords do not match";
      } else {
        delete newErrors.confirmPassword;
      }
    }

    // Phone
    if (!fieldName || fieldName === "phone") {
      required("phone", "Phone number is required");
      if (values.phone && !/^\d{11}$/.test(values.phone)) {
        newErrors.phone = "Phone must be 11 digits";
      }
    }

    // CNIC
    if (!fieldName || fieldName === "cnic") {
      required("cnic", "CNIC is required");
      if (values.cnic && !/^\d{13}$/.test(values.cnic)) {
        newErrors.cnic = "CNIC must be 13 digits";
      }
    }

    // Country
    if (!fieldName || fieldName === "country") {
      required("country", "Country is required");
      if (values.country && !/^[A-Za-z\s]+$/.test(values.country)) {
        newErrors.country = "Only alphabets allowed";
      }
    }

    // City
    if (!fieldName || fieldName === "city") {
      required("city", "City is required");
      if (values.city && !/^[A-Za-z\s]+$/.test(values.city)) {
        newErrors.city = "Only alphabets allowed";
      }
    }

    // Zip
    if (!fieldName || fieldName === "zip") {
      required("zip", "Zip code is required");
      if (values.zip && !/^\d{5}$/.test(values.zip)) {
        newErrors.zip = "Zip must be 5 digits";
      }
    }

    // Address
    if (!fieldName || fieldName === "address") {
      required("address", "Address is required");
      if (values.address && values.address.length < 10) {
        newErrors.address = "Address must be at least 10 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
}
