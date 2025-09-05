import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetForm } from "../redux/formslice";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Home, MapPin, Globe, FileText } from "lucide-react"; // ✅ nice icons

export default function FormSummary() {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFinish = () => {
    dispatch(resetForm());
    navigate("/");
  };

  const summaryItems = [
    { label: "Name", value: formData.name, icon: <User size={20} /> },
    { label: "Email", value: formData.email, icon: <Mail size={20} /> },
    { label: "Phone", value: formData.phone, icon: <Phone size={20} /> },
    { label: "Address", value: formData.address, icon: <Home size={20} /> },
    { label: "City", value: formData.city, icon: <MapPin size={20} /> },
    { label: "Country", value: formData.country, icon: <Globe size={20} /> },
    {
      label: "Document",
      value: formData.document ? formData.document.name : "No file uploaded",
      icon: <FileText size={20} />,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <div className="w-full max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          ✅ Form Summary
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {summaryItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 rounded-xl border border-gray-200 shadow-sm bg-gray-50 hover:shadow-md transition duration-300"
            >
              <div className="mr-3 text-blue-600">{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-gray-500">{item.label}</p>
                <p className="text-base font-semibold text-gray-800 break-words">
                  {item.value || "—"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleFinish}
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-md transition duration-300"
          >
            Finish & Reset
          </button>
        </div>
      </div>
    </div>
  );
}
