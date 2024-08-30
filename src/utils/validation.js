export const validateStep = (formData, step) => {
  const errors = {};
  if (step === 1) {
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Valid email is required";
    if (!formData.phone) errors.phone = "Phone is required";
  }
  if (step === 2) {
    if (!formData.address1) errors.address1 = "Address Line 1 is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.zip) errors.zip = "Zip Code is required";
  }
  return errors;
};
