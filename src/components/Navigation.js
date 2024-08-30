import React from "react";

const Navigation = ({ step, handleNext, handleBack }) => {
  return (
    <div className="form-navigation">
      {step > 1 && (
        <button className="btn btn-secondary" onClick={handleBack}>
          Back
        </button>
      )}
      {step < 3 ? (
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
