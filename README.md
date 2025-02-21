# Registration Form Validation Examples

Demonstration of different form validation approaches in React.

## Project Structure

The project consists of several implementations of the same registration form, each showcasing a different validation approach

## Implementations

Basic Validation (basic-validation/current) - Using React's useState and useEffect hooks directly in component

## Implementation Details

- Form fields:

  - Email (with format validation)
  - Password (with complexity requirements)
  - Password confirmation

- Validation features:
  - Real-time validation using useEffect
  - Field-specific error messages
  - Form-level validation state
  - Controlled inputs with useState

## Technologies

- React (Hooks: useState, useEffect)
- Tailwind CSS

## Validation Rules

- Email: Format validation using regex
- Password:
  - Length: 3-10 characters
  - Must contain at least one uppercase letter
  - Must contain at least one number
- Password Confirmation: Must match password field

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Run the development server:

```bash
npm start
```
