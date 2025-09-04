import React from "react";

export default function ProgressBar({ step, totalSteps }) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
      <div
        className="h-2 bg-purple-600 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
