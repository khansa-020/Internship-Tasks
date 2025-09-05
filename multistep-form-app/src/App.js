import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm";
import FormSummary from "./components/FormSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/summary" element={<FormSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
