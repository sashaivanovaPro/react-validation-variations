# Registration Form Validation Examples

Demonstration of different form validation approaches in React.

## Project Structure

The project consists of several implementations of the same registration form, each showcasing a different validation approach:

### Implementations

1. **Basic Validation (basic-validation)** - Using React's useState and useEffect hooks
2. **TypeScript Migration (current)** - Adding TypeScript to the basic validation

## Current Implementation: TypeScript Migration

This implementation adds static typing to the basic form validation approach. The main benefits are:

- **Type safety** - Catching potential errors at compile time
- **Better IDE support** - Improved autocompletion and documentation
- **Self-documenting code** - Types serve as built-in documentation
- **Preparation for advanced patterns** - Foundation for typed custom hooks and schema validation

### Key Features

- **TypeScript interfaces** for form data
- **Typed React states** using generic parameters
- **Type-safe event handlers** with correct event types
- **Explicit return types** for functions

## Technologies

- React
- TypeScript
- Tailwind CSS

## Validation Rules

The validation logic remains the same as in the basic implementation:

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
