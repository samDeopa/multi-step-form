# Multi-Step Form Application

This project is a multi-step form built with React that allows users to input and validate their personal and address information across multiple steps. The form includes data validation, error handling, state management, and local storage persistence. Additionally, the form is responsive and includes animations between steps, enhancing the user experience.

## Features

- **Three-Step Form**:
  - **Step 1: Personal Information** - Collects the user's name, email, and phone number.
  - **Step 2: Address Information** - Collects the user's address details including address line 1, address line 2, city, state, and zip code.
  - **Step 3: Confirmation** - Displays all entered data for review before submission.
- **Navigation and Buttons**:

  - Tabbed navigation to move between form steps.
  - Disables the back button on the first step.
  - Disables the next button on the last step, replacing it with a submit button.

- **Form Validation**:

  - Ensures all fields are filled in before allowing navigation to the next step.
  - Displays error messages and highlights fields with errors.

- **State Management**:

  - Manages form data using React state with `useState` and `useEffect` hooks.
  - Reflects user inputs and form navigation in state updates.

- **Local Storage**:

  - Persists form data to local storage when navigating between steps.
  - Pre-fills form fields if the user revisits the form.

- **Responsive Design**:

  - Works well on desktop, tablet, and mobile screens.
  - Uses custom CSS and Bootstrap for layout and responsiveness.

- **Enhanced UX**:
  - Includes animations and transitions between steps using `react-transition-group`.
  - Handles simulated network errors during submission.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Steps to Run the Application

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/samdeopa/multi-step-form-app.git
   cd multi-step-form-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   ```

   This will start the application on `http://localhost:3000`.

4. **Run Unit Tests**:

   To run unit tests for critical components:

   ```bash
   npm test
   ```

5. **Build the Application** (for production):

   ```bash
   npm run build
   ```

   This will create a production-ready build in the `build` directory.

## Usage

1. **Fill in the Form**: Navigate through the steps to input your personal and address information. Use the "Next" and "Back" buttons to move between steps.
2. **Review and Submit**: In the final step, review your entered data and click "Submit" to complete the form submission.
3. **Error Handling**: If there are errors during submission (e.g., simulated network failure), an alert will inform you. You can retry submitting the form.
4. **Responsive Design**: The form is responsive and adapts to different screen sizes.

## File Structure

```plaintext
multi-step-form-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Step1PersonalInfo.js
│   │   ├── Step2AddressInfo.js
│   │   ├── Step3Confirmation.js
│   │   ├── Navigation.js
│   │   └── ...
│   ├── hooks/
│   │   └── useFormValidation.js
│   ├── utils/
│   │   ├── localStorage.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   └── ...
├── tests/
│   ├── App.test.js
│   ├── Step1PersonalInfo.test.js
│   ├── Step2AddressInfo.test.js
│   └── ...
├── package.json
└── README.md
```

## Design Decisions

1. **State Management**: React's `useState` and `useEffect` hooks are used to manage the form data and to persist data in local storage. This ensures that the user's progress is saved even if they navigate away from the form.

2. **Form Validation**: Custom hooks (`useFormValidation`) handle validation logic. Each step has its own validation criteria, and the form cannot proceed to the next step until all fields in the current step are valid.

3. **User Experience**: To provide a seamless experience, transitions between steps are animated using `react-transition-group`. The form also simulates network errors during submission, mimicking real-world scenarios.

4. **Error Handling**: Errors during form submission are handled gracefully, with users being alerted if something goes wrong. This ensures users are informed and can take corrective action.

## Contributions

Feel free to fork this project and submit a pull request if you'd like to contribute. All contributions are welcome!
# multi-step-form
