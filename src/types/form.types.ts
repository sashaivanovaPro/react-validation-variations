export interface RegistrationFormData {
  email: string
  password: string
  confirm: string
}

export interface UseFormValidationData {
  values: { email: string; password: string; confirm: string }
  errors: {
    email: string
    confirm: string
    password: string
  }
  touched: {
    email: boolean
    confirm: boolean
    password: boolean
  }
  handlers: {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    blurHandler: (event: React.FocusEvent<HTMLInputElement, Element>) => void
    emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    passwordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    confirmPasswordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  passwordVisibility: {
    showPassword: boolean
    setShowPassword: (value: boolean) => void
    setShowConfirmPassword: (value: boolean) => void
    showConfirmPassword: boolean
  }

  validation: {
    formValidation: boolean
  }
}
