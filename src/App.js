import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Step1PersonalInfo from "./components/Step1PersonalInfo";
import Step2AddressInfo from "./components/Step2AddressInfo";
import Step3Confirmation from "./components/Step3Confirmation";
import Navigation from "./components/Navigation";
import { useFormValidation } from "./hooks/useFormValidation";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils/localStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Custom styles

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(
    loadFromLocalStorage() || {
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    }
  );
  const { errors, validateStep } = useFormValidation();

  useEffect(() => {
    saveToLocalStorage(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validateStep(formData, step);
    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault(); // Prevent default form submission
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const validationErrors = validateStep(formData, step);
    if (Object.keys(validationErrors).length === 0) {
      // Simulate API call and handle submission
      setTimeout(() => {
        if (Math.random() < 0.5) {
          // Simulate 50% chance of failure
          alert("Submission failed due to a network error. Please try again.");
        } else {
          alert("Form submitted successfully!");
        }
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h1>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        <TransitionGroup>
          {step === 1 && (
            <CSSTransition key="step1" timeout={300} classNames="fade">
              <Step1PersonalInfo
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            </CSSTransition>
          )}
          {step === 2 && (
            <CSSTransition key="step2" timeout={300} classNames="fade">
              <Step2AddressInfo
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            </CSSTransition>
          )}
          {step === 3 && (
            <CSSTransition key="step3" timeout={300} classNames="fade">
              <Step3Confirmation formData={formData} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <Navigation
          step={step}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </form>
    </div>
  );
};

export default App;
