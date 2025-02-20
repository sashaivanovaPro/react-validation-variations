# Registration Form Validation Examples

Demonstration of different form validation approaches in React.

## Project Structure

The project consists of several implementations of the same registration form, each showcasing a different validation approach:

### Implementations

1. **Basic Validation (basic-validation)** - Using React's useState and useEffect hooks directly in component
2. **TypeScript Migration (typescript-migration)** - Adding TypeScript to the basic validation approach
3. **Custom Hook Validation (current)** - Form logic extracted into a reusable custom hook

## Current Implementation: Custom Hook Validation

This implementation demonstrates how to improve code organization by extracting form validation logic into a custom hook. The main benefits are:

- **Separation of concerns** - UI components focus on rendering, while validation logic is encapsulated
- **Reusability** - The same validation hook can be used across multiple forms
- **Improved maintainability** - Easier to modify validation logic in one place
- **Cleaner component code** - Component becomes more focused and readable

### Key Features

- **useFormValidation hook** - Contains all form state and validation logic
- **Structured data organization** - Hook returns logically grouped data:
  - `values` - form field values
  - `errors` - validation error messages
  - `touched` - tracking field interactions
  - `handlers` - event handlers for form fields
  - `passwordVisibility` - toggle password display
  - `validation` - form validation state

### Hook Design Pattern

The custom hook follows best practices for React hooks:

- Uses standard React hooks internally (useState, useEffect)
- Returns consistent interface for component consumption
- Handles all related functionality in one place

## Technologies

- React Hooks
- Custom Hooks
- TypeScript
- Tailwind CSS

## Validation Rules

The form validates:

- **Email** - Format validation using regex
- **Password**:
  - 3-10 characters
  - At least one uppercase letter
  - At least one number
- **Password Confirmation** - Must match password field

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```
