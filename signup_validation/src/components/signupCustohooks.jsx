import React, { useState } from "react";
import { useValidation } from "../useValidation";
//useValidation is customhook
export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    cnic: "",
    country: "",
    city: "",
    zip: "",
    address: "",
  });

  const { errors, validate } = useValidation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) {
      alert("Form submitted successfully 🚀");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Signup Form</h2>

        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password & Confirm Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Phone & CNIC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">CNIC</label>
            <input
              type="text"
              name="cnic"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
            />
            {errors.cnic && (
              <p className="text-red-500 text-sm">{errors.cnic}</p>
            )}
          </div>
        </div>

        {/* Country, City, Zip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Country</label>
            <input
              type="text"
              name="country"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">City</label>
            <input
              type="text"
              name="city"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Zip Code</label>
            <input
              type="text"
              name="zip"
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            className="w-full p-2 border rounded-lg"
            rows="3"
            onChange={handleChange}
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
