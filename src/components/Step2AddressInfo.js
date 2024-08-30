import React from "react";

const Step2AddressInfo = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2>Address Information</h2>
      <div className="form-group">
        <label>Address Line 1</label>
        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className={`form-control ${errors.address1 && "is-invalid"}`}
        />
        {errors.address1 && (
          <div className="invalid-feedback">{errors.address1}</div>
        )}
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={`form-control ${errors.city && "is-invalid"}`}
        />
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={`form-control ${errors.state && "is-invalid"}`}
        />
        {errors.state && <div className="invalid-feedback">{errors.state}</div>}
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          className={`form-control ${errors.zip && "is-invalid"}`}
        />
        {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
      </div>
    </div>
  );
};

export default Step2AddressInfo;
