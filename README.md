# Registration Form Validation Examples

Demonstration of different form validation approaches in React.

## Project Structure

The project consists of several implementations of the same registration form, each showcasing a different validation approach:

### Implementations

1. **Basic Validation (basic-validation)** - Using React's useState and useEffect hooks
2. **TypeScript Migration (typescript-migration)** - Adding TypeScript to the basic validation

3. **Custom Hook Validation (custom-hook)** - Form logic extracted into a reusable custom hook
4. **React Hook Form + Zod (current)** - Using react-hook-form library with Zod schema validation

## Current Implementation: React Hook Form + Zod

This implementation demonstrates a modern approach to form validation using:

- **react-hook-form** - For efficient form state management
- **Zod** - For schema-based validation with TypeScript integration

### Key Features

- **Schema-based validation** - All validation rules defined in a Zod schema
- **Type safety** - TypeScript types derived automatically from the schema
- **Improved performance** - react-hook-form's optimized re-rendering
- **Built-in error handling** - Standardized error messages from schema
- **Simpler component code** - Less boilerplate compared to manual validation

### Validation Rules

- **Email**: Required field with email format validation
- **Password**:
  - 3-14 characters in length
  - At least one uppercase letter
  - At least one number
- **Password Confirmation**: Must match the password field

## Technologies

- React
- TypeScript
- react-hook-form
- Zod schema validation
- Tailwind CSS

## Comparison with Previous Implementations

| Feature         | Basic Hooks                  | Custom Hook                  | React Hook Form + Zod  |
| --------------- | ---------------------------- | ---------------------------- | ---------------------- |
| Code Size       | Largest                      | Medium                       | Smallest               |
| Type Safety     | Manual typing                | Manual typing                | Auto-generated types   |
| Performance     | Re-renders on each keystroke | Re-renders on each keystroke | Optimized re-rendering |
| Maintainability | Low                          | Medium                       | High                   |
| Error messages  | Manual definition            | Manual definition            | Schema-driven          |
| Reusability     | Low                          | Medium                       | High                   |

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

## Learning Resources

- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [TypeScript Integration Guide](https://react-hook-form.com/get-started#TypeScript)
