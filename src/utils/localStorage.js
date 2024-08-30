export const saveToLocalStorage = (data) => {
  localStorage.setItem("multiStepFormData", JSON.stringify(data));
};

export const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem("multiStepFormData");
  return savedData ? JSON.parse(savedData) : null;
};
