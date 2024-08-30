import React from "react";

const Step1PersonalInfo = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-control ${errors.name && "is-invalid"}`}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-control ${errors.email && "is-invalid"}`}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-control ${errors.phone && "is-invalid"}`}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>
    </div>
  );
};

export default Step1PersonalInfo;
