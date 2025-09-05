import React, { useState } from "react";
import StepForm from "./StepForm";
import ProgressBar from "./ProgressBar";
import useValidation from "../hooks/useValidation";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../redux/formslice";

import { useNavigate } from "react-router-dom"; // ✅ new


export default function MultiStepForm() {
  const totalSteps = 3; // now fixed to 3
  const [step, setStep] = useState(1);

  const formData = useSelector((state) => state.form);  // ✅ get form data from Redux
  const dispatch = useDispatch();  // ✅ to send actions to Redux
  const navigate = useNavigate(); // ✅ new

  // ✅ custom validation hook
  const { errors, validate, validateAll } = useValidation(formData);

  // handle input changes + live validation
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const fieldValue = files ? files[0] : value;

    // ✅ update Redux state
    dispatch(updateField({ name, value: fieldValue }));

    // run live validation
    validate(name, fieldValue);
  };

  // check current step validity
  const isStepValid = () => {
    if (step === 1)
      return (
        formData.name &&
        !errors.name &&
        formData.email &&
        !errors.email &&
        formData.phone &&
        !errors.phone
      );
    if (step === 2)
      return (
        formData.address &&
        !errors.address &&
        formData.city &&
        !errors.city &&
        formData.country &&
        !errors.country
      );
    if (step === 3) return formData.document && !errors.document;
    return false;
  };

  // Next button → go forward if valid
  const nextStep = () => {
    if (step < totalSteps && isStepValid()) {
      setStep(step + 1);
    }
  };

  // Back button → go back
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Submit → validate all + reset Redux
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll(formData)) {
      alert("Form submitted successfully!");
      navigate("/summary");
      console.log(formData);

      
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-lg">
        {/* Progress Bar */}
        <ProgressBar step={step} totalSteps={totalSteps} />

        <h2 className="text-2xl font-bold text-center mb-6">
          Step {step} of {totalSteps}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step Content */}
          <StepForm
            step={step}
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {/* Back button */}
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className={`px-6 py-2 rounded-lg ${
                step === 1
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              Back
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`px-6 py-2 rounded-lg text-white ${
                  isStepValid()
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isStepValid()}
                className={`px-6 py-2 rounded-lg text-white ${
                  isStepValid()
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
